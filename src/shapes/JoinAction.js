"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var ShapeSet_1 = require("@_linked/core/collections/ShapeSet");
var Shape_1 = require("@_linked/core/shapes/Shape");
var SHACL_1 = require("@_linked/core/shapes/SHACL");
var schema_js_1 = require("../ontologies/schema.js");
var package_js_1 = require("../package.js");
var Event_js_1 = require("./Event.js");
var Person_js_1 = require("./Person.js");
var JoinAction = /** @class */ (function (_super) {
    __extends(JoinAction, _super);
    function JoinAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(JoinAction.prototype, "event", {
        //the event joined
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(JoinAction.prototype, "agents", {
        //who joined the event
        get: function () {
            return new ShapeSet_1.ShapeSet();
        },
        enumerable: false,
        configurable: true
    });
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
    JoinAction = __decorate([
        (0, package_js_1.linkedShape)({
            description: 'An action of joining an event or group. Represents participation with agent person and event relationships. (participation, attendance, enrollment)',
        })
    ], JoinAction);
    return JoinAction;
}(Shape_1.Shape));
exports.JoinAction = JoinAction;
//# sourceMappingURL=JoinAction.js.map