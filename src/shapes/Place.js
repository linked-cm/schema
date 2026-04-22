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
exports.Place = void 0;
var SHACL_1 = require("@_linked/core/shapes/SHACL");
var schema_js_1 = require("../ontologies/schema.js");
var package_js_1 = require("../package.js");
var Thing_js_1 = require("./Thing.js");
var Place = /** @class */ (function (_super) {
    __extends(Place, _super);
    function Place() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Place.prototype, "latitude", {
        get: function () {
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Place.prototype, "longitude", {
        get: function () {
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Place.prototype, "containedInPlace", {
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
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
    Place = __decorate([
        (0, package_js_1.linkedShape)({
            description: 'Entities that have a somewhat fixed, physical extension. Represents locations with coordinates, addresses, and containment relationships. (location, venue, site)',
        })
    ], Place);
    return Place;
}(Thing_js_1.Thing));
exports.Place = Place;
//# sourceMappingURL=Place.js.map