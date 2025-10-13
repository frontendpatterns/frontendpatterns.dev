---
title: "Reduced Motion"
added: 2025-10-10T00:00:00Z
tags: Accessibility
difficulty: Beginner
description: "Respect user preferences for reduced animations and motion effects."
---
# Reduced Motion

Respect user preferences for reduced animations and motion effects.

## Problem

Without this pattern, the premise that respecting user preferences for reduced animations and motion effects falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on accessibility concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Reduced Motion pattern by respecting user preferences for reduced animations and motion effects, and reinforce it with concise examples or tests. For example, wire a modal so focus jumps to the primary action and returns to the trigger when it closes.
