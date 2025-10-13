---
title: "Literal Union Pattern"
added: 2025-10-10T00:00:00Z
category: Type Safety and Contracts
difficulty: Advanced
description: "Restrict values to specific strings or numbers for compile-time validation."
---
# Literal Union Pattern

Restrict values to specific strings or numbers for compile-time validation.

## Problem

Without this pattern, the premise that restricting values to specific strings or numbers for compile-time validation falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on type safety and contracts concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Literal Union pattern by restricting values to specific strings or numbers for compile-time validation, and reinforce it with concise examples or tests. For example, share a TypeScript interface between the API client and the `OrderSummary` component so breaking changes fail fast.
