import { ShapeSet } from '@_linked/core/collections/ShapeSet';
import { Place } from './Place.js';
import { Thing } from './Thing.js';
import { PostalAddress } from './PostalAddress.js';
import { DefinedTerm } from './DefinedTerm.js';
import { AdministrativeArea } from './AdministrativeArea.js';
export declare class Person extends Thing {
    static targetClass: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    get givenName(): string;
    get familyName(): string;
    get name(): string;
    get gender(): string;
    get isMarried(): boolean;
    get telephone(): string;
    get birthDate(): Date;
    static getAge(birthDate: Date): number;
    get birthPlace(): Place;
    get knows(): ShapeSet<Person>;
    get skills(): ShapeSet<DefinedTerm>;
    get jobTitle(): string;
    get hasOccupation(): string;
    get homeLocation(): ShapeSet<Place>;
    get honorificPrefix(): string;
    get areaServed(): AdministrativeArea;
    get address(): PostalAddress;
}
