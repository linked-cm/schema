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
import { ShapeSet } from '@_linked/core/collections/ShapeSet';
import { literalProperty, objectProperty } from '@_linked/core/shapes/SHACL';
import { linkedShape } from '../package.js';
import { Person } from './Person.js';
import { schema } from '../ontologies/schema.js';
import { Thing } from './Thing.js';
let Organization = Organization_1 = class Organization extends Thing {
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
        return new ShapeSet();
    }
    get founder() {
        return null;
    }
};
Organization.targetClass = schema.Organization;
__decorate([
    literalProperty({
        path: schema.faxNumber,
        maxCount: 1,
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], Organization.prototype, "faxNumber", null);
__decorate([
    literalProperty({
        path: schema.email,
        maxCount: 1,
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], Organization.prototype, "email", null);
__decorate([
    literalProperty({
        path: schema.legalName,
        maxCount: 1,
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], Organization.prototype, "legalName", null);
__decorate([
    literalProperty({
        path: schema.address,
        maxCount: 1,
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], Organization.prototype, "address", null);
__decorate([
    literalProperty({
        path: schema.telephone,
        maxCount: 1,
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], Organization.prototype, "telephone", null);
__decorate([
    objectProperty({
        path: schema.members,
        shape: Person,
    }),
    __metadata("design:type", ShapeSet),
    __metadata("design:paramtypes", [])
], Organization.prototype, "members", null);
__decorate([
    objectProperty({
        path: schema.founder,
        shape: Person,
        maxCount: 1,
    }),
    __metadata("design:type", Person),
    __metadata("design:paramtypes", [])
], Organization.prototype, "founder", null);
Organization = Organization_1 = __decorate([
    linkedShape({
        description: 'An organization such as a school, NGO, corporation, club, etc.; has members, leaders, and contact info. Links to Person and Address. (org, company, group, institution)',
    })
], Organization);
export { Organization };
//# sourceMappingURL=Organization.js.map