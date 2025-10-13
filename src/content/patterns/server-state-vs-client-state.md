---
title: "Server State vs Client State Pattern"
added: 2025-10-10T00:00:00Z
category: State Management
difficulty: Intermediate
description: "Distinguish between data owned by the server (cached temporarily) and local UI state for proper management strategies."
---
# Server State vs Client State Pattern

Distinguish between data owned by the server (cached temporarily) and local UI state for proper management strategies.

## Problem

Without this pattern, the premise that distinguishing between data owned by the server (cached temporarily) and local UI state for proper management strategies falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on state management concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Server State vs Client State pattern by distinguishing between data owned by the server (cached temporarily) and local UI state for proper management strategies, and reinforce it with concise examples or tests. For example, separate a cart totals reducer from modal visibility state so analytics remains deterministic.
