---
title: "Server-Sent Events"
added: 2025-10-10T00:00:00Z
tags: Data Fetching
difficulty: Advanced
description: "Receive server-pushed updates over HTTP for one-way real-time data streams."
---
# Server-Sent Events

## Problem

Applications that need real-time updates often resort to polling, repeatedly asking the server for new data at fixed intervals. This wastes bandwidth, increases server load, and introduces latency since updates only arrive when the next poll happens. For one-way data streams like live notifications or stock prices, polling is inefficient compared to having the server push updates as they occur.

## Solution

Receive server-pushed updates over HTTP for one-way real-time data streams. For example, let a data fetching layer own the network call while a table component simply renders rows.
