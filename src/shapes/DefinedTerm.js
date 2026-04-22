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
exports.DefinedTermSet = exports.DefinedTerm = void 0;
var ShapeSet_1 = require("@_linked/core/collections/ShapeSet");
var SHACL_1 = require("@_linked/core/shapes/SHACL");
var schema_js_1 = require("../ontologies/schema.js");
var package_js_1 = require("../package.js");
var CreativeWork_js_1 = require("./CreativeWork.js");
var Intangible_js_1 = require("./Intangible.js");
var DefinedTerm = /** @class */ (function (_super) {
    __extends(DefinedTerm, _super);
    function DefinedTerm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DefinedTerm.prototype, "inDefinedTermSet", {
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
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
    DefinedTerm = __decorate([
        (0, package_js_1.linkedShape)({
            description: 'A word, name, acronym, phrase, etc. with a formal definition. Represents terms with definitions and relationships to term sets. (term, definition, concept)',
        })
    ], DefinedTerm);
    return DefinedTerm;
}(Intangible_js_1.Intangible));
exports.DefinedTerm = DefinedTerm;
var DefinedTermSet = /** @class */ (function (_super) {
    __extends(DefinedTermSet, _super);
    function DefinedTermSet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DefinedTermSet.prototype, "definedTerms", {
        get: function () {
            return new ShapeSet_1.ShapeSet();
        },
        enumerable: false,
        configurable: true
    });
    DefinedTermSet.targetClass = schema_js_1.schema.DefinedTermSet;
    __decorate([
        (0, SHACL_1.objectProperty)({
            path: schema_js_1.schema.hasDefinedTerm,
            shape: DefinedTerm,
        }),
        __metadata("design:type", ShapeSet_1.ShapeSet),
        __metadata("design:paramtypes", [])
    ], DefinedTermSet.prototype, "definedTerms", null);
    DefinedTermSet = __decorate([
        (0, package_js_1.linkedShape)({
            description: 'A set of defined terms, such as a set of categories or a classification scheme. Represents collections of terms with hierarchical relationships. (vocabulary, taxonomy, scheme)',
        })
    ], DefinedTermSet);
    return DefinedTermSet;
}(CreativeWork_js_1.CreativeWork));
exports.DefinedTermSet = DefinedTermSet;
//# sourceMappingURL=DefinedTerm.js.map