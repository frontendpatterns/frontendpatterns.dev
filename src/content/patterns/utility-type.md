---
title: "Utility Type"
added: 2025-10-10T00:00:00Z
tags: Type Safety and Contracts
difficulty: Advanced
description: "Leverage built-in or custom utility types to transform and manipulate types."
---
# Utility Type

## Problem

Types are duplicated across the codebase with manual modifications, creating drift when the original type changes. Developers manually mark all fields as optional for partial updates, manually remove readonly modifiers for internal mutations, or manually extract specific properties into new interfaces. These manual type transformations become outdated, leading to type mismatches and maintenance burden.

## Solution

Leverage built-in or custom utility types to transform and manipulate types. For example, share a TypeScript interface between the API client and the `OrderSummary` component so breaking changes fail fast.
