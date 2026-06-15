## Why

Decartes has a minimal README and no organized documentation that lets coding agents or contributors quickly understand the library structure, development commands, public API surface, and safe change workflow. Adding agent-oriented documentation now reduces ramp-up time and makes future implementation work less dependent on ad hoc repository inspection.

## What Changes

- Add an agent-facing documentation structure for Decartes that explains project purpose, repository layout, development commands, testing expectations, and build output.
- Document the public exports and main concepts of the canvas drawing engine at a high level so agents can make scoped changes without guessing ownership boundaries.
- Add guidance for where future agent-facing notes should live and how they should be kept current.
- Do not change runtime APIs, package metadata, build configuration, or drawing behavior.

## Capabilities

### New Capabilities
- `agent-docs-organization`: Defines the required structure and content expectations for agent-oriented project documentation.

### Modified Capabilities
- None.

## Impact

- Affected docs: `README.md` and/or new documentation files under a repo-local docs directory.
- Affected process: future coding-agent and contributor workflows should use the organized documentation as the first source of repository orientation.
- Affected code: none expected; this is a documentation-only change.
- Dependencies: none.
