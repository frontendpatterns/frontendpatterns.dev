---
title: "Mutation"
added: 2025-10-10T00:00:00Z
tags: Data Fetching
difficulty: Advanced
description: "Handle create, update, and delete operations with proper cache synchronization."
---
# Mutation

## Problem

Creating, updating, or deleting data leaves the UI showing stale information until a manual refresh. Users add items to a list but don't see them appear, edit records but still see old values, or delete items that remain visible. The displayed data becomes out of sync with the server, forcing users to refresh the page to see their changes take effect.

## Solution

Handle create, update, and delete operations with proper cache synchronization. For example, let a `useOrders` hook own the network call while an `OrdersTable` component simply renders rows.
