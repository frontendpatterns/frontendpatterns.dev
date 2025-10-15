---
title: "Query Caching"
added: 2025-10-10T00:00:00Z
tags: Data Fetching
difficulty: Advanced
description: "Store fetched data to avoid redundant network requests and improve performance."
---
# Query Caching

## Problem

Every component mounting or re-rendering triggers new network requests for the same data. Users see loading spinners repeatedly for information they've already fetched moments ago. Navigating between pages or toggling UI elements causes the app to refetch identical data, wasting bandwidth and making the app feel sluggish. The same API calls fire dozens of times during a single user session.

## Solution

Store fetched data to avoid redundant network requests and improve performance. For example, let a data fetching layer own the network call while a table component simply renders rows.
