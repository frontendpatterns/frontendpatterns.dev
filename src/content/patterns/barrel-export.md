---
title: "Barrel Export"
tags: Project Structure
added: 2025-10-10T00:00:00Z
difficulty: Beginner
description: "Aggregate multiple exports into a single entry point using index files to create clean public APIs and simplify import paths."
---
# Barrel Export

## Problem

Import statements are verbose and expose internal file structure: import { Button } from './components/atoms/buttons/Button/Button.tsx'. Consumers need to know the exact file location and structure, making imports brittle and refactoring difficult. Moving a file requires updating imports throughout the codebase.

## Solution

Aggregate multiple exports into a single entry point using index files to create clean public APIs and simplify import paths. For example, split a billing feature so API clients, hooks, and UI elements live in distinct folders with explicit boundaries.
