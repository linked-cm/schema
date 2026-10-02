---
'@_linked/schema': minor
---

The `ImageObjectProvider` and `VideoObjectProvider` file methods require a session, cap upload sizes, and keep each caller's files in a folder of their own.

**Behaviour change — files are stored per user.** Each signed-in caller owns a store folder (`users/<sha256 of the account id>` by default, configurable with `ownerPrefix`). Uploads are written under it, `getAllFilestoreImages` lists only it, and `deleteFile` only deletes inside it. Files uploaded with an earlier version are not under any user's folder: they no longer appear in `getAllFilestoreImages` and **can no longer be deleted over RPC** (`deleteFile` answers 404). Remove or move them on the server if needed. The client's `filePath` is now relative to the caller's folder, so use the returned `contentUrl` rather than building a URL from `filePath`.

- `fromDataURL`, `fromFormFile`, `deleteFile` and `getAllFilestoreImages` answer 401 without a session.
- `deleteFile` takes a key or a returned URL inside the caller's folder, and answers 404 for anything else.
- Paths with `..` or `.` segments, empty segments, backslashes, control characters, or a leading `/` or drive letter are rejected with 400.
- Uploads are capped at 10 MiB for images and 200 MiB for video, and answer 413 above that. Override with `LINKED_MAX_IMAGE_UPLOAD_BYTES` / `LINKED_MAX_VIDEO_UPLOAD_BYTES` or `configureMediaUploads()` from `@_linked/schema/utils/MediaUploadPolicy`, which also accepts an `ownerPrefix` function.
- `fromDataURL` uses a default file name when no `filePath` is given.
- `fromFormFile` accepts one file, uses the uploaded file name when no `filePath` is sent, and removes the temporary upload file afterwards.
