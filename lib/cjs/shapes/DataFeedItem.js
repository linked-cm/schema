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
exports.DataFeedItem = void 0;
const SHACL_1 = require("@_linked/core/shapes/SHACL");
const schema_js_1 = require("../ontologies/schema.js");
const package_js_1 = require("../package.js");
const xsd_1 = require("@_linked/xsd/ontologies/xsd");
const Intangible_js_1 = require("./Intangible.js");
const Thing_js_1 = require("./Thing.js");
let DataFeedItem = class DataFeedItem extends Intangible_js_1.Intangible {
    get dateCreated() {
        return null;
    }
    get dateDeleted() {
        return null;
    }
    get dateModified() {
        return null;
    }
    get item() {
        return null;
    }
};
exports.DataFeedItem = DataFeedItem;
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
exports.DataFeedItem = DataFeedItem = __decorate([
    (0, package_js_1.linkedShape)({
        description: 'A single item within a data feed. Represents feed entries with creation dates, modification tracking, and item relationships. (entry, feed item, record)',
    })
], DataFeedItem);
//# sourceMappingURL=DataFeedItem.js.map