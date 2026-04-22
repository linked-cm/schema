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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageObject = void 0;
var Server_1 = require("@_linked/server-utils/utils/Server");
var schema_js_1 = require("../ontologies/schema.js");
var package_js_1 = require("../package.js");
var MediaObject_js_1 = require("./MediaObject.js");
var ImageObject = /** @class */ (function (_super) {
    __extends(ImageObject, _super);
    function ImageObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageObject.getAllFilestoreImages = function () {
        return Server_1.Server.call(this, 'getAllFilestoreImages');
    };
    ImageObject.fromDataURL = function (dataURL, filePath, metaData) {
        return Server_1.Server.call(this, 'fromDataURL', dataURL, filePath, metaData);
    };
    ImageObject.readImageFromDB = function (brandName) {
        return Server_1.Server.call(this, 'readImageFromDB', brandName);
    };
    /**
     * @param file
     * @param name optionally specify a name for the file
     */
    ImageObject.fromFormFile = function (file, name) {
        var formData = new FormData();
        formData.append('upload', file, name || file.name);
        return Server_1.Server.callCustomShapeMethod(this, 'POST', 'fromFormFile', formData, {
            Accept: 'application/json, text/plain, */*',
            //content-type needs to specifically be left UNDEFINED
            //https://stackoverflow.com/questions/39280438/fetch-missing-boundary-in-multipart-form-data-post
        });
    };
    ImageObject.targetClass = schema_js_1.schema.ImageObject;
    ImageObject = __decorate([
        (0, package_js_1.linkedShape)({
            description: 'A Schema.org ImageObject; represents an image file or resource. Used for thumbnails, profile pictures, media. (photo, picture, graphic)',
        })
    ], ImageObject);
    return ImageObject;
}(MediaObject_js_1.MediaObject));
exports.ImageObject = ImageObject;
//# sourceMappingURL=ImageObject.js.map