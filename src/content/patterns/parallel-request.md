---
title: "Parallel Request"
added: 2025-10-10T00:00:00Z
tags: Data Fetching
difficulty: Advanced
description: "Execute multiple independent API calls simultaneously to reduce total load time."
---
# Parallel Request

## Problem

Pages load slowly as each API request waits for the previous one to complete, even when the data is independent. A dashboard needing user info, notifications, and analytics takes 6 seconds to load when each 2-second request runs sequentially. Users wait unnecessarily while independent data fetches happen one at a time instead of concurrently.

## Solution

Execute multiple independent API calls simultaneously to reduce total load time. For example, let a data fetching layer own the network call while a table component simply renders rows.
