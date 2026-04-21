"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscribeAction = void 0;
const schema_js_1 = require("../ontologies/schema.js");
const package_js_1 = require("../package.js");
const Action_js_1 = require("./Action.js");
let SubscribeAction = class SubscribeAction extends Action_js_1.Action {
};
exports.SubscribeAction = SubscribeAction;
SubscribeAction.targetClass = schema_js_1.schema.SubscribeAction;
exports.SubscribeAction = SubscribeAction = __decorate([
    (0, package_js_1.linkedShape)({
        description: 'An action of subscribing to a service, publication, or channel. Represents subscription activities with agent and object relationships. (subscription, follow, signup)',
    })
], SubscribeAction);
//# sourceMappingURL=SubscribeAction.js.map