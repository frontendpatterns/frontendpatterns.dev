---
title: "GraphQL Query"
added: 2025-10-10T00:00:00Z
tags: Data Fetching
difficulty: Advanced
description: "Request precisely the data needed using GraphQL's declarative query language."
---
# GraphQL Query

## Problem

Without this pattern, the premise that requesting precisely the data needed using GraphQL's declarative query language falls apart, and small changes trigger cascading regressions.

## Solution

Apply the GraphQL Query pattern by requesting precisely the data needed using GraphQL's declarative query language, and reinforce it with concise examples or tests. For example, let a `useOrders` hook own the network call while an `OrdersTable` component simply renders rows.
