---
title: "Props Contract"
added: 2025-10-10T00:00:00Z
tags: Type Safety and Contracts
difficulty: Advanced
description: "Specify required and optional properties with their expected types."
---
# Props Contract

## Problem

Components accept props without clear contracts, making it unclear which properties are required, optional, or what types they should be. Parent components pass wrong prop names, forget required props, or pass incorrect types, all without compile-time errors. Documentation becomes stale because there's no single source of truth for component APIs.

## Solution

Apply the Props Contract pattern by specifying required and optional properties with their expected types, and reinforce it with concise examples or tests. For example, share a TypeScript interface between the API client and the `OrderSummary` component so breaking changes fail fast.
