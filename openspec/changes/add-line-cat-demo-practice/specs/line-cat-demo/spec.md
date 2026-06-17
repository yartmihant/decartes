## ADDED Requirements

### Requirement: Line cat demo page
The project SHALL provide a browser-openable line cat example at `examples/line_cat/index.html`.

#### Scenario: User opens the line cat demo
- **WHEN** a user opens `examples/line_cat/index.html` in a browser
- **THEN** the page loads the existing Decartes.js bundle through a valid relative path and creates a working canvas scene

#### Scenario: Demo renders a recognizable cat
- **WHEN** the line cat demo scene is drawn
- **THEN** the canvas shows a simple cat composed from visible line art features including ears, eyes, nose, and whiskers

### Requirement: Demo uses public Decartes draw objects
The line cat demo SHALL construct its drawing through public Decartes.js draw object classes.

#### Scenario: Demo creates line art through public API
- **WHEN** the line cat demo adds cat geometry to the scene
- **THEN** it uses public `LineSegment` draw objects rather than drawing directly on the raw canvas context

#### Scenario: Demo keeps library runtime unchanged
- **WHEN** the line cat demo is implemented
- **THEN** no runtime source files, public exports, dependencies, build configuration, or manually edited build output are changed

### Requirement: Documentation links to the line cat demo
The project SHALL document how to find and open the line cat example.

#### Scenario: User reads project documentation
- **WHEN** a user reads the README or repository layout documentation
- **THEN** the documentation points to `examples/line_cat/index.html` as a browser example
