var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { schema } from '../ontologies/schema.js';
import { linkedShape } from '../package.js';
import { Action } from './Action.js';
let SubscribeAction = class SubscribeAction extends Action {
};
SubscribeAction.targetClass = schema.SubscribeAction;
SubscribeAction = __decorate([
    linkedShape({
        description: 'An action of subscribing to a service, publication, or channel. Represents subscription activities with agent and object relationships. (subscription, follow, signup)',
    })
], SubscribeAction);
export { SubscribeAction };
//# sourceMappingURL=SubscribeAction.js.map