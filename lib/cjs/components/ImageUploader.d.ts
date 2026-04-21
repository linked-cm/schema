import React from 'react';
interface ImageUploaderProps {
    thumbnailHeight?: number;
    thumbnailWidth?: number;
    aspectRatio?: number;
    className?: string;
    uploadIcon?: React.ReactNode;
    confirmText?: string;
    property?: string;
    onUploaded?: (dataUrl: string, format: string) => void;
    potentialValue?: any;
}
export declare const ImageUploader: ({ thumbnailHeight, thumbnailWidth, aspectRatio, className, uploadIcon, confirmText, property, onUploaded, potentialValue, }: ImageUploaderProps) => React.JSX.Element;
export {};
