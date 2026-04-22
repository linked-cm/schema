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
exports.Country = void 0;
var schema_js_1 = require("../ontologies/schema.js");
var package_js_1 = require("../package.js");
var Place_js_1 = require("./Place.js");
var Country = /** @class */ (function (_super) {
    __extends(Country, _super);
    function Country() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Country.targetClass = schema_js_1.schema.Country;
    Country = __decorate([
        (0, package_js_1.linkedShape)({
            description: 'A country is a distinct territorial body or political entity. Represents nations with geographic boundaries and administrative areas. (nation, state, territory)',
        })
    ], Country);
    return Country;
}(Place_js_1.Place));
exports.Country = Country;
//# sourceMappingURL=Country.js.map