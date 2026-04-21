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
exports.PostalAddress = void 0;
const SHACL_1 = require("@_linked/core/shapes/SHACL");
const package_js_1 = require("../package.js");
const Thing_js_1 = require("./Thing.js");
const schema_js_1 = require("../ontologies/schema.js");
const AdministrativeArea_js_1 = require("./AdministrativeArea.js");
let PostalAddress = class PostalAddress extends Thing_js_1.Thing {
    get postalCode() {
        return '';
    }
    get areaServed() {
        return null;
    }
    get addressCountry() {
        return '';
    }
    get addressRegion() {
        return '';
    }
    get addressLocality() {
        return '';
    }
    get streetAddress() {
        return '';
    }
};
exports.PostalAddress = PostalAddress;
PostalAddress.targetClass = schema_js_1.schema.Thing;
__decorate([
    (0, SHACL_1.literalProperty)({
        path: schema_js_1.schema.postalCode,
        maxCount: 1,
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], PostalAddress.prototype, "postalCode", null);
__decorate([
    (0, SHACL_1.objectProperty)({
        path: schema_js_1.schema.areaServed,
        shape: AdministrativeArea_js_1.AdministrativeArea,
        maxCount: 1,
    }),
    __metadata("design:type", AdministrativeArea_js_1.AdministrativeArea),
    __metadata("design:paramtypes", [])
], PostalAddress.prototype, "areaServed", null);
__decorate([
    (0, SHACL_1.literalProperty)({
        path: schema_js_1.schema.addressCountry,
        maxCount: 1,
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], PostalAddress.prototype, "addressCountry", null);
__decorate([
    (0, SHACL_1.literalProperty)({
        path: schema_js_1.schema.addressRegion,
        maxCount: 1,
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], PostalAddress.prototype, "addressRegion", null);
__decorate([
    (0, SHACL_1.literalProperty)({
        path: schema_js_1.schema.addressLocality,
        maxCount: 1,
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], PostalAddress.prototype, "addressLocality", null);
__decorate([
    (0, SHACL_1.literalProperty)({
        path: schema_js_1.schema.streetAddress,
        maxCount: 1,
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], PostalAddress.prototype, "streetAddress", null);
exports.PostalAddress = PostalAddress = __decorate([
    (0, package_js_1.linkedShape)({
        description: 'A mailing address; includes street, city, postal code, and country. Used for contact info of people, places, or organizations. (address, contact, location)',
    })
], PostalAddress);
//# sourceMappingURL=PostalAddress.js.map