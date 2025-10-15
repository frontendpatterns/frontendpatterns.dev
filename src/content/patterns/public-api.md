---
title: "Public API"
tags: Project Structure
added: 2025-10-10T00:00:00Z
difficulty: Beginner
description: "Expose only necessary interfaces while keeping implementation details private and flexible."
---
# Public API

## Problem

Consumers import implementation details directly from deep within modules, creating tight coupling that makes refactoring dangerous. Any internal reorganization or implementation change breaks dozens of imports across the codebase. There's no clear boundary between public interfaces and private implementation, leading to unintended dependencies.

## Solution

Expose only necessary interfaces while keeping implementation details private and flexible. For example, split a billing feature so API clients, hooks, and UI elements live in distinct folders with explicit boundaries.
