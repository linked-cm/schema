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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadMediaFromFormFile = void 0;
const LinkedFileStorage_1 = require("@_linked/core/utils/LinkedFileStorage");
const formidable_1 = __importDefault(require("formidable"));
const fs_1 = __importDefault(require("fs"));
function uploadMediaFromFormFile(request, createMedia) {
    const form = (0, formidable_1.default)({});
    return new Promise((resolve, reject) => {
        form.parse(request, (err, fields, files) => __awaiter(this, void 0, void 0, function* () {
            if (err) {
                console.warn('Error parsing uploaded file:' + err.stack);
                reject(err);
                return;
            }
            // let file:File = files['upload'];
            let file = files['upload'];
            if (Array.isArray(file)) {
                file = file[0];
            }
            // let filePath:string = fields['filePath'];
            let filePath = fields['filePath'];
            if (Array.isArray(filePath)) {
                filePath = filePath[0];
            }
            // create buffer from files
            const buffer = fs_1.default.readFileSync(file.filepath);
            const metaData = {
                // Provide specific metadata values as needed
                copyrightNotice: fields['copyrightNotice'],
                creditText: fields['creditText'],
                usageInfo: fields['usageInfo'],
                url: fields['url'],
                identifier: fields['identifier'],
                dateCreated: fields['dateCreated'],
            };
            LinkedFileStorage_1.LinkedFileStorage.saveFile(filePath, buffer, file.mimetype)
                .then((publicPath) => __awaiter(this, void 0, void 0, function* () {
                const media = yield createMedia({
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
                        ? new Date((Array.isArray(metaData.dateCreated)
                            ? metaData.dateCreated[0]
                            : metaData.dateCreated))
                        : undefined,
                });
                resolve(media);
            }))
                .catch((err) => {
                reject(err); // Reject if there's an error in saving the file
            });
        }));
    });
}
exports.uploadMediaFromFormFile = uploadMediaFromFormFile;
//# sourceMappingURL=MediaObjectUpload.js.map