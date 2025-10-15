---
title: "Dynamic Import"
added: 2025-10-10T00:00:00Z
tags: Performance
difficulty: Advanced
description: "Load modules asynchronously at runtime rather than bundling everything upfront."
---
# Dynamic Import

## Problem

Heavy dependencies load synchronously at startup even if they're only needed for specific user actions. Date picker libraries, chart renderers, or PDF generators block initial page load despite most users never triggering the features that need them. The main bundle balloons with rarely-used utilities.

## Solution

Apply the Dynamic Import pattern by loading modules asynchronously at runtime rather than bundling everything upfront, and reinforce it with concise examples or tests. For example, memoize the transformed dataset before rendering a 500-row analytics grid so scrolling stays smooth.
