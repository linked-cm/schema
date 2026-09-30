/**
 * `Place`, with every shape reachable through its properties guaranteed to be
 * registered (through Thing: ImageObject, and Person via `image.creator`).
 *
 * The class lives in `Place.class.ts` because Person's closure contains
 * AdministrativeArea, which extends Place: without the split, loading Place
 * first left it uninitialised while AdministrativeArea evaluated. See
 * `Thing.ts` for the rule.
 */
export * from './Place.class.js';
import './Thing.js';
