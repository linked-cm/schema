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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaObject = void 0;
var Server_1 = require("@_linked/server-utils/utils/Server");
var SHACL_1 = require("@_linked/core/shapes/SHACL");
var schema_js_1 = require("../ontologies/schema.js");
var package_js_1 = require("../package.js");
var CreativeWork_js_1 = require("./CreativeWork.js");
var MediaObject = /** @class */ (function (_super) {
    __extends(MediaObject, _super);
    function MediaObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MediaObject.prototype, "contentUrl", {
        get: function () {
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MediaObject.prototype, "url", {
        get: function () {
            return undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MediaObject.prototype, "image", {
        get: function () {
            return undefined;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MediaObject.prototype, "text", {
        get: function () {
            return undefined;
        },
        enumerable: false,
        configurable: true
    });
    MediaObject.deleteFile = function (filePath) {
        return Server_1.Server.call(this, 'deleteFile', filePath);
    };
    MediaObject.fromFormFiles = function (files) {
        var formData = new FormData();
        for (var key in files) {
            if (files.hasOwnProperty(key)) {
                formData.append('upload-' + key, files[key], files[key].name);
            }
        }
        return null;
        //content-type needs to specifically be left UNDEFINED
        //https://stackoverflow.com/questions/39280438/fetch-missing-boundary-in-multipart-form-data-post
        // var headers = {
        //   Accept: 'application/json, text/plain, */*',
        // };
        //
        // return Server.call(new MediaObject(), {
        //   method:'fromFormFiles',
        //   headers
        // }, formData) as Promise<ShapeSet<MediaObject>>;
        // return Server.call(MediaObject, 'fromFormFiles', formData) as Promise<MediaObject>;
    };
    MediaObject.targetClass = schema_js_1.schema.MediaObject;
    __decorate([
        (0, SHACL_1.literalProperty)({
            path: schema_js_1.schema.contentUrl,
            maxCount: 1,
        }),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], MediaObject.prototype, "contentUrl", null);
    __decorate([
        SHACL_1.disallowProperty,
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], MediaObject.prototype, "url", null);
    __decorate([
        SHACL_1.disallowProperty,
        __metadata("design:type", MediaObject),
        __metadata("design:paramtypes", [])
    ], MediaObject.prototype, "image", null);
    __decorate([
        SHACL_1.disallowProperty,
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], MediaObject.prototype, "text", null);
    MediaObject = __decorate([
        (0, package_js_1.linkedShape)({
            description: 'A media object such as an image, video, or audio file. Represents digital media with content URL, encoding, and file properties. (media, file, content)',
        })
    ], MediaObject);
    return MediaObject;
}(CreativeWork_js_1.CreativeWork));
exports.MediaObject = MediaObject;
//# sourceMappingURL=MediaObject.js.map