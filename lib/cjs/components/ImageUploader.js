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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageUploader = void 0;
const react_1 = __importStar(require("react"));
const ImageUploader_module_css_1 = __importDefault(require("./ImageUploader.module.css"));
const ClassNames_1 = require("@_linked/react/utils/ClassNames");
const Spinner_1 = require("@_linked/primitives/components/Spinner");
const ImageUploader = ({ thumbnailHeight, thumbnailWidth, aspectRatio = 8 / 4, className, uploadIcon, confirmText = 'Save', property, onUploaded, potentialValue, }) => {
    var _a;
    const [image, setImage] = (0, react_1.useState)((potentialValue && potentialValue.contentUrl) || '');
    const [fileName, setFileName] = (0, react_1.useState)((potentialValue && ((_a = potentialValue === null || potentialValue === void 0 ? void 0 : potentialValue.contentUrl) === null || _a === void 0 ? void 0 : _a.split('/').pop())) || '');
    const [loadingImage, setLoadingImage] = (0, react_1.useState)(false);
    const fileInputRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        var _a;
        if (potentialValue && potentialValue.contentUrl) {
            setImage(potentialValue === null || potentialValue === void 0 ? void 0 : potentialValue.contentUrl);
            setFileName((_a = potentialValue === null || potentialValue === void 0 ? void 0 : potentialValue.contentUrl) === null || _a === void 0 ? void 0 : _a.split('/').pop());
        }
    }, [potentialValue]);
    const handleFileChange = (event) => __awaiter(void 0, void 0, void 0, function* () {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => {
                const dataUrl = reader.result;
                const format = file.type.split('/')[1];
                setImage(dataUrl);
                setFileName(file.name);
                setLoadingImage(false);
                if (onUploaded) {
                    onUploaded(dataUrl, format);
                }
            };
            reader.readAsDataURL(file);
            setLoadingImage(true);
        }
    });
    const handleImageClick = () => {
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