---
title: "Derived State Pattern"
added: 2025-10-10T00:00:00Z
category: State Management
difficulty: Intermediate
description: "Compute values from existing state rather than storing redundant data."
---
# Derived State Pattern

Compute values from existing state rather than storing redundant data.

## Problem

Without this pattern, the premise that computing values from existing state rather than storing redundant data falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on state management concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Derived State pattern by computing values from existing state rather than storing redundant data, and reinforce it with concise examples or tests. For example, separate a cart totals reducer from modal visibility state so analytics remains deterministic.
