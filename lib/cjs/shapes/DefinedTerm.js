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
exports.DefinedTermSet = exports.DefinedTerm = void 0;
const ShapeSet_1 = require("@_linked/core/collections/ShapeSet");
const SHACL_1 = require("@_linked/core/shapes/SHACL");
const schema_js_1 = require("../ontologies/schema.js");
const package_js_1 = require("../package.js");
const CreativeWork_js_1 = require("./CreativeWork.js");
const Intangible_js_1 = require("./Intangible.js");
let DefinedTerm = class DefinedTerm extends Intangible_js_1.Intangible {
    get inDefinedTermSet() {
        return null;
    }
};
exports.DefinedTerm = DefinedTerm;
DefinedTerm.targetClass = schema_js_1.schema.DefinedTerm;
__decorate([
    (0, SHACL_1.objectProperty)({
        path: schema_js_1.schema.inDefinedTermSet,
        shape: ['@_linked/schema', 'DefinedTermSet'],
        maxCount: 1,
    }),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], DefinedTerm.prototype, "inDefinedTermSet", null);
exports.DefinedTerm = DefinedTerm = __decorate([
    (0, package_js_1.linkedShape)({
        description: 'A word, name, acronym, phrase, etc. with a formal definition. Represents terms with definitions and relationships to term sets. (term, definition, concept)',
    })
], DefinedTerm);
let DefinedTermSet = class DefinedTermSet extends CreativeWork_js_1.CreativeWork {
    get definedTerms() {
        return new ShapeSet_1.ShapeSet();
    }
};
exports.DefinedTermSet = DefinedTermSet;
DefinedTermSet.targetClass = schema_js_1.schema.DefinedTermSet;
__decorate([
    (0, SHACL_1.objectProperty)({
        path: schema_js_1.schema.hasDefinedTerm,
        shape: DefinedTerm,
    }),
    __metadata("design:type", ShapeSet_1.ShapeSet),
    __metadata("design:paramtypes", [])
], DefinedTermSet.prototype, "definedTerms", null);
exports.DefinedTermSet = DefinedTermSet = __decorate([
    (0, package_js_1.linkedShape)({
        description: 'A set of defined terms, such as a set of categories or a classification scheme. Represents collections of terms with hierarchical relationships. (vocabulary, taxonomy, scheme)',
    })
], DefinedTermSet);
//# sourceMappingURL=DefinedTerm.js.map