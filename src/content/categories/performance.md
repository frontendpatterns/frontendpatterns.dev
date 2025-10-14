---
id: 6
title: Performance
description: "Making apps fast: loading, rendering, runtime performance."
---
# Performance Patterns

Delight comes from an interface that responds immediately and stays responsive. These patterns balance critical-path loading, runtime efficiency, and perceived speed so fast feels effortless.

## Core Moves

- Ship meaningful pixels quickly by combining [Critical Asset Preload](/critical-asset-preload), [Resource Hint](/resource-hint), and [Route Prefetching](/route-prefetching).
- Keep interaction fluid with [Performance Profiling](/performance-profiling) and [Code Splitting](/code-splitting) to trim long tasks and hydrate only what matters.
- Use [Progressive Image](/progressive-image) and [Skeleton Loading](/skeleton-loading) to communicate progress while the network catches up.

## Practice Checklist

1. Track Core Web Vitals through real user monitoring and alert when regressions exceed agreed budgets.
2. Run profiling sessions before launching major UI changes to catch expensive effects or re-renders.
3. Document caching and preloading strategies alongside deployment configs so the next feature ships fast by default.
