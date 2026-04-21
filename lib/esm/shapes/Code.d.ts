import { CreativeWork } from './CreativeWork.js';
export declare class Code extends CreativeWork {
    static targetClass: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    static fromText(text: string): import("@_linked/core/queries/CreateBuilder.js").CreateBuilder<Code, {
        text: string;
    }>;
}
