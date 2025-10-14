---
title: "Lazy Loading"
added: 2025-10-10T00:00:00Z
tags: Performance
difficulty: Advanced
description: "Defer loading of non-critical resources until they're needed."
---
# Lazy Loading

## Problem

Without this pattern, the premise that deferring loading of non-critical resources until they're needed falls apart, and small changes trigger cascading regressions.

## Solution

Apply the Lazy Loading pattern by deferring loading of non-critical resources until they're needed, and reinforce it with concise examples or tests. For example, memoize the transformed dataset before rendering a 500-row analytics grid so scrolling stays smooth.
