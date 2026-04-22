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
exports.PostalAddress = void 0;
var SHACL_1 = require("@_linked/core/shapes/SHACL");
var package_js_1 = require("../package.js");
var Thing_js_1 = require("./Thing.js");
var schema_js_1 = require("../ontologies/schema.js");
var AdministrativeArea_js_1 = require("./AdministrativeArea.js");
var PostalAddress = /** @class */ (function (_super) {
    __extends(PostalAddress, _super);
    function PostalAddress() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(PostalAddress.prototype, "postalCode", {
        get: function () {
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PostalAddress.prototype, "areaServed", {
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PostalAddress.prototype, "addressCountry", {
        get: function () {
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PostalAddress.prototype, "addressRegion", {
        get: function () {
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PostalAddress.prototype, "addressLocality", {
        get: function () {
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PostalAddress.prototype, "streetAddress", {
        get: function () {
            return '';
        },
        enumerable: false,
        configurable: true
    });
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
    PostalAddress = __decorate([
        (0, package_js_1.linkedShape)({
            description: 'A mailing address; includes street, city, postal code, and country. Used for contact info of people, places, or organizations. (address, contact, location)',
        })
    ], PostalAddress);
    return PostalAddress;
}(Thing_js_1.Thing));
exports.PostalAddress = PostalAddress;
//# sourceMappingURL=PostalAddress.js.map