import { Intangible } from './Intangible.js';
import { Thing } from './Thing.js';
export declare class DataFeedItem extends Intangible {
    static targetClass: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    get dateCreated(): Date;
    get dateDeleted(): Date;
    get dateModified(): Date;
    get item(): Thing;
}
