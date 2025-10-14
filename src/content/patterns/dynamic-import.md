---
title: "Dynamic Import"
added: 2025-10-10T00:00:00Z
tags: Performance
difficulty: Advanced
description: "Load modules asynchronously at runtime rather than bundling everything upfront."
---
# Dynamic Import

## Problem

Without this pattern, the premise that loading modules asynchronously at runtime rather than bundling everything upfront falls apart, and small changes trigger cascading regressions.

## Solution

Apply the Dynamic Import pattern by loading modules asynchronously at runtime rather than bundling everything upfront, and reinforce it with concise examples or tests. For example, memoize the transformed dataset before rendering a 500-row analytics grid so scrolling stays smooth.
