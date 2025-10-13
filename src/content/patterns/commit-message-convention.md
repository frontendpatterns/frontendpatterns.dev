---
title: "Commit Message Convention"
added: 2025-10-10T00:00:00Z
tags: Developer Experience
difficulty: Intermediate
description: "Standardize commit messages for clear history and automated changelog generation."
---
# Commit Message Convention

Standardize commit messages for clear history and automated changelog generation.

## Problem

Without this pattern, the premise that standardizing commit messages for clear history and automated changelog generation falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on developer experience concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Commit Message Convention pattern by standardizing commit messages for clear history and automated changelog generation, and reinforce it with concise examples or tests. For example, add a lint rule that rejects feature-flag commits without the cleanup task attached.
