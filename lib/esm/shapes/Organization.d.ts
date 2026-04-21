import { ShapeSet } from '@_linked/core/collections/ShapeSet';
import { Person } from './Person.js';
import { Thing } from './Thing.js';
export declare class Organization extends Thing {
    static targetClass: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    get faxNumber(): string;
    get email(): string;
    get legalName(): string;
    get address(): string;
    get telephone(): string;
    static getAffiliationsOf(person: Person): import("@_linked/core/queries/QueryBuilder.js").QueryBuilder<Organization, import("@_linked/core/queries/SelectQuery.js").QShape<Organization, null, "">, import("@_linked/core/queries/SelectQuery.js").QResult<import("@_linked/core/shapes/Shape.js").Shape, {
        "": {
            id: string;
        };
    }>[]>;
    get members(): ShapeSet<Person>;
    get founder(): Person;
}
