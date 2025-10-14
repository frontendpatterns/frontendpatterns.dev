---
title: "Virtual Scrolling"
added: 2025-10-10T00:00:00Z
tags: Performance
difficulty: Advanced
description: "Render only visible list items in the viewport to handle massive datasets efficiently."
---
# Virtual Scrolling

Render only visible list items in the viewport to handle massive datasets efficiently.

## Problem

Without this pattern, the premise that rendering only visible list items in the viewport to handle massive datasets efficiently falls apart, and small changes trigger cascading regressions.

## Solution

Apply the Virtual Scrolling pattern by rendering only visible list items in the viewport to handle massive datasets efficiently, and reinforce it with concise examples or tests. For example, memoize the transformed dataset before rendering a 500-row analytics grid so scrolling stays smooth.
