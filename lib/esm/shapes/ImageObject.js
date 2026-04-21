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
let ImageObject = class ImageObject extends MediaObject {
    static getAllFilestoreImages() {
        return Server.call(this, 'getAllFilestoreImages');
    }
    static fromDataURL(dataURL, filePath, metaData) {
        return Server.call(this, 'fromDataURL', dataURL, filePath, metaData);
    }
    static readImageFromDB(brandName) {
        return Server.call(this, 'readImageFromDB', brandName);
    }
    /**
     * @param file
     * @param name optionally specify a name for the file
     */
    static fromFormFile(file, name) {
        var formData = new FormData();
        formData.append('upload', file, name || file.name);
        return Server.callCustomShapeMethod(this, 'POST', 'fromFormFile', formData, {
            Accept: 'application/json, text/plain, */*',
            //content-type needs to specifically be left UNDEFINED
            //https://stackoverflow.com/questions/39280438/fetch-missing-boundary-in-multipart-form-data-post
        });
    }
};
ImageObject.targetClass = schema.ImageObject;
ImageObject = __decorate([
    linkedShape({
        description: 'A Schema.org ImageObject; represents an image file or resource. Used for thumbnails, profile pictures, media. (photo, picture, graphic)',
    })
], ImageObject);
export { ImageObject };
//# sourceMappingURL=ImageObject.js.map