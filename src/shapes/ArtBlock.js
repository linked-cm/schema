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
exports.ArtBlock = void 0;
var Shape_1 = require("@_linked/core/shapes/Shape");
var schema_js_1 = require("../ontologies/schema.js");
var package_js_1 = require("../package.js");
var ArtBlock = /** @class */ (function (_super) {
    __extends(ArtBlock, _super);
    function ArtBlock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ArtBlock.prototype, "url", {
        get: function () {
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArtBlock.prototype, "author", {
        get: function () {
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ArtBlock.prototype, "createdAt", {
        get: function () {
            return '';
        },
        enumerable: false,
        configurable: true
    });
    ArtBlock.targetClass = schema_js_1.schema.VisualArtwork;
    ArtBlock = __decorate([
        (0, package_js_1.linkedShape)({
            description: 'A custom art block implementation for ArtBlocks platform. Represents generative artworks with creator relationships and creation metadata. (generative art, NFT, block)',
        })
    ], ArtBlock);
    return ArtBlock;
}(Shape_1.Shape));
exports.ArtBlock = ArtBlock;
//# sourceMappingURL=ArtBlock.js.map