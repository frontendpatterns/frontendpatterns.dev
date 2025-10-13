---
title: "Progressive Image Pattern"
added: 2025-10-10T00:00:00Z
category: Performance
difficulty: Advanced
description: "Load low-quality image placeholders first, then replacing with high-quality versions."
---
# Progressive Image Pattern

Load low-quality image placeholders first, then replacing with high-quality versions.

## Problem

Without this pattern, the premise that loading low-quality image placeholders first, then replacing with high-quality versions falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on performance concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Progressive Image pattern by loading low-quality image placeholders first, then replacing with high-quality versions, and reinforce it with concise examples or tests. For example, memoize the transformed dataset before rendering a 500-row analytics grid so scrolling stays smooth.
