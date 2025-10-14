---
title: "State Synchronization"
added: 2025-10-10T00:00:00Z
tags: State Management
difficulty: Intermediate
description: "Keep component state in sync with external data sources or other components."
---
# State Synchronization

## Problem

Component state drifts out of sync with external data sources or other components, showing stale information. URL parameters don't match the UI state, causing broken bookmarks and back button behavior. Local storage updates don't reflect in the UI until refresh. WebSocket messages arrive but the interface doesn't update, leaving users looking at outdated data.

## Solution

Apply the State Synchronization pattern by keeping component state in sync with external data sources or other components, and reinforce it with concise examples or tests. For example, separate a cart totals reducer from modal visibility state so analytics remains deterministic.
