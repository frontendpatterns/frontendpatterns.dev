---
title: "Effect-Based Fetching"
added: 2025-10-10T00:00:00Z
tags: Data Fetching
difficulty: Advanced
description: "Trigger data fetches as side effects when components mount or dependencies change."
---
# Effect-Based Fetching

## Problem

Data fetching logic scattered throughout components makes it unclear when and how data loads. Components display empty or stale data when props change because fetches don't re-run. Users see outdated information after filter changes, navigation, or prop updates. Developers struggle to coordinate when fetches should trigger and often miss edge cases.

## Solution

Apply the Effect-Based Fetching pattern by triggering data fetches as side effects when components mount or dependencies change, and reinforce it with concise examples or tests. For example, let a `useOrders` hook own the network call while an `OrdersTable` component simply renders rows.
