import React, { useState, useRef, useEffect } from 'react';
import style from './ImageUploader.module.css';
import { cl } from '@_linked/react/utils/ClassNames';
import { Spinner } from '@_linked/primitives/components/Spinner';
export const ImageUploader = ({ thumbnailHeight, thumbnailWidth, aspectRatio = 8 / 4, className, uploadIcon, confirmText = 'Save', property, onUploaded, potentialValue, }) => {
    var _a;
    const [image, setImage] = useState((potentialValue && potentialValue.contentUrl) || '');
    const [fileName, setFileName] = useState((potentialValue && ((_a = potentialValue === null || potentialValue === void 0 ? void 0 : potentialValue.contentUrl) === null || _a === void 0 ? void 0 : _a.split('/').pop())) || '');
    const [loadingImage, setLoadingImage] = useState(false);
    const fileInputRef = useRef(null);
    useEffect(() => {
        var _a;
        if (potentialValue && potentialValue.contentUrl) {
            setImage(potentialValue === null || potentialValue === void 0 ? void 0 : potentialValue.contentUrl);
            setFileName((_a = potentialValue === null || potentialValue === void 0 ? void 0 : potentialValue.contentUrl) === null || _a === void 0 ? void 0 : _a.split('/').pop());
        }
    }, [potentialValue]);
    const handleFileChange = async (event) => {
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
    };
    const handleImageClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    return (React.createElement("div", { className: style.Root },
        React.createElement("div", { className: cl(style.uploaderContainer, className), style: {
                aspectRatio: aspectRatio ? aspectRatio : 'inherit',
                height: thumbnailHeight ? thumbnailHeight + 'px' : 'auto',
                width: thumbnailWidth ? thumbnailWidth + 'px' : 'auto',
            }, onClick: handleImageClick }, loadingImage ? (React.createElement(Spinner, null)) : image ? (React.createElement("img", { src: image, alt: fileName, className: cl(style.imageUpload), style: {
                height: thumbnailHeight ? thumbnailHeight + 'px' : 'auto',
                aspectRatio: aspectRatio ? aspectRatio : 'inherit',
            } })) : (React.createElement("label", { className: style.uploadLabel }, uploadIcon ? uploadIcon : React.createElement("span", null, "Upload Image")))),
        React.createElement("input", { type: "file", accept: "image/*", onChange: handleFileChange, style: { display: 'none' }, ref: fileInputRef })));
};
//# sourceMappingURL=ImageUploader.js.map