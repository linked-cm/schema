/**
 * The media types the upload methods accept, recognised from the file's own
 * bytes, and the file extensions allowed for each.
 *
 * A type is only accepted when its signature is recognised: anything else,
 * including HTML, SVG and other text formats, is refused. The client's
 * declared type is never trusted on its own, and the stored file name must
 * carry an extension that belongs to the recognised type, so the file is
 * served as what it actually is.
 *
 * Server-only: works on `Buffer`.
 */
import { mediaCallError } from './MediaUploadPolicy.js';

export type MediaKind = 'image' | 'video';

export interface MediaType {
  /** Canonical MIME type, used when the file is stored. */
  mime: string;
  /** Allowed file extensions, lower case, without the dot. The first is the default. */
  extensions: string[];
}

export const IMAGE_TYPES: Record<string, MediaType> = {
  png: { mime: 'image/png', extensions: ['png'] },
  jpeg: { mime: 'image/jpeg', extensions: ['jpg', 'jpeg'] },
  gif: { mime: 'image/gif', extensions: ['gif'] },
  webp: { mime: 'image/webp', extensions: ['webp'] },
  avif: { mime: 'image/avif', extensions: ['avif'] },
};

export const VIDEO_TYPES: Record<string, MediaType> = {
  mp4: { mime: 'video/mp4', extensions: ['mp4'] },
  webm: { mime: 'video/webm', extensions: ['webm'] },
  quicktime: { mime: 'video/quicktime', extensions: ['mov'] },
};

/** Declared MIME types `fromDataURL` accepts, mapped to their canonical type. */
const DECLARED_IMAGE_MIME: Record<string, MediaType> = {
  'image/png': IMAGE_TYPES.png,
  'image/jpeg': IMAGE_TYPES.jpeg,
  'image/jpg': IMAGE_TYPES.jpeg,
  'image/gif': IMAGE_TYPES.gif,
  'image/webp': IMAGE_TYPES.webp,
  'image/avif': IMAGE_TYPES.avif,
};

/** The accepted image type a declared MIME type names, if any. */
export function imageTypeForDeclaredMime(mime: string): MediaType | undefined {
  return DECLARED_IMAGE_MIME[mime.toLowerCase()];
}

const ascii = (buffer: Buffer, start: number, end: number): string =>
  buffer.length >= end ? buffer.toString('latin1', start, end) : '';

/** ISO base media file (`ftyp` box): major brand and compatible brands. */
function ftypBrands(buffer: Buffer): string[] | undefined {
  if (ascii(buffer, 4, 8) !== 'ftyp' || buffer.length < 12) return undefined;
  const size = buffer.readUInt32BE(0);
  const end = Math.min(size >= 16 ? size : 12, buffer.length);
  const brands = [ascii(buffer, 8, 12)];
  for (let offset = 16; offset + 4 <= end; offset += 4) {
    brands.push(ascii(buffer, offset, offset + 4));
  }
  return brands;
}

const AVIF_BRANDS = ['avif', 'avis'];
/** Still-image brands of the ISO family that must not pass as video. */
const IMAGE_BRANDS = [...AVIF_BRANDS, 'heic', 'heix', 'heim', 'heis', 'mif1', 'msf1'];
/** Top-level atoms a QuickTime file without an `ftyp` box starts with. */
const QUICKTIME_ATOMS = ['moov', 'mdat', 'wide', 'free', 'skip', 'pnot'];

/** Recognise an accepted image type from its leading bytes. */
export function detectImageType(buffer: Buffer): MediaType | undefined {
  if (
    buffer.length >= 8 &&
    buffer.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))
  ) {
    return IMAGE_TYPES.png;
  }
  if (buffer.length >= 3 && buffer[0] === 0xff && buffer[1] === 0xd8 && buffer[2] === 0xff) {
    return IMAGE_TYPES.jpeg;
  }
  const gif = ascii(buffer, 0, 6);
  if (gif === 'GIF87a' || gif === 'GIF89a') return IMAGE_TYPES.gif;
  if (ascii(buffer, 0, 4) === 'RIFF' && ascii(buffer, 8, 12) === 'WEBP') {
    return IMAGE_TYPES.webp;
  }
  const brands = ftypBrands(buffer);
  if (brands && brands.some((brand) => AVIF_BRANDS.includes(brand))) {
    return IMAGE_TYPES.avif;
  }
  return undefined;
}

/** Recognise an accepted video type from its leading bytes. */
export function detectVideoType(buffer: Buffer): MediaType | undefined {
  if (
    buffer.length >= 4 &&
    buffer.readUInt32BE(0) === 0x1a45dfa3 &&
    buffer.subarray(0, 64).includes('webm', 0, 'latin1')
  ) {
    return VIDEO_TYPES.webm;
  }
  const brands = ftypBrands(buffer);
  if (brands) {
    if (brands[0] === 'qt  ') return VIDEO_TYPES.quicktime;
    if (IMAGE_BRANDS.includes(brands[0])) return undefined;
    return VIDEO_TYPES.mp4;
  }
  if (QUICKTIME_ATOMS.includes(ascii(buffer, 4, 8))) return VIDEO_TYPES.quicktime;
  return undefined;
}

export function detectMediaType(buffer: Buffer, kind: MediaKind): MediaType | undefined {
  return kind === 'image' ? detectImageType(buffer) : detectVideoType(buffer);
}

/** The lower-case extension of the last path segment, or '' without one. */
export function extensionOf(filePath: string): string {
  const name = filePath.split('/').pop() || '';
  const dot = name.lastIndexOf('.');
  return dot > 0 ? name.slice(dot + 1).toLowerCase() : '';
}

/**
 * The type of an upload, determined from its bytes. Throws 415 when the bytes
 * are not an accepted `kind` of media, or do not match `declared` when the
 * client declared a type.
 */
export function requireMediaType(
  buffer: Buffer,
  kind: MediaKind,
  declared?: MediaType
): MediaType {
  const detected = detectMediaType(buffer, kind);
  if (!detected) {
    throw mediaCallError(415, `The upload is not a supported ${kind} file.`);
  }
  if (declared && declared !== detected) {
    throw mediaCallError(
      415,
      `The upload is declared as ${declared.mime} but its content is ${detected.mime}.`
    );
  }
  return detected;
}

/** Throw 400 unless `filePath` ends in an extension allowed for `type`. */
export function requireExtensionFor(filePath: string, type: MediaType): void {
  const extension = extensionOf(filePath);
  if (!type.extensions.includes(extension)) {
    throw mediaCallError(
      400,
      `A ${type.mime} file must be named with ${type.extensions
        .map((ext) => `.${ext}`)
        .join(' or ')}${extension ? `, not .${extension}` : ''}.`
    );
  }
}
