import { ShapeProvider } from '@_linked/server-utils/utils/ShapeProvider';
import { uploadMediaFromFormFile } from '../utils/MediaObjectUpload.js';
import { VideoObject } from './VideoObject.js';
export class VideoObjectProvider extends ShapeProvider {
    constructor() {
        super(...arguments);
        this.shape = VideoObject;
    }
    // constructor(server) {
    //   super(server);
    //
    //   //make sure upload folder exists
    //   // if (!fs.existsSync(this.uploadPath)) {
    //   //   fs.mkdirSync(this.uploadPath);
    //   // }
    // }
    /**
     * Custom method to upload a single file
     * See VideoObject.ts for the client-side implementation
     * This custom method receives NO arguments and will need to manually handle this.request.body for example
     */
    fromFormFile() {
        return uploadMediaFromFormFile(this.request, (data) => VideoObject.create(data));
    }
}
VideoObjectProvider.ALLOWED_EXTENSIONS = ['mov', 'mp4'];
//# sourceMappingURL=VideoObjectProvider.js.map