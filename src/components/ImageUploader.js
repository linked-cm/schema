"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageUploader = void 0;
var react_1 = __importStar(require("react"));
var ImageUploader_module_css_1 = __importDefault(require("./ImageUploader.module.css"));
var ClassNames_1 = require("@_linked/react/utils/ClassNames");
var Spinner_1 = require("@_linked/primitives/components/Spinner");
var ImageUploader = function (_a) {
    var _b;
    var thumbnailHeight = _a.thumbnailHeight, thumbnailWidth = _a.thumbnailWidth, _c = _a.aspectRatio, aspectRatio = _c === void 0 ? 8 / 4 : _c, className = _a.className, uploadIcon = _a.uploadIcon, _d = _a.confirmText, confirmText = _d === void 0 ? 'Save' : _d, property = _a.property, onUploaded = _a.onUploaded, potentialValue = _a.potentialValue;
    var _e = __read((0, react_1.useState)((potentialValue && potentialValue.contentUrl) || ''), 2), image = _e[0], setImage = _e[1];
    var _f = __read((0, react_1.useState)((potentialValue && ((_b = potentialValue === null || potentialValue === void 0 ? void 0 : potentialValue.contentUrl) === null || _b === void 0 ? void 0 : _b.split('/').pop())) || ''), 2), fileName = _f[0], setFileName = _f[1];
    var _g = __read((0, react_1.useState)(false), 2), loadingImage = _g[0], setLoadingImage = _g[1];
    var fileInputRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        var _a;
        if (potentialValue && potentialValue.contentUrl) {
            setImage(potentialValue === null || potentialValue === void 0 ? void 0 : potentialValue.contentUrl);
            setFileName((_a = potentialValue === null || potentialValue === void 0 ? void 0 : potentialValue.contentUrl) === null || _a === void 0 ? void 0 : _a.split('/').pop());
        }
    }, [potentialValue]);
    var handleFileChange = function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var file_1, reader_1;
        return __generator(this, function (_a) {
            if (event.target.files && event.target.files[0]) {
                file_1 = event.target.files[0];
                reader_1 = new FileReader();
                reader_1.onloadend = function () {
                    var dataUrl = reader_1.result;
                    var format = file_1.type.split('/')[1];
                    setImage(dataUrl);
                    setFileName(file_1.name);
                    setLoadingImage(false);
                    if (onUploaded) {
                        onUploaded(dataUrl, format);
                    }
                };
                reader_1.readAsDataURL(file_1);
                setLoadingImage(true);
            }
            return [2 /*return*/];
        });
    }); };
    var handleImageClick = function () {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    return (react_1.default.createElement("div", { className: ImageUploader_module_css_1.default.Root },
        react_1.default.createElement("div", { className: (0, ClassNames_1.cl)(ImageUploader_module_css_1.default.uploaderContainer, className), style: {
                aspectRatio: aspectRatio ? aspectRatio : 'inherit',
                height: thumbnailHeight ? thumbnailHeight + 'px' : 'auto',
                width: thumbnailWidth ? thumbnailWidth + 'px' : 'auto',
            }, onClick: handleImageClick }, loadingImage ? (react_1.default.createElement(Spinner_1.Spinner, null)) : image ? (react_1.default.createElement("img", { src: image, alt: fileName, className: (0, ClassNames_1.cl)(ImageUploader_module_css_1.default.imageUpload), style: {
                height: thumbnailHeight ? thumbnailHeight + 'px' : 'auto',
                aspectRatio: aspectRatio ? aspectRatio : 'inherit',
            } })) : (react_1.default.createElement("label", { className: ImageUploader_module_css_1.default.uploadLabel }, uploadIcon ? uploadIcon : react_1.default.createElement("span", null, "Upload Image")))),
        react_1.default.createElement("input", { type: "file", accept: "image/*", onChange: handleFileChange, style: { display: 'none' }, ref: fileInputRef })));
};
exports.ImageUploader = ImageUploader;
//# sourceMappingURL=ImageUploader.js.map