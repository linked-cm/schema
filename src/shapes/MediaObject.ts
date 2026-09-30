/**
 * `MediaObject`, with every shape reachable through its properties guaranteed
 * to be registered: ImageObject (`image`) and, through CreativeWork, Person.
 * See `Thing.ts` for the class/public split.
 */
export * from './MediaObject.class.js';
import './CreativeWork.js';
import './ImageObject.js';
