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
exports.ListItem = void 0;
var Shape_1 = require("@_linked/core/shapes/Shape");
var SHACL_1 = require("@_linked/core/shapes/SHACL");
var xsd_1 = require("@_linked/xsd/ontologies/xsd");
var schema_js_1 = require("../ontologies/schema.js");
var package_js_1 = require("../package.js");
var ListItem = /** @class */ (function (_super) {
    __extends(ListItem, _super);
    function ListItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ListItem.prototype, "position", {
        get: function () {
            return 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ListItem.prototype, "item", {
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
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
    ListItem = __decorate([
        (0, package_js_1.linkedShape)({
            description: 'An item in a list or data feed. Represents list elements with position and item relationships. (element, entry, member)',
        })
    ], ListItem);
    return ListItem;
}(Shape_1.Shape));
exports.ListItem = ListItem;
//# sourceMappingURL=ListItem.js.map