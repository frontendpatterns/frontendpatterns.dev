---
title: "Service Locator"
added: 2025-10-10T00:00:00Z
tags: State Management
difficulty: Intermediate
description: "Provide a centralized registry for accessing shared services throughout the application."
---
# Service Locator

Provide a centralized registry for accessing shared services throughout the application.

## Problem

Without this pattern, the premise that centralized registry for accessing shared services throughout the application falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on state management concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Service Locator pattern by centralized registry for accessing shared services throughout the application, and reinforce it with concise examples or tests. For example, separate a cart totals reducer from modal visibility state so analytics remains deterministic.
