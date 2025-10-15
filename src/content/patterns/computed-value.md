---
title: "Computed Value"
added: 2025-10-10T00:00:00Z
tags: Performance
difficulty: Advanced
description: "Derive values from state only when dependencies change rather than on every render."
---
# Computed Value

## Problem

Expensive calculations run on every render even when their inputs haven't changed, causing performance degradation. Filtering large lists, sorting data, or formatting values repeats unnecessarily. Components freeze during typing because each keystroke triggers heavy computations. The CPU spins doing the same work over and over with identical inputs.

## Solution

Derive values from state only when dependencies change rather than on every render. For example, memoize the transformed dataset before rendering a 500-row analytics grid so scrolling stays smooth.
