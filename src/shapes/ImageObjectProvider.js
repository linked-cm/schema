"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageObjectProvider = void 0;
// import {File, default as formidable} from 'formidable';
var LinkedFileStorage_1 = require("@_linked/core/utils/LinkedFileStorage");
var ShapeProvider_1 = require("@_linked/server-utils/utils/ShapeProvider");
var ImageObject_js_1 = require("./ImageObject.js");
var MediaObjectUpload_js_1 = require("../utils/MediaObjectUpload.js");
var ShapeSet_1 = require("@_linked/core/collections/ShapeSet");
var ImageObjectProvider = /** @class */ (function (_super) {
    __extends(ImageObjectProvider, _super);
    function ImageObjectProvider() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.shape = ImageObject_js_1.ImageObject;
        return _this;
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
    ImageObjectProvider.prototype.deleteFile = function (filePath) {
        return LinkedFileStorage_1.LinkedFileStorage.deleteFile(filePath);
    };
    ImageObjectProvider.prototype.getAllFilestoreImages = function () {
        return LinkedFileStorage_1.LinkedFileStorage.listFiles().then(function (files) {
            var images = new ShapeSet_1.ShapeSet();
            files.forEach(function (file) {
                images.add(new ImageObject_js_1.ImageObject({ id: file }));
            });
            return images;
        });
    };
    ImageObjectProvider.prototype.fromDataURL = function (dataUrl, filePath, metaData) {
        var _this = this;
        console.log("".concat(process.pid, " - ").concat(process.env.PORT, ": ImageObjectProvider.fromDataURL(). FilePath ").concat(filePath));
        var data = dataUrl.replace(/^data:image\/\w+;base64,/, '');
        var buf = Buffer.from(data, 'base64');
        var mimeType = dataUrl.match(/data:(.*);base64/)[1];
        return LinkedFileStorage_1.LinkedFileStorage.saveFile(filePath, buf, mimeType, true).then(function (publicPath) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, ImageObject_js_1.ImageObject.create({
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
                    })];
            });
        }); });
    };
    /**
     * Custom method to upload a single file
     * See ImageObject.ts for the client-side implementation
     * This custom method receives NO arguments and will need to manually handle this.request.body for example
     */
    ImageObjectProvider.prototype.fromFormFile = function () {
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
        return (0, MediaObjectUpload_js_1.uploadMediaFromFormFile)(this.request, function (data) { return ImageObject_js_1.ImageObject.create(data); });
    };
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
    return ImageObjectProvider;
}(ShapeProvider_1.ShapeProvider));
exports.ImageObjectProvider = ImageObjectProvider;
//# sourceMappingURL=ImageObjectProvider.js.map