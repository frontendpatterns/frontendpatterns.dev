---
title: "REST Response Normalization Pattern"
added: 2025-10-10T00:00:00Z
category: Data Fetching
difficulty: Advanced
description: "Transform nested API responses into flat, relational structures for efficient updates."
---
# REST Response Normalization Pattern

Transform nested API responses into flat, relational structures for efficient updates.

## Problem

Without this pattern, the premise that transforming nested API responses into flat, relational structures for efficient updates falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on data fetching concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the REST Response Normalization pattern by transforming nested API responses into flat, relational structures for efficient updates, and reinforce it with concise examples or tests. For example, let a `useOrders` hook own the network call while an `OrdersTable` component simply renders rows.
