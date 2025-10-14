---
title: "Linting"
added: 2025-10-10T00:00:00Z
tags: Developer Experience
difficulty: Intermediate
description: "Enforce code quality and consistency rules automatically during development."
---
# Linting

Enforce code quality and consistency rules automatically during development.

## Problem

Without this pattern, the premise that enforcing code quality and consistency rules automatically during development falls apart, and small changes trigger cascading regressions.

## Solution

Apply the Linting pattern by enforcing code quality and consistency rules automatically during development, and reinforce it with concise examples or tests. For example, add a lint rule that rejects feature-flag commits without the cleanup task attached.
