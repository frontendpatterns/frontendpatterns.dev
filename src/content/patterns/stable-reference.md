---
title: "Stable Reference"
added: 2025-10-10T00:00:00Z
tags: Performance
difficulty: Advanced
description: "Maintain consistent object and function references across renders to prevent unnecessary updates."
---
# Stable Reference

Maintain consistent object and function references across renders to prevent unnecessary updates.

## Problem

Without this pattern, the premise that maintaining consistent object and function references across renders to prevent unnecessary updates falls apart, and small changes trigger cascading regressions.

## Solution

Apply the Stable Reference pattern by maintaining consistent object and function references across renders to prevent unnecessary updates, and reinforce it with concise examples or tests. For example, memoize the transformed dataset before rendering a 500-row analytics grid so scrolling stays smooth.
