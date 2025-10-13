---
title: "Discriminated Union Pattern"
added: 2025-10-10T00:00:00Z
category: Type Safety and Contracts
difficulty: Advanced
description: "Use tagged unions to model mutually exclusive state variants safely."
---
# Discriminated Union Pattern

Use tagged unions to model mutually exclusive state variants safely.

## Problem

Without this pattern, the premise that using tagged unions to model mutually exclusive state variants safely falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on type safety and contracts concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Discriminated Union pattern by using tagged unions to model mutually exclusive state variants safely, and reinforce it with concise examples or tests. For example, share a TypeScript interface between the API client and the `OrderSummary` component so breaking changes fail fast.
