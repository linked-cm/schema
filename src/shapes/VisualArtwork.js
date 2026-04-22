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
exports.VisualArtwork = void 0;
var SHACL_1 = require("@_linked/core/shapes/SHACL");
var schema_js_1 = require("../ontologies/schema.js");
var package_js_1 = require("../package.js");
var CreativeWork_js_1 = require("./CreativeWork.js");
var Person_js_1 = require("./Person.js");
var VisualArtwork = /** @class */ (function (_super) {
    __extends(VisualArtwork, _super);
    function VisualArtwork() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(VisualArtwork.prototype, "artEdition", {
        /**
         * The number of copies when multiple copies of a piece of artwork are produced - e.g. for a limited edition of 20 prints, 'artEdition' refers to the total number of copies (in this example '20').
         **/
        get: function () {
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VisualArtwork.prototype, "artMedium", {
        /**
         * The material used. (E.g. Oil, Watercolour, Acrylic, Linoprint, Marble, Cyanotype, Digital, Lithograph, DryPoint, Intaglio, Pastel, Woodcut, Pencil, Mixed Media, etc.)
         **/
        get: function () {
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VisualArtwork.prototype, "artform", {
        /**
         * e.g. Painting, Drawing, Sculpture, Print, Photograph, Assemblage, Collage, etc.
         **/
        get: function () {
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VisualArtwork.prototype, "artist", {
        /**
         * The primary artist for a work in a medium other than pencils or digital line art--for example, if the primary artwork is done in watercolors or digital paints.
         **/
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VisualArtwork.prototype, "artworkSurface", {
        /**
         * The supporting materials for the artwork, e.g. Canvas, Paper, Wood, Board, etc. Supersedes surface.
         **/
        get: function () {
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VisualArtwork.prototype, "colorist", {
        /**
         * The individual who adds color to inked drawings.
         **/
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VisualArtwork.prototype, "inker", {
        /**
         * The individual who traces over the pencil drawings in ink after pencils are complete.
         **/
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VisualArtwork.prototype, "letterer", {
        /**
         * The individual who adds lettering, including speech balloons and sound effects, to artwork.
         **/
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VisualArtwork.prototype, "penciler", {
        /**
         * The individual who draws the primary narrative artwork.
         **/
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    VisualArtwork.targetClass = schema_js_1.schema.VisualArtwork;
    __decorate([
        (0, SHACL_1.literalProperty)({ path: schema_js_1.schema.artEdition, maxCount: 1 }),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], VisualArtwork.prototype, "artEdition", null);
    __decorate([
        (0, SHACL_1.literalProperty)({ path: schema_js_1.schema.artMedium, maxCount: 1 }),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], VisualArtwork.prototype, "artMedium", null);
    __decorate([
        (0, SHACL_1.literalProperty)({ path: schema_js_1.schema.artform, maxCount: 1 }),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], VisualArtwork.prototype, "artform", null);
    __decorate([
        (0, SHACL_1.objectProperty)({ path: schema_js_1.schema.artist, shape: Person_js_1.Person, maxCount: 1 }),
        __metadata("design:type", Person_js_1.Person),
        __metadata("design:paramtypes", [])
    ], VisualArtwork.prototype, "artist", null);
    __decorate([
        (0, SHACL_1.literalProperty)({ path: schema_js_1.schema.artworkSurface, maxCount: 1 }),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], VisualArtwork.prototype, "artworkSurface", null);
    __decorate([
        (0, SHACL_1.objectProperty)({ path: schema_js_1.schema.colorist, shape: Person_js_1.Person, maxCount: 1 }),
        __metadata("design:type", Person_js_1.Person),
        __metadata("design:paramtypes", [])
    ], VisualArtwork.prototype, "colorist", null);
    __decorate([
        (0, SHACL_1.objectProperty)({ path: schema_js_1.schema.inker, shape: Person_js_1.Person, maxCount: 1 }),
        __metadata("design:type", Person_js_1.Person),
        __metadata("design:paramtypes", [])
    ], VisualArtwork.prototype, "inker", null);
    __decorate([
        (0, SHACL_1.objectProperty)({ path: schema_js_1.schema.letterer, shape: Person_js_1.Person, maxCount: 1 }),
        __metadata("design:type", Person_js_1.Person),
        __metadata("design:paramtypes", [])
    ], VisualArtwork.prototype, "letterer", null);
    __decorate([
        (0, SHACL_1.objectProperty)({ path: schema_js_1.schema.penciler, shape: Person_js_1.Person, maxCount: 1 }),
        __metadata("design:type", Person_js_1.Person),
        __metadata("design:paramtypes", [])
    ], VisualArtwork.prototype, "penciler", null);
    VisualArtwork = __decorate([
        (0, package_js_1.linkedShape)({
            description: 'A work of art that is primarily visual in character. Represents artworks with artist relationships, medium details, and creative work properties. (artwork, painting, sculpture)',
        })
    ], VisualArtwork);
    return VisualArtwork;
}(CreativeWork_js_1.CreativeWork));
exports.VisualArtwork = VisualArtwork;
//# sourceMappingURL=VisualArtwork.js.map