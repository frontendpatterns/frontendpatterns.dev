---
title: "Pure Component"
added: 2025-10-10T00:00:00Z
tags: Component
difficulty: Beginner
description: "Create components that render the same output for the same inputs without side effects."
---
# Pure Component

## Problem

Components re-render unpredictably with the same properties, making performance optimization impossible and introducing subtle bugs. Testing becomes unreliable because components produce different output or trigger unexpected side effects even when given identical inputs.

## Solution

Create components that render the same output for the same inputs without side effects. For example, keep a `UserCard` component focused on presentation while a data fetching layer fetches and normalizes its data.
