var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Shape } from '@_linked/core/shapes/Shape';
import { literalProperty } from '@_linked/core/shapes/SHACL';
import { schema } from '../ontologies/schema.js';
import { linkedShape } from '../package.js';
let PropertyValue = class PropertyValue extends Shape {
    get value() {
        return '';
    }
    get propertyID() {
        return '';
    }
};
PropertyValue.targetClass = schema.PropertyValue;
__decorate([
    literalProperty({
        path: schema.value,
        maxCount: 1,
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], PropertyValue.prototype, "value", null);
__decorate([
    literalProperty({
        path: schema.propertyID,
        maxCount: 1,
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], PropertyValue.prototype, "propertyID", null);
PropertyValue = __decorate([
    linkedShape({
        description: 'A property-value pair representing structured data. Represents key-value pairs with property ID and value relationships. (pair, attribute, data)',
    })
], PropertyValue);
export { PropertyValue };
//# sourceMappingURL=PropertyValue.js.map