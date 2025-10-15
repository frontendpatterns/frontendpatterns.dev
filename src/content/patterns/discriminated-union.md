---
title: "Discriminated Union"
added: 2025-10-10T00:00:00Z
tags: Type Safety and Contracts
difficulty: Advanced
description: "Use tagged unions to model mutually exclusive state variants safely."
---
# Discriminated Union

## Problem

State objects contain mutually exclusive combinations of fields, leading to impossible states like having both error and success data simultaneously. Developers must remember which fields are valid together, making null checks scattered throughout the code. When handling different states, TypeScript can't verify all cases are covered, allowing unhandled states to slip through.

## Solution

Use tagged unions to model mutually exclusive state variants safely. For example, share a TypeScript interface between the API client and the `OrderSummary` component so breaking changes fail fast.
