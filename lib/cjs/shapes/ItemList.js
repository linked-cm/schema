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
exports.ItemList = void 0;
const ShapeSet_1 = require("@_linked/core/collections/ShapeSet");
const Shape_1 = require("@_linked/core/shapes/Shape");
const SHACL_1 = require("@_linked/core/shapes/SHACL");
const schema_js_1 = require("../ontologies/schema.js");
const package_js_1 = require("../package.js");
let ItemList = class ItemList extends Shape_1.Shape {
    get itemListElements() {
        return new ShapeSet_1.ShapeSet();
    }
    get items() {
        return new ShapeSet_1.ShapeSet();
    }
};
exports.ItemList = ItemList;
ItemList.targetClass = schema_js_1.schema.ItemList;
__decorate([
    (0, SHACL_1.objectProperty)({
        path: schema_js_1.schema.itemListElement,
        shape: ['@_linked/schema', 'ListItem'],
    }),
    __metadata("design:type", ShapeSet_1.ShapeSet),
    __metadata("design:paramtypes", [])
], ItemList.prototype, "itemListElements", null);
__decorate([
    (0, SHACL_1.objectProperty)({
        path: [schema_js_1.schema.itemListElement, schema_js_1.schema.item],
        // TODO: sortBy: [schema.itemListElement, schema.position]
    }),
    __metadata("design:type", ShapeSet_1.ShapeSet),
    __metadata("design:paramtypes", [])
], ItemList.prototype, "items", null);
exports.ItemList = ItemList = __decorate([
    (0, package_js_1.linkedShape)({
        description: 'A list of items of any sort. Represents ordered collections with item list elements and position relationships. (list, collection, sequence)',
    })
], ItemList);
//# sourceMappingURL=ItemList.js.map