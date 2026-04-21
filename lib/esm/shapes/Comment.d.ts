import { ShapeSet } from '@_linked/core/collections/ShapeSet';
import { Thing } from './Thing.js';
export declare class Comment extends Thing {
    static targetClass: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    get parentItem(): Comment;
    get childItem(): Comment;
    get childItems(): ShapeSet<Comment>;
}
