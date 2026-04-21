import { CreativeWork } from './CreativeWork.js';
import { Person } from './Person.js';
export declare class VisualArtwork extends CreativeWork {
    static targetClass: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    /**
     * The number of copies when multiple copies of a piece of artwork are produced - e.g. for a limited edition of 20 prints, 'artEdition' refers to the total number of copies (in this example '20').
     **/
    get artEdition(): number | string;
    /**
     * The material used. (E.g. Oil, Watercolour, Acrylic, Linoprint, Marble, Cyanotype, Digital, Lithograph, DryPoint, Intaglio, Pastel, Woodcut, Pencil, Mixed Media, etc.)
     **/
    get artMedium(): string;
    /**
     * e.g. Painting, Drawing, Sculpture, Print, Photograph, Assemblage, Collage, etc.
     **/
    get artform(): string;
    /**
     * The primary artist for a work in a medium other than pencils or digital line art--for example, if the primary artwork is done in watercolors or digital paints.
     **/
    get artist(): Person;
    /**
     * The supporting materials for the artwork, e.g. Canvas, Paper, Wood, Board, etc. Supersedes surface.
     **/
    get artworkSurface(): string;
    /**
     * The individual who adds color to inked drawings.
     **/
    get colorist(): Person;
    /**
     * The individual who traces over the pencil drawings in ink after pencils are complete.
     **/
    get inker(): Person;
    /**
     * The individual who adds lettering, including speech balloons and sound effects, to artwork.
     **/
    get letterer(): Person;
    /**
     * The individual who draws the primary narrative artwork.
     **/
    get penciler(): Person;
}
