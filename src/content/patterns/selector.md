---
title: "Selector"
added: 2025-10-10T00:00:00Z
tags: State Management
difficulty: Intermediate
description: "Compute derived data from state and memoizing results to optimize re-renders."
---
# Selector

## Problem

Components re-render unnecessarily when accessing derived data from state, even when the specific slice they need hasn't changed. Transforming store data in render functions repeats expensive computations. Every state update triggers recalculations across all subscribed components. Components can't efficiently subscribe to just the portion of state they actually need.

## Solution

Compute derived data from state and memoizing results to optimize re-renders. For example, separate a cart totals reducer from modal visibility state so analytics remains deterministic.
