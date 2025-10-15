---
title: "Pagination"
added: 2025-10-10T00:00:00Z
tags: Data Fetching
difficulty: Advanced
description: "Load large datasets in discrete pages to manage memory and network usage."
---
# Pagination

## Problem

Loading thousands of records at once overwhelms the browser, causing slow initial loads, high memory consumption, and sluggish rendering. Users rarely need to see all data at once, but fetching everything upfront wastes bandwidth and makes the application feel unresponsive. Large datasets need to be broken into manageable chunks.

## Solution

Load large datasets in discrete pages to manage memory and network usage. For example, let a `useOrders` hook own the network call while an `OrdersTable` component simply renders rows.
