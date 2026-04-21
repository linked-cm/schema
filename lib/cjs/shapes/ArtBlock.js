"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtBlock = void 0;
const Shape_1 = require("@_linked/core/shapes/Shape");
const schema_js_1 = require("../ontologies/schema.js");
const package_js_1 = require("../package.js");
let ArtBlock = class ArtBlock extends Shape_1.Shape {
    get url() {
        return '';
    }
    get author() {
        return '';
    }
    get createdAt() {
        return '';
    }
};
exports.ArtBlock = ArtBlock;
ArtBlock.targetClass = schema_js_1.schema.VisualArtwork;
exports.ArtBlock = ArtBlock = __decorate([
    (0, package_js_1.linkedShape)({
        description: 'A custom art block implementation for ArtBlocks platform. Represents generative artworks with creator relationships and creation metadata. (generative art, NFT, block)',
    })
], ArtBlock);
//# sourceMappingURL=ArtBlock.js.map