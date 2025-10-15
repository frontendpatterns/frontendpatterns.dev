---
title: "Polling"
added: 2025-10-10T00:00:00Z
tags: Data Fetching
difficulty: Advanced
description: "Fetch data repeatedly at regular intervals to keep information current."
---
# Polling

## Problem

Data becomes stale and outdated as soon as it's displayed, requiring manual refreshes to see updates. Users monitoring dashboards, order statuses, or real-time metrics have no way to see changes without repeatedly clicking refresh. Critical updates like payment confirmations or stock levels don't appear until users manually reload the page.

## Solution

Repeatedly fetch data at regular intervals to keep information current. For example, let a data fetching layer own the network call while a table component simply renders rows.
