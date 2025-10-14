---
id: 3
title: Styling
description: Making apps look their best.
---
# Styling Patterns

Consistent visual systems keep teams shipping fast without sacrificing craft. These patterns help you decide how to structure CSS, share tokens, and isolate styles as the codebase grows.

## Where to Apply Them

- Establish naming or scoping discipline with [BEM Class Naming](/bem-class-naming) or [CSS Modules & Scoped Styles](/css-modules-and-scoped-styles) when multiple squads touch the same UI.
- Reach for [Utility-First CSS](/utility-first-css) or [Design Token](/design-token) governance when the design system needs a single source of truth for spacing, color, and typography.
- Wrap brand-neutral components in a [Theme Provider](/theme-provider) to deliver dark mode, white-labeling, and per-product theming without forking stylesheets.

## Workflow Tips

1. Document a styling decision tree so engineers know when to choose CSS-in-JS, modules, or utilities.
2. Add lint rules that enforce selector conventions and prohibit global leakage.
3. Pair visual review with diffable [Visual Regression](/visual-regression) snapshots to catch unintended design drift.
