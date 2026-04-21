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
import { schema } from '../ontologies/schema.js';
import { linkedShape } from '../package.js';
import { Thing } from './Thing.js';
let Place = class Place extends Thing {
    get latitude() {
        return '';
    }
    get longitude() {
        return '';
    }
    get containedInPlace() {
        return null;
    }
};
Place.targetClass = schema.Place;
__decorate([
    literalProperty({
        path: schema.latitude,
        maxCount: 1,
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], Place.prototype, "latitude", null);
__decorate([
    literalProperty({
        path: schema.longitude,
        maxCount: 1,
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], Place.prototype, "longitude", null);
__decorate([
    objectProperty({
        path: schema.containedInPlace,
        shape: Place,
        maxCount: 1,
    }),
    __metadata("design:type", Place),
    __metadata("design:paramtypes", [])
], Place.prototype, "containedInPlace", null);
Place = __decorate([
    linkedShape({
        description: 'Entities that have a somewhat fixed, physical extension. Represents locations with coordinates, addresses, and containment relationships. (location, venue, site)',
    })
], Place);
export { Place };
//# sourceMappingURL=Place.js.map