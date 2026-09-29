---
'@_linked/schema': patch
---

Loading a shape now registers the shapes its properties name.

`Thing.image` names ImageObject by `['@_linked/schema', 'ImageObject']` because
ImageObject extends Thing and cannot be imported from Thing's module. A shape
registers only when its module is evaluated, so an app that imported
`@_linked/schema/shapes/Thing` (or any subclass) without also loading ImageObject
threw `Shape class not found for …/schema/ImageObject` from any query traversing
`.image` — in a production bundle this surfaced as an empty result, not an error.
`CreativeWork.creator` → Person and `ItemList.itemListElements` → ListItem had the
same gap.

Thing, CreativeWork, MediaObject and ImageObject now live in `*.class.ts` modules;
the public `shapes/<Name>` modules re-export them and import the named shapes, and
the ancestor chain imports only the `.class` modules, so no import cycle can reach an
uninitialised `extends`. Public paths and exports are unchanged. Person names
DefinedTerm instead of referencing it, for the same reason.
