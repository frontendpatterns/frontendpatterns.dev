---
title: "Normalized State Pattern"
added: 2025-10-10T00:00:00Z
category: State Management
difficulty: Intermediate
description: "Structure state as flat lookup tables to avoid data duplication and simplify updates."
---
# Normalized State Pattern

Structure state as flat lookup tables to avoid data duplication and simplify updates.

## Problem

Without this pattern, the premise that structuring state as flat lookup tables to avoid data duplication and simplify updates falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on state management concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Normalized State pattern by structuring state as flat lookup tables to avoid data duplication and simplify updates, and reinforce it with concise examples or tests. For example, separate a cart totals reducer from modal visibility state so analytics remains deterministic.
