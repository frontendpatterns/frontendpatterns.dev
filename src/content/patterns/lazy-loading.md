---
title: "Lazy Loading"
added: 2025-10-10T00:00:00Z
tags: Performance
difficulty: Advanced
description: "Defer loading of non-critical resources until they're needed."
---
# Lazy Loading

## Problem

Initial page load downloads megabytes of JavaScript that users may never use. Critical first-page interactions are delayed because the browser is busy parsing code for admin panels, settings pages, or rarely-accessed features. Time-to-interactive suffers, especially on mobile devices.

## Solution

Defer loading of non-critical resources until they're needed. For example, memoize the transformed dataset before rendering a 500-row analytics grid so scrolling stays smooth.
