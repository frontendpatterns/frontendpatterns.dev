---
title: "Cache Invalidation"
added: 2025-10-10T00:00:00Z
tags: Data Fetching
difficulty: Advanced
description: "Clear or update cached data strategically when underlying information changes."
---
# Cache Invalidation

## Problem

Users see stale data after creating, updating, or deleting records. A user adds an item to their cart but the count doesn't update. They delete a comment but it still appears in the list. The cache provides speed but shows outdated information, creating a confusing and broken experience.

## Solution

Apply the Cache Invalidation pattern by strategically clearing or updating cached data when underlying information changes, and reinforce it with concise examples or tests. For example, let a `useOrders` hook own the network call while an `OrdersTable` component simply renders rows.
