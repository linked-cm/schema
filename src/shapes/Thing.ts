/**
 * `Thing`, with the shapes its properties name guaranteed to be registered.
 *
 * `Thing.image` names ImageObject by `[package, name]` because ImageObject
 * extends Thing, so the class module cannot import it. A shape registers only
 * when its module is evaluated, so loading Thing on its own used to leave
 * ImageObject unregistered, and a query traversing `.image` threw
 * "Shape class not found for …/ImageObject" in any bundle where nothing else
 * happened to import it.
 *
 * The class lives in `Thing.class.ts`. This module evaluates it first (the
 * re-export below is this module's first request, so `Thing` is initialised
 * before anything that extends it runs), then registers ImageObject. Modules
 * on ImageObject's own ancestor chain import the `.class` modules, never this
 * one, so the import cannot close a cycle back through `extends Thing`.
 */
export * from './Thing.class.js';
import './ImageObject.class.js';
