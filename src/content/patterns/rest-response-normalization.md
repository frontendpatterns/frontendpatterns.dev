---
title: "REST Response Normalization"
added: 2025-10-10T00:00:00Z
tags: Data Fetching
difficulty: Advanced
description: "Transform nested API responses into flat, relational structures for efficient updates."
---
# REST Response Normalization

## Problem

Deeply nested API responses containing duplicate data make updates complex and error-prone. Updating a user's name requires finding and changing it in multiple nested locations across the data structure. Components display inconsistent data when some nested copies update but others don't. Memory usage balloons as the same entities get duplicated throughout the response tree.

## Solution

Transform nested API responses into flat, relational structures for efficient updates. For example, let a data fetching layer own the network call while a table component simply renders rows.
