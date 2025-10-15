---
title: "Single Responsibility"
tags: Project Structure
added: 2025-10-10T00:00:00Z
difficulty: Beginner
description: "Ensure each component, module, or function has one clear purpose and reason to change."
---
# Single Responsibility

## Problem

Components grow into thousand-line files that handle data fetching, validation, formatting, UI rendering, and business logic simultaneously. Changes to one aspect require understanding and potentially breaking everything else, and testing becomes impossible because every feature is tangled together.

## Solution

Ensure each component, module, or function has one clear purpose and reason to change. For example, split a billing feature so API clients, hooks, and UI elements live in distinct folders with explicit boundaries.
