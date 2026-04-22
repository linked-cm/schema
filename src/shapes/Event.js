"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var xsd_1 = require("@_linked/xsd/ontologies/xsd");
var ShapeSet_1 = require("@_linked/core/collections/ShapeSet");
var SHACL_1 = require("@_linked/core/shapes/SHACL");
var schema_js_1 = require("../ontologies/schema.js");
var package_js_1 = require("../package.js");
var ImageObject_js_1 = require("./ImageObject.js");
var Person_js_1 = require("./Person.js");
var Place_js_1 = require("./Place.js");
var Thing_js_1 = require("./Thing.js");
var Event = /** @class */ (function (_super) {
    __extends(Event, _super);
    function Event() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Event.prototype, "startDate", {
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "endDate", {
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "attendees", {
        get: function () {
            return new ShapeSet_1.ShapeSet();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "location", {
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "image", {
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Event.prototype, "superEvent", {
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
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
    Event = __decorate([
        (0, package_js_1.linkedShape)({
            description: 'An occurrence happening at a certain time and location. Represents events with start/end dates, attendees, and location. (occurrence, happening, gathering)',
        })
    ], Event);
    return Event;
}(Thing_js_1.Thing));
exports.Event = Event;
//# sourceMappingURL=Event.js.map