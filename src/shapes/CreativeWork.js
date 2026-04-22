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
exports.CreativeWork = void 0;
var SHACL_1 = require("@_linked/core/shapes/SHACL");
var schema_js_1 = require("../ontologies/schema.js");
var package_js_1 = require("../package.js");
var xsd_1 = require("@_linked/xsd/ontologies/xsd");
var Thing_js_1 = require("./Thing.js");
var CreativeWork = /** @class */ (function (_super) {
    __extends(CreativeWork, _super);
    function CreativeWork() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CreativeWork.prototype, "creator", {
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreativeWork.prototype, "creditText", {
        get: function () {
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreativeWork.prototype, "usageInfo", {
        //@TODO: remove this once weve got a better solution for circular dependencies (see Thing get/set Image)
        get: function () {
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreativeWork.prototype, "copyrightNotice", {
        get: function () {
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreativeWork.prototype, "text", {
        get: function () {
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreativeWork.prototype, "dateCreated", {
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreativeWork.prototype, "dateModified", {
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CreativeWork.prototype, "headline", {
        get: function () {
            return '';
        },
        enumerable: false,
        configurable: true
    });
    CreativeWork.targetClass = schema_js_1.schema.CreativeWork;
    __decorate([
        (0, SHACL_1.objectProperty)({
            path: schema_js_1.schema.creator,
            maxCount: 1,
            shape: [package_js_1.packageName, 'Person'],
        }),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], CreativeWork.prototype, "creator", null);
    __decorate([
        (0, SHACL_1.literalProperty)({
            path: schema_js_1.schema.creditText,
            maxCount: 1,
        }),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], CreativeWork.prototype, "creditText", null);
    __decorate([
        (0, SHACL_1.literalProperty)({
            path: schema_js_1.schema.usageInfo,
            maxCount: 1,
        }),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], CreativeWork.prototype, "usageInfo", null);
    __decorate([
        (0, SHACL_1.literalProperty)({
            path: schema_js_1.schema.copyrightNotice,
            maxCount: 1,
        }),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], CreativeWork.prototype, "copyrightNotice", null);
    __decorate([
        (0, SHACL_1.literalProperty)({
            path: schema_js_1.schema.text,
            maxCount: 1,
        }),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], CreativeWork.prototype, "text", null);
    __decorate([
        (0, SHACL_1.literalProperty)({
            path: schema_js_1.schema.dateCreated,
            maxCount: 1,
            datatype: xsd_1.xsd.dateTime,
        }),
        __metadata("design:type", Date),
        __metadata("design:paramtypes", [])
    ], CreativeWork.prototype, "dateCreated", null);
    __decorate([
        (0, SHACL_1.literalProperty)({
            path: schema_js_1.schema.dateModified,
            maxCount: 1,
            datatype: xsd_1.xsd.dateTime,
        }),
        __metadata("design:type", Date),
        __metadata("design:paramtypes", [])
    ], CreativeWork.prototype, "dateModified", null);
    __decorate([
        (0, SHACL_1.literalProperty)({
            path: schema_js_1.schema.headline,
            maxCount: 1,
        }),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], CreativeWork.prototype, "headline", null);
    CreativeWork = __decorate([
        (0, package_js_1.linkedShape)({
            description: 'A work or composition that is the result of creative effort. Represents content with creator, dates, and copyright info. (content, work, creation)',
        })
    ], CreativeWork);
    return CreativeWork;
}(Thing_js_1.Thing));
exports.CreativeWork = CreativeWork;
//# sourceMappingURL=CreativeWork.js.map