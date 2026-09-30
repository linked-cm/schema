/**
 * `Thing`, with every shape reachable through its properties guaranteed to be
 * registered.
 *
 * A shape registers only when its module is evaluated, and a query such as
 * `x.image.creator.name` needs every shape along the path, not just the one
 * the property names directly. So the rule in this package is:
 *
 * - a `.class` module holds the class and imports only the `.class` modules of
 *   its ancestors (for `extends`), so it can always be evaluated first;
 * - the public module re-exports its class FIRST, then imports the PUBLIC
 *   modules of its parent and of the shapes its properties name. Because each
 *   of those public modules does the same, loading any public module registers
 *   the whole closure (Thing → ImageObject → CreativeWork.creator → Person …).
 *
 * Importing a `.class` module for registration would stop that transitivity:
 * that is how loading Thing (or Place, Answer, …) on its own left Person
 * unregistered.
 *
 * A class that other shapes in the closure `extend` or name eagerly
 * (`shape: Place`) must itself be split this way, or loading it first puts it
 * on the import stack uninitialised while its own subclasses evaluate. That is
 * why Place and Intangible have `.class` modules too.
 */
export * from './Thing.class.js';
import './ImageObject.js';
