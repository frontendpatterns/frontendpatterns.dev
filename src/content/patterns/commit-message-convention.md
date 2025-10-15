---
title: "Commit Message Convention"
added: 2025-10-10T00:00:00Z
tags: Developer Experience
difficulty: Intermediate
description: "Standardize commit messages for clear history and automated changelog generation."
---
# Commit Message Convention

## Problem

Commit messages are cryptic and inconsistent: "fix stuff", "updates", "wip" provide no context about what changed or why. Developers waste time digging through code diffs to understand commit history, and generating changelogs becomes a manual, error-prone process of interpreting vague commit messages.

## Solution

Apply the Commit Message Convention pattern by standardizing commit messages for clear history and automated changelog generation, and reinforce it with concise examples or tests. For example, add a lint rule that rejects feature-flag commits without the cleanup task attached.
