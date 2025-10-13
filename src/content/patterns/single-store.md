---
title: "Single Store"
added: 2025-10-10T00:00:00Z
tags: State Management
difficulty: Intermediate
description: "Centralize all application state in one location for predictable updates."
---
# Single Store

Centralize all application state in one location for predictable updates.

## Problem

Without this pattern, the premise that centralizing all application state in one location for predictable updates falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on state management concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Single Store pattern by centralizing all application state in one location for predictable updates, and reinforce it with concise examples or tests. For example, separate a cart totals reducer from modal visibility state so analytics remains deterministic.
