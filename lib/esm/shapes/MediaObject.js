var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Server } from '@_linked/server-utils/utils/Server';
import { disallowProperty, literalProperty } from '@_linked/core/shapes/SHACL';
import { schema } from '../ontologies/schema.js';
import { linkedShape } from '../package.js';
import { CreativeWork } from './CreativeWork.js';
let MediaObject = class MediaObject extends CreativeWork {
    get contentUrl() {
        return '';
    }
    get url() {
        return undefined;
    }
    get image() {
        return undefined;
    }
    get text() {
        return undefined;
    }
    static deleteFile(filePath) {
        return Server.call(this, 'deleteFile', filePath);
    }
    static fromFormFiles(files) {
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
    }
};
MediaObject.targetClass = schema.MediaObject;
__decorate([
    literalProperty({
        path: schema.contentUrl,
        maxCount: 1,
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], MediaObject.prototype, "contentUrl", null);
__decorate([
    disallowProperty,
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], MediaObject.prototype, "url", null);
__decorate([
    disallowProperty,
    __metadata("design:type", MediaObject),
    __metadata("design:paramtypes", [])
], MediaObject.prototype, "image", null);
__decorate([
    disallowProperty,
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], MediaObject.prototype, "text", null);
MediaObject = __decorate([
    linkedShape({
        description: 'A media object such as an image, video, or audio file. Represents digital media with content URL, encoding, and file properties. (media, file, content)',
    })
], MediaObject);
export { MediaObject };
//# sourceMappingURL=MediaObject.js.map