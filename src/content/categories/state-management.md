---
id: 4
title: State Management
description: Where state lives, how it flows, how to manage it.
---
# State Management Patterns

State choices determine how predictable your UI feels. These patterns help you reason about where data lives, who updates it, and how to keep components in sync without endless prop drilling.

## Key Decisions

- Keep logic local when possible with [State Colocation](/state-colocation) and [State Lifting](/state-lifting) for shared dependencies.
- Model complex interactions using [State Machine](/form-state-machine), [State Reducer](/state-reducer), or [Stable Reference](/stable-reference) to avoid re-render storms.
- Split server and client concerns with [Single Store](/single-store), [Multi-Store](/multi-store), or [Context Testing](/context-testing) depending on team structure and product scope.

## Maintenance Tips

1. Document state diagrams for critical flows so new teammates understand transitions before touching code.
2. Add regression tests around reducers, selectors, and derived data using [Stateful Logic Testing](/stateful-logic-testing).
3. Profile updates regularly to catch unnecessary renders—memoize selectors and prefer immutable updates for clear diffing.
