---
title: "Branded Type"
added: 2025-10-10T00:00:00Z
tags: Type Safety and Contracts
difficulty: Advanced
description: "Create distinct types from primitives to prevent mixing incompatible values."
---
# Branded Type

## Problem

Functions accept any string or number value, allowing invalid inputs like negative IDs, malformed email addresses, or mixing up user IDs with product IDs. TypeScript treats all strings and numbers as interchangeable, so passing a user ID where a product ID is expected compiles successfully but causes bugs at runtime.

## Solution

Apply the Branded Type pattern by creating distinct types from primitives to prevent mixing incompatible values, and reinforce it with concise examples or tests. For example, share a TypeScript interface between the API client and the `OrderSummary` component so breaking changes fail fast.
