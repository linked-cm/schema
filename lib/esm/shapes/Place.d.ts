import { Thing } from './Thing.js';
export declare class Place extends Thing {
    static targetClass: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    get latitude(): string;
    get longitude(): string;
    get containedInPlace(): Place;
}
