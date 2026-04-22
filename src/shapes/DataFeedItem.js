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
exports.DataFeedItem = void 0;
var SHACL_1 = require("@_linked/core/shapes/SHACL");
var schema_js_1 = require("../ontologies/schema.js");
var package_js_1 = require("../package.js");
var xsd_1 = require("@_linked/xsd/ontologies/xsd");
var Intangible_js_1 = require("./Intangible.js");
var Thing_js_1 = require("./Thing.js");
var DataFeedItem = /** @class */ (function (_super) {
    __extends(DataFeedItem, _super);
    function DataFeedItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DataFeedItem.prototype, "dateCreated", {
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataFeedItem.prototype, "dateDeleted", {
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataFeedItem.prototype, "dateModified", {
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DataFeedItem.prototype, "item", {
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    DataFeedItem.targetClass = schema_js_1.schema.CreativeWork;
    __decorate([
        (0, SHACL_1.literalProperty)({
            path: schema_js_1.schema.dateCreated,
            maxCount: 1,
            datatype: xsd_1.xsd.dateTime,
        }),
        __metadata("design:type", Date),
        __metadata("design:paramtypes", [])
    ], DataFeedItem.prototype, "dateCreated", null);
    __decorate([
        (0, SHACL_1.literalProperty)({
            path: schema_js_1.schema.dateDeleted,
            maxCount: 1,
            datatype: xsd_1.xsd.dateTime,
        }),
        __metadata("design:type", Date),
        __metadata("design:paramtypes", [])
    ], DataFeedItem.prototype, "dateDeleted", null);
    __decorate([
        (0, SHACL_1.literalProperty)({
            path: schema_js_1.schema.dateModified,
            maxCount: 1,
            datatype: xsd_1.xsd.dateTime,
        }),
        __metadata("design:type", Date),
        __metadata("design:paramtypes", [])
    ], DataFeedItem.prototype, "dateModified", null);
    __decorate([
        (0, SHACL_1.objectProperty)({
            path: schema_js_1.schema.item,
            shape: Thing_js_1.Thing,
        }),
        __metadata("design:type", Thing_js_1.Thing),
        __metadata("design:paramtypes", [])
    ], DataFeedItem.prototype, "item", null);
    DataFeedItem = __decorate([
        (0, package_js_1.linkedShape)({
            description: 'A single item within a data feed. Represents feed entries with creation dates, modification tracking, and item relationships. (entry, feed item, record)',
        })
    ], DataFeedItem);
    return DataFeedItem;
}(Intangible_js_1.Intangible));
exports.DataFeedItem = DataFeedItem;
//# sourceMappingURL=DataFeedItem.js.map