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
var Organization_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Organization = void 0;
const ShapeSet_1 = require("@_linked/core/collections/ShapeSet");
const SHACL_1 = require("@_linked/core/shapes/SHACL");
const package_js_1 = require("../package.js");
const Person_js_1 = require("./Person.js");
const schema_js_1 = require("../ontologies/schema.js");
const Thing_js_1 = require("./Thing.js");
let Organization = Organization_1 = class Organization extends Thing_js_1.Thing {
    get faxNumber() {
        return '';
    }
    get email() {
        return '';
    }
    get legalName() {
        return '';
    }
    get address() {
        return '';
    }
    get telephone() {
        return '';
    }
    static getAffiliationsOf(person) {
        return Organization_1.select((organization) => organization);
    }
    get members() {
        return new ShapeSet_1.ShapeSet();
    }
    get founder() {
        return null;
    }
};
exports.Organization = Organization;
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
exports.Organization = Organization = Organization_1 = __decorate([
    (0, package_js_1.linkedShape)({
        description: 'An organization such as a school, NGO, corporation, club, etc.; has members, leaders, and contact info. Links to Person and Address. (org, company, group, institution)',
    })
], Organization);
//# sourceMappingURL=Organization.js.map