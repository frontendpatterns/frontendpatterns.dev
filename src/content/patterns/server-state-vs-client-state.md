---
title: "Server State vs Client State"
added: 2025-10-10T00:00:00Z
tags: State Management
difficulty: Intermediate
description: "Distinguish between data owned by the server (cached temporarily) and local UI state for proper management strategies."
---
# Server State vs Client State

## Problem

Treating server data like local state leads to stale caches and unnecessary refetching. User profile data stored in Redux doesn't update when changed on another device. Loading states and cache invalidation logic gets tangled with UI state. Developers manually implement refetching, polling, and optimistic updates for every API call, reinventing the wheel each time.

## Solution

Apply the Server State vs Client State pattern by distinguishing between data owned by the server (cached temporarily) and local UI state for proper management strategies, and reinforce it with concise examples or tests. For example, separate a cart totals reducer from modal visibility state so analytics remains deterministic.
