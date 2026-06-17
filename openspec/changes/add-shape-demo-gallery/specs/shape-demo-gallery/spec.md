## ADDED Requirements

### Requirement: Example gallery entry point
The project SHALL provide a browser-openable example gallery entry point at `examples/index.html`.

#### Scenario: User opens the gallery
- **WHEN** a user opens `examples/index.html` in a browser
- **THEN** the page lists links to the available Decartes.js examples, including the existing complete graph example and the new shape-focused examples

#### Scenario: User navigates to a shape example
- **WHEN** a user follows a gallery link to a shape-focused example
- **THEN** the linked page opens a working canvas demonstration that loads the built Decartes.js bundle through a relative path

### Requirement: Shared demo scene harness
The project SHALL provide a reusable examples-only harness for common `Scene` setup, render loop, and camera controls.

#### Scenario: Example initializes a scene
- **WHEN** an example uses the shared harness with a canvas container and scene population callback
- **THEN** the harness creates a `Scene`, attaches it to the container, runs the draw loop, and invokes the callback to add draw objects

#### Scenario: User pans and zooms an example
- **WHEN** a user drags or wheels over a harness-based canvas
- **THEN** the camera pans or zooms using the existing `Camera.move` and `Camera.wheel` behavior

### Requirement: Basic shape overview example
The project SHALL provide a basic shape overview example that renders `Polyline`, `Polygon`, `Rectangle`, and `Circle` together.

#### Scenario: User views all shape primitives
- **WHEN** a user opens the basic shape overview example
- **THEN** the canvas renders at least one `Polyline`, one `Polygon`, one `Rectangle`, and one `Circle`

#### Scenario: Example uses public draw objects
- **WHEN** the basic shape overview example creates its scene
- **THEN** it constructs shapes through the public Decartes.js draw object classes rather than drawing directly on the canvas context

### Requirement: Shape material behavior example
The project SHALL provide a material behavior example for shape stroke and fill settings.

#### Scenario: User compares filled and unfilled closed shapes
- **WHEN** a user opens the material behavior example
- **THEN** the canvas shows closed shapes with configured fills and comparable closed shapes with `fillColor: null`

#### Scenario: User sees stroke styling differences
- **WHEN** a user opens the material behavior example
- **THEN** the canvas shows shape examples with visibly different `strokeColor` or `strokeWidth` values

### Requirement: Camera transform behavior example
The project SHALL provide a camera transform example that demonstrates scene-space shape geometry and pixel-space stroke styling.

#### Scenario: User zooms the camera transform example
- **WHEN** a user changes camera zoom on the camera transform example
- **THEN** rendered shape positions and geometry dimensions change according to camera zoom

#### Scenario: User observes stroke width while zooming
- **WHEN** a user changes camera zoom on a shape with configured `strokeWidth`
- **THEN** the visual stroke width remains the configured canvas pixel width instead of scaling with the shape geometry

### Requirement: Directed rectangle size example
The project SHALL provide a rectangle size example that demonstrates positive and negative `Rectangle.size` components.

#### Scenario: User views positive rectangle size
- **WHEN** a user opens the rectangle size example
- **THEN** the canvas shows a rectangle drawn from its `position` toward positive width and height

#### Scenario: User views negative rectangle size
- **WHEN** a user opens the rectangle size example
- **THEN** the canvas shows a rectangle drawn in the direction indicated by at least one negative `size` component

### Requirement: Documentation links to examples
The project SHALL document how to find and open the example gallery.

#### Scenario: User reads project documentation
- **WHEN** a user reads the README or repository layout documentation
- **THEN** the documentation points to `examples/index.html` as the entry point for browser examples
