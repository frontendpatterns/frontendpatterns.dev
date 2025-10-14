---
title: "Branded Type"
added: 2025-10-10T00:00:00Z
tags: Type Safety and Contracts
difficulty: Advanced
description: "Create distinct types from primitives to prevent mixing incompatible values."
---
# Branded Type

## Problem

Without this pattern, the premise that creating distinct types from primitives to prevent mixing incompatible values falls apart, and small changes trigger cascading regressions.

## Solution

Apply the Branded Type pattern by creating distinct types from primitives to prevent mixing incompatible values, and reinforce it with concise examples or tests. For example, share a TypeScript interface between the API client and the `OrderSummary` component so breaking changes fail fast.
