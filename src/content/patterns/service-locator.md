---
title: "Service Locator"
added: 2025-10-10T00:00:00Z
tags: State Management
difficulty: Intermediate
description: "Provide a centralized registry for accessing shared services throughout the application."
---
# Service Locator

## Problem

Passing shared services like analytics, logging, or feature flags through every component creates deep prop chains. Components become tightly coupled to specific service implementations. Changing how services are created or configured requires touching dozens of files across the codebase.

## Solution

Apply the Service Locator pattern by centralized registry for accessing shared services throughout the application, and reinforce it with concise examples or tests. For example, separate a cart totals reducer from modal visibility state so analytics remains deterministic.
