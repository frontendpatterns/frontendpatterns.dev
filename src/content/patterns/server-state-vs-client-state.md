---
title: "Server State vs Client State"
added: 2025-10-10T00:00:00Z
tags: State Management
difficulty: Intermediate
description: "Distinguish between data owned by the server (cached temporarily) and local UI state for proper management strategies."
---
# Server State vs Client State

Distinguish between data owned by the server (cached temporarily) and local UI state for proper management strategies.

## Problem

Without this pattern, the premise that distinguishing between data owned by the server (cached temporarily) and local UI state for proper management strategies falls apart, and small changes trigger cascading regressions.

## Solution

Apply the Server State vs Client State pattern by distinguishing between data owned by the server (cached temporarily) and local UI state for proper management strategies, and reinforce it with concise examples or tests. For example, separate a cart totals reducer from modal visibility state so analytics remains deterministic.
