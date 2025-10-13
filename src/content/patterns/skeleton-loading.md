---
title: "Skeleton Loading Pattern"
added: 2025-10-10T00:00:00Z
category: Performance
difficulty: Advanced
description: "Show placeholder content that mimics the layout of incoming data for perceived performance."
---
# Skeleton Loading Pattern

Show placeholder content that mimics the layout of incoming data for perceived performance.

## Problem

Without this pattern, the premise that showing placeholder content that mimics the layout of incoming data for perceived performance falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on performance concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Skeleton Loading pattern by showing placeholder content that mimics the layout of incoming data for perceived performance, and reinforce it with concise examples or tests. For example, memoize the transformed dataset before rendering a 500-row analytics grid so scrolling stays smooth.
