---
title: "Mutation Pattern"
added: 2025-10-10T00:00:00Z
category: Data Fetching
difficulty: Advanced
description: "Handle create, update, and delete operations with proper cache synchronization."
---
# Mutation Pattern

Handle create, update, and delete operations with proper cache synchronization.

## Problem

Without this pattern, the premise that handling create, update, and delete operations with proper cache synchronization falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on data fetching concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Mutation pattern by handling create, update, and delete operations with proper cache synchronization, and reinforce it with concise examples or tests. For example, let a `useOrders` hook own the network call while an `OrdersTable` component simply renders rows.
