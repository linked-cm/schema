import { MediaObject } from './MediaObject.js';
export declare class VideoObject extends MediaObject {
    static targetClass: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    static fromDataURL(dataURL: string, filename?: string, imgType?: string): Promise<VideoObject>;
    static fromBlob(blob: Blob, filename?: string): Promise<VideoObject>;
    /**
     * @param file
     * @param name optionally specify a name for the file
     */
    static fromFormFile(file: File, filePath: string, metaData?: {
        copyrightNotice?: string;
        creditText?: string;
        usageInfo?: string;
        identifier?: number;
        url?: string;
        dateCreated?: string;
    }): Promise<VideoObject>;
}
