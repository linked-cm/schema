import { LinkedFileStorage } from '@_linked/core/utils/LinkedFileStorage';
import formidable, { File } from 'formidable';
import fs from 'fs';

type UploadMediaData = {
  contentUrl: string;
  name?: string | undefined;
  copyrightNotice?: string | undefined;
  creditText?: string | undefined;
  usageInfo?: string | undefined;
  identifier?: string | undefined;
  dateCreated?: Date | undefined;
};

export function uploadMediaFromFormFile<T>(
  request,
  createMedia: (data: UploadMediaData) => Promise<T>
): Promise<T> {
  const form = formidable({});

  return new Promise<T>((resolve, reject) => {
    form.parse(request, async (err, fields, files) => {
      if (err) {
        console.warn('Error parsing uploaded file:' + err.stack);
        reject(err);
        return;
      }

      // let file:File = files['upload'];

      let file: File | File[] = files['upload'];
      if (Array.isArray(file)) {
        file = file[0];
      }
      // let filePath:string = fields['filePath'];
      let filePath: string | string[] = fields['filePath'];
      if (Array.isArray(filePath)) {
        filePath = filePath[0];
      }

      // create buffer from files
      const buffer = fs.readFileSync(file.filepath);

      const metaData = {
        // Provide specific metadata values as needed
        copyrightNotice: fields['copyrightNotice'],
        creditText: fields['creditText'],
        usageInfo: fields['usageInfo'],
        url: fields['url'],
        identifier: fields['identifier'],
        dateCreated: fields['dateCreated'],
      };

      LinkedFileStorage.saveFile(filePath, buffer, file.mimetype)
        .then(async (publicPath) => {
          const media = await createMedia({
            contentUrl: publicPath,
            name: Array.isArray(filePath)
              ? filePath[0].split('/').pop()
              : filePath.split('/').pop(),
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
