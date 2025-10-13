---
title: "Git Hooks Pattern"
added: 2025-10-10T00:00:00Z
category: Developer Experience
difficulty: Intermediate
description: "Run automated checks before commits or pushes to catch issues early."
---
# Git Hooks Pattern

Run automated checks before commits or pushes to catch issues early.

## Problem

Without this pattern, the premise that running automated checks before commits or pushes to catch issues early falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on developer experience concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Git Hooks pattern by running automated checks before commits or pushes to catch issues early, and reinforce it with concise examples or tests. For example, add a lint rule that rejects feature-flag commits without the cleanup task attached.
