# AGENTS.md

## Назначение

Это стартовое руководство для coding agents и контрибьюторов, которые работают с Decartes.js.

Decartes.js — небольшая TypeScript-библиотека для отрисовки на Canvas. Публичная точка входа находится в `src/decartes.ts`, исходники живут в `src/`, собранный пакет публикуется из `dist/`.

## С чего начинать

- Для карты файлов и зон ответственности читай [docs/repository-layout.md](docs/repository-layout.md).
- Для публичных экспортов и основных концепций читай [docs/public-api.md](docs/public-api.md).
- Для команд разработки, проверки и OpenSpec workflow читай [docs/development-workflow.md](docs/development-workflow.md).

## Правила работы с проектом

- По возможности пиши документацию на русском языке.
- Не меняй runtime-поведение, публичные экспорты, зависимости или конфигурацию сборки в документационных задачах.
- Если меняешь TypeScript-исходники, сначала найди публичную границу в `src/decartes.ts`, затем вноси минимальные изменения в соответствующий файл под `src/lib/`.
- `dist/` — собранный output. Не редактируй его вручную; обновляй через `npm run build`, если задача требует изменения сборочного результата.
- Если меняются структура `src/`, публичные экспорты, `package.json` scripts или OpenSpec workflow, проверь и обнови этот файл и связанные документы в `docs/`.

## OpenSpec в Codex

- Для Codex используй repo skills: `$openspec-propose`, `$openspec-apply-change`, `$openspec-archive-change`, `$openspec-explore`, `$openspec-sync-specs`.
- Перед реализацией change всегда читай context files из `openspec instructions apply --change "<name>" --json`.

## Проверка

- Для source changes запускай `npm run build`.
- Команда тестов определена как `npm test`; сейчас в репозитории нет тестовых файлов, поэтому Jest может завершиться сообщением о том, что тесты не найдены.
- Для docs-only changes проверь Markdown-ссылки и убедись через `git diff`, что не менялись runtime source, package exports, dependencies или build configuration.
