---
title: "Query Caching"
added: 2025-10-10T00:00:00Z
tags: Data Fetching
difficulty: Advanced
description: "Store fetched data to avoid redundant network requests and improve performance."
---
# Query Caching

## Problem

Without this pattern, the premise that storing fetched data to avoid redundant network requests and improve performance falls apart, and small changes trigger cascading regressions.

## Solution

Apply the Query Caching pattern by storing fetched data to avoid redundant network requests and improve performance, and reinforce it with concise examples or tests. For example, let a `useOrders` hook own the network call while an `OrdersTable` component simply renders rows.
