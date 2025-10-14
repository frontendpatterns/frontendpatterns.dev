---
title: "Infinite Scroll"
added: 2025-10-10T00:00:00Z
tags: Data Fetching
difficulty: Advanced
description: "Load more content automatically as users scroll to create seamless browsing experiences."
---
# Infinite Scroll

## Problem

Without this pattern, the premise that automatically loading more content as users scroll to create seamless browsing experiences falls apart, and small changes trigger cascading regressions.

## Solution

Apply the Infinite Scroll pattern by automatically loading more content as users scroll to create seamless browsing experiences, and reinforce it with concise examples or tests. For example, let a `useOrders` hook own the network call while an `OrdersTable` component simply renders rows.
