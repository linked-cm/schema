---
'@_linked/schema': minor
---

Image uploads accept SVG again. `ImageObject.fromFormFile` and `fromDataURL` (declared `image/svg+xml`) accept a file whose content is an SVG document, recognised from its bytes: after an optional UTF-8 byte order mark, an optional XML declaration, and any comments, processing instructions or an `svg` doctype (without an internal subset), the root element must be `<svg>`. It must be named with `.svg` and is stored as `image/svg+xml`. HTML is still refused, as is an SVG under any other extension. This relies on `/uploads` being served with `X-Content-Type-Options: nosniff` and `Content-Security-Policy: sandbox` (as `@_linked/server` does), which keeps script inside an SVG from running.
