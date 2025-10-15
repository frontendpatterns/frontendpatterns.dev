---
title: "WebSocket Integration"
added: 2025-10-10T00:00:00Z
tags: Data Fetching
difficulty: Advanced
description: "Establish persistent connections for real-time bidirectional communication."
---
# WebSocket Integration

## Problem

Polling APIs for updates is inefficient and slow, creating noticeable delays. Chat messages appear late, collaborative editing lags, and live dashboards show stale data. Short polling wastes bandwidth with constant requests, while long polling creates complex connection management and doesn't support true server-push notifications.

## Solution

Establish persistent connections for real-time bidirectional communication. For example, let a `useOrders` hook own the network call while an `OrdersTable` component simply renders rows.
