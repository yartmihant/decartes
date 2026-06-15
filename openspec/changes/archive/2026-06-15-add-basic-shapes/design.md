## Context

Текущая архитектура Decartes.js уже разделяет публичный draw object, geometry и material:

- `DrawObject` связывает `Geometry` и `Material`.
- `Geometry` хранит точки в координатах сцены, пересчитывает `view_points` через `Camera` и рисует в canvas context.
- `Material` применяет canvas styles перед отрисовкой geometry.
- Единственная concrete primitive сейчас — `LineSegment` с `LineSegmentGeometry` и `LineMaterial`.

Новый набор фигур должен расширить эту модель, сохранив простоту API и текущую семантику камеры: геометрические размеры живут в координатах сцены, а визуальные толщины линий живут в пикселях canvas.

## Goals / Non-Goals

**Goals:**

- Добавить `Polyline`, `Polygon`, `Rectangle` и `Circle` как high-level public primitives.
- Добавить geometry classes для этих primitives.
- Добавить общий stroke/fill material для фигур.
- Сохранить `LineSegment` и `LineMaterial` без изменения пользовательского сценария.
- Сделать поведение заливки явным: `fillColor` по умолчанию равен `#000`, а `fillColor: null` отключает заливку.
- Зафиксировать `Rectangle` как `position + size`, где `size` может быть отрицательным.

**Non-Goals:**

- Не добавлять `Text`, `Ellipse`, `Arc`, `BezierCurve` или произвольный `Path` в этом change.
- Не добавлять hit testing, scene graph nesting, z-index, transforms на уровне объекта или события мыши.
- Не менять систему координат `Camera`.
- Не добавлять новые зависимости.

## Decisions

### Переиспользовать модель `Geometry + Material + DrawObject`

Новые primitives будут следовать текущему паттерну:

- public class в `DrawObjects.ts`;
- corresponding geometry в `Geometries.ts`;
- material в `Materials.ts`;
- explicit exports из `src/decartes.ts`.

Альтернатива — сделать отдельные draw methods прямо в `Scene`, например `scene.circle(...)`. Это быстрее для небольшого API, но хуже масштабируется и ломает уже существующую композицию `DrawObject`.

### Добавить `ShapeMaterial` и `ShapeMaterialConfig`

Для новых фигур нужен material с настройками:

- `strokeColor?: Color | string`
- `strokeWidth?: number`
- `fillColor?: Color | string | null`

Defaults:

- `strokeColor: '#000'`
- `strokeWidth: 1`
- `fillColor: '#000'`

`fillColor: null` означает отсутствие заливки. Это отличается от `undefined`, потому что `undefined` использует default value.

Альтернатива — расширить `LineMaterial`. Это смешивает line-specific naming (`lineColor`, `lineWidth`) с shape-specific semantics и делает API менее ясным.

### Расширить draw contract минимально для fill/no-fill

Закрытые фигуры должны знать, нужно ли выполнять `ctx.fill()`. Текущий `Geometry.draw(ctx)` не получает material, поэтому у geometry нет способа отличить `fillColor: null` от default fill.

Минимальный вариант: расширить `Geometry.draw` до optional material argument:

```ts
draw(ctx: CanvasRenderingContext2D, material?: Material): void
```

`DrawObject.draw` будет передавать текущий material в geometry. Существующий `LineSegmentGeometry.draw(ctx)` может игнорировать второй аргумент, поэтому пользовательское поведение отрезков не меняется.

Альтернатива — всегда выполнять transparent fill при `fillColor: null`. Это проще, но делает “нет заливки” неявным и зависит от canvas compositing behavior.

### Держать geometry в scene units, styles в pixels

Scene-space values:

- points;
- rectangle `position`;
- rectangle `size`;
- circle `center`;
- circle `radius`;
- polygon/polyline vertices.

Pixel-space values:

- `strokeWidth`;
- future border widths;
- future dash lengths and text font size, если такие параметры появятся.

Это сохраняет ожидаемое поведение zoom: форма масштабируется, а толщина линии остается визуально постоянной.

### Разделить open и closed shape drawing

`Polyline` является открытой фигурой: она использует stroke styling, но не выполняет fill, даже если material имеет default `fillColor: '#000'`.

`Polygon`, `Rectangle` и `Circle` являются закрытыми фигурами: они выполняют fill перед stroke, если `ShapeMaterial` сообщает, что заливка включена.

Альтернатива — позволить всем geometry вызывать `fill()`. Для `Polyline` это не подходит, потому что canvas закрывает открытый path при fill и может создать неожиданную залитую область.

### `Rectangle` использует directed `size`

`Rectangle` принимает:

```ts
new Rectangle({ position: [x, y], size: [width, height] }, material)
```

`position` — anchor point в координатах сцены. `size` — направленный вектор размера. Отрицательная ширина рисует влево от `position`, отрицательная высота рисует вверх от `position`. Реализация не должна нормализовать отрицательные размеры в публичной семантике; canvas path может строиться напрямую из преобразованных углов.

Альтернатива — требовать неотрицательные размеры. Это проще валидировать, но менее выразительно и хуже подходит для drag-to-create workflows.

## Risks / Trade-offs

- Расширение `Geometry.draw` затрагивает публичный TypeScript interface → сделать второй аргумент optional и сохранить существующие implementations совместимыми.
- `ShapeMaterial` и `LineMaterial` частично дублируют stroke settings → принять дублирование ради понятного API и backward compatibility.
- Default `fillColor: '#000'` может неожиданно заливать closed shapes при пустом material config → явно задокументировать default и сценарий `fillColor: null`.
- Отрицательный `Rectangle.size` может путать при чтении docs → описать `size` как directed vector и добавить scenario в spec.
