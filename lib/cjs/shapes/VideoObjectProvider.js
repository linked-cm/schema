"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoObjectProvider = void 0;
const ShapeProvider_1 = require("@_linked/server-utils/utils/ShapeProvider");
const MediaObjectUpload_js_1 = require("../utils/MediaObjectUpload.js");
const VideoObject_js_1 = require("./VideoObject.js");
class VideoObjectProvider extends ShapeProvider_1.ShapeProvider {
    constructor() {
        super(...arguments);
        this.shape = VideoObject_js_1.VideoObject;
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
        return (0, MediaObjectUpload_js_1.uploadMediaFromFormFile)(this.request, (data) => VideoObject_js_1.VideoObject.create(data));
    }
}
exports.VideoObjectProvider = VideoObjectProvider;
VideoObjectProvider.ALLOWED_EXTENSIONS = ['mov', 'mp4'];
//# sourceMappingURL=VideoObjectProvider.js.map