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
exports.ListItem = void 0;
const Shape_1 = require("@_linked/core/shapes/Shape");
const SHACL_1 = require("@_linked/core/shapes/SHACL");
const xsd_1 = require("@_linked/xsd/ontologies/xsd");
const schema_js_1 = require("../ontologies/schema.js");
const package_js_1 = require("../package.js");
let ListItem = class ListItem extends Shape_1.Shape {
    get position() {
        return 0;
    }
    get item() {
        return null;
    }
};
exports.ListItem = ListItem;
ListItem.targetClass = schema_js_1.schema.ListItem;
__decorate([
    (0, SHACL_1.literalProperty)({
        path: schema_js_1.schema.position,
        maxCount: 1,
        datatype: xsd_1.xsd.integer,
    }),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], ListItem.prototype, "position", null);
__decorate([
    (0, SHACL_1.objectProperty)({
        path: schema_js_1.schema.item,
        maxCount: 1,
    }),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], ListItem.prototype, "item", null);
exports.ListItem = ListItem = __decorate([
    (0, package_js_1.linkedShape)({
        description: 'An item in a list or data feed. Represents list elements with position and item relationships. (element, entry, member)',
    })
], ListItem);
//# sourceMappingURL=ListItem.js.map