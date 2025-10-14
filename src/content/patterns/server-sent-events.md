---
title: "Server-Sent Events"
added: 2025-10-10T00:00:00Z
tags: Data Fetching
difficulty: Advanced
description: "Receive server-pushed updates over HTTP for one-way real-time data streams."
---
# Server-Sent Events

## Problem

Without this pattern, the premise that receiving server-pushed updates over HTTP for one-way real-time data streams falls apart, and small changes trigger cascading regressions.

## Solution

Apply the Server-Sent Events pattern by receiving server-pushed updates over HTTP for one-way real-time data streams, and reinforce it with concise examples or tests. For example, let a `useOrders` hook own the network call while an `OrdersTable` component simply renders rows.
