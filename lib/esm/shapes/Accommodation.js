var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { literalProperty } from '@_linked/core/shapes/SHACL';
import { schema } from '../ontologies/schema.js';
import { linkedShape } from '../package.js';
import { Place } from './Place.js';
let Accommodation = class Accommodation extends Place {
    get accommodationCategory() {
        return '';
    }
};
Accommodation.targetClass = schema.Accommodation;
__decorate([
    literalProperty({
        path: schema.accommodationCategory,
        maxCount: 1,
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], Accommodation.prototype, "accommodationCategory", null);
Accommodation = __decorate([
    linkedShape({
        description: 'A place to sleep or stay, such as a hotel, motel, or hostel. Represents lodging with accommodation categories and booking relationships. (lodging, hotel, stay)',
    })
], Accommodation);
export { Accommodation };
//# sourceMappingURL=Accommodation.js.map