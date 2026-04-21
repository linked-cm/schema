import { Shape } from '@_linked/core/shapes/Shape';
import { Person } from './Person.js';
export declare class BefriendAction extends Shape {
    static targetClass: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    get actionStatus(): number;
    get agent(): Person;
    get object(): Person;
}
