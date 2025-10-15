---
title: "Progressive Image"
added: 2025-10-10T00:00:00Z
tags: Performance
difficulty: Advanced
description: "Load low-quality image placeholders first, then replacing with high-quality versions."
---
# Progressive Image

## Problem

Users stare at blank white rectangles while high-resolution images load, creating a jarring experience. Layout shifts occur when images suddenly pop in after several seconds. Slow connections leave pages feeling broken with missing content. Users can't tell if images are loading or failed to load entirely.

## Solution

Apply the Progressive Image pattern by loading low-quality image placeholders first, then replacing with high-quality versions, and reinforce it with concise examples or tests. For example, memoize the transformed dataset before rendering a 500-row analytics grid so scrolling stays smooth.
