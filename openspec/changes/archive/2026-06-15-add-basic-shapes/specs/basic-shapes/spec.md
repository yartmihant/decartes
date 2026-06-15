## ADDED Requirements

### Requirement: Basic shape primitives
The library SHALL provide public draw object classes for `Polyline`, `Polygon`, `Rectangle`, and `Circle`.

#### Scenario: Consumer imports basic shape primitives
- **WHEN** a consumer imports from the public Decartes entry point
- **THEN** the consumer can access `Polyline`, `Polygon`, `Rectangle`, and `Circle`

#### Scenario: Scene draws basic shape primitives
- **WHEN** a `Scene` contains instances of `Polyline`, `Polygon`, `Rectangle`, and `Circle`
- **THEN** `Scene.draw()` renders each primitive through the existing draw object lifecycle

### Requirement: Scene-space geometry
The library SHALL store basic shape geometry in scene coordinates and MUST transform that geometry through `Camera` before drawing to canvas.

#### Scenario: Camera zoom affects shape size
- **WHEN** the camera zoom changes before drawing a `Circle`, `Rectangle`, `Polygon`, or `Polyline`
- **THEN** the rendered positions and geometry dimensions change according to the camera transform

#### Scenario: Stroke width remains pixel-based
- **WHEN** the camera zoom changes before drawing a shape with a configured `strokeWidth`
- **THEN** the visual stroke width remains the configured number of canvas pixels

### Requirement: Stroke and fill material
The library SHALL provide a reusable shape material configuration with `strokeColor`, `strokeWidth`, and `fillColor`.

#### Scenario: Shape material uses defaults
- **WHEN** a shape is created with an empty material configuration
- **THEN** the shape uses `strokeColor` `#000`, `strokeWidth` `1`, and `fillColor` `#000`

#### Scenario: Shape material disables fill
- **WHEN** a closed shape is created with `fillColor: null`
- **THEN** the shape is drawn without a fill operation while retaining its stroke styling

#### Scenario: Shape material applies configured fill
- **WHEN** a closed shape is created with a non-null `fillColor`
- **THEN** the shape is filled with that color before its stroke is drawn

### Requirement: Polyline rendering
The library SHALL render `Polyline` as an open connected sequence of scene-space points.

#### Scenario: Polyline connects points in order
- **WHEN** a `Polyline` is created with three or more points
- **THEN** drawing the polyline connects the transformed points in the same order without closing the path

#### Scenario: Polyline does not fill
- **WHEN** a `Polyline` is created with a material configuration that includes or defaults `fillColor`
- **THEN** drawing the polyline does not perform a fill operation

### Requirement: Polygon rendering
The library SHALL render `Polygon` as a closed shape from an ordered sequence of scene-space points.

#### Scenario: Polygon closes path
- **WHEN** a `Polygon` is created with three or more points
- **THEN** drawing the polygon closes the path between the last transformed point and the first transformed point

### Requirement: Rectangle position and size
The library SHALL render `Rectangle` from a scene-space `position` and directed scene-space `size`.

#### Scenario: Rectangle uses positive size
- **WHEN** a `Rectangle` is created with `position: [x, y]` and `size: [width, height]` where both size components are positive
- **THEN** drawing the rectangle renders from the transformed anchor point toward positive width and positive height

#### Scenario: Rectangle accepts negative size
- **WHEN** a `Rectangle` is created with a negative width or height component in `size`
- **THEN** drawing the rectangle renders in the direction indicated by the signed size component without rejecting or normalizing the public input

### Requirement: Circle center and radius
The library SHALL render `Circle` from a scene-space `center` and scene-space `radius`.

#### Scenario: Circle radius scales with camera
- **WHEN** a `Circle` is created with a radius in scene coordinates
- **THEN** drawing the circle converts that radius to canvas-space size using the current camera scale
