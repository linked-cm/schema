"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdministrativeArea = void 0;
const package_js_1 = require("../package.js");
const Place_js_1 = require("./Place.js");
const schema_js_1 = require("../ontologies/schema.js");
let AdministrativeArea = class AdministrativeArea extends Place_js_1.Place {
};
exports.AdministrativeArea = AdministrativeArea;
AdministrativeArea.targetClass = schema_js_1.schema.AdministrativeArea;
exports.AdministrativeArea = AdministrativeArea = __decorate([
    (0, package_js_1.linkedShape)({
        description: 'A geographic or political area, e.g., country, region, city. Often linked to addresses, organizations, or events. (location, region, jurisdiction)',
    })
], AdministrativeArea);
//# sourceMappingURL=AdministrativeArea.js.map