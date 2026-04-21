var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { literalProperty, objectProperty } from '@_linked/core/shapes/SHACL';
import { schema } from '../ontologies/schema.js';
import { linkedShape } from '../package.js';
import { CreativeWork } from './CreativeWork.js';
import { Person } from './Person.js';
let VisualArtwork = class VisualArtwork extends CreativeWork {
    /**
     * The number of copies when multiple copies of a piece of artwork are produced - e.g. for a limited edition of 20 prints, 'artEdition' refers to the total number of copies (in this example '20').
     **/
    get artEdition() {
        return '';
    }
    /**
     * The material used. (E.g. Oil, Watercolour, Acrylic, Linoprint, Marble, Cyanotype, Digital, Lithograph, DryPoint, Intaglio, Pastel, Woodcut, Pencil, Mixed Media, etc.)
     **/
    get artMedium() {
        return '';
    }
    /**
     * e.g. Painting, Drawing, Sculpture, Print, Photograph, Assemblage, Collage, etc.
     **/
    get artform() {
        return '';
    }
    /**
     * The primary artist for a work in a medium other than pencils or digital line art--for example, if the primary artwork is done in watercolors or digital paints.
     **/
    get artist() {
        return null;
    }
    /**
     * The supporting materials for the artwork, e.g. Canvas, Paper, Wood, Board, etc. Supersedes surface.
     **/
    get artworkSurface() {
        return '';
    }
    /**
     * The individual who adds color to inked drawings.
     **/
    get colorist() {
        return null;
    }
    /**
     * The individual who traces over the pencil drawings in ink after pencils are complete.
     **/
    get inker() {
        return null;
    }
    /**
     * The individual who adds lettering, including speech balloons and sound effects, to artwork.
     **/
    get letterer() {
        return null;
    }
    /**
     * The individual who draws the primary narrative artwork.
     **/
    get penciler() {
        return null;
    }
};
VisualArtwork.targetClass = schema.VisualArtwork;
__decorate([
    literalProperty({ path: schema.artEdition, maxCount: 1 }),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], VisualArtwork.prototype, "artEdition", null);
__decorate([
    literalProperty({ path: schema.artMedium, maxCount: 1 }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], VisualArtwork.prototype, "artMedium", null);
__decorate([
    literalProperty({ path: schema.artform, maxCount: 1 }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], VisualArtwork.prototype, "artform", null);
__decorate([
    objectProperty({ path: schema.artist, shape: Person, maxCount: 1 }),
    __metadata("design:type", Person),
    __metadata("design:paramtypes", [])
], VisualArtwork.prototype, "artist", null);
__decorate([
    literalProperty({ path: schema.artworkSurface, maxCount: 1 }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], VisualArtwork.prototype, "artworkSurface", null);
__decorate([
    objectProperty({ path: schema.colorist, shape: Person, maxCount: 1 }),
    __metadata("design:type", Person),
    __metadata("design:paramtypes", [])
], VisualArtwork.prototype, "colorist", null);
__decorate([
    objectProperty({ path: schema.inker, shape: Person, maxCount: 1 }),
    __metadata("design:type", Person),
    __metadata("design:paramtypes", [])
], VisualArtwork.prototype, "inker", null);
__decorate([
    objectProperty({ path: schema.letterer, shape: Person, maxCount: 1 }),
    __metadata("design:type", Person),
    __metadata("design:paramtypes", [])
], VisualArtwork.prototype, "letterer", null);
__decorate([
    objectProperty({ path: schema.penciler, shape: Person, maxCount: 1 }),
    __metadata("design:type", Person),
    __metadata("design:paramtypes", [])
], VisualArtwork.prototype, "penciler", null);
VisualArtwork = __decorate([
    linkedShape({
        description: 'A work of art that is primarily visual in character. Represents artworks with artist relationships, medium details, and creative work properties. (artwork, painting, sculpture)',
    })
], VisualArtwork);
export { VisualArtwork };
//# sourceMappingURL=VisualArtwork.js.map