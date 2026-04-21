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
import { literalProperty, objectProperty } from '@_linked/core/shapes/SHACL';
import { schema } from '../ontologies/schema.js';
import { linkedShape } from '../package.js';
import { Person } from './Person.js';
let BefriendAction = class BefriendAction extends Shape {
    // readonly FAILED_ACTION_STATUS = 0;
    // readonly ACTIVE_ACTION_STATUS = 1;
    // readonly COMPLETED_ACTIVE_STATUS = 2;
    // readonly POTENTIAL_ACTION_STATUS =3
    get actionStatus() {
        return 0;
    }
    //the person who makes the connection
    get agent() {
        return null;
    }
    //the person that gets connected by the other
    get object() {
        return null;
    }
};
BefriendAction.targetClass = schema.BefriendAction;
__decorate([
    literalProperty({
        path: schema.actionStatus,
        maxCount: 1,
    }),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], BefriendAction.prototype, "actionStatus", null);
__decorate([
    objectProperty({
        path: schema.agent,
        shape: Person,
        maxCount: 1,
    }),
    __metadata("design:type", Person),
    __metadata("design:paramtypes", [])
], BefriendAction.prototype, "agent", null);
__decorate([
    objectProperty({
        path: schema.object,
        shape: Person,
        maxCount: 1,
    }),
    __metadata("design:type", Person),
    __metadata("design:paramtypes", [])
], BefriendAction.prototype, "object", null);
BefriendAction = __decorate([
    linkedShape({
        description: 'An action of establishing a friendship relationship. Represents social connections with agent and object person relationships. (friend request, connection, social)',
    })
], BefriendAction);
export { BefriendAction };
//# sourceMappingURL=BefriendAction.js.map