---
title: "Observer"
added: 2025-10-10T00:00:00Z
tags: State Management
difficulty: Intermediate
description: "Allow multiple components to subscribe and react to state changes automatically."
---
# Observer

Allow multiple components to subscribe and react to state changes automatically.

## Problem

Without this pattern, the premise that allowing multiple components to subscribe and react to state changes automatically falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on state management concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Observer pattern by allowing multiple components to subscribe and react to state changes automatically, and reinforce it with concise examples or tests. For example, separate a cart totals reducer from modal visibility state so analytics remains deterministic.
