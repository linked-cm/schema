type UploadMediaData = {
    contentUrl: string;
    name?: string | undefined;
    copyrightNotice?: string | undefined;
    creditText?: string | undefined;
    usageInfo?: string | undefined;
    identifier?: string | undefined;
    dateCreated?: Date | undefined;
};
export declare function uploadMediaFromFormFile<T>(request: any, createMedia: (data: UploadMediaData) => Promise<T>): Promise<T>;
export {};
