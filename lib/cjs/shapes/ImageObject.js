"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageObject = void 0;
const Server_1 = require("@_linked/server-utils/utils/Server");
const schema_js_1 = require("../ontologies/schema.js");
const package_js_1 = require("../package.js");
const MediaObject_js_1 = require("./MediaObject.js");
let ImageObject = class ImageObject extends MediaObject_js_1.MediaObject {
    static getAllFilestoreImages() {
        return Server_1.Server.call(this, 'getAllFilestoreImages');
    }
    static fromDataURL(dataURL, filePath, metaData) {
        return Server_1.Server.call(this, 'fromDataURL', dataURL, filePath, metaData);
    }
    static readImageFromDB(brandName) {
        return Server_1.Server.call(this, 'readImageFromDB', brandName);
    }
    /**
     * @param file
     * @param name optionally specify a name for the file
     */
    static fromFormFile(file, name) {
        var formData = new FormData();
        formData.append('upload', file, name || file.name);
        return Server_1.Server.callCustomShapeMethod(this, 'POST', 'fromFormFile', formData, {
            Accept: 'application/json, text/plain, */*',
            //content-type needs to specifically be left UNDEFINED
            //https://stackoverflow.com/questions/39280438/fetch-missing-boundary-in-multipart-form-data-post
        });
    }
};
exports.ImageObject = ImageObject;
ImageObject.targetClass = schema_js_1.schema.ImageObject;
exports.ImageObject = ImageObject = __decorate([
    (0, package_js_1.linkedShape)({
        description: 'A Schema.org ImageObject; represents an image file or resource. Used for thumbnails, profile pictures, media. (photo, picture, graphic)',
    })
], ImageObject);
//# sourceMappingURL=ImageObject.js.map