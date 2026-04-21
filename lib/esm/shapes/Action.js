var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { xsd } from '@_linked/xsd/ontologies/xsd';
import { literalProperty, objectProperty } from '@_linked/core/shapes/SHACL';
import * as actionConstants from '../constants.js';
import { schema } from '../ontologies/schema.js';
import { linkedShape } from '../package.js';
import { Person } from './Person.js';
import { Place } from './Place.js';
import { Thing } from './Thing.js';
let Action = class Action extends Thing {
    /**
     * The status of an Action (enums).
     */
    get actionStatus() {
        return 0;
    }
    get agent() {
        return null;
    }
    get participant() {
        return null;
    }
    get objects() {
        return null;
    }
    // @objectProperty({
    //   path: schema.object,
    //   shape: Thing,
    //   maxCount:1
    // })
    // get firstObject(): Thing {
    //   return this.objects.first();
    // }
    // set objects(objects: ShapeSet<Thing>) {
    //   objects.updateEach(schema.object, this.namedNode);
    // }
    // get object(): Thing {
    //   if (this.hasProperty(schema.object)) {
    //     return this.getOneAs(schema.object, Thing, true);
    //   } else {
    //     return null;
    //   }
    // }
    // set object(val: Thing) {
    //   this.overwrite(schema.object, val ? val.node : null);
    // }
    get location() {
        return null;
    }
    get startTime() {
        return null;
    }
    get endTime() {
        return null;
    }
};
Action.targetClass = schema.Action;
Action.STATUS_ACTIVE = actionConstants.STATUS_ACTIVE;
Action.STATUS_COMPLETED = actionConstants.STATUS_COMPLETED;
Action.STATUS_POTENTIAL = actionConstants.STATUS_POTENTIAL;
Action.STATUS_FAILED = actionConstants.STATUS_FAILED;
__decorate([
    literalProperty({
        path: schema.actionStatus,
        maxCount: 1,
        datatype: xsd.integer,
    }),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [])
], Action.prototype, "actionStatus", null);
__decorate([
    objectProperty({
        path: schema.agent,
        shape: Person,
        minCount: 1,
        maxCount: 1,
        description: 'The agent (person/organization) who performed the action',
    }),
    __metadata("design:type", Person),
    __metadata("design:paramtypes", [])
], Action.prototype, "agent", null);
__decorate([
    objectProperty({
        path: schema.participant,
        shape: Person,
        maxCount: 1,
    }),
    __metadata("design:type", Person),
    __metadata("design:paramtypes", [])
], Action.prototype, "participant", null);
__decorate([
    objectProperty({
        path: schema.object,
        shape: Thing,
    }),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Action.prototype, "objects", null);
__decorate([
    objectProperty({
        path: schema.location,
        shape: Place,
        maxCount: 1,
    }),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Action.prototype, "location", null);
__decorate([
    literalProperty({
        path: schema.startTime,
        required: false,
        maxCount: 1,
        datatype: xsd.dateTime,
    }),
    __metadata("design:type", Date),
    __metadata("design:paramtypes", [])
], Action.prototype, "startTime", null);
__decorate([
    literalProperty({
        path: schema.endTime,
        required: false,
        maxCount: 1,
        datatype: xsd.dateTime,
    }),
    __metadata("design:type", Date),
    __metadata("design:paramtypes", [])
], Action.prototype, "endTime", null);
Action = __decorate([
    linkedShape({
        description: 'An action performed by a person or organization. Represents activities with agent, participant, location, and timing. (activity, operation, task)',
    })
], Action);
export { Action };
//# sourceMappingURL=Action.js.map