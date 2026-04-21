// import {File, default as formidable} from 'formidable';
import { LinkedFileStorage } from '@_linked/core/utils/LinkedFileStorage';
import { ShapeProvider } from '@_linked/server-utils/utils/ShapeProvider';
import { ImageCreationMetaData, ImageObject } from './ImageObject.js';
import { uploadMediaFromFormFile } from '../utils/MediaObjectUpload.js';
import { ShapeSet } from '@_linked/core/collections/ShapeSet';

declare var process: any;

export class ImageObjectProvider extends ShapeProvider {
  private static ALLOWED_EXTENSIONS: string[] = [
    'jpg',
    'png',
    'gif',
    'webp',
    'tiff',
    'psd',
    'raw',
    'bmp',
    'heif',
    'indd',
    'jpeg',
  ];
  shape: ShapeProvider['shape'] = ImageObject;

  // constructor(server) {
  //   super(server);
  //
  //   //make sure upload folder exists
  //   // if (!fs.existsSync(this.fileSystemUploadPath)) {
  //   //   fs.mkdirSync(this.fileSystemUploadPath);
  //   // }
  // }

  deleteFile(filePath: string): Promise<void> {
    return LinkedFileStorage.deleteFile(filePath);
  }

  getAllFilestoreImages(): Promise<ShapeSet<ImageObject>> {
    return LinkedFileStorage.listFiles().then((files) => {
      let images: ShapeSet<ImageObject> = new ShapeSet();
      files.forEach((file) => {
        images.add(new ImageObject({ id: file }));
      });
      return images;
    });
  }

  fromDataURL(
    dataUrl: string,
    filePath?: string,
    metaData?: ImageCreationMetaData
  ): Promise<ImageObject> {
    console.log(
      `${process.pid} - ${process.env.PORT}: ImageObjectProvider.fromDataURL(). FilePath ${filePath}`
    );
    const data = dataUrl.replace(/^data:image\/\w+;base64,/, '');
    const buf = Buffer.from(data, 'base64');
    const mimeType = dataUrl.match(/data:(.*);base64/)[1];
    return LinkedFileStorage.saveFile(filePath, buf, mimeType, true).then(
      async (publicPath): Promise<ImageObject> => {
        return ImageObject.create({
          contentUrl: publicPath,
          copyrightNotice: metaData?.copyrightNotice,
          usageInfo: metaData?.usageInfo,
          creditText: metaData?.creditText,
          dateCreated:
            metaData && metaData.dateCreated
              ? new Date(metaData.dateCreated)
              : null,
          url: metaData?.url,
          identifier: metaData?.identifier.toString(),
          name: metaData?.name,
        }) as unknown as Promise<ImageObject>;
      }
    );
  }

  /**
   * Custom method to upload a single file
   * See ImageObject.ts for the client-side implementation
   * This custom method receives NO arguments and will need to manually handle this.request.body for example
   */
  fromFormFile(): Promise<ImageObject> {
    // const form = formidable({});
    //
    // return new Promise((resolve, reject) => {
    //   form.parse(this.request, (err, fields, files) => {
    //     if (err) {
    //       console.warn('Error parsing uploaded file:' + err.stack);
    //       return;
    //     }
    //     // console.log(files);
    //
    //     let upload = files['upload'] as File;
    //     uploadSingleFileFromFormData({
    //       file: upload,
    //       allowedExtensions: ImageObjectProvider.ALLOWED_EXTENSIONS,
    //     })
    //       .then((publicPath: string) => {
    //         let image = new ImageObject();
    //         image.contentUrl = publicPath;
    //         resolve(image);
    //       })
    //       .catch((err) => {
    //         console.warn('Error during file upload', err);
    //         resolve(null);
    //       });
    //   });
    // });
    return uploadMediaFromFormFile(
      this.request,
      (data) => ImageObject.create(data) as unknown as Promise<ImageObject>
    );
  }

  // fromFormFiles(image: ImageObject, formData): Promise<ShapeSet<ImageObject>> {
  //   // console.log(formData);
  //   // console.log(formData.upload);
  //
  //   const form = formidable({});
  //   var fileNumber = 0;
  //   let uploadPromises = [];
  //
  //   return new Promise((resolve, reject) => {
  //     form.parse(this.request, (err, fields, files) => {
  //       if (err) {
  //         console.warn('Error parsing uploaded file:' + err.stack);
  //         return;
  //       }
  //       // console.log(files);
  //       while (files['upload-' + fileNumber]) {
  //         let upload = files['upload-' + fileNumber] as File;
  //         uploadPromises.push(
  //           uploadSingleFileFromFormData({
  //             file: upload,
  //             allowedExtensions: ImageObjectProvider.ALLOWED_EXTENSIONS,
  //           }),
  //         );
  //
  //         fileNumber++;
  //       }
  //
  //       Promise.all(uploadPromises)
  //         .then((paths: string[]) => {
  //           let images: ShapeSet<ImageObject> = new ShapeSet();
  //           paths.forEach((path) => {
  //             let image = new ImageObject();
  //             image.contentUrl = path;
  //             images.add(image);
  //           });
  //           resolve(images);
  //         })
  //         .catch((err) => {
  //           console.warn('Error during file upload', err);
  //           resolve(null);
  //         });
  //     });
  //   });
  // }
  //
  // // TODO: before remove, need to check where this method used. Now move to Upload on lincd-server-utils
  // private uploadSingleFileFromBuffer(
  //   buffer,
  //   fileName: string,
  // ): Promise<string> {
  //   let {targetFilePath, publicURL} = getUploadTarget(
  //     fileName,
  //     null,
  //     ImageObjectProvider.ALLOWED_EXTENSIONS,
  //   );
  //
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       await LinkedFileStorage.saveFile(targetFilePath, buffer);
  //       resolve(publicURL);
  //     } catch (err) {
  //       reject(err);
  //     }
  //   });
  // }
}
