import { Thing } from './Thing.js';
export declare class CreativeWork extends Thing {
    static targetClass: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    get creator(): any;
    get creditText(): string;
    get usageInfo(): string;
    get copyrightNotice(): string;
    get text(): string;
    get dateCreated(): Date;
    get dateModified(): Date;
    get headline(): string;
}
