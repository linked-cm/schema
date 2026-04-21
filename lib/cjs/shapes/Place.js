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
exports.Place = void 0;
const SHACL_1 = require("@_linked/core/shapes/SHACL");
const schema_js_1 = require("../ontologies/schema.js");
const package_js_1 = require("../package.js");
const Thing_js_1 = require("./Thing.js");
let Place = class Place extends Thing_js_1.Thing {
    get latitude() {
        return '';
    }
    get longitude() {
        return '';
    }
    get containedInPlace() {
        return null;
    }
};
exports.Place = Place;
Place.targetClass = schema_js_1.schema.Place;
__decorate([
    (0, SHACL_1.literalProperty)({
        path: schema_js_1.schema.latitude,
        maxCount: 1,
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], Place.prototype, "latitude", null);
__decorate([
    (0, SHACL_1.literalProperty)({
        path: schema_js_1.schema.longitude,
        maxCount: 1,
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], Place.prototype, "longitude", null);
__decorate([
    (0, SHACL_1.objectProperty)({
        path: schema_js_1.schema.containedInPlace,
        shape: Place,
        maxCount: 1,
    }),
    __metadata("design:type", Place),
    __metadata("design:paramtypes", [])
], Place.prototype, "containedInPlace", null);
exports.Place = Place = __decorate([
    (0, package_js_1.linkedShape)({
        description: 'Entities that have a somewhat fixed, physical extension. Represents locations with coordinates, addresses, and containment relationships. (location, venue, site)',
    })
], Place);
//# sourceMappingURL=Place.js.map