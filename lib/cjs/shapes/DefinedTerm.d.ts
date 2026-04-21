import { ShapeSet } from '@_linked/core/collections/ShapeSet';
import { CreativeWork } from './CreativeWork.js';
import { Intangible } from './Intangible.js';
export declare class DefinedTerm extends Intangible {
    static targetClass: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    get inDefinedTermSet(): any;
}
export declare class DefinedTermSet extends CreativeWork {
    static targetClass: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    get definedTerms(): ShapeSet<DefinedTerm>;
}
