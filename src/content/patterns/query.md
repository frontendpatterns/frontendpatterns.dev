---
title: "Query Strategy"
added: 2025-10-10T00:00:00Z
tags: Testing
difficulty: Intermediate
description: "Select DOM elements using accessible queries that mirror user interaction."
---
# Query Strategy

## Problem

Tests that select DOM elements using implementation details like CSS classes, IDs, or test-specific attributes break whenever markup changes. These brittle tests don't reflect how users interact with your application, making them poor indicators of actual functionality. When tests query elements in ways users never would, they fail to catch real accessibility issues and user-facing bugs.

## Solution

Apply the Query Strategy pattern by selecting DOM elements using accessible queries that mirror user interaction, and reinforce it with concise examples or tests. For example, run an integration test that fills the checkout form, submits it, and asserts on the rendered receipt.
