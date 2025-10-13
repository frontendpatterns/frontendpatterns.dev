---
title: "Resource Hint"
added: 2025-10-10T00:00:00Z
tags: Performance
difficulty: Advanced
description: "Use preload, prefetch, and preconnect to optimize resource loading timing."
---
# Resource Hint

Use preload, prefetch, and preconnect to optimize resource loading timing.

## Problem

Without this pattern, the premise that using preload, prefetch, and preconnect to optimize resource loading timing falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on performance concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Resource Hint pattern by using preload, prefetch, and preconnect to optimize resource loading timing, and reinforce it with concise examples or tests. For example, memoize the transformed dataset before rendering a 500-row analytics grid so scrolling stays smooth.
