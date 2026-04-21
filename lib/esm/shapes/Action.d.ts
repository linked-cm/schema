import { Person } from './Person.js';
import { Thing } from './Thing.js';
export declare class Action extends Thing {
    static targetClass: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    static readonly STATUS_ACTIVE: number;
    static readonly STATUS_COMPLETED: number;
    static readonly STATUS_POTENTIAL: number;
    static readonly STATUS_FAILED: number;
    /**
     * The status of an Action (enums).
     */
    get actionStatus(): number;
    get agent(): Person;
    get participant(): Person;
    get objects(): any;
    get location(): any;
    get startTime(): Date;
    get endTime(): Date;
}
