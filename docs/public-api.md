# Публичный API

Публичная точка входа Decartes.js находится в `src/decartes.ts`. Package metadata указывает на собранный output:

- `main`: `dist/decartes.js`
- `module`: `dist/decartes.js`
- `types`: `dist/decartes.d.ts`

## Named exports

`src/decartes.ts` экспортирует:

- Types: `pair`, `triple`, `Point`, `Material`, `FillableMaterial`, `Geometry`, `LineMaterialConfig`, `ShapeMaterialConfig`, `PolylineConfig`, `PolygonConfig`, `RectangleConfig`, `CircleConfig`
- Classes: `Vector`, `Color`, `Camera`, `Scene`, `LineSegmentGeometry`, `PolylineGeometry`, `PolygonGeometry`, `RectangleGeometry`, `CircleGeometry`, `LineMaterial`, `ShapeMaterial`, `DrawObject`, `LineSegment`, `Polyline`, `Polygon`, `Rectangle`, `Circle`

## Default export

Default export — объект с runtime-классами:

- `Vector`
- `Color`
- `Camera`
- `Scene`
- `LineSegmentGeometry`
- `PolylineGeometry`
- `PolygonGeometry`
- `RectangleGeometry`
- `CircleGeometry`
- `LineMaterial`
- `ShapeMaterial`
- `DrawObject`
- `LineSegment`
- `Polyline`
- `Polygon`
- `Rectangle`
- `Circle`

Type-only exports не входят в default export, потому что они существуют только на уровне TypeScript.

## Основные концепции

### Scene

`Scene` создает canvas element, хранит `Camera`, список `DrawObject` и canvas context. Метод `setCanvas(container)` добавляет canvas в DOM-контейнер и синхронизирует размер камеры с размером контейнера. Метод `draw()` очищает canvas и отрисовывает все объекты.

### Camera

`Camera` хранит `center`, `scale` и `screen`. Она преобразует координаты между логическим пространством сцены и экранными координатами:

- `loc(pointer)` переводит экранную точку в координаты сцены.
- `pointer(loc)` переводит точку сцены в координаты canvas.
- `wheel(cursor, factor)` меняет масштаб относительно курсора.
- `move(movement)` сдвигает центр камеры.

### Geometry, Material и DrawObject

`DrawObject` объединяет `Geometry` и `Material`. При отрисовке он применяет material к canvas context, пересчитывает view points geometry через camera и вызывает geometry draw.

Текущие concrete primitives:

- `LineSegment`
- `Polyline`
- `Polygon`
- `Rectangle`
- `Circle`

`LineSegment` строится из:

- `LineSegmentGeometry` для точек `a` и `b`
- `LineMaterial` для `lineColor` и `lineWidth`

Остальные базовые фигуры используют:

- `PolylineGeometry`, `PolygonGeometry`, `RectangleGeometry` или `CircleGeometry`
- `ShapeMaterial` для `strokeColor`, `strokeWidth` и `fillColor`

### Базовые фигуры

Геометрические параметры фигур задаются в координатах сцены и масштабируются камерой:

- `Polyline` и `Polygon`: `points`
- `Rectangle`: `position` и `size`
- `Circle`: `center` и `radius`

Визуальные параметры stroke задаются в canvas pixels и не масштабируются камерой:

- `strokeWidth`
- `lineWidth` у `LineMaterial`

`ShapeMaterial` использует defaults:

- `strokeColor: '#000'`
- `strokeWidth: 1`
- `fillColor: '#000'`

`fillColor: null` отключает заливку. `Polyline` всегда остается открытой фигурой и не выполняет fill, даже если `fillColor` задан или используется по умолчанию.

Примеры:

```ts
new Polyline(
    {points: [[0, 0], [1, 1], [2, 0]]},
    {strokeColor: 'black', strokeWidth: 2}
)

new Polygon(
    {points: [[0, 0], [1, 0], [0.5, 1]]},
    {strokeColor: 'black', strokeWidth: 2, fillColor: 'orange'}
)

new Rectangle(
    {position: [0, 0], size: [2, 1]},
    {strokeColor: 'black', strokeWidth: 2, fillColor: null}
)

new Circle(
    {center: [0, 0], radius: 1},
    {strokeColor: 'black', strokeWidth: 2, fillColor: '#eee'}
)
```

`Rectangle.position` — anchor point в координатах сцены. `Rectangle.size` — направленный вектор размера; отрицательная ширина рисует влево от `position`, отрицательная высота рисует вверх от `position`.

### Vector и Color

`Vector` — mutable 2D-вектор с арифметикой, нормализацией, расстояниями, вращением и pair-представлением.

`Color` хранит RGB, принимает hex string, CSS color keyword, RGB triple или другой `Color`, умеет возвращать hex и смешивать цвета.

## Правило поддержки API-документации

Если меняется `src/decartes.ts`, public class constructor, TypeScript type/interface или package entry в `package.json`, обнови этот документ и проверь ссылки из `AGENTS.md`.
