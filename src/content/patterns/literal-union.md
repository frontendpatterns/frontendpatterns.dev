---
title: "Literal Union"
added: 2025-10-10T00:00:00Z
tags: Type Safety and Contracts
difficulty: Advanced
description: "Restrict values to specific strings or numbers for compile-time validation."
---
# Literal Union

Restrict values to specific strings or numbers for compile-time validation.

## Problem

Without this pattern, the premise that restricting values to specific strings or numbers for compile-time validation falls apart, and small changes trigger cascading regressions.

## Solution

Apply the Literal Union pattern by restricting values to specific strings or numbers for compile-time validation, and reinforce it with concise examples or tests. For example, share a TypeScript interface between the API client and the `OrderSummary` component so breaking changes fail fast.
