---
title: "Lazy Initialization"
added: 2025-10-10T00:00:00Z
tags: State Management
difficulty: Intermediate
description: "Defer expensive state calculations until the first render when they're needed."
---
# Lazy Initialization

Defer expensive state calculations until the first render when they're needed.

## Problem

Without this pattern, the premise that deferring expensive state calculations until the first render when they're needed falls apart, and small changes trigger cascading regressions.

## Solution

Apply the Lazy Initialization pattern by deferring expensive state calculations until the first render when they're needed, and reinforce it with concise examples or tests. For example, separate a cart totals reducer from modal visibility state so analytics remains deterministic.
