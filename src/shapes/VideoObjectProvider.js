"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoObjectProvider = void 0;
var ShapeProvider_1 = require("@_linked/server-utils/utils/ShapeProvider");
var MediaObjectUpload_js_1 = require("../utils/MediaObjectUpload.js");
var VideoObject_js_1 = require("./VideoObject.js");
var VideoObjectProvider = /** @class */ (function (_super) {
    __extends(VideoObjectProvider, _super);
    function VideoObjectProvider() {
        var _this = _super.apply(this, __spreadArray([], __read(arguments), false)) || this;
        _this.shape = VideoObject_js_1.VideoObject;
        return _this;
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
    VideoObjectProvider.prototype.fromFormFile = function () {
        return (0, MediaObjectUpload_js_1.uploadMediaFromFormFile)(this.request, function (data) { return VideoObject_js_1.VideoObject.create(data); });
    };
    VideoObjectProvider.ALLOWED_EXTENSIONS = ['mov', 'mp4'];
    return VideoObjectProvider;
}(ShapeProvider_1.ShapeProvider));
exports.VideoObjectProvider = VideoObjectProvider;
//# sourceMappingURL=VideoObjectProvider.js.map