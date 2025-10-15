---
title: "Optimistic Update"
added: 2025-10-10T00:00:00Z
tags: Data Fetching
difficulty: Advanced
description: "Update UI immediately with expected results before server confirmation for perceived speed."
---
# Optimistic Update

## Problem

UI freezes or shows spinners after every user action, waiting for server confirmation. Simple interactions like liking a post, adding to cart, or marking items complete feel sluggish and unresponsive. Users perceive the app as slow even when the network is fast.

## Solution

Immediately updating UI with expected results before server confirmation for perceived speed. For example, let a data fetching layer own the network call while a table component simply renders rows.
