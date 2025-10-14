---
title: "Single Responsibility"
tags: Project Structure
added: 2025-10-10T00:00:00Z
difficulty: Beginner
description: "Ensure each component, module, or function has one clear purpose and reason to change."
---
# Single Responsibility

Ensure each component, module, or function has one clear purpose and reason to change.

## Problem

Without this pattern, the premise that each component, module, or function has one clear purpose and reason to change falls apart, and small changes trigger cascading regressions.

## Solution

Apply the Single Responsibility pattern by ensuring each component, module, or function has one clear purpose and reason to change, and reinforce it with concise examples or tests. For example, split a billing feature so API clients, hooks, and UI elements live in distinct folders with explicit boundaries.
