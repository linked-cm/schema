import { ShapeProvider } from '@_linked/server-utils/utils/ShapeProvider';
import { ImageCreationMetaData, ImageObject } from './ImageObject.js';
import { ShapeSet } from '@_linked/core/collections/ShapeSet';
export declare class ImageObjectProvider extends ShapeProvider {
    private static ALLOWED_EXTENSIONS;
    shape: ShapeProvider['shape'];
    deleteFile(filePath: string): Promise<void>;
    getAllFilestoreImages(): Promise<ShapeSet<ImageObject>>;
    fromDataURL(dataUrl: string, filePath?: string, metaData?: ImageCreationMetaData): Promise<ImageObject>;
    /**
     * Custom method to upload a single file
     * See ImageObject.ts for the client-side implementation
     * This custom method receives NO arguments and will need to manually handle this.request.body for example
     */
    fromFormFile(): Promise<ImageObject>;
}
