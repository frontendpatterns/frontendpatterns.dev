---
title: "Props Contract Pattern"
added: 2025-10-10T00:00:00Z
category: Type Safety and Contracts
difficulty: Advanced
description: "Specify required and optional properties with their expected types."
---
# Props Contract Pattern

Specify required and optional properties with their expected types.

## Problem

Without this pattern, the premise that specifying required and optional properties with their expected types falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on type safety and contracts concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Props Contract pattern by specifying required and optional properties with their expected types, and reinforce it with concise examples or tests. For example, share a TypeScript interface between the API client and the `OrderSummary` component so breaking changes fail fast.
