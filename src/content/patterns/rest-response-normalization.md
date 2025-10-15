---
title: "REST Response Normalization"
added: 2025-10-10T00:00:00Z
tags: Data Fetching
difficulty: Advanced
description: "Transform nested API responses into flat, relational structures for efficient updates."
---
# REST Response Normalization

## Problem

Deeply nested API responses containing duplicate data make updates complex and error-prone. Updating a user's name requires finding and changing it in multiple nested locations across the data structure. Components display inconsistent data when some nested copies update but others don't. Memory usage balloons as the same entities get duplicated throughout the response tree.

## Solution

Apply the REST Response Normalization pattern by transforming nested API responses into flat, relational structures for efficient updates, and reinforce it with concise examples or tests. For example, let a `useOrders` hook own the network call while an `OrdersTable` component simply renders rows.
