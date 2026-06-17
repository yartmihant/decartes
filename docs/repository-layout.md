# Структура репозитория

Этот документ фиксирует текущую карту проекта Decartes.js для агентов и контрибьюторов.

## Основные файлы

| Путь | Назначение |
| --- | --- |
| `README.md` | Краткое package-facing введение и ссылки на документацию. |
| `AGENTS.md` | Корневая точка входа для coding agents и contributor workflow. |
| `docs/` | Долгоживущая проектная документация. |
| `package.json` | Package metadata, npm scripts и dev dependencies. |
| `package-lock.json` | Зафиксированное дерево npm-зависимостей. |
| `webpack.config.js` | Сборка `src/decartes.ts` в UMD bundle `dist/decartes.js`. |
| `tsconfig.json` | TypeScript-настройки, declaration output и strict mode. |
| `.eslintrc` | ESLint-настройки для TypeScript. |
| `src/.babelrc` | Babel preset для webpack pipeline. |
| `dist/` | Собранный package output: JavaScript bundle и `.d.ts` файлы. |
| `examples/` | Статические browser examples, открываемые напрямую из файловой системы. |

## Исходники

| Путь | Назначение |
| --- | --- |
| `src/decartes.ts` | Публичная точка входа: named exports и default export object. |
| `src/interfaces.ts` | Общие типы и интерфейсы: `pair`, `triple`, `Point`, `Material`, `FillableMaterial`, `Geometry`, material configs и shape configs. |
| `src/lib/Vector.ts` | 2D-вектор и операции над точками. |
| `src/lib/Color.ts` | RGB/hex/color keyword utility. |
| `src/lib/Camera.ts` | Преобразование между координатами сцены и экранными координатами. |
| `src/lib/Scene.ts` | Canvas scene, camera, object list и draw lifecycle. |
| `src/lib/Geometries.ts` | Geometry implementations для line segment и базовых фигур. |
| `src/lib/Materials.ts` | Material implementations: `LineMaterial` и `ShapeMaterial`. |
| `src/lib/DrawObjects.ts` | `DrawObject` и high-level primitives: `LineSegment`, `Polyline`, `Polygon`, `Rectangle`, `Circle`. |

## OpenSpec и агентные workflow

| Путь | Назначение |
| --- | --- |
| `openspec/config.yaml` | Repo-local OpenSpec configuration. |
| `openspec/changes/` | Активные OpenSpec changes с proposal/design/specs/tasks. |
| `.agents/skills/` | Repo-scoped Codex skills. Codex читает их при запуске из репозитория. |
| `.codex/skills/` | Дублирующая локальная копия OpenSpec skills для Codex-related tooling. |
| `.cursor/commands/` | Cursor commands. Codex CLI их не читает как slash-команды. |
| `.github/prompts/` | GitHub prompt-файлы для workflow вокруг OpenSpec. |

## Правило поддержки

При изменении структуры `src/`, публичных экспортов, `package.json` scripts, сборочного output или OpenSpec workflow нужно проверить:

- `AGENTS.md`
- `docs/repository-layout.md`
- `docs/public-api.md`
- `docs/development-workflow.md`
- ссылки из `README.md`
