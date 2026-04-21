import type { NodeReferenceValue } from '@_linked/core/utils/NodeReference';
import { Shape } from '@_linked/core/shapes/Shape';
export declare class Thing extends Shape {
    static targetClass: NodeReferenceValue;
    /**
     * An alias for the item.
     */
    get alternateName(): string;
    /**
     * A description of the item.
     */
    get description(): string;
    /**
     * A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.
     */
    get disambiguatingDescription(): string;
    /**
     * The identifier property represents any kind of identifier for any kind of Thing, such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as stringual strings or as URL (URI) links. See background notes for more details.
     */
    get identifier(): string;
    /**
     * An image of the item.
     */
    get image(): any;
    /**
     * Indicates a page (or other CreativeWork) for which this thing is the main entity being described. See background notes for details.
     */
    get mainEntityOfPage(): NodeReferenceValue;
    /**
     * The name of the item.
     */
    get name(): string;
    /**
     * TODO: this causes circular references, we need to find the target shape in an indirect way
     * Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.
     */
    /**
     * a reference NamedNode that unambiguously indicates the item's identity. E.g. the item's Wikipedia page, Wikidata entry, or official website.
     */
    get sameAs(): NodeReferenceValue;
    /**
     * A CreativeWork or Event about this Thing.
     */
    get subjectOf(): NodeReferenceValue;
    /**
     * URL of the item.
     */
    get url(): string;
    /**
     * An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in.
     */
    get additionalType(): string;
}
