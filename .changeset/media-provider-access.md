---
'@_linked/schema': minor
---

Require a session for the `ImageObjectProvider` and `VideoObjectProvider` file methods, cap upload sizes, and scope files to the caller.

- `fromDataURL`, `fromFormFile`, `deleteFile` and `getAllFilestoreImages` answer 401 without a session.
- Each caller owns a store folder (`users/<sha256 of the account id>` by default). Uploads are written under it, with the client's `filePath` relative to it, so use the returned `contentUrl` rather than building a URL from `filePath`. `getAllFilestoreImages` lists only that folder. `deleteFile` takes a key or a returned URL inside it, and answers 404 for anything else.
- Paths with `..` or `.` segments, empty segments, backslashes, control characters, or a leading `/` or drive letter are rejected with 400.
- Uploads are capped at 10 MiB for images and 200 MiB for video, and answer 413 above that. Override with `LINKED_MAX_IMAGE_UPLOAD_BYTES` / `LINKED_MAX_VIDEO_UPLOAD_BYTES` or `configureMediaUploads()` from `@_linked/schema/utils/MediaUploadPolicy`, which also accepts an `ownerPrefix` function.
- `fromDataURL` accepts raster `data:image/...;base64` URLs only (no SVG). Without a `filePath` it uses a default name instead of failing.
- `fromFormFile` accepts one file, falls back to the uploaded file name when no `filePath` is sent, and removes the temporary upload file afterwards.
