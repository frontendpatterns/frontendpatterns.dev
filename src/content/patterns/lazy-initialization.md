---
title: "Lazy Initialization"
added: 2025-10-10T00:00:00Z
tags: State Management
difficulty: Intermediate
description: "Defer expensive state calculations until the first render when they're needed."
---
# Lazy Initialization

## Problem

State initialization runs expensive calculations on every component mount, even when recreating the same values. Reading from localStorage, parsing JSON, or filtering large arrays happens repeatedly during development with hot reloads. Component instantiation becomes a performance bottleneck as initialization logic grows.

## Solution

Apply the Lazy Initialization pattern by deferring expensive state calculations until the first render when they're needed, and reinforce it with concise examples or tests. For example, separate a cart totals reducer from modal visibility state so analytics remains deterministic.
