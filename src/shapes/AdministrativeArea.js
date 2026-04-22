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
exports.AdministrativeArea = void 0;
var package_js_1 = require("../package.js");
var Place_js_1 = require("./Place.js");
var schema_js_1 = require("../ontologies/schema.js");
var AdministrativeArea = /** @class */ (function (_super) {
    __extends(AdministrativeArea, _super);
    function AdministrativeArea() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdministrativeArea.targetClass = schema_js_1.schema.AdministrativeArea;
    AdministrativeArea = __decorate([
        (0, package_js_1.linkedShape)({
            description: 'A geographic or political area, e.g., country, region, city. Often linked to addresses, organizations, or events. (location, region, jurisdiction)',
        })
    ], AdministrativeArea);
    return AdministrativeArea;
}(Place_js_1.Place));
exports.AdministrativeArea = AdministrativeArea;
//# sourceMappingURL=AdministrativeArea.js.map