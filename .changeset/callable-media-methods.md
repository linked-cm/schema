---
"@_linked/schema": minor
---

Declare the client-called media methods with `@callable('user')` (`ImageObjectProvider.deleteFile`, `getAllFilestoreImages`, `fromDataURL`, `fromFormFile`; `VideoObjectProvider.fromFormFile`), so a server that enforces declared-callable methods keeps dispatching them and answers 401 without a session. Requires `@_linked/server-utils` `^1.9.0`.
