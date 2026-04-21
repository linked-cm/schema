"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JoinAction = void 0;
const ShapeSet_1 = require("@_linked/core/collections/ShapeSet");
const Shape_1 = require("@_linked/core/shapes/Shape");
const SHACL_1 = require("@_linked/core/shapes/SHACL");
const schema_js_1 = require("../ontologies/schema.js");
const package_js_1 = require("../package.js");
const Event_js_1 = require("./Event.js");
const Person_js_1 = require("./Person.js");
let JoinAction = class JoinAction extends Shape_1.Shape {
    //the event joined
    get event() {
        return null;
    }
    //who joined the event
    get agents() {
        return new ShapeSet_1.ShapeSet();
    }
};
exports.JoinAction = JoinAction;
JoinAction.targetClass = schema_js_1.schema.JoinAction;
__decorate([
    (0, SHACL_1.objectProperty)({
        path: schema_js_1.schema.event,
        shape: Event_js_1.Event,
        maxCount: 1,
    }),
    __metadata("design:type", Event_js_1.Event),
    __metadata("design:paramtypes", [])
], JoinAction.prototype, "event", null);
__decorate([
    (0, SHACL_1.objectProperty)({
        path: schema_js_1.schema.agent,
        shape: Person_js_1.Person,
    }),
    __metadata("design:type", ShapeSet_1.ShapeSet),
    __metadata("design:paramtypes", [])
], JoinAction.prototype, "agents", null);
exports.JoinAction = JoinAction = __decorate([
    (0, package_js_1.linkedShape)({
        description: 'An action of joining an event or group. Represents participation with agent person and event relationships. (participation, attendance, enrollment)',
    })
], JoinAction);
//# sourceMappingURL=JoinAction.js.map