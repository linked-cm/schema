import { ShapeSet } from '@_linked/core/collections/ShapeSet';
import { MediaObject } from './MediaObject.js';
interface MediaGalleryAsset {
    data: ImageObject;
}
export interface ImageCreationMetaData {
    copyrightNotice?: string;
    creditText?: string;
    usageInfo?: string;
    identifier?: number;
    name?: string;
    url?: string;
    dateCreated?: string;
}
export declare class ImageObject extends MediaObject {
    static targetClass: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    static getAllFilestoreImages(): Promise<ShapeSet<MediaObject>>;
    static fromDataURL(dataURL: string, filePath?: string, metaData?: ImageCreationMetaData): Promise<ImageObject>;
    static readImageFromDB(brandName: string): Promise<MediaGalleryAsset[]>;
    /**
     * @param file
     * @param name optionally specify a name for the file
     */
    static fromFormFile(file: File, name?: string): Promise<ImageObject>;
}
export {};
