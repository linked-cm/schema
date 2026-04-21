import { Thing } from './Thing.js';
import { AdministrativeArea } from './AdministrativeArea.js';
export declare class PostalAddress extends Thing {
    static targetClass: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    get postalCode(): string;
    get areaServed(): AdministrativeArea;
    get addressCountry(): string;
    get addressRegion(): string;
    get addressLocality(): string;
    get streetAddress(): string;
}
