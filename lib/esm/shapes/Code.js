var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Code_1;
import { schema } from '../ontologies/schema.js';
import { linkedShape } from '../package.js';
import { CreativeWork } from './CreativeWork.js';
let Code = Code_1 = class Code extends CreativeWork {
    static fromText(text) {
        return Code_1.create({ text });
    }
};
Code.targetClass = schema.Code;
Code = Code_1 = __decorate([
    linkedShape({
        description: 'Computer programming source code. Represents code with text content, programming language, and creative work properties. (source code, program, script)',
    })
], Code);
export { Code };
//# sourceMappingURL=Code.js.map