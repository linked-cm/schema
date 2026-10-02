import { ShapeProvider } from '@_linked/server-utils/utils/ShapeProvider';
import { uploadMediaFromFormFile } from '../utils/MediaObjectUpload.js';
import { VideoObject } from './VideoObject.js';
import {
  getMediaUploadPolicy,
  requireMediaCaller,
} from '../utils/MediaUploadPolicy.js';

export class VideoObjectProvider extends ShapeProvider {
  private static ALLOWED_EXTENSIONS: string[] = ['mov', 'mp4'];
  shape: ShapeProvider['shape'] = VideoObject;

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
  async fromFormFile(): Promise<VideoObject> {
    const caller = requireMediaCaller(this.request);
    return uploadMediaFromFormFile(
      this.request,
      (data) => VideoObject.create(data) as unknown as Promise<VideoObject>,
      { caller, maxBytes: getMediaUploadPolicy().maxVideoBytes }
    );
  }
}
