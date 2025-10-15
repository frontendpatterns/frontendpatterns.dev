---
title: "Immutable Update"
added: 2025-10-10T00:00:00Z
tags: State Management
difficulty: Intermediate
description: "Treat state as immutable and creating new copies when making changes for predictability."
---
# Immutable Update

## Problem

Directly mutating state objects breaks change detection, causing components to show stale data. Array.push() or object property assignments don't trigger re-renders. Debugging becomes impossible when state changes happen without clear tracking. Time-travel debugging and undo/redo features can't work because there's no history of immutable states.

## Solution

Treat state as immutable and create new copies when making changes for predictability. For example, separate a cart totals reducer from modal visibility state so analytics remains deterministic.
