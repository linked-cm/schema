var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Shape } from '@_linked/core/shapes/Shape';
import { schema } from '../ontologies/schema.js';
import { linkedShape } from '../package.js';
let ArtBlock = class ArtBlock extends Shape {
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
ArtBlock.targetClass = schema.VisualArtwork;
ArtBlock = __decorate([
    linkedShape({
        description: 'A custom art block implementation for ArtBlocks platform. Represents generative artworks with creator relationships and creation metadata. (generative art, NFT, block)',
    })
], ArtBlock);
export { ArtBlock };
//# sourceMappingURL=ArtBlock.js.map