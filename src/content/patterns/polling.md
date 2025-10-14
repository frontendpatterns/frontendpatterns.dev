---
title: "Polling"
added: 2025-10-10T00:00:00Z
tags: Data Fetching
difficulty: Advanced
description: "Fetch data repeatedly at regular intervals to keep information current."
---
# Polling

Fetch data repeatedly at regular intervals to keep information current.

## Problem

Without this pattern, the premise that repeatedly fetching data at regular intervals to keep information current falls apart, and small changes trigger cascading regressions.

## Solution

Apply the Polling pattern by repeatedly fetching data at regular intervals to keep information current, and reinforce it with concise examples or tests. For example, let a `useOrders` hook own the network call while an `OrdersTable` component simply renders rows.
