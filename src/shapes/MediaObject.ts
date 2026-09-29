/**
 * `MediaObject`, with the shapes its properties name guaranteed to be
 * registered: ImageObject (`image`) and Person (`creator`), both inherited.
 * See `Thing.ts` for why the class lives in a `.class` module.
 */
export * from './MediaObject.class.js';
import './ImageObject.class.js';
import './Person.js';
