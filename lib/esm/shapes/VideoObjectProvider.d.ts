import { ShapeProvider } from '@_linked/server-utils/utils/ShapeProvider';
import { VideoObject } from './VideoObject.js';
export declare class VideoObjectProvider extends ShapeProvider {
    private static ALLOWED_EXTENSIONS;
    shape: ShapeProvider['shape'];
    /**
     * Custom method to upload a single file
     * See VideoObject.ts for the client-side implementation
     * This custom method receives NO arguments and will need to manually handle this.request.body for example
     */
    fromFormFile(): Promise<VideoObject>;
}
