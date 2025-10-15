---
title: "Memoization"
added: 2025-10-10T00:00:00Z
tags: Performance
difficulty: Advanced
description: "Cache expensive computation results to avoid recalculating with identical inputs."
---
# Memoization

## Problem

Components recalculate expensive operations on every render, even when inputs haven't changed. This causes visible lag during typing, scrolling, or interactions. Sorting large datasets, complex filtering, or data transformations happen dozens of times per second unnecessarily.

## Solution

Cache expensive computation results to avoid recalculating with identical inputs. For example, memoize the transformed dataset before rendering a 500-row analytics grid so scrolling stays smooth.
