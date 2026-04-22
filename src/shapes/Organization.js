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
exports.Organization = void 0;
var ShapeSet_1 = require("@_linked/core/collections/ShapeSet");
var SHACL_1 = require("@_linked/core/shapes/SHACL");
var package_js_1 = require("../package.js");
var Person_js_1 = require("./Person.js");
var schema_js_1 = require("../ontologies/schema.js");
var Thing_js_1 = require("./Thing.js");
var Organization = /** @class */ (function (_super) {
    __extends(Organization, _super);
    function Organization() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Organization_1 = Organization;
    Object.defineProperty(Organization.prototype, "faxNumber", {
        get: function () {
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Organization.prototype, "email", {
        get: function () {
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Organization.prototype, "legalName", {
        get: function () {
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Organization.prototype, "address", {
        get: function () {
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Organization.prototype, "telephone", {
        get: function () {
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Organization.getAffiliationsOf = function (person) {
        return Organization_1.select(function (organization) { return organization; });
    };
    Object.defineProperty(Organization.prototype, "members", {
        get: function () {
            return new ShapeSet_1.ShapeSet();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Organization.prototype, "founder", {
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    var Organization_1;
    Organization.targetClass = schema_js_1.schema.Organization;
    __decorate([
        (0, SHACL_1.literalProperty)({
            path: schema_js_1.schema.faxNumber,
            maxCount: 1,
        }),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], Organization.prototype, "faxNumber", null);
    __decorate([
        (0, SHACL_1.literalProperty)({
            path: schema_js_1.schema.email,
            maxCount: 1,
        }),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], Organization.prototype, "email", null);
    __decorate([
        (0, SHACL_1.literalProperty)({
            path: schema_js_1.schema.legalName,
            maxCount: 1,
        }),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], Organization.prototype, "legalName", null);
    __decorate([
        (0, SHACL_1.literalProperty)({
            path: schema_js_1.schema.address,
            maxCount: 1,
        }),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], Organization.prototype, "address", null);
    __decorate([
        (0, SHACL_1.literalProperty)({
            path: schema_js_1.schema.telephone,
            maxCount: 1,
        }),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], Organization.prototype, "telephone", null);
    __decorate([
        (0, SHACL_1.objectProperty)({
            path: schema_js_1.schema.members,
            shape: Person_js_1.Person,
        }),
        __metadata("design:type", ShapeSet_1.ShapeSet),
        __metadata("design:paramtypes", [])
    ], Organization.prototype, "members", null);
    __decorate([
        (0, SHACL_1.objectProperty)({
            path: schema_js_1.schema.founder,
            shape: Person_js_1.Person,
            maxCount: 1,
        }),
        __metadata("design:type", Person_js_1.Person),
        __metadata("design:paramtypes", [])
    ], Organization.prototype, "founder", null);
    Organization = Organization_1 = __decorate([
        (0, package_js_1.linkedShape)({
            description: 'An organization such as a school, NGO, corporation, club, etc.; has members, leaders, and contact info. Links to Person and Address. (org, company, group, institution)',
        })
    ], Organization);
    return Organization;
}(Thing_js_1.Thing));
exports.Organization = Organization;
//# sourceMappingURL=Organization.js.map