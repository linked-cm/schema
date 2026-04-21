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
exports.Accommodation = void 0;
const SHACL_1 = require("@_linked/core/shapes/SHACL");
const schema_js_1 = require("../ontologies/schema.js");
const package_js_1 = require("../package.js");
const Place_js_1 = require("./Place.js");
let Accommodation = class Accommodation extends Place_js_1.Place {
    get accommodationCategory() {
        return '';
    }
};
exports.Accommodation = Accommodation;
Accommodation.targetClass = schema_js_1.schema.Accommodation;
__decorate([
    (0, SHACL_1.literalProperty)({
        path: schema_js_1.schema.accommodationCategory,
        maxCount: 1,
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], Accommodation.prototype, "accommodationCategory", null);
exports.Accommodation = Accommodation = __decorate([
    (0, package_js_1.linkedShape)({
        description: 'A place to sleep or stay, such as a hotel, motel, or hostel. Represents lodging with accommodation categories and booking relationships. (lodging, hotel, stay)',
    })
], Accommodation);
//# sourceMappingURL=Accommodation.js.map