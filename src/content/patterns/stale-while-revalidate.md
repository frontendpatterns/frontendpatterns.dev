---
title: "Stale-While-Revalidate"
added: 2025-10-10T00:00:00Z
tags: Data Fetching
difficulty: Advanced
description: "Show cached data immediately while fetching fresh data in the background."
---
# Stale-While-Revalidate

## Problem

Without this pattern, the premise that showing cached data immediately while fetching fresh data in the background falls apart, and small changes trigger cascading regressions.

## Solution

Apply the Stale-While-Revalidate pattern by showing cached data immediately while fetching fresh data in the background, and reinforce it with concise examples or tests. For example, let a `useOrders` hook own the network call while an `OrdersTable` component simply renders rows.
