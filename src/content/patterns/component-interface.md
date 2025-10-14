---
title: "Component Interface"
added: 2025-10-10T00:00:00Z
tags: Type Safety and Contracts
difficulty: Advanced
description: "Define clear contracts for component inputs and outputs."
---
# Component Interface

Define clear contracts for component inputs and outputs.

## Problem

Without this pattern, the premise that defining clear contracts for component inputs and outputs falls apart, and small changes trigger cascading regressions.

## Solution

Apply the Component Interface pattern by defining clear contracts for component inputs and outputs, and reinforce it with concise examples or tests. For example, share a TypeScript interface between the API client and the `OrderSummary` component so breaking changes fail fast.
