var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Shape } from '@_linked/core/shapes/Shape';
import { literalProperty, objectProperty } from '@_linked/core/shapes/SHACL';
import { linkedShape } from '../package.js';
import { schema } from '../ontologies/schema.js';
let Thing = class Thing extends Shape {
    /**
     * An alias for the item.
     */
    get alternateName() {
        return '';
    }
    /**
     * A description of the item.
     */
    get description() {
        return '';
    }
    /**
     * A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.
     */
    get disambiguatingDescription() {
        return '';
    }
    /**
     * The identifier property represents any kind of identifier for any kind of Thing, such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as stringual strings or as URL (URI) links. See background notes for more details.
     */
    get identifier() {
        return '';
    }
    /**
     * An image of the item.
     */
    get image() {
        return null;
    }
    /**
     * Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See background notes for details.
     */
    get mainEntityOfPage() {
        return null;
    }
    /**
     * The name of the item.
     */
    get name() {
        return '';
    }
    /**
     * TODO: this causes circular references, we need to find the target shape in an indirect way
     * Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.
     */
    // get potentialAction(): Action {
    //   return this.hasProperty(schema.potentialAction) ? new Action(this.getValue(schema.potentialAction)) : null;
    // }
    /**
     * a reference NamedNode that unambiguously indicates the item's identity. E.g. the item's Wikipedia page, Wikidata entry, or official website.
     */
    get sameAs() {
        return null;
    }
    /**
     * A CreativeWork or Event about this Thing.
     */
    //TODO: how to build get methods for 2 different value types? Note that data may not be loaded!
    // if we can assume some data is loaded. Do we validate the node against the shape?
    // get subjectOf(): CreativeWork | Event {
    //   return this.hasProperty(schema.subjectOf) ? new Event(this.getValue(schema.subjectOf)) : null;
    // }
    get subjectOf() {
        return null;
    }
    /**
     * URL of the item.
     */
    get url() {
        return '';
    }
    /**
     * An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in.
     */
    get additionalType() {
        return '';
    }
};
Thing.targetClass = schema.Thing;
__decorate([
    literalProperty({
        path: schema.alternateName,
        maxCount: 1,
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], Thing.prototype, "alternateName", null);
__decorate([
    literalProperty({
        path: schema.description,
        maxCount: 1,
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], Thing.prototype, "description", null);
__decorate([
    literalProperty({
        path: schema.disambiguatingDescription,
        maxCount: 1,
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], Thing.prototype, "disambiguatingDescription", null);
__decorate([
    literalProperty({
        path: schema.identifier,
        maxCount: 1,
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], Thing.prototype, "identifier", null);
__decorate([
    objectProperty({
        path: schema.image,
        // //when using a shape that extends this shape (ImageObject extends Thing)
        // //we need to use getPackageShape to avoid circular dependencies,
        // //and in the property decorator we need to wrap the getPackageShape() call in a function for it to work
        // shape: [packageName, 'ImageObject'],
        shape: ['@_linked/schema', 'ImageObject'],
        maxCount: 1,
    }),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Thing.prototype, "image", null);
__decorate([
    literalProperty({
        path: schema.name,
        maxCount: 1,
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], Thing.prototype, "name", null);
__decorate([
    literalProperty({
        path: schema.url,
        maxCount: 1,
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], Thing.prototype, "url", null);
__decorate([
    literalProperty({
        path: schema.additionalType,
        maxCount: 1,
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], Thing.prototype, "additionalType", null);
Thing = __decorate([
    linkedShape({
        description: 'The most generic type in Schema.org; superclass for all entities. Can be a person, place, organization, product, etc. (entity, resource, item)',
    })
], Thing);
export { Thing };
//# sourceMappingURL=Thing.js.map