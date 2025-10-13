---
title: "Server-Sent Events Pattern"
added: 2025-10-10T00:00:00Z
category: Data Fetching
difficulty: Advanced
description: "Receive server-pushed updates over HTTP for one-way real-time data streams."
---
# Server-Sent Events Pattern

Receive server-pushed updates over HTTP for one-way real-time data streams.

## Problem

Without this pattern, the premise that receiving server-pushed updates over HTTP for one-way real-time data streams falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on data fetching concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Server-Sent Events pattern by receiving server-pushed updates over HTTP for one-way real-time data streams, and reinforce it with concise examples or tests. For example, let a `useOrders` hook own the network call while an `OrdersTable` component simply renders rows.
