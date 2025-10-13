---
title: "Virtual Scrolling Pattern"
added: 2025-10-10T00:00:00Z
category: Performance
difficulty: Advanced
description: "Render only visible list items in the viewport to handle massive datasets efficiently."
---
# Virtual Scrolling Pattern

Render only visible list items in the viewport to handle massive datasets efficiently.

## Problem

Without this pattern, the premise that rendering only visible list items in the viewport to handle massive datasets efficiently falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on performance concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Virtual Scrolling pattern by rendering only visible list items in the viewport to handle massive datasets efficiently, and reinforce it with concise examples or tests. For example, memoize the transformed dataset before rendering a 500-row analytics grid so scrolling stays smooth.
