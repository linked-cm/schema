/**
 * `CreativeWork`, with every shape reachable through its properties guaranteed
 * to be registered: Person (`creator`, named by `[package, name]`) and,
 * through Thing, ImageObject. See `Thing.ts` for the class/public split.
 */
export * from './CreativeWork.class.js';
import './Thing.js';
import './Person.js';
