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
import { objectProperty } from '@_linked/core/shapes/SHACL';
import { schema } from '../ontologies/schema.js';
import { linkedShape } from '../package.js';
import { CreativeWork } from './CreativeWork.js';
import { Intangible } from './Intangible.js';
let DefinedTerm = class DefinedTerm extends Intangible {
    get inDefinedTermSet() {
        return null;
    }
};
DefinedTerm.targetClass = schema.DefinedTerm;
__decorate([
    objectProperty({
        path: schema.inDefinedTermSet,
        shape: ['@_linked/schema', 'DefinedTermSet'],
        maxCount: 1,
    }),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], DefinedTerm.prototype, "inDefinedTermSet", null);
DefinedTerm = __decorate([
    linkedShape({
        description: 'A word, name, acronym, phrase, etc. with a formal definition. Represents terms with definitions and relationships to term sets. (term, definition, concept)',
    })
], DefinedTerm);
export { DefinedTerm };
let DefinedTermSet = class DefinedTermSet extends CreativeWork {
    get definedTerms() {
        return new ShapeSet();
    }
};
DefinedTermSet.targetClass = schema.DefinedTermSet;
__decorate([
    objectProperty({
        path: schema.hasDefinedTerm,
        shape: DefinedTerm,
    }),
    __metadata("design:type", ShapeSet),
    __metadata("design:paramtypes", [])
], DefinedTermSet.prototype, "definedTerms", null);
DefinedTermSet = __decorate([
    linkedShape({
        description: 'A set of defined terms, such as a set of categories or a classification scheme. Represents collections of terms with hierarchical relationships. (vocabulary, taxonomy, scheme)',
    })
], DefinedTermSet);
export { DefinedTermSet };
//# sourceMappingURL=DefinedTerm.js.map