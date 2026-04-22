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
exports.Apartment = void 0;
var schema_js_1 = require("../ontologies/schema.js");
var package_js_1 = require("../package.js");
var Accommodation_js_1 = require("./Accommodation.js");
var Apartment = /** @class */ (function (_super) {
    __extends(Apartment, _super);
    function Apartment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Apartment.targetClass = schema_js_1.schema.Apartment;
    Apartment = __decorate([
        (0, package_js_1.linkedShape)({
            description: 'An apartment or flat, a self-contained housing unit. Represents residential units with accommodation features and rental relationships. (flat, unit, residence)',
        })
    ], Apartment);
    return Apartment;
}(Accommodation_js_1.Accommodation));
exports.Apartment = Apartment;
//# sourceMappingURL=Apartment.js.map