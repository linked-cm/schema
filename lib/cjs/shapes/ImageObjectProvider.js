"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageObjectProvider = void 0;
// import {File, default as formidable} from 'formidable';
const LinkedFileStorage_1 = require("@_linked/core/utils/LinkedFileStorage");
const ShapeProvider_1 = require("@_linked/server-utils/utils/ShapeProvider");
const ImageObject_js_1 = require("./ImageObject.js");
const MediaObjectUpload_js_1 = require("../utils/MediaObjectUpload.js");
const ShapeSet_1 = require("@_linked/core/collections/ShapeSet");
class ImageObjectProvider extends ShapeProvider_1.ShapeProvider {
    constructor() {
        super(...arguments);
        this.shape = ImageObject_js_1.ImageObject;
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
    // constructor(server) {
    //   super(server);
    //
    //   //make sure upload folder exists
    //   // if (!fs.existsSync(this.fileSystemUploadPath)) {
    //   //   fs.mkdirSync(this.fileSystemUploadPath);
    //   // }
    // }
    deleteFile(filePath) {
        return LinkedFileStorage_1.LinkedFileStorage.deleteFile(filePath);
    }
    getAllFilestoreImages() {
        return LinkedFileStorage_1.LinkedFileStorage.listFiles().then((files) => {
            let images = new ShapeSet_1.ShapeSet();
            files.forEach((file) => {
                images.add(new ImageObject_js_1.ImageObject({ id: file }));
            });
            return images;
        });
    }
    fromDataURL(dataUrl, filePath, metaData) {
        console.log(`${process.pid} - ${process.env.PORT}: ImageObjectProvider.fromDataURL(). FilePath ${filePath}`);
        const data = dataUrl.replace(/^data:image\/\w+;base64,/, '');
        const buf = Buffer.from(data, 'base64');
        const mimeType = dataUrl.match(/data:(.*);base64/)[1];
        return LinkedFileStorage_1.LinkedFileStorage.saveFile(filePath, buf, mimeType, true).then((publicPath) => __awaiter(this, void 0, void 0, function* () {
            return ImageObject_js_1.ImageObject.create({
                contentUrl: publicPath,
                copyrightNotice: metaData === null || metaData === void 0 ? void 0 : metaData.copyrightNotice,
                usageInfo: metaData === null || metaData === void 0 ? void 0 : metaData.usageInfo,
                creditText: metaData === null || metaData === void 0 ? void 0 : metaData.creditText,
                dateCreated: metaData && metaData.dateCreated
                    ? new Date(metaData.dateCreated)
                    : null,
                url: metaData === null || metaData === void 0 ? void 0 : metaData.url,
                identifier: metaData === null || metaData === void 0 ? void 0 : metaData.identifier.toString(),
                name: metaData === null || metaData === void 0 ? void 0 : metaData.name,
            });
        }));
    }
    /**
     * Custom method to upload a single file
     * See ImageObject.ts for the client-side implementation
     * This custom method receives NO arguments and will need to manually handle this.request.body for example
     */
    fromFormFile() {
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
        return (0, MediaObjectUpload_js_1.uploadMediaFromFormFile)(this.request, (data) => ImageObject_js_1.ImageObject.create(data));
    }
}
exports.ImageObjectProvider = ImageObjectProvider;
ImageObjectProvider.ALLOWED_EXTENSIONS = [
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
//# sourceMappingURL=ImageObjectProvider.js.map