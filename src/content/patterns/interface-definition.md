---
title: "Interface Definition Pattern"
added: 2025-10-10T00:00:00Z
category: Type Safety and Contracts
difficulty: Advanced
description: "Describe object shapes with interfaces for documentation and type checking."
---
# Interface Definition Pattern

Describe object shapes with interfaces for documentation and type checking.

## Problem

Without this pattern, the premise that describing object shapes with interfaces for documentation and type checking falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on type safety and contracts concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Interface Definition pattern by describing object shapes with interfaces for documentation and type checking, and reinforce it with concise examples or tests. For example, share a TypeScript interface between the API client and the `OrderSummary` component so breaking changes fail fast.
