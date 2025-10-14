---
title: "Async Boundary"
added: 2025-10-10T00:00:00Z
tags: Performance
difficulty: Advanced
description: "Define fallback UI to show while asynchronous components or data are loading."
---
# Async Boundary

Define fallback UI to show while asynchronous components or data are loading.

## Problem

Without this pattern, the premise that defining fallback UI to show while asynchronous components or data are loading falls apart, and small changes trigger cascading regressions.

## Solution

Apply the Async Boundary pattern by defining fallback UI to show while asynchronous components or data are loading, and reinforce it with concise examples or tests. For example, memoize the transformed dataset before rendering a 500-row analytics grid so scrolling stays smooth.
