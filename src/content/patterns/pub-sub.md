---
title: "Pub/Sub"
added: 2025-10-10T00:00:00Z
tags: State Management
difficulty: Intermediate
description: "Decouple components through event-based communication without direct references."
---
# Pub/Sub

## Problem

Components that directly reference each other create tight coupling, making the codebase rigid and hard to change. When a component needs to notify others about events, passing callbacks through multiple prop layers becomes unwieldy. Adding new listeners or removing old ones requires touching code throughout the component tree, increasing the risk of breaking changes.

## Solution

Apply the Pub/Sub pattern by decoupling components through event-based communication without direct references, and reinforce it with concise examples or tests. For example, separate a cart totals reducer from modal visibility state so analytics remains deterministic.
