---
title: "Code Splitting Pattern"
added: 2025-10-10T00:00:00Z
category: Performance
difficulty: Advanced
description: "Break application code into smaller bundles loaded on demand to reduce initial load time."
---
# Code Splitting Pattern

Break application code into smaller bundles loaded on demand to reduce initial load time.

## Problem

Without this pattern, the premise that breaking application code into smaller bundles loaded on demand to reduce initial load time falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on performance concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Code Splitting pattern by breaking application code into smaller bundles loaded on demand to reduce initial load time, and reinforce it with concise examples or tests. For example, memoize the transformed dataset before rendering a 500-row analytics grid so scrolling stays smooth.
