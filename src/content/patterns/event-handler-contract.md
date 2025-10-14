---
title: "Event Handler Contract"
added: 2025-10-10T00:00:00Z
tags: Type Safety and Contracts
difficulty: Advanced
description: "Type event handlers to ensure type-safe event handling."
---
# Event Handler Contract

## Problem

Without this pattern, the premise that typing event handlers to ensure type-safe event handling falls apart, and small changes trigger cascading regressions.

## Solution

Apply the Event Handler Contract pattern by typing event handlers to ensure type-safe event handling, and reinforce it with concise examples or tests. For example, share a TypeScript interface between the API client and the `OrderSummary` component so breaking changes fail fast.
