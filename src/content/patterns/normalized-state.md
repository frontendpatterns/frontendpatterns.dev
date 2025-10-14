---
title: "Normalized State"
added: 2025-10-10T00:00:00Z
tags: State Management
difficulty: Intermediate
description: "Structure state as flat lookup tables to avoid data duplication and simplify updates."
---
# Normalized State

Structure state as flat lookup tables to avoid data duplication and simplify updates.

## Problem

Without this pattern, the premise that structuring state as flat lookup tables to avoid data duplication and simplify updates falls apart, and small changes trigger cascading regressions.

## Solution

Apply the Normalized State pattern by structuring state as flat lookup tables to avoid data duplication and simplify updates, and reinforce it with concise examples or tests. For example, separate a cart totals reducer from modal visibility state so analytics remains deterministic.
