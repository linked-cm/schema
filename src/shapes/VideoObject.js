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
exports.VideoObject = void 0;
var Server_1 = require("@_linked/server-utils/utils/Server");
var schema_js_1 = require("../ontologies/schema.js");
var package_js_1 = require("../package.js");
var MediaObject_js_1 = require("./MediaObject.js");
var VideoObject = /** @class */ (function (_super) {
    __extends(VideoObject, _super);
    function VideoObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // @objectProperty({
    //   path: schema.about,
    //   shape: Thing,
    // })
    // get about(): ShapeSet<Thing> {
    //   return Thing.getSetOf(this.getAll(schema.about));
    // }
    VideoObject.fromDataURL = function (dataURL, filename, imgType) {
        return Server_1.Server.call(this, 'fromDataURL', dataURL, filename, imgType);
    };
    VideoObject.fromBlob = function (blob, filename) {
        //https://stackoverflow.com/a/29390393/977206
        var file = new File([blob], filename, { type: blob.type });
        return this.fromFormFile(file, filename);
    };
    /**
     * @param file
     * @param name optionally specify a name for the file
     */
    VideoObject.fromFormFile = function (file, filePath, metaData) {
        var formData = new FormData();
        if (file)
            formData.append('upload', file);
        if (filePath)
            formData.append('filePath', filePath);
        if (metaData) {
            if (metaData.copyrightNotice) {
                formData.append('copyrightNotice', metaData.copyrightNotice);
            }
            if (metaData.creditText) {
                formData.append('creditText', metaData.creditText);
            }
            if (metaData.usageInfo) {
                formData.append('usageInfo', metaData.usageInfo);
            }
            if (metaData.identifier) {
                formData.append('identifier', metaData.identifier.toString());
            }
            if (metaData.url) {
                formData.append('url', metaData.url);
            }
            if (metaData.dateCreated) {
                formData.append('dateCreated', metaData.dateCreated);
            }
        }
        return Server_1.Server.callCustomShapeMethod(this, 'POST', 'fromFormFile', formData, {
            Accept: 'application/json, text/plain, */*',
            //content-type needs to specifically be left UNDEFINED
            //https://stackoverflow.com/questions/39280438/fetch-missing-boundary-in-multipart-form-data-post
            // 'Content-Type': undefined,
        });
    };
    VideoObject.targetClass = schema_js_1.schema.VideoObject;
    VideoObject = __decorate([
        (0, package_js_1.linkedShape)({
            description: 'A video file or video stream. Represents video content with duration, encoding, and playback properties. (video, movie, clip)',
        })
    ], VideoObject);
    return VideoObject;
}(MediaObject_js_1.MediaObject));
exports.VideoObject = VideoObject;
//# sourceMappingURL=VideoObject.js.map