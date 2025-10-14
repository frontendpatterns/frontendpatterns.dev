---
title: "Progressive Image"
added: 2025-10-10T00:00:00Z
tags: Performance
difficulty: Advanced
description: "Load low-quality image placeholders first, then replacing with high-quality versions."
---
# Progressive Image

## Problem

Without this pattern, the premise that loading low-quality image placeholders first, then replacing with high-quality versions falls apart, and small changes trigger cascading regressions.

## Solution

Apply the Progressive Image pattern by loading low-quality image placeholders first, then replacing with high-quality versions, and reinforce it with concise examples or tests. For example, memoize the transformed dataset before rendering a 500-row analytics grid so scrolling stays smooth.
