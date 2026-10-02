import { LinkedFileStorage } from '@_linked/core/utils/LinkedFileStorage';
import formidable, { File } from 'formidable';
import fs from 'fs';
import {
  MediaCaller,
  mediaCallError,
  ownedKey,
} from './MediaUploadPolicy.js';
import { MediaKind, requireExtensionFor, requireMediaType } from './MediaTypes.js';

type UploadMediaData = {
  contentUrl: string;
  name?: string | undefined;
  copyrightNotice?: string | undefined;
  creditText?: string | undefined;
  usageInfo?: string | undefined;
  identifier?: string | undefined;
  dateCreated?: Date | undefined;
};

export interface UploadMediaOptions {
  /** The signed-in caller; the file is stored under their prefix. */
  caller: MediaCaller;
  /** Which media the upload must be; its type is read from the bytes. */
  kind: MediaKind;
  /** Largest accepted file, in bytes. */
  maxBytes: number;
}

/** A form field may arrive once or repeated; take the first value. */
function first<T>(value: T | T[] | undefined): T | undefined {
  return Array.isArray(value) ? value[0] : value;
}

/** A file name from the browser, reduced to one safe path segment. */
function nameFromUpload(file: File): string | undefined {
  const base = (file.originalFilename || '').split(/[\\/]/).pop() || '';
  const clean = base.replace(/[^A-Za-z0-9._-]+/g, '-').replace(/^\.+/, '');
  return clean || undefined;
}

export function uploadMediaFromFormFile<T>(
  request,
  createMedia: (data: UploadMediaData) => Promise<T>,
  options: UploadMediaOptions
): Promise<T> {
  const { caller, kind, maxBytes } = options;
  const form = formidable({
    maxFiles: 1,
    maxFileSize: maxBytes,
    maxTotalFileSize: maxBytes,
    maxFields: 20,
    maxFieldsSize: 64 * 1024,
  });

  return new Promise<T>((resolve, reject) => {
    form.parse(request, async (err, fields, files) => {
      const uploaded = Object.values(files || {})
        .flat()
        .filter(Boolean) as File[];
      const cleanup = () => {
        for (const upload of uploaded) {
          fs.promises.rm(upload.filepath, { force: true }).catch(() => {});
        }
      };
      if (err) {
        console.warn('Error parsing uploaded file:' + err.stack);
        cleanup();
        const status = (err as any)?.httpCode;
        reject(
          status === 413
            ? mediaCallError(413, `The upload is larger than ${maxBytes} bytes.`)
            : mediaCallError(400, 'The upload could not be read.')
        );
        return;
      }

      const file = first(files['upload'] as File | File[]);
      if (!file) {
        cleanup();
        reject(mediaCallError(400, 'No file was uploaded.'));
        return;
      }

      let filePath: string;
      let buffer: Buffer;
      let mime: string;
      try {
        const requested =
          first(fields['filePath'] as string | string[]) ?? nameFromUpload(file);
        filePath = requested === undefined ? '' : ownedKey(caller, requested);
        buffer = fs.readFileSync(file.filepath);
        if (buffer.length > maxBytes) {
          throw mediaCallError(413, `The upload is larger than ${maxBytes} bytes.`);
        }
        // The client's Content-Type is not trusted: the type comes from the bytes.
        const type = requireMediaType(buffer, kind);
        filePath ||= ownedKey(caller, `upload.${type.extensions[0]}`);
        requireExtensionFor(filePath, type);
        mime = type.mime;
      } catch (error) {
        cleanup();
        reject(error);
        return;
      }
      cleanup();

      const metaData = {
        // Provide specific metadata values as needed
        copyrightNotice: fields['copyrightNotice'],
        creditText: fields['creditText'],
        usageInfo: fields['usageInfo'],
        url: fields['url'],
        identifier: fields['identifier'],
        dateCreated: fields['dateCreated'],
      };

      LinkedFileStorage.saveFile(filePath, buffer, mime)
        .then(async (publicPath) => {
          const media = await createMedia({
            contentUrl: publicPath,
            name: filePath.split('/').pop(),
            copyrightNotice: Array.isArray(metaData.copyrightNotice)
              ? metaData.copyrightNotice[0]
              : metaData.copyrightNotice,
            creditText: Array.isArray(metaData.creditText)
              ? metaData.creditText[0]
              : metaData.creditText,
            usageInfo: Array.isArray(metaData.usageInfo)
              ? metaData.usageInfo[0]
              : metaData.usageInfo,
            identifier: metaData.identifier
              ? Array.isArray(metaData.identifier)
                ? metaData.identifier[0]
                : metaData.identifier
              : undefined,
            dateCreated: metaData.dateCreated
              ? new Date(
                  (Array.isArray(metaData.dateCreated)
                    ? metaData.dateCreated[0]
                    : metaData.dateCreated) as string
                )
              : undefined,
          });

          resolve(media);
        })
        .catch((err) => {
          reject(err); // Reject if there's an error in saving the file
        });
    });
  });
}
