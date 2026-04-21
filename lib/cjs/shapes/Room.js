"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Room = void 0;
const schema_js_1 = require("../ontologies/schema.js");
const package_js_1 = require("../package.js");
const Accommodation_js_1 = require("./Accommodation.js");
let Room = class Room extends Accommodation_js_1.Accommodation {
};
exports.Room = Room;
Room.targetClass = schema_js_1.schema.Room;
exports.Room = Room = __decorate([
    (0, package_js_1.linkedShape)({
        description: 'A room is a distinguishable space within a structure. Represents enclosed spaces with accommodation features and containment relationships. (chamber, space, area)',
    })
], Room);
//# sourceMappingURL=Room.js.map