---
"@_linked/schema": patch
---

Export the `schema:author` term. `author` was present in the underlying schema data but missing from the curated term exports; it can now be imported like the other terms:

```ts
import { author, schema } from '@_linked/schema/ontologies/schema';
// author.id === 'http://schema.org/author'; also available as schema.author
```
