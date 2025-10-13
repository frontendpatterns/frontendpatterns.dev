---
title: "Stable Reference Pattern"
added: 2025-10-10T00:00:00Z
category: Performance
difficulty: Advanced
description: "Maintain consistent object and function references across renders to prevent unnecessary updates."
---
# Stable Reference Pattern

Maintain consistent object and function references across renders to prevent unnecessary updates.

## Problem

Without this pattern, the premise that maintaining consistent object and function references across renders to prevent unnecessary updates falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on performance concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Stable Reference pattern by maintaining consistent object and function references across renders to prevent unnecessary updates, and reinforce it with concise examples or tests. For example, memoize the transformed dataset before rendering a 500-row analytics grid so scrolling stays smooth.
