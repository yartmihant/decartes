## Context

В `examples/` сейчас есть только `complete_graph/index.html`, который подключает `../../dist/decartes.js`, создает `Scene`, добавляет много `LineSegment` и вручную дублирует render loop вместе с pan/zoom обработчиками камеры.

Публичный API уже включает новые фигуры `Polyline`, `Polygon`, `Rectangle` и `Circle`, а `docs/public-api.md` описывает их контракты: scene-space geometry, pixel-space stroke width, `ShapeMaterial`, `fillColor: null` и directed `Rectangle.size`. Демонстрационная система должна сделать эти контракты видимыми в браузере без изменения runtime-кода библиотеки.

## Goals / Non-Goals

**Goals:**

- Дать быстрый browser-facing способ посмотреть все публичные фигуры Decartes.js.
- Сохранить текущую простоту примеров: статические HTML/JS файлы, открываемые напрямую из `examples/`.
- Убрать дублирование setup-кода сцены, render loop и camera controls между примерами.
- Разделить обзорные showcase-примеры и contract-focused примеры.
- Сделать новые примеры понятными без добавления `Text` primitive или прямой отрисовки подписей через canvas context.

**Non-Goals:**

- Не менять `src/`, `dist/`, публичные экспорты или semantics фигур.
- Не добавлять dev server, bundler, framework или новые зависимости.
- Не добавлять интерактивный редактор фигур, hit testing, object selection или UI для изменения параметров.
- Не добавлять новый runtime primitive вроде `Text`.

## Decisions

### Использовать статические HTML-примеры

Новые демо будут следовать текущей модели `complete_graph`: обычные HTML-страницы подключают собранный UMD bundle `dist/decartes.js` относительным путем и работают без npm-команд.

Альтернатива — сделать полноценный demo app с dev server. Это дало бы удобную навигацию и переиспользование модулей, но потребовало бы зависимости или build configuration, что противоречит scope change.

### Добавить `examples/index.html` как галерею

Галерея будет входной точкой для примеров и будет ссылаться на:

- `complete_graph/` как существующий line-focused showcase;
- `basic_shapes/`;
- `materials/`;
- `camera_transform/`;
- `rectangle_size/`.

Альтернатива — оставить набор папок без индекса. Это дешевле, но не решает проблему discoverability: пользователь по-прежнему должен знать имена директорий.

### Вынести общий scene harness

Общий скрипт в `examples/shared/` должен инкапсулировать повторяемые части:

- создание `Scene`;
- `scene.setCanvas(container)`;
- запуск `requestAnimationFrame` loop;
- wheel zoom через `scene.camera.wheel`;
- drag pan через `scene.camera.move`.

Каждый пример должен описывать только свои объекты сцены и, при необходимости, начальные camera settings. Такой harness также позволит перевести `complete_graph` на общий setup без изменения его визуальной идеи.

Альтернатива — копировать setup в каждый demo. Это проще на первом файле, но быстро создает расходящиеся варианты pan/zoom поведения.

### Делать подписи через HTML, а не через canvas

Поскольку Decartes.js не предоставляет `Text` primitive, демо не должны использовать прямой `ctx.fillText()` как будто это часть библиотеки. Названия примеров, краткие легенды и ожидаемые наблюдения должны жить в HTML рядом с canvas.

Альтернатива — рисовать подписи через raw canvas context после `scene.draw()`. Это может быть удобно, но смешивает демонстрацию публичного API с обходом API.

### Разделить примеры по контрактам

`basic_shapes` показывает все primitives вместе. Остальные страницы изолируют спорные или неочевидные semantics:

- `materials`: stroke/fill/defaults и `fillColor: null`;
- `camera_transform`: shape geometry масштабируется через camera, stroke width остается pixel-based;
- `rectangle_size`: `position + size`, включая отрицательные компоненты `size`.

Альтернатива — сделать один большой пример со всем сразу. Он будет красивее как витрина, но хуже как проверяемая демонстрация поведения.

## Risks / Trade-offs

- [Risk] Относительные пути к `dist/decartes.js` легко сломать при разной глубине вложенности примеров. → Mitigation: использовать единый layout директорий и явно проверить каждую страницу в браузере.
- [Risk] Общий harness может начать выглядеть как новая публичная API-обертка. → Mitigation: держать его внутри `examples/shared/`, не документировать как package API.
- [Risk] Contract-focused demos могут быть слишком сухими. → Mitigation: оставить `complete_graph` как showcase и сделать `basic_shapes` визуально цельной сценой.
- [Risk] Без canvas text примеры могут быть менее самодокументируемыми внутри изображения. → Mitigation: использовать HTML-заголовки, легенды и цветовые swatches рядом с canvas.
