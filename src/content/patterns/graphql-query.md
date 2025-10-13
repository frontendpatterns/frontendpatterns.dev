---
title: "GraphQL Query Pattern"
added: 2025-10-10T00:00:00Z
category: Data Fetching
difficulty: Advanced
description: "Request precisely the data needed using GraphQL's declarative query language."
---
# GraphQL Query Pattern

Request precisely the data needed using GraphQL's declarative query language.

## Problem

Without this pattern, the premise that requesting precisely the data needed using GraphQL's declarative query language falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on data fetching concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the GraphQL Query pattern by requesting precisely the data needed using GraphQL's declarative query language, and reinforce it with concise examples or tests. For example, let a `useOrders` hook own the network call while an `OrdersTable` component simply renders rows.
