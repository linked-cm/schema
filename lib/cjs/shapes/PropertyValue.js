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
exports.PropertyValue = void 0;
const Shape_1 = require("@_linked/core/shapes/Shape");
const SHACL_1 = require("@_linked/core/shapes/SHACL");
const schema_js_1 = require("../ontologies/schema.js");
const package_js_1 = require("../package.js");
let PropertyValue = class PropertyValue extends Shape_1.Shape {
    get value() {
        return '';
    }
    get propertyID() {
        return '';
    }
};
exports.PropertyValue = PropertyValue;
PropertyValue.targetClass = schema_js_1.schema.PropertyValue;
__decorate([
    (0, SHACL_1.literalProperty)({
        path: schema_js_1.schema.value,
        maxCount: 1,
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], PropertyValue.prototype, "value", null);
__decorate([
    (0, SHACL_1.literalProperty)({
        path: schema_js_1.schema.propertyID,
        maxCount: 1,
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], PropertyValue.prototype, "propertyID", null);
exports.PropertyValue = PropertyValue = __decorate([
    (0, package_js_1.linkedShape)({
        description: 'A property-value pair representing structured data. Represents key-value pairs with property ID and value relationships. (pair, attribute, data)',
    })
], PropertyValue);
//# sourceMappingURL=PropertyValue.js.map