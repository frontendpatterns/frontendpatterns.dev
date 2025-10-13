---
title: "Cache Invalidation"
added: 2025-10-10T00:00:00Z
tags: Data Fetching
difficulty: Advanced
description: "Clear or update cached data strategically when underlying information changes."
---
# Cache Invalidation

Clear or update cached data strategically when underlying information changes.

## Problem

Without this pattern, the premise that strategically clearing or updating cached data when underlying information changes falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on data fetching concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Cache Invalidation pattern by strategically clearing or updating cached data when underlying information changes, and reinforce it with concise examples or tests. For example, let a `useOrders` hook own the network call while an `OrdersTable` component simply renders rows.
