---
title: "State Lifting"
added: 2025-10-10T00:00:00Z
tags: State Management
difficulty: Intermediate
description: "Move state up the component tree to share it between sibling components."
---
# State Lifting

Move state up the component tree to share it between sibling components.

## Problem

Without this pattern, the premise that moving state up the component tree to share it between sibling components falls apart, and small changes trigger cascading regressions.

## Solution

Apply the State Lifting pattern by moving state up the component tree to share it between sibling components, and reinforce it with concise examples or tests. For example, separate a cart totals reducer from modal visibility state so analytics remains deterministic.
