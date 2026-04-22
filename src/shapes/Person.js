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
exports.Person = void 0;
var ShapeSet_1 = require("@_linked/core/collections/ShapeSet");
var SHACL_1 = require("@_linked/core/shapes/SHACL");
var schema_js_1 = require("../ontologies/schema.js");
var package_js_1 = require("../package.js");
var Place_js_1 = require("./Place.js");
var Thing_js_1 = require("./Thing.js");
var PostalAddress_js_1 = require("./PostalAddress.js");
var xsd_1 = require("@_linked/xsd/ontologies/xsd");
var DefinedTerm_js_1 = require("./DefinedTerm.js");
var AdministrativeArea_js_1 = require("./AdministrativeArea.js");
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Person.prototype, "givenName", {
        get: function () {
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "familyName", {
        get: function () {
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "gender", {
        get: function () {
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "isMarried", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "telephone", {
        get: function () {
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "birthDate", {
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Person.getAge = function (birthDate) {
        // if (this.hasProperty(schema.birthDate) === false) return null;
        var today = new Date();
        // var birthDate = this.birthDate;
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };
    Object.defineProperty(Person.prototype, "birthPlace", {
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "knows", {
        get: function () {
            return new ShapeSet_1.ShapeSet();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "skills", {
        get: function () {
            return new ShapeSet_1.ShapeSet();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "jobTitle", {
        get: function () {
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "hasOccupation", {
        //TODO: schema.hasOccupation -> schema:Occupation (shape to be created)
        get: function () {
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "homeLocation", {
        get: function () {
            return new ShapeSet_1.ShapeSet();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "honorificPrefix", {
        get: function () {
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "areaServed", {
        // TODO: remove this after do migration restructure location
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "address", {
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Person.targetClass = schema_js_1.schema.Person;
    __decorate([
        (0, SHACL_1.literalProperty)({
            path: schema_js_1.schema.givenName,
            maxCount: 1,
            description: 'The given name of the person.',
        }),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], Person.prototype, "givenName", null);
    __decorate([
        (0, SHACL_1.literalProperty)({
            path: schema_js_1.schema.familyName,
            maxCount: 1,
            description: 'The family name of the person.',
        }),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], Person.prototype, "familyName", null);
    __decorate([
        (0, SHACL_1.literalProperty)({
            path: schema_js_1.schema.name,
            maxCount: 1,
            description: 'Use as optional altnertive name. Is more likely to have a defined givenName and familyName as primary names.',
        }),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], Person.prototype, "name", null);
    __decorate([
        (0, SHACL_1.literalProperty)({
            path: schema_js_1.schema.gender,
            maxCount: 1,
            // in: [
            //   new Literal('male'),
            //   new Literal('female'),
            //   new Literal('prefer not to say'),
            // ],
        }),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], Person.prototype, "gender", null);
    __decorate([
        (0, SHACL_1.literalProperty)({
            path: schema_js_1.schema.isMarried,
            datatype: xsd_1.xsd.boolean,
            required: false,
            maxCount: 1,
        }),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [])
    ], Person.prototype, "isMarried", null);
    __decorate([
        (0, SHACL_1.literalProperty)({
            path: schema_js_1.schema.telephone,
            maxCount: 1,
        }),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], Person.prototype, "telephone", null);
    __decorate([
        (0, SHACL_1.literalProperty)({
            path: schema_js_1.schema.birthDate,
            maxCount: 1,
            datatype: xsd_1.xsd.dateTime,
        }),
        __metadata("design:type", Date),
        __metadata("design:paramtypes", [])
    ], Person.prototype, "birthDate", null);
    __decorate([
        (0, SHACL_1.objectProperty)({
            path: schema_js_1.schema.birthPlace,
            shape: Place_js_1.Place,
            maxCount: 1,
        }),
        __metadata("design:type", Place_js_1.Place),
        __metadata("design:paramtypes", [])
    ], Person.prototype, "birthPlace", null);
    __decorate([
        (0, SHACL_1.objectProperty)({
            path: schema_js_1.schema.knows,
            shape: Person,
        }),
        __metadata("design:type", ShapeSet_1.ShapeSet),
        __metadata("design:paramtypes", [])
    ], Person.prototype, "knows", null);
    __decorate([
        (0, SHACL_1.objectProperty)({
            path: schema_js_1.schema.skills,
            shape: DefinedTerm_js_1.DefinedTerm,
        }),
        __metadata("design:type", ShapeSet_1.ShapeSet),
        __metadata("design:paramtypes", [])
    ], Person.prototype, "skills", null);
    __decorate([
        (0, SHACL_1.literalProperty)({
            path: schema_js_1.schema.jobTitle,
            maxCount: 1,
        }),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], Person.prototype, "jobTitle", null);
    __decorate([
        (0, SHACL_1.literalProperty)({
            path: schema_js_1.schema.hasOccupation,
            maxCount: 1,
        }),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], Person.prototype, "hasOccupation", null);
    __decorate([
        (0, SHACL_1.objectProperty)({
            path: schema_js_1.schema.homeLocation,
            shape: Place_js_1.Place,
        }),
        __metadata("design:type", ShapeSet_1.ShapeSet),
        __metadata("design:paramtypes", [])
    ], Person.prototype, "homeLocation", null);
    __decorate([
        (0, SHACL_1.literalProperty)({
            path: schema_js_1.schema.honorificPrefix,
            maxCount: 1,
        }),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], Person.prototype, "honorificPrefix", null);
    __decorate([
        (0, SHACL_1.objectProperty)({
            path: schema_js_1.schema.areaServed,
            shape: Person,
            maxCount: 1,
        }),
        __metadata("design:type", AdministrativeArea_js_1.AdministrativeArea),
        __metadata("design:paramtypes", [])
    ], Person.prototype, "areaServed", null);
    __decorate([
        (0, SHACL_1.objectProperty)({
            path: schema_js_1.schema.address,
            shape: PostalAddress_js_1.PostalAddress,
            maxCount: 1,
        }),
        __metadata("design:type", PostalAddress_js_1.PostalAddress),
        __metadata("design:paramtypes", [])
    ], Person.prototype, "address", null);
    Person = __decorate([
        (0, package_js_1.linkedShape)({
            description: 'A person (alive, dead, fictional); can be a member, leader, or contact for organizations. Holds identifiers and contact details. (individual, human, actor, user)',
        })
    ], Person);
    return Person;
}(Thing_js_1.Thing));
exports.Person = Person;
//# sourceMappingURL=Person.js.map