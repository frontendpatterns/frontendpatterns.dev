---
title: "Dependent Query Pattern"
added: 2025-10-10T00:00:00Z
category: Data Fetching
difficulty: Advanced
description: "Chain API requests where subsequent calls depend on previous results."
---
# Dependent Query Pattern

Chain API requests where subsequent calls depend on previous results.

## Problem

Without this pattern, the premise that chaining API requests where subsequent calls depend on previous results falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on data fetching concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Dependent Query pattern by chaining API requests where subsequent calls depend on previous results, and reinforce it with concise examples or tests. For example, let a `useOrders` hook own the network call while an `OrdersTable` component simply renders rows.
