## 1. Demo Page

- [x] 1.1 Create `examples/line_cat/index.html` as a standalone browser-openable example.
- [x] 1.2 Load `../../dist/decartes.js` from the demo page through a valid relative path.
- [x] 1.3 Create a `Scene`, attach it to a canvas container, and draw the scene without requiring a dev server.
- [x] 1.4 Add cat line art using public `LineSegment` draw objects for visible ears, eyes, nose, whiskers, and outline details.
- [x] 1.5 Add a small HTML heading or caption outside the canvas that identifies the example.

## 2. Documentation

- [x] 2.1 Update `README.md` or `docs/repository-layout.md` with a link to `examples/line_cat/index.html`.

## 3. Verification

- [x] 3.1 Verify the demo page references `dist/decartes.js` with the correct relative path.
- [x] 3.2 Verify the canvas renders non-empty cat line art using Decartes draw objects rather than raw canvas drawing.
- [x] 3.3 Review `git diff` to confirm changes are limited to examples, documentation, and OpenSpec artifacts, with no runtime source, public exports, dependencies, build configuration, or manually edited build output changes.
