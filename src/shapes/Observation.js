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
exports.Observation = void 0;
var SHACL_1 = require("@_linked/core/shapes/SHACL");
var schema_js_1 = require("../ontologies/schema.js");
var package_js_1 = require("../package.js");
var xsd_1 = require("@_linked/xsd/ontologies/xsd");
var PropertyValue_js_1 = require("./PropertyValue.js");
var Thing_js_1 = require("./Thing.js");
var Observation = /** @class */ (function (_super) {
    __extends(Observation, _super);
    function Observation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Observation.prototype, "observationDate", {
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Observation.prototype, "variableMeasured", {
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Observation.prototype, "observationAbout", {
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
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
    Observation = __decorate([
        (0, package_js_1.linkedShape)({
            description: 'An observation of a specific entity at a particular time. Represents measurements with observation dates, variable tracking, and entity relationships. (measurement, data point, record)',
        })
    ], Observation);
    return Observation;
}(Thing_js_1.Thing));
exports.Observation = Observation;
//# sourceMappingURL=Observation.js.map