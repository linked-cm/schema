---
'@_linked/schema': minor
---

Depend on `@_linked/react@^2.0.0` (was `^1.1.0`), `@_linked/primitives@^1.8.0` (was `^1.0`, the first primitives release on `@_linked/react` 2) and `@_linked/core@^2.27.0` (was `^2.22.8`, the core peer range `@_linked/react` 2 requires).

An app on `@_linked/react` 2 no longer installs a second copy of `@_linked/react` 1 through this package or through the primitives it pulls in. The APIs used from it — `createLinkedComponentFn`, `useStyles` and `cl` — did not change in 2.0.

Minor rather than major: `@_linked/react` is a regular dependency here, not a peer, so no consumer has to change anything to install this release; and a major would force every package that depends on `@_linked/schema@^1` (sioc, auth, shape-ui and apps) to change its range just to pick it up.
