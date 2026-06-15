# Development workflow

Этот документ описывает команды разработки, проверки и OpenSpec workflow для Decartes.js.

## Установка

Зависимости фиксируются через `package-lock.json`.

```bash
npm install
```

## NPM scripts

| Команда | Назначение |
| --- | --- |
| `npm run dev` | Запускает `webpack --env development --watch`. |
| `npm run build` | Запускает production-сборку через webpack. |
| `npm test` | Запускает `jest --env=jsdom`. |

Сейчас в репозитории нет тестовых файлов. Если запустить `npm test` без добавления тестов, Jest может сообщить, что тесты не найдены.

## Сборка

Webpack entry point:

```text
src/decartes.ts
```

Webpack output:

```text
dist/decartes.js
```

TypeScript declaration output также пишется в `dist/`.

Не редактируй `dist/` вручную. Если задача меняет публичный runtime source и требует обновить package output, запускай `npm run build`.

## Проверка изменений

Для docs-only changes:

```bash
git diff -- README.md AGENTS.md docs openspec/changes
```

Проверь, что Markdown-ссылки указывают на существующие файлы и что не менялись:

- `src/`
- `package.json`
- `package-lock.json`
- `webpack.config.js`
- `tsconfig.json`
- `dist/`

Для source changes:

```bash
npm run build
```

Если добавлены или изменены тесты, также запускай:

```bash
npm test
```

## OpenSpec workflow в Codex

В Codex для этого репозитория используются skills из `.agents/skills`:

| Действие | Codex skill |
| --- | --- |
| Предложить change | `$openspec-propose <change-name>` |
| Реализовать tasks | `$openspec-apply-change <change-name>` |
| Архивировать завершенный change | `$openspec-archive-change <change-name>` |
| Обсудить идею до change или во время change | `$openspec-explore <topic>` |
| Синхронизировать delta specs в main specs | `$openspec-sync-specs <change-name>` |

Команды вида `/opsx:*` находятся в `.cursor/commands` и `.github/prompts`; Codex CLI не воспринимает их как slash-команды.

Полезные OpenSpec CLI-команды:

```bash
openspec status --change "<name>" --json
openspec instructions apply --change "<name>" --json
openspec status --change "<name>"
```

Перед реализацией всегда читай `contextFiles`, которые возвращает `openspec instructions apply --change "<name>" --json`.
