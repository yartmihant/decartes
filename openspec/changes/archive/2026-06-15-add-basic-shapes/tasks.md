## 1. Public Contracts

- [x] 1.1 Add `ShapeMaterialConfig` and any required shape constructor input types to `src/interfaces.ts`.
- [x] 1.2 Extend the `Geometry.draw` contract with an optional material argument so closed geometries can detect fill/no-fill behavior.
- [x] 1.3 Update `DrawObject.draw` to pass the current material into `geometry.draw` while preserving existing `LineSegment` behavior.

## 2. Materials and Geometry

- [x] 2.1 Implement `ShapeMaterial` in `src/lib/Materials.ts` with default `strokeColor: '#000'`, `strokeWidth: 1`, default `fillColor: '#000'`, and `fillColor: null` as disabled fill.
- [x] 2.2 Implement `PolylineGeometry` as an open path that strokes transformed points in order and never fills.
- [x] 2.3 Implement `PolygonGeometry` as a closed path that fills before stroke when fill is enabled.
- [x] 2.4 Implement `RectangleGeometry` from `position + size`, preserving negative `size` components as directed scene-space dimensions.
- [x] 2.5 Implement `CircleGeometry` from scene-space `center` and `radius`, converting radius through the current camera scale before canvas drawing.

## 3. Public Draw Objects and Exports

- [x] 3.1 Add public `Polyline`, `Polygon`, `Rectangle`, and `Circle` classes in `src/lib/DrawObjects.ts`.
- [x] 3.2 Export new geometry classes, `ShapeMaterial`, `ShapeMaterialConfig`, and draw object classes from `src/decartes.ts`.
- [x] 3.3 Keep existing `LineSegment`, `LineSegmentGeometry`, and `LineMaterial` imports and behavior backward compatible.

## 4. Documentation and Verification

- [x] 4.1 Update `docs/public-api.md` with the new exports, material defaults, coordinate-space rules, and examples.
- [x] 4.2 Update `docs/repository-layout.md` if file responsibilities or listed interfaces change.
- [x] 4.3 Run `npm run build` and inspect that generated declarations include the new public API.
- [x] 4.4 Review `git diff` to confirm the change is limited to the planned source, docs, build output, and OpenSpec artifacts.
