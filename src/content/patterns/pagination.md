---
title: "Pagination Pattern"
added: 2025-10-10T00:00:00Z
category: Data Fetching
difficulty: Advanced
description: "Load large datasets in discrete pages to manage memory and network usage."
---
# Pagination Pattern

Load large datasets in discrete pages to manage memory and network usage.

## Problem

Without this pattern, the premise that loading large datasets in discrete pages to manage memory and network usage falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on data fetching concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Pagination pattern by loading large datasets in discrete pages to manage memory and network usage, and reinforce it with concise examples or tests. For example, let a `useOrders` hook own the network call while an `OrdersTable` component simply renders rows.
