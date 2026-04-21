var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { literalProperty, objectProperty } from '@_linked/core/shapes/SHACL';
import { linkedShape } from '../package.js';
import { Thing } from './Thing.js';
import { schema } from '../ontologies/schema.js';
import { AdministrativeArea } from './AdministrativeArea.js';
let PostalAddress = class PostalAddress extends Thing {
    get postalCode() {
        return '';
    }
    get areaServed() {
        return null;
    }
    get addressCountry() {
        return '';
    }
    get addressRegion() {
        return '';
    }
    get addressLocality() {
        return '';
    }
    get streetAddress() {
        return '';
    }
};
PostalAddress.targetClass = schema.Thing;
__decorate([
    literalProperty({
        path: schema.postalCode,
        maxCount: 1,
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], PostalAddress.prototype, "postalCode", null);
__decorate([
    objectProperty({
        path: schema.areaServed,
        shape: AdministrativeArea,
        maxCount: 1,
    }),
    __metadata("design:type", AdministrativeArea),
    __metadata("design:paramtypes", [])
], PostalAddress.prototype, "areaServed", null);
__decorate([
    literalProperty({
        path: schema.addressCountry,
        maxCount: 1,
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], PostalAddress.prototype, "addressCountry", null);
__decorate([
    literalProperty({
        path: schema.addressRegion,
        maxCount: 1,
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], PostalAddress.prototype, "addressRegion", null);
__decorate([
    literalProperty({
        path: schema.addressLocality,
        maxCount: 1,
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], PostalAddress.prototype, "addressLocality", null);
__decorate([
    literalProperty({
        path: schema.streetAddress,
        maxCount: 1,
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], PostalAddress.prototype, "streetAddress", null);
PostalAddress = __decorate([
    linkedShape({
        description: 'A mailing address; includes street, city, postal code, and country. Used for contact info of people, places, or organizations. (address, contact, location)',
    })
], PostalAddress);
export { PostalAddress };
//# sourceMappingURL=PostalAddress.js.map