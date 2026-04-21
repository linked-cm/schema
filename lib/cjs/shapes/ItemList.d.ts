import { ShapeSet } from '@_linked/core/collections/ShapeSet';
import { Shape } from '@_linked/core/shapes/Shape';
import { ListItem } from './ListItem.js';
export declare class ItemList<S extends Shape = Shape> extends Shape {
    static targetClass: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    get itemListElements(): ShapeSet<ListItem<S>>;
    get items(): ShapeSet<S>;
}
