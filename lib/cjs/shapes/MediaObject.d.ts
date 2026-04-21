import { ShapeSet } from '@_linked/core/collections/ShapeSet';
import { CreativeWork } from './CreativeWork.js';
export declare class MediaObject extends CreativeWork {
    static targetClass: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    get contentUrl(): string;
    get url(): string;
    get image(): MediaObject;
    get text(): string;
    static deleteFile(filePath: string): Promise<void>;
    static fromFormFiles(files: FileList): Promise<ShapeSet<MediaObject>>;
}
