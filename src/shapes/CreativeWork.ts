/**
 * `CreativeWork`, with the shapes its properties name guaranteed to be registered:
 * Person (`creator`, named by `[package, name]`) and ImageObject (`image`,
 * inherited from Thing). See `Thing.ts` for why the class lives in a `.class`
 * module and this one only re-exports it.
 */
export * from './CreativeWork.class.js';
import './ImageObject.class.js';
import './Person.js';
