---
title: "Lazy Initialization Pattern"
added: 2025-10-10T00:00:00Z
category: State Management
difficulty: Intermediate
description: "Defer expensive state calculations until the first render when they're needed."
---
# Lazy Initialization Pattern

Defer expensive state calculations until the first render when they're needed.

## Problem

Without this pattern, the premise that deferring expensive state calculations until the first render when they're needed falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on state management concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Lazy Initialization pattern by deferring expensive state calculations until the first render when they're needed, and reinforce it with concise examples or tests. For example, separate a cart totals reducer from modal visibility state so analytics remains deterministic.
