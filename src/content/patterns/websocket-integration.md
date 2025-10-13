---
title: "WebSocket Integration"
added: 2025-10-10T00:00:00Z
tags: Data Fetching
difficulty: Advanced
description: "Establish persistent connections for real-time bidirectional communication."
---
# WebSocket Integration

Establish persistent connections for real-time bidirectional communication.

## Problem

Without this pattern, the premise that establishing persistent connections for real-time bidirectional communication falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on data fetching concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the WebSocket Integration pattern by establishing persistent connections for real-time bidirectional communication, and reinforce it with concise examples or tests. For example, let a `useOrders` hook own the network call while an `OrdersTable` component simply renders rows.
