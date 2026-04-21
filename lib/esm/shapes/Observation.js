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
import { xsd } from '@_linked/xsd/ontologies/xsd';
import { PropertyValue } from './PropertyValue.js';
import { Thing } from './Thing.js';
let Observation = class Observation extends Thing {
    get observationDate() {
        return null;
    }
    get variableMeasured() {
        return null;
    }
    get observationAbout() {
        return null;
    }
};
Observation.targetClass = schema.Observation;
__decorate([
    literalProperty({
        path: schema.observationDate,
        datatype: xsd.dateTime,
        maxCount: 1,
    }),
    __metadata("design:type", Date),
    __metadata("design:paramtypes", [])
], Observation.prototype, "observationDate", null);
__decorate([
    objectProperty({
        shape: ['@_linked/schema', 'PropertyValue'],
        path: schema.variableMeasured,
        maxCount: 1,
    }),
    __metadata("design:type", PropertyValue),
    __metadata("design:paramtypes", [])
], Observation.prototype, "variableMeasured", null);
__decorate([
    objectProperty({
        shape: Thing,
        path: schema.observationAbout,
        maxCount: 1,
    }),
    __metadata("design:type", Thing),
    __metadata("design:paramtypes", [])
], Observation.prototype, "observationAbout", null);
Observation = __decorate([
    linkedShape({
        description: 'An observation of a specific entity at a particular time. Represents measurements with observation dates, variable tracking, and entity relationships. (measurement, data point, record)',
    })
], Observation);
export { Observation };
//# sourceMappingURL=Observation.js.map