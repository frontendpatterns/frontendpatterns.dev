---
title: "Dependency Injection Pattern"
added: 2025-10-10T00:00:00Z
category: State Management
difficulty: Intermediate
description: "Provide dependencies from the outside rather than creating them internally for better testability."
---
# Dependency Injection Pattern

Provide dependencies from the outside rather than creating them internally for better testability.

## Problem

Without this pattern, the premise that providing dependencies from the outside rather than creating them internally for better testability falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on state management concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Dependency Injection pattern by providing dependencies from the outside rather than creating them internally for better testability, and reinforce it with concise examples or tests. For example, separate a cart totals reducer from modal visibility state so analytics remains deterministic.
