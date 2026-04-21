import { ShapeSet } from '@_linked/core/collections/ShapeSet';
import { Shape } from '@_linked/core/shapes/Shape';
import { Event } from './Event.js';
import { Person } from './Person.js';
export declare class JoinAction extends Shape {
    static targetClass: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    get event(): Event;
    get agents(): ShapeSet<Person>;
}
