---
id: 1
title: Project Structure
description: Organize folders and files within a project.
---
# Project Structure Patterns

Clear structure keeps velocity high as your repo grows. These patterns help you decide where code lives, how modules depend on each other, and how teams discover what they need.

## Establish Shared Conventions

- Start with [Folder Organization](/folder-organization) and [Absolute Import](/absolute-import) so modules can reference each other without fragile relative paths.
- Keep exports intentional using [Barrel Export](/barrel-export) for public surfaces and [Public API](/public-api) to enforce boundaries.
- Co-locate assets with [Colocation](/colocation) and [Documentation as Code](/documentation-as-code) so components ship with stories, tests, and usage notes nearby.

## Continuous Maintenance

1. Review structure during retros when adding products or platforms—new surfaces may deserve dedicated packages or workspaces.
2. Automate checks for circular dependencies and dead modules to prevent rot.
3. Align project layout with onboarding docs so new teammates can navigate intuitively from day one.
