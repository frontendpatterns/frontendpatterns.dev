---
title: "Query Caching Pattern"
added: 2025-10-10T00:00:00Z
category: Data Fetching
difficulty: Advanced
description: "Store fetched data to avoid redundant network requests and improve performance."
---
# Query Caching Pattern

Store fetched data to avoid redundant network requests and improve performance.

## Problem

Without this pattern, the premise that storing fetched data to avoid redundant network requests and improve performance falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on data fetching concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Query Caching pattern by storing fetched data to avoid redundant network requests and improve performance, and reinforce it with concise examples or tests. For example, let a `useOrders` hook own the network call while an `OrdersTable` component simply renders rows.
