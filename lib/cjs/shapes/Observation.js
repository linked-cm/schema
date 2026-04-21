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
exports.Observation = void 0;
const SHACL_1 = require("@_linked/core/shapes/SHACL");
const schema_js_1 = require("../ontologies/schema.js");
const package_js_1 = require("../package.js");
const xsd_1 = require("@_linked/xsd/ontologies/xsd");
const PropertyValue_js_1 = require("./PropertyValue.js");
const Thing_js_1 = require("./Thing.js");
let Observation = class Observation extends Thing_js_1.Thing {
    get observationDate() {
        return null;
    }
    get variableMeasured() {
        return null;
    }
    get observationAbout() {
        return null;
    }
};
exports.Observation = Observation;
Observation.targetClass = schema_js_1.schema.Observation;
__decorate([
    (0, SHACL_1.literalProperty)({
        path: schema_js_1.schema.observationDate,
        datatype: xsd_1.xsd.dateTime,
        maxCount: 1,
    }),
    __metadata("design:type", Date),
    __metadata("design:paramtypes", [])
], Observation.prototype, "observationDate", null);
__decorate([
    (0, SHACL_1.objectProperty)({
        shape: ['@_linked/schema', 'PropertyValue'],
        path: schema_js_1.schema.variableMeasured,
        maxCount: 1,
    }),
    __metadata("design:type", PropertyValue_js_1.PropertyValue),
    __metadata("design:paramtypes", [])
], Observation.prototype, "variableMeasured", null);
__decorate([
    (0, SHACL_1.objectProperty)({
        shape: Thing_js_1.Thing,
        path: schema_js_1.schema.observationAbout,
        maxCount: 1,
    }),
    __metadata("design:type", Thing_js_1.Thing),
    __metadata("design:paramtypes", [])
], Observation.prototype, "observationAbout", null);
exports.Observation = Observation = __decorate([
    (0, package_js_1.linkedShape)({
        description: 'An observation of a specific entity at a particular time. Represents measurements with observation dates, variable tracking, and entity relationships. (measurement, data point, record)',
    })
], Observation);
//# sourceMappingURL=Observation.js.map