---
title: "Focus Trap"
added: 2025-10-10T00:00:00Z
tags: Accessibility
difficulty: Beginner
description: "Constrain keyboard focus within modal dialogs and overlays to prevent focus from escaping to background content."
---
# Focus Trap

## Problem

Without this pattern, the premise that constraining keyboard focus within modal dialogs and overlays to prevent focus from escaping to background content falls apart, and small changes trigger cascading regressions.

## Solution

Apply the Focus Trap pattern by constraining keyboard focus within modal dialogs and overlays to prevent focus from escaping to background content, and reinforce it with concise examples or tests. For example, wire a modal so focus jumps to the primary action and returns to the trigger when it closes.
