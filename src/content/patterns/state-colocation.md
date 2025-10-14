---
title: "State Colocation"
added: 2025-10-10T00:00:00Z
tags: State Management
difficulty: Intermediate
description: "Keep state as close as possible to where it's used to reduce complexity. (See also: Colocation Pattern)"
---
# State Colocation

Keep state as close as possible to where it's used to reduce complexity. (See also: Colocation Pattern)

## Problem

Without this pattern, the premise that keeping state as close as possible to where it's used to reduce complexity. (See also: Colocation Pattern) falls apart, and small changes trigger cascading regressions.

## Solution

Apply the State Colocation pattern by keeping state as close as possible to where it's used to reduce complexity. (See also: Colocation Pattern), and reinforce it with concise examples or tests. For example, separate a cart totals reducer from modal visibility state so analytics remains deterministic.
