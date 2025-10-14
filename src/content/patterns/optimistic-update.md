---
title: "Optimistic Update"
added: 2025-10-10T00:00:00Z
tags: Data Fetching
difficulty: Advanced
description: "Update UI immediately with expected results before server confirmation for perceived speed."
---
# Optimistic Update

Update UI immediately with expected results before server confirmation for perceived speed.

## Problem

Without this pattern, the premise that immediately updating UI with expected results before server confirmation for perceived speed falls apart, and small changes trigger cascading regressions.

## Solution

Apply the Optimistic Update pattern by immediately updating UI with expected results before server confirmation for perceived speed, and reinforce it with concise examples or tests. For example, let a `useOrders` hook own the network call while an `OrdersTable` component simply renders rows.
