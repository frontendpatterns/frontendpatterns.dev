---
title: "Query Deduplication"
added: 2025-10-10T00:00:00Z
tags: Data Fetching
difficulty: Advanced
description: "Prevent duplicate network requests when multiple components simultaneously request the same data."
---
# Query Deduplication

Prevent duplicate network requests when multiple components simultaneously request the same data.

## Problem

Without this pattern, the premise that preventing duplicate network requests when multiple components simultaneously request the same data falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on data fetching concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Query Deduplication pattern by preventing duplicate network requests when multiple components simultaneously request the same data, and reinforce it with concise examples or tests. For example, let a `useOrders` hook own the network call while an `OrdersTable` component simply renders rows.
