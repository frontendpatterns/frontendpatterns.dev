---
title: "Prefetching"
added: 2025-10-10T00:00:00Z
tags: Data Fetching
difficulty: Advanced
description: "Load data before it's needed based on predicted user actions."
---
# Prefetching

## Problem

Users click into detail pages and wait while data fetches from scratch every time. Common navigation paths like viewing orders or profiles always trigger loading states. Users see spinners for data that could have loaded proactively during idle time. The app feels reactive instead of anticipatory, creating unnecessary friction.

## Solution

Load data before it's needed based on predicted user actions. For example, let a data fetching layer own the network call while a table component simply renders rows.
