---
title: "Git Hooks"
added: 2025-10-10T00:00:00Z
tags: Developer Experience
difficulty: Intermediate
description: "Run automated checks before commits or pushes to catch issues early."
---
# Git Hooks

## Problem

Broken code gets committed to the repository: failing tests, linting errors, unformatted code, and type errors make it to the main branch. CI pipelines fail after the fact, blocking other developers and requiring additional commits to fix issues that should have been caught locally.

## Solution

Apply the Git Hooks pattern by running automated checks before commits or pushes to catch issues early, and reinforce it with concise examples or tests. For example, add a lint rule that rejects feature-flag commits without the cleanup task attached.
