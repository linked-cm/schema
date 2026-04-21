import { PropertyValue } from './PropertyValue.js';
import { Thing } from './Thing.js';
export declare class Observation extends Thing {
    static targetClass: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    get observationDate(): Date;
    get variableMeasured(): PropertyValue;
    get observationAbout(): Thing;
}
