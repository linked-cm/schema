/**
 * `AdministrativeArea`, with every shape reachable through its properties
 * guaranteed to be registered (through Place and Thing).
 *
 * The class lives in `AdministrativeArea.class.ts` because Person's closure
 * names it eagerly (`PostalAddress.areaServed`): without the split, loading
 * AdministrativeArea first left it uninitialised while PostalAddress
 * evaluated. See `Thing.ts` for the rule.
 */
export * from './AdministrativeArea.class.js';
import './Place.js';
