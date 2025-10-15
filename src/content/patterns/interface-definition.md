---
title: "Interface Definition"
added: 2025-10-10T00:00:00Z
tags: Type Safety and Contracts
difficulty: Advanced
description: "Describe object shapes with interfaces for documentation and type checking."
---
# Interface Definition

## Problem

Objects are passed around with implicit structures, making it unclear what properties exist or what types they should have. Developers access non-existent properties, mistype field names, and pass wrong data types, all without any compile-time warnings. Refactoring becomes dangerous because there's no way to track which code depends on specific object shapes.

## Solution

Apply the Interface Definition pattern by describing object shapes with interfaces for documentation and type checking, and reinforce it with concise examples or tests. For example, share a TypeScript interface between the API client and the `OrderSummary` component so breaking changes fail fast.
