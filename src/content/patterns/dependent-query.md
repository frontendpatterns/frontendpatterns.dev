---
title: "Dependent Query"
added: 2025-10-10T00:00:00Z
tags: Data Fetching
difficulty: Advanced
description: "Chain API requests where subsequent calls depend on previous results."
---
# Dependent Query

## Problem

Components attempt to fetch data before required information is available, causing errors or null reference exceptions. Fetching user preferences before knowing the user ID, or loading order details before getting the order number results in failed requests. Developers manually coordinate request timing with complex conditional logic and useEffect dependencies.

## Solution

Apply the Dependent Query pattern by chaining API requests where subsequent calls depend on previous results, and reinforce it with concise examples or tests. For example, let a `useOrders` hook own the network call while an `OrdersTable` component simply renders rows.
