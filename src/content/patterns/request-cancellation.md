---
title: "Request Cancellation"
added: 2025-10-10T00:00:00Z
tags: Data Fetching
difficulty: Advanced
description: "Abort in-flight requests when components unmount or dependencies change."
---
# Request Cancellation

## Problem

Without this pattern, the premise that aborting in-flight requests when components unmount or dependencies change falls apart, and small changes trigger cascading regressions.

## Solution

Apply the Request Cancellation pattern by aborting in-flight requests when components unmount or dependencies change, and reinforce it with concise examples or tests. For example, let a `useOrders` hook own the network call while an `OrdersTable` component simply renders rows.
