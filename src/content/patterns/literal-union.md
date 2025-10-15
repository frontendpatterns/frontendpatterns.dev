---
title: "Literal Union"
added: 2025-10-10T00:00:00Z
tags: Type Safety and Contracts
difficulty: Advanced
description: "Restrict values to specific strings or numbers for compile-time validation."
---
# Literal Union

## Problem

Functions accept any string or number when only specific values are valid, allowing typos and invalid values to pass compilation. Status fields accept "Pending" instead of "pending", color properties accept "red" when only "primary" and "secondary" are supported, and theme values can be any string instead of the three defined themes. These bugs only surface at runtime when the values are used.

## Solution

Restrict values to specific strings or numbers for compile-time validation. For example, share a TypeScript interface between the API client and the `OrderSummary` component so breaking changes fail fast.
