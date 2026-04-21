var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Server } from '@_linked/server-utils/utils/Server';
import { schema } from '../ontologies/schema.js';
import { linkedShape } from '../package.js';
import { MediaObject } from './MediaObject.js';
let VideoObject = class VideoObject extends MediaObject {
    // @objectProperty({
    //   path: schema.about,
    //   shape: Thing,
    // })
    // get about(): ShapeSet<Thing> {
    //   return Thing.getSetOf(this.getAll(schema.about));
    // }
    static fromDataURL(dataURL, filename, imgType) {
        return Server.call(this, 'fromDataURL', dataURL, filename, imgType);
    }
    static fromBlob(blob, filename) {
        //https://stackoverflow.com/a/29390393/977206
        let file = new File([blob], filename, { type: blob.type });
        return this.fromFormFile(file, filename);
    }
    /**
     * @param file
     * @param name optionally specify a name for the file
     */
    static fromFormFile(file, filePath, metaData) {
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
        return Server.callCustomShapeMethod(this, 'POST', 'fromFormFile', formData, {
            Accept: 'application/json, text/plain, */*',
            //content-type needs to specifically be left UNDEFINED
            //https://stackoverflow.com/questions/39280438/fetch-missing-boundary-in-multipart-form-data-post
            // 'Content-Type': undefined,
        });
    }
};
VideoObject.targetClass = schema.VideoObject;
VideoObject = __decorate([
    linkedShape({
        description: 'A video file or video stream. Represents video content with duration, encoding, and playback properties. (video, movie, clip)',
    })
], VideoObject);
export { VideoObject };
//# sourceMappingURL=VideoObject.js.map