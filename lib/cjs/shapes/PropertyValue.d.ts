import { Shape } from '@_linked/core/shapes/Shape';
export declare class PropertyValue extends Shape {
    static targetClass: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    get value(): string;
    get propertyID(): string;
}
