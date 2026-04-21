var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { schema } from '../ontologies/schema.js';
import { linkedShape } from '../package.js';
import { Thing } from './Thing.js';
let Intangible = class Intangible extends Thing {
};
Intangible.targetClass = schema.Intangible;
Intangible = __decorate([
    linkedShape({
        description: 'A utility class serving as the umbrella for intangible things. Represents abstract concepts like quantities, structured values, and definitions. (abstract, concept, value)',
    })
], Intangible);
export { Intangible };
//# sourceMappingURL=Intangible.js.map