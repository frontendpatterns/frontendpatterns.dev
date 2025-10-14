---
title: "Service Locator"
added: 2025-10-10T00:00:00Z
tags: State Management
difficulty: Intermediate
description: "Provide a centralized registry for accessing shared services throughout the application."
---
# Service Locator

## Problem

Without this pattern, the premise that centralized registry for accessing shared services throughout the application falls apart, and small changes trigger cascading regressions.

## Solution

Apply the Service Locator pattern by centralized registry for accessing shared services throughout the application, and reinforce it with concise examples or tests. For example, separate a cart totals reducer from modal visibility state so analytics remains deterministic.
