## Context

Сейчас в `examples/` есть только `complete_graph/index.html`, который открывается напрямую в браузере, подключает `../../dist/decartes.js`, создает `Scene` и рисует набор `LineSegment`. Новый учебный example должен следовать той же модели: статический HTML-файл без dev server, bundler, дополнительных зависимостей или изменений runtime source.

Фича нужна прежде всего для демонстрации OpenSpec pipeline, поэтому техническое решение должно быть маленьким, очевидным и легко проверяемым через браузер.

## Goals / Non-Goals

**Goals:**

- Добавить один standalone browser example `examples/line_cat/index.html`.
- Нарисовать узнаваемого котика line art через публичный API Decartes.js.
- Использовать существующий bundle `dist/decartes.js` через относительный путь.
- Оставить demo самодостаточным и открываемым напрямую из файловой системы.
- Добавить документационную ссылку, чтобы пример можно было найти.

**Non-Goals:**

- Не менять `src/`, `dist/`, публичные экспорты или semantics draw objects.
- Не добавлять gallery infrastructure, shared harness, dev server, framework или зависимости.
- Не добавлять interactive controls, hit testing, UI для редактирования сцены или новые primitives.
- Не привязывать этот учебный change к активному `add-shape-demo-gallery`.

## Decisions

### Использовать standalone HTML example

`examples/line_cat/index.html` будет обычной HTML-страницей по образцу существующего `complete_graph`: подключение `../../dist/decartes.js`, создание `Scene`, добавление объектов и запуск отрисовки.

Альтернатива — ждать общей demo gallery из другого активного change. Для учебного pipeline это хуже: пример станет зависеть от незавершенной работы и потеряет изоляцию.

### Рисовать котика через `LineSegment`

Котик будет составлен из нескольких `LineSegment`: контур головы, уши, глаза, нос, усы и простое тело или хвост. Это демонстрирует публичный line-based API без прямого обращения к canvas context.

Альтернатива — использовать `Polyline` или `Polygon`, но `LineSegment` уже присутствует в старом demo и лучше подходит для минимального учебного change.

### Не добавлять общий harness

В этом change setup сцены может остаться локальным внутри HTML-файла. Повторное использование setup-кода относится к более широкой demo gallery задаче и не требуется для маленького проверочного примера.

Альтернатива — сразу вынести общий helper. Это увеличит scope и начнет пересекаться с `add-shape-demo-gallery`.

### Документировать как example, а не API

Документационная ссылка должна вести пользователя к `examples/line_cat/index.html`, но не представлять пример как новую часть package API.

## Risks / Trade-offs

- [Risk] Пример может пересечься с будущей gallery infrastructure. -> Mitigation: держать change standalone и ограничить документацию простой ссылкой.
- [Risk] Относительный путь к `dist/decartes.js` может быть указан неверно. -> Mitigation: явно проверить страницу в браузере или через review HTML-пути.
- [Risk] Котик может быть визуально неочевидным. -> Mitigation: использовать достаточно line segments для ушей, глаз, носа и усов, а также добавить HTML-заголовок рядом с canvas.
