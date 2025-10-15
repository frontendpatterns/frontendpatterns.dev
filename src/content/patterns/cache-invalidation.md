---
title: "Cache Invalidation"
added: 2025-10-10T00:00:00Z
tags: Data Fetching
difficulty: Advanced
description: "Clear or update cached data strategically when underlying information changes."
---
# Cache Invalidation

## Problem

Users see stale data after creating, updating, or deleting records. A user adds an item to their cart but the count doesn't update. They delete a comment but it still appears in the list. The cache provides speed but shows outdated information, creating a confusing and broken experience.

## Solution

Strategically clear or update cached data when underlying information changes. For example, let a data fetching layer own the network call while a table component simply renders rows.
