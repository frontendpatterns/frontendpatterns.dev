---
title: "Loading State"
added: 2025-10-10T00:00:00Z
tags: Data Fetching
difficulty: Advanced
description: "Show loading indicators while asynchronous operations are in progress."
---
# Loading State

## Problem

Users click buttons and see no feedback, wondering if the app is broken or if they should click again. Interfaces flash from empty to full instantly, creating jarring visual jumps. Users can't tell whether data is loading, failed to load, or if there's simply nothing to show.

## Solution

Apply the Loading State pattern by showing loading indicators while asynchronous operations are in progress, and reinforce it with concise examples or tests. For example, let a `useOrders` hook own the network call while an `OrdersTable` component simply renders rows.
