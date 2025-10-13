---
title: "Type Guard"
added: 2025-10-10T00:00:00Z
tags: Type Safety and Contracts
difficulty: Advanced
description: "Write functions that narrow types at runtime for safe type assertions."
---
# Type Guard

Write functions that narrow types at runtime for safe type assertions.

## Problem

Without this pattern, the premise that writing functions that narrow types at runtime for safe type assertions falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on type safety and contracts concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Type Guard pattern by writing functions that narrow types at runtime for safe type assertions, and reinforce it with concise examples or tests. For example, share a TypeScript interface between the API client and the `OrderSummary` component so breaking changes fail fast.
