---
title: "Loading State"
added: 2025-10-10T00:00:00Z
tags: Data Fetching
difficulty: Advanced
description: "Show loading indicators while asynchronous operations are in progress."
---
# Loading State

Show loading indicators while asynchronous operations are in progress.

## Problem

Without this pattern, the premise that showing loading indicators while asynchronous operations are in progress falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on data fetching concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Loading State pattern by showing loading indicators while asynchronous operations are in progress, and reinforce it with concise examples or tests. For example, let a `useOrders` hook own the network call while an `OrdersTable` component simply renders rows.
