---
title: "Retry"
added: 2025-10-10T00:00:00Z
tags: Data Fetching
difficulty: Advanced
description: "Re-attempt failed requests automatically with exponential backoff strategies."
---
# Retry

Re-attempt failed requests automatically with exponential backoff strategies.

## Problem

Without this pattern, the premise that automatically re-attempting failed requests with exponential backoff strategies falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on data fetching concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Retry pattern by automatically re-attempting failed requests with exponential backoff strategies, and reinforce it with concise examples or tests. For example, let a `useOrders` hook own the network call while an `OrdersTable` component simply renders rows.
