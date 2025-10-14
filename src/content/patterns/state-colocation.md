---
title: "State Colocation"
added: 2025-10-10T00:00:00Z
tags: State Management
difficulty: Intermediate
description: "Keep state as close as possible to where it's used to reduce complexity. (See also: Colocation Pattern)"
---
# State Colocation

## Problem

State stored far from where it's actually used creates unnecessary coupling and complexity. Global stores fill up with UI-specific state like modal visibility or form input values. Components re-render unnecessarily when unrelated state changes, and debugging becomes difficult because state mutations can come from anywhere in the application.

## Solution

Apply the State Colocation pattern by keeping state as close as possible to where it's used to reduce complexity. (See also: Colocation Pattern), and reinforce it with concise examples or tests. For example, separate a cart totals reducer from modal visibility state so analytics remains deterministic.
