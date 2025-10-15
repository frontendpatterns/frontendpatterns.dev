---
title: "Dependency Injection"
added: 2025-10-10T00:00:00Z
tags: State Management
difficulty: Intermediate
description: "Provide dependencies from the outside rather than creating them internally for better testability."
---
# Dependency Injection

## Problem

Components that instantiate their own dependencies are impossible to test in isolation. You can't test a component that hardcodes API calls without hitting real endpoints. You can't swap a real analytics service for a mock one. Every test requires complex setup to stub global dependencies or mock modules.

## Solution

Apply the Dependency Injection pattern by providing dependencies from the outside rather than creating them internally for better testability, and reinforce it with concise examples or tests. For example, separate a cart totals reducer from modal visibility state so analytics remains deterministic.
