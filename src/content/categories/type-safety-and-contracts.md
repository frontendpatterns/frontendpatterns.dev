---
id: 7
title: Type Safety and Contracts
description: Where state lives, how it flows, how to manage it.
---
# Type Safety and Contracts

Strong contracts reduce runtime surprises and accelerate refactors. These patterns keep your types honest across API boundaries, components, and data pipelines.

## Core Patterns

- Define truth with [Schema Validation](/schema-validation) or [Runtime Validation](/runtime-validation) when data crosses trust boundaries.
- Model reusable types using [Discriminated Union](/discriminated-union), [Branded Type](/branded-type), and [Literal Union](/literal-union) to encode business rules directly in the type system.
- Guard component surfaces via [Props Contract](/props-contract) and [Public API](/public-api) so breaking changes are deliberate and discoverable.

## Operational Habits

1. Generate API clients from shared contracts to avoid drift between frontend and backend teams.
2. Use lint rules and CI checks that block `any` creep and enforce strict TypeScript settings.
3. Document contract changes alongside migration guides so downstream consumers refactor with confidence.
