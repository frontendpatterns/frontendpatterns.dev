---
title: "Immutable Update"
added: 2025-10-10T00:00:00Z
tags: State Management
difficulty: Intermediate
description: "Treat state as immutable and creating new copies when making changes for predictability."
---
# Immutable Update

Treat state as immutable and creating new copies when making changes for predictability.

## Problem

Directly mutating state objects breaks React's change detection, causing components to show stale data. Array.push() or object property assignments don't trigger re-renders. Debugging becomes impossible when state changes happen without clear tracking. Time-travel debugging and undo/redo features can't work because there's no history of immutable states.

## Solution

Apply the Immutable Update pattern by treating state as immutable and creating new copies when making changes for predictability, and reinforce it with concise examples or tests. For example, separate a cart totals reducer from modal visibility state so analytics remains deterministic.
