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
exports.CreativeWork = void 0;
const SHACL_1 = require("@_linked/core/shapes/SHACL");
const schema_js_1 = require("../ontologies/schema.js");
const package_js_1 = require("../package.js");
const xsd_1 = require("@_linked/xsd/ontologies/xsd");
const Thing_js_1 = require("./Thing.js");
let CreativeWork = class CreativeWork extends Thing_js_1.Thing {
    get creator() {
        return null;
    }
    get creditText() {
        return '';
    }
    //@TODO: remove this once weve got a better solution for circular dependencies (see Thing get/set Image)
    get usageInfo() {
        return '';
    }
    get copyrightNotice() {
        return '';
    }
    get text() {
        return '';
    }
    get dateCreated() {
        return null;
    }
    get dateModified() {
        return null;
    }
    get headline() {
        return '';
    }
};
exports.CreativeWork = CreativeWork;
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
exports.CreativeWork = CreativeWork = __decorate([
    (0, package_js_1.linkedShape)({
        description: 'A work or composition that is the result of creative effort. Represents content with creator, dates, and copyright info. (content, work, creation)',
    })
], CreativeWork);
//# sourceMappingURL=CreativeWork.js.map