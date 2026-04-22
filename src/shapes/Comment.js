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
exports.Comment = void 0;
var ShapeSet_1 = require("@_linked/core/collections/ShapeSet");
var SHACL_1 = require("@_linked/core/shapes/SHACL");
var schema_js_1 = require("../ontologies/schema.js");
var package_js_1 = require("../package.js");
var Thing_js_1 = require("./Thing.js");
var Comment = /** @class */ (function (_super) {
    __extends(Comment, _super);
    function Comment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Comment.prototype, "parentItem", {
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Comment.prototype, "childItem", {
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Comment.prototype, "childItems", {
        get: function () {
            return new ShapeSet_1.ShapeSet();
        },
        enumerable: false,
        configurable: true
    });
    Comment.targetClass = schema_js_1.schema.Comment;
    __decorate([
        (0, SHACL_1.objectProperty)({
            path: schema_js_1.schema.parentItem,
            shape: ['@_linked/schema', 'Comment'],
            maxCount: 1,
        }),
        __metadata("design:type", Comment),
        __metadata("design:paramtypes", [])
    ], Comment.prototype, "parentItem", null);
    __decorate([
        (0, SHACL_1.objectProperty)({
            path: schema_js_1.schema.childItem,
            shape: ['@_linked/schema', 'Comment'],
            maxCount: 1,
        }),
        __metadata("design:type", Comment),
        __metadata("design:paramtypes", [])
    ], Comment.prototype, "childItem", null);
    __decorate([
        (0, SHACL_1.objectProperty)({
            path: schema_js_1.schema.childItem,
            shape: ['@_linked/schema', 'Comment'],
        }),
        __metadata("design:type", ShapeSet_1.ShapeSet),
        __metadata("design:paramtypes", [])
    ], Comment.prototype, "childItems", null);
    Comment = __decorate([
        (0, package_js_1.linkedShape)({
            description: 'A comment on an item. Represents user feedback with parent-child relationships and threaded discussions. (feedback, remark, note)',
        })
    ], Comment);
    return Comment;
}(Thing_js_1.Thing));
exports.Comment = Comment;
//# sourceMappingURL=Comment.js.map