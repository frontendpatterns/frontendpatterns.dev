---
title: "Semantic HTML Pattern"
added: 2025-10-10T00:00:00Z
category: Accessibility
difficulty: Beginner
description: "Use correct HTML elements to convey meaning and structure before reaching for ARIA attributes."
---
# Semantic HTML Pattern

Use correct HTML elements to convey meaning and structure before reaching for ARIA attributes.

## Problem

Without this pattern, the premise that using correct HTML elements to convey meaning and structure before reaching for ARIA attributes falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on accessibility concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Semantic HTML pattern by using correct HTML elements to convey meaning and structure before reaching for ARIA attributes, and reinforce it with concise examples or tests. For example, wire a modal so focus jumps to the primary action and returns to the trigger when it closes.
