## 1. Demo Structure

- [ ] 1.1 Create `examples/index.html` as the gallery entry point with links to `complete_graph`, `basic_shapes`, `materials`, `camera_transform`, and `rectangle_size`.
- [ ] 1.2 Create `examples/shared/scene-demo.js` for examples-only `Scene` setup, canvas attachment, render loop, wheel zoom, and drag pan.
- [ ] 1.3 Update `examples/complete_graph/index.html` to use the shared harness while preserving the existing complete graph scene idea.

## 2. Shape-Focused Examples

- [ ] 2.1 Add `examples/basic_shapes/index.html` rendering at least one public `Polyline`, `Polygon`, `Rectangle`, and `Circle`.
- [ ] 2.2 Add `examples/materials/index.html` showing configured fills, `fillColor: null`, and visible `strokeColor` or `strokeWidth` differences.
- [ ] 2.3 Add `examples/camera_transform/index.html` showing camera zoom affects shape geometry while configured stroke width remains pixel-based.
- [ ] 2.4 Add `examples/rectangle_size/index.html` showing rectangles with positive and negative `size` components.
- [ ] 2.5 Add HTML headings, legends, or swatches outside canvas for shape-focused examples without using raw canvas text drawing.

## 3. Documentation

- [ ] 3.1 Update `README.md` with `examples/index.html` as the entry point for browser examples.
- [ ] 3.2 Update `docs/repository-layout.md` to document `examples/` and the shared demo helper.

## 4. Verification

- [ ] 4.1 Verify each example page loads `dist/decartes.js` through a valid relative path and renders a non-empty canvas.
- [ ] 4.2 Verify gallery navigation reaches every example listed in the `shape-demo-gallery` spec.
- [ ] 4.3 Verify pan and zoom work on harness-based examples through the existing `Camera.move` and `Camera.wheel` behavior.
- [ ] 4.4 Review `git diff` to confirm implementation changes are limited to examples and documentation, with no runtime source, public exports, dependencies, or build configuration changes.
