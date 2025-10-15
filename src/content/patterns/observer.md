---
title: "Observer"
added: 2025-10-10T00:00:00Z
tags: State Management
difficulty: Intermediate
description: "Allow multiple components to subscribe and react to state changes automatically."
---
# Observer

## Problem

Components need to manually check for state changes through polling or prop drilling, missing updates. Parent components must explicitly pass callbacks down to children for every possible state change. Adding new subscribers requires modifying existing code. When state updates, there's no clean way to notify all interested parties without tight coupling.

## Solution

Allow multiple components to subscribe and react to state changes automatically. For example, separate a cart totals reducer from modal visibility state so analytics remains deterministic.
