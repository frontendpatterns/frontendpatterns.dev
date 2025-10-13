---
title: "Effect-Based Fetching"
added: 2025-10-10T00:00:00Z
tags: Data Fetching
difficulty: Advanced
description: "Trigger data fetches as side effects when components mount or dependencies change."
---
# Effect-Based Fetching

Trigger data fetches as side effects when components mount or dependencies change.

## Problem

Without this pattern, the premise that triggering data fetches as side effects when components mount or dependencies change falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on data fetching concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Effect-Based Fetching pattern by triggering data fetches as side effects when components mount or dependencies change, and reinforce it with concise examples or tests. For example, let a `useOrders` hook own the network call while an `OrdersTable` component simply renders rows.
