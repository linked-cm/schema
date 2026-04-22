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
exports.BefriendAction = void 0;
var Shape_1 = require("@_linked/core/shapes/Shape");
var SHACL_1 = require("@_linked/core/shapes/SHACL");
var schema_js_1 = require("../ontologies/schema.js");
var package_js_1 = require("../package.js");
var Person_js_1 = require("./Person.js");
var BefriendAction = /** @class */ (function (_super) {
    __extends(BefriendAction, _super);
    function BefriendAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(BefriendAction.prototype, "actionStatus", {
        // readonly FAILED_ACTION_STATUS = 0;
        // readonly ACTIVE_ACTION_STATUS = 1;
        // readonly COMPLETED_ACTIVE_STATUS = 2;
        // readonly POTENTIAL_ACTION_STATUS =3
        get: function () {
            return 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BefriendAction.prototype, "agent", {
        //the person who makes the connection
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BefriendAction.prototype, "object", {
        //the person that gets connected by the other
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    BefriendAction.targetClass = schema_js_1.schema.BefriendAction;
    __decorate([
        (0, SHACL_1.literalProperty)({
            path: schema_js_1.schema.actionStatus,
            maxCount: 1,
        }),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [])
    ], BefriendAction.prototype, "actionStatus", null);
    __decorate([
        (0, SHACL_1.objectProperty)({
            path: schema_js_1.schema.agent,
            shape: Person_js_1.Person,
            maxCount: 1,
        }),
        __metadata("design:type", Person_js_1.Person),
        __metadata("design:paramtypes", [])
    ], BefriendAction.prototype, "agent", null);
    __decorate([
        (0, SHACL_1.objectProperty)({
            path: schema_js_1.schema.object,
            shape: Person_js_1.Person,
            maxCount: 1,
        }),
        __metadata("design:type", Person_js_1.Person),
        __metadata("design:paramtypes", [])
    ], BefriendAction.prototype, "object", null);
    BefriendAction = __decorate([
        (0, package_js_1.linkedShape)({
            description: 'An action of establishing a friendship relationship. Represents social connections with agent and object person relationships. (friend request, connection, social)',
        })
    ], BefriendAction);
    return BefriendAction;
}(Shape_1.Shape));
exports.BefriendAction = BefriendAction;
//# sourceMappingURL=BefriendAction.js.map