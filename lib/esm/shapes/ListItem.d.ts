import { Shape } from '@_linked/core/shapes/Shape';
export declare class ListItem<S extends Shape = Shape> extends Shape {
    static targetClass: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    get position(): number;
    get item(): S;
}
