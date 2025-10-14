---
title: "Derived State"
added: 2025-10-10T00:00:00Z
tags: State Management
difficulty: Intermediate
description: "Compute values from existing state rather than storing redundant data."
---
# Derived State

Compute values from existing state rather than storing redundant data.

## Problem

Storing computed values as separate state creates sync bugs where derived data becomes stale. Keeping cart total in state means updating it every time items change, and forgetting one update shows wrong totals. Multiple useState calls track values that should be calculated from other state, leading to impossible states where filtered list length doesn't match the actual filtered items.

## Solution

Apply the Derived State pattern by computing values from existing state rather than storing redundant data, and reinforce it with concise examples or tests. For example, separate a cart totals reducer from modal visibility state so analytics remains deterministic.
