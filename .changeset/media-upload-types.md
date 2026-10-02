---
'@_linked/schema': minor
---

The media upload methods accept a fixed set of file types, recognised from the file's content.

- Images (`fromDataURL`, `ImageObjectProvider.fromFormFile`): PNG, JPEG, GIF, WebP and AVIF. Video (`VideoObjectProvider.fromFormFile`): MP4, WebM and QuickTime. Anything else, including SVG and HTML, answers 415.
- `fromDataURL` accepts `data:image/png`, `image/jpeg` (or `image/jpg`), `image/gif`, `image/webp` and `image/avif` URLs, and the decoded bytes must be of the declared type (415 otherwise). BMP, TIFF, HEIF and HEIC data URLs are no longer accepted.
- `fromFormFile` determines the type from the uploaded bytes and ignores the type the client sends. The file is stored with that type.
- The stored file name must end in an extension of the recognised type (`.png`; `.jpg` or `.jpeg`; `.gif`; `.webp`; `.avif`; `.mp4`; `.webm`; `.mov`, in any case), and answers 400 otherwise. Without a `filePath` or upload name the file is named after its type, for example `image.png` or `upload.mp4`.
- The type checks live in `@_linked/schema/utils/MediaTypes` (`detectImageType`, `detectVideoType`, `requireMediaType`, `requireExtensionFor`).
