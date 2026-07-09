---
"@_linked/schema": patch
---

`Thing.image` is now an **owned** (`contains: true`) object property: an entity exclusively owns its `ImageObject`. Combined with core 2.14.1's owned-property cleanup, replacing/removing an entity's image (`update({image: {contentUrl}})`) now cascade-deletes the previous `ImageObject` instead of leaving it orphaned in the graph.
