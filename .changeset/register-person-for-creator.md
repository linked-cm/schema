---
'@_linked/schema': patch
---

Loading any public shape module now registers every shape reachable through its properties, transitively. Since 1.2.2, loading a Thing subclass outside the CreativeWork chain on its own (Place, Answer, Accommodation and 12 more) left Person unregistered, so a query such as `x.image.creator.name` threw "Shape class not found for …/schema/Person". Public import paths and exports are unchanged.
