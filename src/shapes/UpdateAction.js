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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAction = void 0;
var schema_js_1 = require("../ontologies/schema.js");
var package_js_1 = require("../package.js");
var Action_js_1 = require("./Action.js");
var UpdateAction = /** @class */ (function (_super) {
    __extends(UpdateAction, _super);
    function UpdateAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UpdateAction.targetClass = schema_js_1.schema.UpdateAction;
    UpdateAction = __decorate([
        (0, package_js_1.linkedShape)({
            description: 'An action of updating or modifying something. Represents modification activities with agent, object, and target collection relationships. (modification, edit, change)',
        })
    ], UpdateAction);
    return UpdateAction;
}(Action_js_1.Action));
exports.UpdateAction = UpdateAction;
//# sourceMappingURL=UpdateAction.js.map