import { Person } from '../shapes/Person.js';
import { ShapeSet } from '@_linked/core/collections/ShapeSet';
type SinglePersonOverviewData = {
    id?: string;
    name?: string;
    knows?: ShapeSet<Person>;
    birthPlace?: Person['birthPlace'];
    bpName?: string;
};
export declare const SinglePersonOverview: import("@_linked/react/utils/LinkedComponent.js").LinkedComponent<SinglePersonOverviewData, Person, {
    name: import("@_linked/core/queries/SelectQuery.js").QueryPrimitive<string, import("@_linked/core/queries/SelectQuery.js").QShape<Person, null, "">, "name">;
    knows: import("@_linked/core/queries/SelectQuery.js").QShapeSet<Person, import("@_linked/core/queries/SelectQuery.js").QShape<Person, null, "">, "knows">;
    birthPlace: import("@_linked/core/queries/SelectQuery.js").QShape<import("../shapes/Place.js").Place, import("@_linked/core/queries/SelectQuery.js").QShape<Person, null, "">, "birthPlace">;
    bpName: import("@_linked/core/queries/SelectQuery.js").QueryPrimitive<string, import("@_linked/core/queries/SelectQuery.js").QShape<import("../shapes/Place.js").Place, import("@_linked/core/queries/SelectQuery.js").QShape<Person, null, "">, "birthPlace">, "name">;
}>;
export {};
