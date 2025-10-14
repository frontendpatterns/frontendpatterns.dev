---
title: "Parallel Request"
added: 2025-10-10T00:00:00Z
tags: Data Fetching
difficulty: Advanced
description: "Execute multiple independent API calls simultaneously to reduce total load time."
---
# Parallel Request

Execute multiple independent API calls simultaneously to reduce total load time.

## Problem

Without this pattern, the premise that executing multiple independent API calls simultaneously to reduce total load time falls apart, and small changes trigger cascading regressions.

## Solution

Apply the Parallel Request pattern by executing multiple independent API calls simultaneously to reduce total load time, and reinforce it with concise examples or tests. For example, let a `useOrders` hook own the network call while an `OrdersTable` component simply renders rows.
