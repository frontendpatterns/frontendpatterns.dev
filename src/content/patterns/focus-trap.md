---
title: "Focus Trap Pattern"
added: 2025-10-10T00:00:00Z
category: Accessibility
difficulty: Beginner
description: "Constrain keyboard focus within modal dialogs and overlays to prevent focus from escaping to background content."
---
# Focus Trap Pattern

Constrain keyboard focus within modal dialogs and overlays to prevent focus from escaping to background content.

## Problem

Without this pattern, the premise that constraining keyboard focus within modal dialogs and overlays to prevent focus from escaping to background content falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on accessibility concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Focus Trap pattern by constraining keyboard focus within modal dialogs and overlays to prevent focus from escaping to background content, and reinforce it with concise examples or tests. For example, wire a modal so focus jumps to the primary action and returns to the trigger when it closes.
