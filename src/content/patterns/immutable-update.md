---
title: "Immutable Update"
added: 2025-10-10T00:00:00Z
tags: State Management
difficulty: Intermediate
description: "Treat state as immutable and creating new copies when making changes for predictability."
---
# Immutable Update

Treat state as immutable and creating new copies when making changes for predictability.

## Problem

Without this pattern, the premise that treating state as immutable and creating new copies when making changes for predictability falls apart, and small changes trigger cascading regressions.

## Solution

Apply the Immutable Update pattern by treating state as immutable and creating new copies when making changes for predictability, and reinforce it with concise examples or tests. For example, separate a cart totals reducer from modal visibility state so analytics remains deterministic.
