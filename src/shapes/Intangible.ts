/**
 * `Intangible`, with every shape reachable through its properties guaranteed
 * to be registered (through Thing).
 *
 * The class lives in `Intangible.class.ts` because Person's closure contains
 * DefinedTerm, which extends Intangible: without the split, loading Intangible
 * first left it uninitialised while DefinedTerm evaluated. See `Thing.ts` for
 * the rule.
 */
export * from './Intangible.class.js';
import './Thing.js';
