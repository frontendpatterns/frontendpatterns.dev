---
title: "State Synchronization Pattern"
added: 2025-10-10T00:00:00Z
category: State Management
difficulty: Intermediate
description: "Keep component state in sync with external data sources or other components."
---
# State Synchronization Pattern

Keep component state in sync with external data sources or other components.

## Problem

Without this pattern, the premise that keeping component state in sync with external data sources or other components falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on state management concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the State Synchronization pattern by keeping component state in sync with external data sources or other components, and reinforce it with concise examples or tests. For example, separate a cart totals reducer from modal visibility state so analytics remains deterministic.
