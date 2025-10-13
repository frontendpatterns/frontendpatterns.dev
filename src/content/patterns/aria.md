---
title: "ARIA Pattern"
added: 2025-10-10T00:00:00Z
category: Accessibility
difficulty: Beginner
description: "Use ARIA attributes to provide semantic information to assistive technologies when HTML semantics are insufficient."
---
# ARIA Pattern

Use ARIA attributes to provide semantic information to assistive technologies when HTML semantics are insufficient.

## Problem

Without this pattern, the premise that using ARIA attributes to provide semantic information to assistive technologies when HTML semantics are insufficient falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on accessibility concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the ARIA pattern by using ARIA attributes to provide semantic information to assistive technologies when HTML semantics are insufficient, and reinforce it with concise examples or tests. For example, wire a modal so focus jumps to the primary action and returns to the trigger when it closes.
