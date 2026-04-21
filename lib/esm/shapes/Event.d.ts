import { ShapeSet } from '@_linked/core/collections/ShapeSet';
import { ImageObject } from './ImageObject.js';
import { Person } from './Person.js';
import { Place } from './Place.js';
import { Thing } from './Thing.js';
export declare class Event extends Thing {
    static targetClass: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    get startDate(): Date;
    get endDate(): Date;
    get attendees(): ShapeSet<Person>;
    get location(): Place;
    get image(): ImageObject;
    get superEvent(): Event;
}
