var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { xsd } from '@_linked/xsd/ontologies/xsd';
import { ShapeSet } from '@_linked/core/collections/ShapeSet';
import { literalProperty, objectProperty } from '@_linked/core/shapes/SHACL';
import { schema } from '../ontologies/schema.js';
import { linkedShape } from '../package.js';
import { ImageObject } from './ImageObject.js';
import { Person } from './Person.js';
import { Place } from './Place.js';
import { Thing } from './Thing.js';
let Event = class Event extends Thing {
    get startDate() {
        return null;
    }
    get endDate() {
        return null;
    }
    get attendees() {
        return new ShapeSet();
    }
    get location() {
        return null;
    }
    get image() {
        return null;
    }
    get superEvent() {
        return null;
    }
};
Event.targetClass = schema.Event;
__decorate([
    literalProperty({
        path: schema.startDate,
        maxCount: 1,
        datatype: xsd.dateTime,
    }),
    __metadata("design:type", Date),
    __metadata("design:paramtypes", [])
], Event.prototype, "startDate", null);
__decorate([
    literalProperty({
        path: schema.endDate,
        maxCount: 1,
        datatype: xsd.dateTime,
    }),
    __metadata("design:type", Date),
    __metadata("design:paramtypes", [])
], Event.prototype, "endDate", null);
__decorate([
    objectProperty({
        path: schema.attendee,
        shape: Person,
    }),
    __metadata("design:type", ShapeSet),
    __metadata("design:paramtypes", [])
], Event.prototype, "attendees", null);
__decorate([
    objectProperty({
        path: schema.location,
        shape: Place,
        maxCount: 1,
    }),
    __metadata("design:type", Place),
    __metadata("design:paramtypes", [])
], Event.prototype, "location", null);
__decorate([
    objectProperty({
        path: schema.image,
        shape: ImageObject,
        maxCount: 1,
    }),
    __metadata("design:type", ImageObject),
    __metadata("design:paramtypes", [])
], Event.prototype, "image", null);
Event = __decorate([
    linkedShape({
        description: 'An occurrence happening at a certain time and location. Represents events with start/end dates, attendees, and location. (occurrence, happening, gathering)',
    })
], Event);
export { Event };
//# sourceMappingURL=Event.js.map