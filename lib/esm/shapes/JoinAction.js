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
import { Shape } from '@_linked/core/shapes/Shape';
import { objectProperty } from '@_linked/core/shapes/SHACL';
import { schema } from '../ontologies/schema.js';
import { linkedShape } from '../package.js';
import { Event } from './Event.js';
import { Person } from './Person.js';
let JoinAction = class JoinAction extends Shape {
    //the event joined
    get event() {
        return null;
    }
    //who joined the event
    get agents() {
        return new ShapeSet();
    }
};
JoinAction.targetClass = schema.JoinAction;
__decorate([
    objectProperty({
        path: schema.event,
        shape: Event,
        maxCount: 1,
    }),
    __metadata("design:type", Event),
    __metadata("design:paramtypes", [])
], JoinAction.prototype, "event", null);
__decorate([
    objectProperty({
        path: schema.agent,
        shape: Person,
    }),
    __metadata("design:type", ShapeSet),
    __metadata("design:paramtypes", [])
], JoinAction.prototype, "agents", null);
JoinAction = __decorate([
    linkedShape({
        description: 'An action of joining an event or group. Represents participation with agent person and event relationships. (participation, attendance, enrollment)',
    })
], JoinAction);
export { JoinAction };
//# sourceMappingURL=JoinAction.js.map