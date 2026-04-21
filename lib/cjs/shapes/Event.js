"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
const xsd_1 = require("@_linked/xsd/ontologies/xsd");
const ShapeSet_1 = require("@_linked/core/collections/ShapeSet");
const SHACL_1 = require("@_linked/core/shapes/SHACL");
const schema_js_1 = require("../ontologies/schema.js");
const package_js_1 = require("../package.js");
const ImageObject_js_1 = require("./ImageObject.js");
const Person_js_1 = require("./Person.js");
const Place_js_1 = require("./Place.js");
const Thing_js_1 = require("./Thing.js");
let Event = class Event extends Thing_js_1.Thing {
    get startDate() {
        return null;
    }
    get endDate() {
        return null;
    }
    get attendees() {
        return new ShapeSet_1.ShapeSet();
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
exports.Event = Event;
Event.targetClass = schema_js_1.schema.Event;
__decorate([
    (0, SHACL_1.literalProperty)({
        path: schema_js_1.schema.startDate,
        maxCount: 1,
        datatype: xsd_1.xsd.dateTime,
    }),
    __metadata("design:type", Date),
    __metadata("design:paramtypes", [])
], Event.prototype, "startDate", null);
__decorate([
    (0, SHACL_1.literalProperty)({
        path: schema_js_1.schema.endDate,
        maxCount: 1,
        datatype: xsd_1.xsd.dateTime,
    }),
    __metadata("design:type", Date),
    __metadata("design:paramtypes", [])
], Event.prototype, "endDate", null);
__decorate([
    (0, SHACL_1.objectProperty)({
        path: schema_js_1.schema.attendee,
        shape: Person_js_1.Person,
    }),
    __metadata("design:type", ShapeSet_1.ShapeSet),
    __metadata("design:paramtypes", [])
], Event.prototype, "attendees", null);
__decorate([
    (0, SHACL_1.objectProperty)({
        path: schema_js_1.schema.location,
        shape: Place_js_1.Place,
        maxCount: 1,
    }),
    __metadata("design:type", Place_js_1.Place),
    __metadata("design:paramtypes", [])
], Event.prototype, "location", null);
__decorate([
    (0, SHACL_1.objectProperty)({
        path: schema_js_1.schema.image,
        shape: ImageObject_js_1.ImageObject,
        maxCount: 1,
    }),
    __metadata("design:type", ImageObject_js_1.ImageObject),
    __metadata("design:paramtypes", [])
], Event.prototype, "image", null);
exports.Event = Event = __decorate([
    (0, package_js_1.linkedShape)({
        description: 'An occurrence happening at a certain time and location. Represents events with start/end dates, attendees, and location. (occurrence, happening, gathering)',
    })
], Event);
//# sourceMappingURL=Event.js.map