var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { schema } from '../ontologies/schema.js';
import { linkedShape } from '../package.js';
import { Comment } from './Comment.js';
let Answer = class Answer extends Comment {
};
Answer.targetClass = schema.Answer;
Answer = __decorate([
    linkedShape({
        description: 'An answer offered to a question. Represents responses with parent-child comment relationships and question context. (response, reply, solution)',
    })
], Answer);
export { Answer };
//# sourceMappingURL=Answer.js.map