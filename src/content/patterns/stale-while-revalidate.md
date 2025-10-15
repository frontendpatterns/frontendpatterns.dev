---
title: "Stale-While-Revalidate"
added: 2025-10-10T00:00:00Z
tags: Data Fetching
difficulty: Advanced
description: "Show cached data immediately while fetching fresh data in the background."
---
# Stale-While-Revalidate

## Problem

Users see loading spinners every time they revisit a page, even when cached data exists. Interfaces feel slow because they wait for fresh data before showing anything, despite having perfectly usable cached information. Users must choose between seeing instant but potentially stale data or waiting for fresh data, creating a false trade-off between speed and freshness.

## Solution

Show cached data immediately while fetching fresh data in the background. For example, let a `useOrders` hook own the network call while an `OrdersTable` component simply renders rows.
