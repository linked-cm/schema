var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ShapeSet } from '@_linked/core/collections/ShapeSet';
import { literalProperty, objectProperty } from '@_linked/core/shapes/SHACL';
import { schema } from '../ontologies/schema.js';
import { linkedShape } from '../package.js';
import { Place } from './Place.js';
import { Thing } from './Thing.js';
import { PostalAddress } from './PostalAddress.js';
import { xsd } from '@_linked/xsd/ontologies/xsd';
import { DefinedTerm } from './DefinedTerm.js';
import { AdministrativeArea } from './AdministrativeArea.js';
let Person = class Person extends Thing {
    get givenName() {
        return '';
    }
    get familyName() {
        return '';
    }
    get name() {
        return '';
    }
    get gender() {
        return '';
    }
    get isMarried() {
        return false;
    }
    get telephone() {
        return '';
    }
    get birthDate() {
        return null;
    }
    static getAge(birthDate) {
        // if (this.hasProperty(schema.birthDate) === false) return null;
        var today = new Date();
        // var birthDate = this.birthDate;
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }
    get birthPlace() {
        return null;
    }
    get knows() {
        return new ShapeSet();
    }
    get skills() {
        return new ShapeSet();
    }
    get jobTitle() {
        return '';
    }
    //TODO: schema.hasOccupation -> schema:Occupation (shape to be created)
    get hasOccupation() {
        return '';
    }
    get homeLocation() {
        return new ShapeSet();
    }
    get honorificPrefix() {
        return '';
    }
    // TODO: remove this after do migration restructure location
    get areaServed() {
        return null;
    }
    get address() {
        return null;
    }
};
Person.targetClass = schema.Person;
__decorate([
    literalProperty({
        path: schema.givenName,
        maxCount: 1,
        description: 'The given name of the person.',
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], Person.prototype, "givenName", null);
__decorate([
    literalProperty({
        path: schema.familyName,
        maxCount: 1,
        description: 'The family name of the person.',
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], Person.prototype, "familyName", null);
__decorate([
    literalProperty({
        path: schema.name,
        maxCount: 1,
        description: 'Use as optional altnertive name. Is more likely to have a defined givenName and familyName as primary names.',
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], Person.prototype, "name", null);
__decorate([
    literalProperty({
        path: schema.gender,
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
    literalProperty({
        path: schema.isMarried,
        datatype: xsd.boolean,
        required: false,
        maxCount: 1,
    }),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [])
], Person.prototype, "isMarried", null);
__decorate([
    literalProperty({
        path: schema.telephone,
        maxCount: 1,
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], Person.prototype, "telephone", null);
__decorate([
    literalProperty({
        path: schema.birthDate,
        maxCount: 1,
        datatype: xsd.dateTime,
    }),
    __metadata("design:type", Date),
    __metadata("design:paramtypes", [])
], Person.prototype, "birthDate", null);
__decorate([
    objectProperty({
        path: schema.birthPlace,
        shape: Place,
        maxCount: 1,
    }),
    __metadata("design:type", Place),
    __metadata("design:paramtypes", [])
], Person.prototype, "birthPlace", null);
__decorate([
    objectProperty({
        path: schema.knows,
        shape: Person,
    }),
    __metadata("design:type", ShapeSet),
    __metadata("design:paramtypes", [])
], Person.prototype, "knows", null);
__decorate([
    objectProperty({
        path: schema.skills,
        shape: DefinedTerm,
    }),
    __metadata("design:type", ShapeSet),
    __metadata("design:paramtypes", [])
], Person.prototype, "skills", null);
__decorate([
    literalProperty({
        path: schema.jobTitle,
        maxCount: 1,
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], Person.prototype, "jobTitle", null);
__decorate([
    literalProperty({
        path: schema.hasOccupation,
        maxCount: 1,
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], Person.prototype, "hasOccupation", null);
__decorate([
    objectProperty({
        path: schema.homeLocation,
        shape: Place,
    }),
    __metadata("design:type", ShapeSet),
    __metadata("design:paramtypes", [])
], Person.prototype, "homeLocation", null);
__decorate([
    literalProperty({
        path: schema.honorificPrefix,
        maxCount: 1,
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], Person.prototype, "honorificPrefix", null);
__decorate([
    objectProperty({
        path: schema.areaServed,
        shape: Person,
        maxCount: 1,
    }),
    __metadata("design:type", AdministrativeArea),
    __metadata("design:paramtypes", [])
], Person.prototype, "areaServed", null);
__decorate([
    objectProperty({
        path: schema.address,
        shape: PostalAddress,
        maxCount: 1,
    }),
    __metadata("design:type", PostalAddress),
    __metadata("design:paramtypes", [])
], Person.prototype, "address", null);
Person = __decorate([
    linkedShape({
        description: 'A person (alive, dead, fictional); can be a member, leader, or contact for organizations. Holds identifiers and contact details. (individual, human, actor, user)',
    })
], Person);
export { Person };
//# sourceMappingURL=Person.js.map