---
title: "Focus Trap"
added: 2025-10-10T00:00:00Z
tags: Accessibility
difficulty: Beginner
description: "Constrain keyboard focus within modal dialogs and overlays to prevent focus from escaping to background content."
---
# Focus Trap

## Problem

Keyboard users can tab out of modal dialogs and interact with content behind the overlay that's visually hidden. Focus escapes the modal, reaching buttons and links that shouldn't be accessible. Users must tab through all background content to cycle back to the modal, breaking the modal's purpose of focused interaction.

## Solution

Apply the Focus Trap pattern by constraining keyboard focus within modal dialogs and overlays to prevent focus from escaping to background content, and reinforce it with concise examples or tests. For example, wire a modal so focus jumps to the primary action and returns to the trigger when it closes.
