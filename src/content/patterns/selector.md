---
title: "Selector"
added: 2025-10-10T00:00:00Z
tags: State Management
difficulty: Intermediate
description: "Compute derived data from state and memoizing results to optimize re-renders."
---
# Selector

Compute derived data from state and memoizing results to optimize re-renders.

## Problem

Without this pattern, the premise that computing derived data from state and memoizing results to optimize re-renders falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on state management concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Selector pattern by computing derived data from state and memoizing results to optimize re-renders, and reinforce it with concise examples or tests. For example, separate a cart totals reducer from modal visibility state so analytics remains deterministic.
