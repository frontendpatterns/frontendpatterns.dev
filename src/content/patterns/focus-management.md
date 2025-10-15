---
title: "Focus Management"
added: 2025-10-10T00:00:00Z
tags: Accessibility
difficulty: Beginner
description: "Control focus flow for modal dialogs, route changes, and dynamic content insertion."
---
# Focus Management

## Problem

Keyboard users get lost when focus isn't managed properly. Opening a modal leaves focus on the trigger button beneath it, forcing users to tab through the entire page to reach modal controls. After navigating to a new route, focus stays at the bottom of the previous page. Screen reader users have no indication that new content appeared.

## Solution

Apply the Focus Management pattern by controlling focus flow for modal dialogs, route changes, and dynamic content insertion, and reinforce it with concise examples or tests. For example, wire a modal so focus jumps to the primary action and returns to the trigger when it closes.
