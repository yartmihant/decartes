## Why

Decartes.js сейчас публично поддерживает только отрисовку отрезков, из-за чего библиотека ограничена самыми простыми canvas-сценами. Небольшой набор базовых фигур делает API полезнее для диаграмм, координатных сцен, простых визуализаций и геометрических примеров без превращения библиотеки в полноценный path engine.

## What Changes

- Добавить публичные draw objects для `Polyline`, `Polygon`, `Rectangle` и `Circle`.
- Добавить соответствующие geometry classes, которые хранят геометрию фигур в координатах сцены и преобразуют ее через `Camera` перед отрисовкой.
- Добавить переиспользуемый stroke/fill material для открытых и закрытых фигур.
- Сохранить толщины линий и рамок в canvas pixels, чтобы они не масштабировались при camera zoom.
- Определить `Rectangle` через `position + size`, где `size` может быть отрицательным и работает как направленный вектор размера в координатах сцены.
- Экспортировать новые публичные классы и обновить документацию публичного API.

## Capabilities

### New Capabilities

- `basic-shapes`: Публичный API и rendering behavior для `Polyline`, `Polygon`, `Rectangle` и `Circle` с scene-space геометрией и pixel-space stroke styling.

### Modified Capabilities

- None.

## Impact

- Исходники: `src/interfaces.ts`, `src/lib/Geometries.ts`, `src/lib/Materials.ts`, `src/lib/DrawObjects.ts` и `src/decartes.ts`.
- Документация: `docs/public-api.md` и, если изменятся зоны ответственности файлов, `docs/repository-layout.md`.
- Публичный API: новые named exports и members default export для новых фигур, geometry classes и material.
- Сборка: при реализации нужно обновить `dist/` через `npm run build`.
- Зависимости: новые runtime или development dependencies не ожидаются.
