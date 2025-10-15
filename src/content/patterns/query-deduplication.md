---
title: "Query Deduplication"
added: 2025-10-10T00:00:00Z
tags: Data Fetching
difficulty: Advanced
description: "Prevent duplicate network requests when multiple components simultaneously request the same data."
---
# Query Deduplication

## Problem

Multiple components needing the same data fire identical API requests simultaneously. A dashboard with five widgets showing user stats sends five parallel requests for the same user data. The browser network tab fills with duplicate requests, overwhelming the server and wasting bandwidth. Developers manually coordinate which component should fetch data, creating fragile coupling between components.

## Solution

Apply the Query Deduplication pattern by preventing duplicate network requests when multiple components simultaneously request the same data, and reinforce it with concise examples or tests. For example, let a `useOrders` hook own the network call while an `OrdersTable` component simply renders rows.
