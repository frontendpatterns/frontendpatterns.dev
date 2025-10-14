---
title: "Pagination"
added: 2025-10-10T00:00:00Z
tags: Data Fetching
difficulty: Advanced
description: "Load large datasets in discrete pages to manage memory and network usage."
---
# Pagination

## Problem

Without this pattern, the premise that loading large datasets in discrete pages to manage memory and network usage falls apart, and small changes trigger cascading regressions.

## Solution

Apply the Pagination pattern by loading large datasets in discrete pages to manage memory and network usage, and reinforce it with concise examples or tests. For example, let a `useOrders` hook own the network call while an `OrdersTable` component simply renders rows.
