---
title: "Multi-Store"
added: 2025-10-10T00:00:00Z
tags: State Management
difficulty: Intermediate
description: "Divide application state into multiple independent stores for better separation of concerns."
---
# Multi-Store

Divide application state into multiple independent stores for better separation of concerns.

## Problem

Without this pattern, the premise that dividing application state into multiple independent stores for better separation of concerns falls apart, and small changes trigger cascading regressions.

## Solution

Apply the Multi-Store pattern by dividing application state into multiple independent stores for better separation of concerns, and reinforce it with concise examples or tests. For example, separate a cart totals reducer from modal visibility state so analytics remains deterministic.
