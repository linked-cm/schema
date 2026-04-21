"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Code_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Code = void 0;
const schema_js_1 = require("../ontologies/schema.js");
const package_js_1 = require("../package.js");
const CreativeWork_js_1 = require("./CreativeWork.js");
let Code = Code_1 = class Code extends CreativeWork_js_1.CreativeWork {
    static fromText(text) {
        return Code_1.create({ text });
    }
};
exports.Code = Code;
Code.targetClass = schema_js_1.schema.Code;
exports.Code = Code = Code_1 = __decorate([
    (0, package_js_1.linkedShape)({
        description: 'Computer programming source code. Represents code with text content, programming language, and creative work properties. (source code, program, script)',
    })
], Code);
//# sourceMappingURL=Code.js.map