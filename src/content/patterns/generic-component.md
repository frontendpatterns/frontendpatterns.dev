---
title: "Generic Component"
added: 2025-10-10T00:00:00Z
tags: Type Safety and Contracts
difficulty: Advanced
description: "Create reusable components that work with multiple data types."
---
# Generic Component

## Problem

You create separate Table, List, or Select components for each data type - UserTable, ProductTable, OrderTable - duplicating the same logic with minor type differences. Type safety breaks when components pass data around because TypeScript can't infer the specific type being used.

## Solution

Create reusable components that work with multiple data types. For example, share a TypeScript interface between the API client and the `OrderSummary` component so breaking changes fail fast.
