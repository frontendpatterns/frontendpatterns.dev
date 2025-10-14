---
id: 2
title: Component
description: How to structure, compose, and organize UI components.
---
# Component Patterns

Components are the building blocks of your product. These patterns ensure they stay composable, testable, and easy to evolve as requirements change.

## Crafting Reliable Components

- Guarantee explicit APIs with [Props Contract](/props-contract) and [Component Interface](/component-interface) so consumers know exactly what to pass.
- Reach for [Compound Component](/compound-component), [Slot](/slot), and [Render Function](/render-function) patterns when flexibility is more important than rigid hierarchies.
- Manage cross-cutting concerns using [Composition Over Inheritance](/composition-over-inheritance) and [Controller/Presenter](/presentational-vs-container) splits to keep state and view separate.

## Sustain Quality

1. Cover behaviour with [Component Testing](/component-testing) and story-driven docs that exercise states and variants.
2. Mark deprecations clearly with [Component Deprecation](/component-deprecation) and [Public API](/public-api) guidelines to phase out legacy props safely.
3. Continuously evaluate bundle impact via [Bundle Size Monitoring](/bundle-size-monitoring) so components stay lightweight at scale.
