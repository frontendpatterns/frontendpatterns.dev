---
title: "Dependency Injection"
added: 2025-10-10T00:00:00Z
tags: State Management
difficulty: Intermediate
description: "Provide dependencies from the outside rather than creating them internally for better testability."
---
# Dependency Injection

Provide dependencies from the outside rather than creating them internally for better testability.

## Problem

Without this pattern, the premise that providing dependencies from the outside rather than creating them internally for better testability falls apart, and small changes trigger cascading regressions.

## Solution

Apply the Dependency Injection pattern by providing dependencies from the outside rather than creating them internally for better testability, and reinforce it with concise examples or tests. For example, separate a cart totals reducer from modal visibility state so analytics remains deterministic.
