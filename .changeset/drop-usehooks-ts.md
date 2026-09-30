---
'@_linked/schema': patch
---

Drop the unused `usehooks-ts` dependency. Nothing in the package imports it, and its 2.x peer range
(`react ^16.8.0 || ^17 || ^18`) excludes React 19, so apps on React 19 got a nested copy installed
under `@_linked/schema` and a `linked doctor` warning for it.
