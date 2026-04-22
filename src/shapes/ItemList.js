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
exports.ItemList = void 0;
var ShapeSet_1 = require("@_linked/core/collections/ShapeSet");
var Shape_1 = require("@_linked/core/shapes/Shape");
var SHACL_1 = require("@_linked/core/shapes/SHACL");
var schema_js_1 = require("../ontologies/schema.js");
var package_js_1 = require("../package.js");
var ItemList = /** @class */ (function (_super) {
    __extends(ItemList, _super);
    function ItemList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ItemList.prototype, "itemListElements", {
        get: function () {
            return new ShapeSet_1.ShapeSet();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ItemList.prototype, "items", {
        get: function () {
            return new ShapeSet_1.ShapeSet();
        },
        enumerable: false,
        configurable: true
    });
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
    ItemList = __decorate([
        (0, package_js_1.linkedShape)({
            description: 'A list of items of any sort. Represents ordered collections with item list elements and position relationships. (list, collection, sequence)',
        })
    ], ItemList);
    return ItemList;
}(Shape_1.Shape));
exports.ItemList = ItemList;
//# sourceMappingURL=ItemList.js.map