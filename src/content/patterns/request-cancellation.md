---
title: "Request Cancellation"
added: 2025-10-10T00:00:00Z
tags: Data Fetching
difficulty: Advanced
description: "Abort in-flight requests when components unmount or dependencies change."
---
# Request Cancellation

## Problem

Fast-typing users trigger multiple search requests, with slow responses overwriting newer results. Users navigate away from pages but abandoned requests continue consuming bandwidth and updating unmounted components, causing memory leaks and errors. Race conditions occur when outdated responses arrive after fresher data, showing stale results.

## Solution

Abort in-flight requests when components unmount or dependencies change. For example, let a `useOrders` hook own the network call while an `OrdersTable` component simply renders rows.
