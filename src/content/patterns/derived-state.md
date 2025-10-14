---
title: "Derived State"
added: 2025-10-10T00:00:00Z
tags: State Management
difficulty: Intermediate
description: "Compute values from existing state rather than storing redundant data."
---
# Derived State

Compute values from existing state rather than storing redundant data.

## Problem

Without this pattern, the premise that computing values from existing state rather than storing redundant data falls apart, and small changes trigger cascading regressions.

## Solution

Apply the Derived State pattern by computing values from existing state rather than storing redundant data, and reinforce it with concise examples or tests. For example, separate a cart totals reducer from modal visibility state so analytics remains deterministic.
