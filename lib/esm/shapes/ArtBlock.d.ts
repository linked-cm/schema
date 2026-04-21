import { Shape } from '@_linked/core/shapes/Shape';
export declare class ArtBlock extends Shape {
    static targetClass: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    get url(): string;
    get author(): string;
    get createdAt(): string;
}
