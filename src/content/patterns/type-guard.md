---
title: "Type Guard"
added: 2025-10-10T00:00:00Z
tags: Type Safety and Contracts
difficulty: Advanced
description: "Write functions that narrow types at runtime for safe type assertions."
---
# Type Guard

## Problem

TypeScript can't infer specific types from conditional checks, forcing developers to use unsafe type assertions or ignore type errors. Union types remain too broad after validation, requiring casts that bypass type safety. Runtime checks exist but don't help the type system, leaving code littered with type assertions and potential runtime crashes.

## Solution

Apply the Type Guard pattern by writing functions that narrow types at runtime for safe type assertions, and reinforce it with concise examples or tests. For example, share a TypeScript interface between the API client and the `OrderSummary` component so breaking changes fail fast.
