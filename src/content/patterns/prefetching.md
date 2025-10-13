---
title: "Prefetching"
added: 2025-10-10T00:00:00Z
tags: Data Fetching
difficulty: Advanced
description: "Load data before it's needed based on predicted user actions."
---
# Prefetching

Load data before it's needed based on predicted user actions.

## Problem

Without this pattern, the premise that loading data before it's needed based on predicted user actions falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on data fetching concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Prefetching pattern by loading data before it's needed based on predicted user actions, and reinforce it with concise examples or tests. For example, let a `useOrders` hook own the network call while an `OrdersTable` component simply renders rows.
