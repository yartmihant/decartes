## Why

После добавления `Polyline`, `Polygon`, `Rectangle` и `Circle` в библиотеке остался только старый демонстрационный пример с `LineSegment`. Из-за этого новые фигуры нельзя быстро посмотреть в браузере, а важные правила вроде `fillColor: null`, направленного `Rectangle.size` и pixel-based stroke width остаются скрытыми в документации.

## What Changes

- Добавить галерею демонстрационных HTML-примеров для новых базовых фигур.
- Добавить общий demo harness для создания `Scene`, подключения canvas, запуска render loop и управления камерой через pan/zoom.
- Сохранить существующий пример `complete_graph` как line-focused showcase и связать его с общей галереей.
- Добавить отдельные contract-focused примеры для:
  - всех базовых фигур на одной сцене;
  - stroke/fill material behavior;
  - camera transform behavior;
  - положительного и отрицательного `Rectangle.size`.
- Обновить README/docs-ссылки, чтобы примеры было легко найти.
- Не менять runtime API, публичные экспорты, зависимости или конфигурацию сборки.

## Capabilities

### New Capabilities

- `shape-demo-gallery`: Демонстрационная система для просмотра публичных фигур Decartes.js в браузере, включая навигацию по примерам, общий scene harness и примеры, покрывающие ключевые rendering contracts.

### Modified Capabilities

- None.

## Impact

- Примеры: новые файлы под `examples/`, включая галерею и несколько HTML-страниц с демо.
- Документация: README и при необходимости `docs/repository-layout.md` для ссылки на систему примеров.
- Runtime source: не меняется.
- Public API: не меняется.
- Dependencies/build config: не меняются.
