---
title: "GraphQL Query"
added: 2025-10-10T00:00:00Z
tags: Data Fetching
difficulty: Advanced
description: "Request precisely the data needed using GraphQL's declarative query language."
---
# GraphQL Query

## Problem

REST endpoints return massive payloads with unnecessary nested data, forcing clients to download hundreds of fields when only a few are needed. Components requiring different data combinations force developers to create numerous custom endpoints or accept over-fetching. Mobile users waste bandwidth downloading unused data, and backend teams struggle to maintain endpoint explosion.

## Solution

Request precisely the data needed using GraphQL's declarative query language. For example, let a `useOrders` hook own the network call while an `OrdersTable` component simply renders rows.
