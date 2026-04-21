"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.House = void 0;
const schema_js_1 = require("../ontologies/schema.js");
const package_js_1 = require("../package.js");
const Accommodation_js_1 = require("./Accommodation.js");
let House = class House extends Accommodation_js_1.Accommodation {
};
exports.House = House;
House.targetClass = schema_js_1.schema.House;
exports.House = House = __decorate([
    (0, package_js_1.linkedShape)({
        description: 'A house is a building or structure that serves as living quarters. Represents residential buildings with accommodation features and ownership relationships. (home, dwelling, residence)',
    })
], House);
//# sourceMappingURL=House.js.map