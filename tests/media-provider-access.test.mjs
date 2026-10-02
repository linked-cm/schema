// Runs against the built lib: `npx linked build && npm test`.
import assert from 'node:assert/strict';
import { afterEach, beforeEach, describe, it } from 'node:test';
import { PassThrough } from 'node:stream';
import { LinkedFileStorage } from '@_linked/core/utils/LinkedFileStorage';
import { ImageObjectProvider, VideoObjectProvider } from '../lib/esm/backend.js';
import { ImageObject } from '../lib/esm/shapes/ImageObject.js';
import { VideoObject } from '../lib/esm/shapes/VideoObject.js';
import {
  configureMediaUploads,
  defaultOwnerPrefix,
  safeRelativePath,
} from '../lib/esm/utils/MediaUploadPolicy.js';

const ALICE = 'https://example.test/account/alice';
const BOB = 'https://example.test/account/bob';
const ALICE_PREFIX = defaultOwnerPrefix(ALICE);
const BOB_PREFIX = defaultOwnerPrefix(BOB);
const PNG = 'data:image/png;base64,' + Buffer.from('png-bytes').toString('base64');

class MemoryStore {
  constructor() {
    this.files = new Map();
    this.accessURL = 'https://site.test';
  }
  async saveFile(key, content) {
    this.files.set(key, content);
    return `${this.accessURL}/uploads/${key}`;
  }
  async listFiles(prefix) {
    return [...this.files.keys()].filter((key) => !prefix || key.startsWith(prefix));
  }
  async deleteFile(key) {
    if (!this.files.delete(key)) throw new Error('ENOENT');
  }
  async fileExists(key) {
    return this.files.has(key);
  }
}

let store;
const originalImageCreate = ImageObject.create;
const originalVideoCreate = VideoObject.create;

function withRequest(Provider, request) {
  const provider = new Provider(undefined, undefined);
  provider.request = request;
  return provider;
}
const session = (accountId) => ({ linkedAuth: { userAccount: { id: accountId } } });
const image = (request = session(ALICE)) => withRequest(ImageObjectProvider, request);

function multipart(fields, file, auth) {
  const boundary = '----media-test-boundary';
  const parts = [];
  for (const [name, value] of Object.entries(fields)) {
    parts.push(
      `--${boundary}\r\nContent-Disposition: form-data; name="${name}"\r\n\r\n${value}\r\n`,
    );
  }
  if (file) {
    parts.push(
      `--${boundary}\r\nContent-Disposition: form-data; name="upload"; filename="${file.name}"\r\n` +
        `Content-Type: ${file.type}\r\n\r\n`,
    );
  }
  const body = Buffer.concat([
    Buffer.from(parts.join('')),
    file ? Buffer.concat([file.content, Buffer.from('\r\n')]) : Buffer.alloc(0),
    Buffer.from(`--${boundary}--\r\n`),
  ]);
  const request = new PassThrough();
  request.headers = {
    'content-type': `multipart/form-data; boundary=${boundary}`,
    'content-length': String(body.length),
  };
  if (auth) request.linkedAuth = auth;
  request.end(body);
  return request;
}

const rejectsWith = (promise, status) =>
  assert.rejects(promise, (error) => {
    assert.equal(error.name, 'ServerCallError');
    assert.equal(error.status, status, error.message);
    return true;
  });

beforeEach(() => {
  store = new MemoryStore();
  LinkedFileStorage.setDefaultStore(store);
  ImageObject.create = async (data) => data;
  VideoObject.create = async (data) => data;
  configureMediaUploads();
});

afterEach(() => {
  ImageObject.create = originalImageCreate;
  VideoObject.create = originalVideoCreate;
  configureMediaUploads();
});

describe('anonymous callers are rejected with 401', () => {
  for (const [name, call] of [
    ['deleteFile', (p) => p.deleteFile(`${ALICE_PREFIX}/a.png`)],
    ['getAllFilestoreImages', (p) => p.getAllFilestoreImages()],
    ['fromDataURL', (p) => p.fromDataURL(PNG, 'images/a.png')],
    ['ImageObject fromFormFile', (p) => p.fromFormFile()],
  ]) {
    it(name, async () => {
      await rejectsWith(call(image({})), 401);
      assert.equal(store.files.size, 0);
    });
  }
  it('VideoObject fromFormFile', async () => {
    const request = multipart({ filePath: 'v.mp4' }, {
      name: 'v.mp4',
      type: 'video/mp4',
      content: Buffer.from('video'),
    });
    await rejectsWith(withRequest(VideoObjectProvider, request).fromFormFile(), 401);
    assert.equal(store.files.size, 0);
  });
});

describe('fromDataURL', () => {
  it('stores the file under the caller prefix and returns its URL', async () => {
    const result = await image().fromDataURL(PNG, 'images/project-x.png', {
      name: 'project-x',
      identifier: 1,
    });
    const key = `${ALICE_PREFIX}/images/project-x.png`;
    assert.deepEqual([...store.files.keys()], [key]);
    assert.equal(result.contentUrl, `https://site.test/uploads/${key}`);
    assert.equal(store.files.get(key).toString(), 'png-bytes');
  });

  for (const filePath of [
    '../escape.png',
    'images/../../escape.png',
    '/etc/passwd',
    'C:/x.png',
    'images\\..\\x.png',
    'images//x.png',
    'images/%2e%2e/x.png',
    'a\u0000.png',
  ]) {
    it(`rejects the path ${JSON.stringify(filePath)}`, async () => {
      await rejectsWith(image().fromDataURL(PNG, filePath), 400);
      assert.equal(store.files.size, 0);
    });
  }

  it('rejects an image over the size cap', async () => {
    configureMediaUploads({ maxImageBytes: 8 });
    await rejectsWith(image().fromDataURL(PNG, 'images/a.png'), 413);
    assert.equal(store.files.size, 0);
  });

  it('rejects SVG and non-image data URLs', async () => {
    const svg = 'data:image/svg+xml;base64,' + Buffer.from('<svg/>').toString('base64');
    await rejectsWith(image().fromDataURL(svg, 'a.svg'), 400);
    await rejectsWith(image().fromDataURL('data:text/html;base64,PGI+', 'a.html'), 400);
    await rejectsWith(image().fromDataURL('not a data url', 'a.png'), 400);
  });

  it('defaults the cap to 10 MiB, overridable by environment', async () => {
    const { getMediaUploadPolicy } = await import('../lib/esm/utils/MediaUploadPolicy.js');
    assert.equal(getMediaUploadPolicy().maxImageBytes, 10 * 1024 * 1024);
    assert.equal(getMediaUploadPolicy().maxVideoBytes, 200 * 1024 * 1024);
    process.env.LINKED_MAX_IMAGE_UPLOAD_BYTES = '1234';
    try {
      assert.equal(getMediaUploadPolicy().maxImageBytes, 1234);
    } finally {
      delete process.env.LINKED_MAX_IMAGE_UPLOAD_BYTES;
    }
  });
});

describe('getAllFilestoreImages', () => {
  it('lists only the caller\'s files', async () => {
    store.files.set(`${ALICE_PREFIX}/a.png`, Buffer.from('a'));
    store.files.set(`${BOB_PREFIX}/b.png`, Buffer.from('b'));
    store.files.set('legacy/c.png', Buffer.from('c'));
    const images = await image().getAllFilestoreImages();
    assert.deepEqual(
      [...images].map((entry) => entry.id),
      [`${ALICE_PREFIX}/a.png`],
    );
  });
});

describe('deleteFile', () => {
  it('deletes the caller\'s own file by key or by URL', async () => {
    store.files.set(`${ALICE_PREFIX}/a.png`, Buffer.from('a'));
    store.files.set(`${ALICE_PREFIX}/b.png`, Buffer.from('b'));
    await image().deleteFile(`${ALICE_PREFIX}/a.png`);
    await image().deleteFile(`https://site.test/uploads/${ALICE_PREFIX}/b.png`);
    assert.equal(store.files.size, 0);
  });

  it('answers 404 for another user\'s file and leaves it alone', async () => {
    store.files.set(`${BOB_PREFIX}/b.png`, Buffer.from('b'));
    store.files.set('legacy/c.png', Buffer.from('c'));
    await rejectsWith(image().deleteFile(`${BOB_PREFIX}/b.png`), 404);
    await rejectsWith(image().deleteFile(`https://site.test/uploads/${BOB_PREFIX}/b.png`), 404);
    await rejectsWith(image().deleteFile('legacy/c.png'), 404);
    assert.equal(store.files.size, 2);
  });

  it('rejects traversal out of the caller\'s prefix', async () => {
    store.files.set(`${BOB_PREFIX}/b.png`, Buffer.from('b'));
    await rejectsWith(image().deleteFile(`${ALICE_PREFIX}/../${BOB_PREFIX}/b.png`), 400);
    await rejectsWith(image().deleteFile('/etc/passwd'), 400);
    assert.equal(store.files.size, 1);
  });
});

describe('fromFormFile', () => {
  const png = { name: 'logo.png', type: 'image/png', content: Buffer.from('png-bytes') };

  it('stores an image under the caller prefix', async () => {
    const request = multipart({ filePath: 'images/logo.png' }, png, session(ALICE).linkedAuth);
    const result = await image(request).fromFormFile();
    const key = `${ALICE_PREFIX}/images/logo.png`;
    assert.deepEqual([...store.files.keys()], [key]);
    assert.equal(result.contentUrl, `https://site.test/uploads/${key}`);
  });

  it('falls back to the uploaded file name', async () => {
    const request = multipart({}, { ...png, name: '../../my logo.png' }, session(ALICE).linkedAuth);
    await image(request).fromFormFile();
    assert.deepEqual([...store.files.keys()], [`${ALICE_PREFIX}/my-logo.png`]);
  });

  it('rejects a traversal filePath', async () => {
    const request = multipart({ filePath: '../../x.png' }, png, session(ALICE).linkedAuth);
    await rejectsWith(image(request).fromFormFile(), 400);
    assert.equal(store.files.size, 0);
  });

  it('rejects an image over the size cap', async () => {
    configureMediaUploads({ maxImageBytes: 4 });
    const request = multipart({ filePath: 'a.png' }, png, session(ALICE).linkedAuth);
    await rejectsWith(image(request).fromFormFile(), 413);
    assert.equal(store.files.size, 0);
  });

  it('applies the video cap to VideoObject uploads', async () => {
    const video = { name: 'v.mp4', type: 'video/mp4', content: Buffer.alloc(32, 1) };
    configureMediaUploads({ maxImageBytes: 4, maxVideoBytes: 64 });
    const ok = multipart({ filePath: 'v.mp4' }, video, session(ALICE).linkedAuth);
    await withRequest(VideoObjectProvider, ok).fromFormFile();
    assert.deepEqual([...store.files.keys()], [`${ALICE_PREFIX}/v.mp4`]);

    configureMediaUploads({ maxVideoBytes: 16 });
    const tooBig = multipart({ filePath: 'w.mp4' }, video, session(ALICE).linkedAuth);
    await rejectsWith(withRequest(VideoObjectProvider, tooBig).fromFormFile(), 413);
    assert.equal(store.files.size, 1);
  });
});

describe('safeRelativePath', () => {
  it('keeps ordinary relative paths', () => {
    assert.equal(safeRelativePath('images/project-x.png'), 'images/project-x.png');
    assert.equal(safeRelativePath('./images/a.png'), 'images/a.png');
  });

  it('honours a configured owner prefix and validates it', async () => {
    configureMediaUploads({ ownerPrefix: () => 'tenants/t1' });
    await image().fromDataURL(PNG, 'a.png');
    assert.deepEqual([...store.files.keys()], ['tenants/t1/a.png']);
    configureMediaUploads({ ownerPrefix: () => '../escape' });
    await rejectsWith(image().fromDataURL(PNG, 'a.png'), 400);
  });
});

describe('RPC declarations', () => {
  it('declares every client-called file method callable for signed-in users', async () => {
    const { getOwnCallableLevel } = await import('@_linked/server-utils/utils/callable');
    for (const method of ['deleteFile', 'getAllFilestoreImages', 'fromDataURL', 'fromFormFile']) {
      assert.equal(getOwnCallableLevel(ImageObjectProvider, method), 'user', `ImageObjectProvider.${method}`);
    }
    assert.equal(getOwnCallableLevel(VideoObjectProvider, 'fromFormFile'), 'user');
  });
});
