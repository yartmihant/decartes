## Why

В проекте есть только один browser example с полным графом, поэтому для учебного прохождения OpenSpec pipeline нужен маленький, безопасный и визуально понятный change. Демо с котиком из линий показывает, как использовать публичные draw objects Decartes.js, не затрагивая runtime-код библиотеки.

## What Changes

- Добавить standalone browser example `examples/line_cat/index.html`.
- Нарисовать простого котика из публичных line-based primitives Decartes.js.
- Подключить существующий `dist/decartes.js` через относительный путь.
- Добавить документационную ссылку на новый пример.
- Не менять runtime source, публичные экспорты, зависимости, build configuration или собранный output вручную.

## Capabilities

### New Capabilities

- `line-cat-demo`: Демонстрационный browser example, который открывается напрямую из `examples/` и рисует котика из line-based primitives через публичный API Decartes.js.

### Modified Capabilities

- None.

## Impact

- Примеры: новый файл под `examples/line_cat/`.
- Документация: ссылка на новый пример в README или repository layout documentation.
- Runtime source: не меняется.
- Public API: не меняется.
- Dependencies/build config: не меняются.
