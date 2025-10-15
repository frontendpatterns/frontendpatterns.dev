---
title: "Async Boundary"
added: 2025-10-10T00:00:00Z
tags: Performance
difficulty: Advanced
description: "Define fallback UI to show while asynchronous components or data are loading."
---
# Async Boundary

## Problem

Components flash between loading states inconsistently, showing jarring skeleton screens or leaving parts of the UI frozen while data loads. Without centralized loading boundaries, every component must manage its own loading state, creating a chaotic user experience with spinners appearing and disappearing randomly across the page.

## Solution

Define fallback UI to show while asynchronous components or data are loading. For example, memoize the transformed dataset before rendering a 500-row analytics grid so scrolling stays smooth.
