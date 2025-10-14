---
title: "Skeleton Loading"
added: 2025-10-10T00:00:00Z
tags: Performance
difficulty: Advanced
description: "Show placeholder content that mimics the layout of incoming data for perceived performance."
---
# Skeleton Loading

## Problem

Without this pattern, the premise that showing placeholder content that mimics the layout of incoming data for perceived performance falls apart, and small changes trigger cascading regressions.

## Solution

Apply the Skeleton Loading pattern by showing placeholder content that mimics the layout of incoming data for perceived performance, and reinforce it with concise examples or tests. For example, memoize the transformed dataset before rendering a 500-row analytics grid so scrolling stays smooth.
