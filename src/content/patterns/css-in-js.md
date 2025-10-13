---
title: "CSS-in-JS Pattern"
added: 2025-10-10T00:00:00Z
category: Styling
difficulty: Beginner
description: "Write styles in JavaScript to enable dynamic styling and component co-location."
---
# CSS-in-JS Pattern

Write styles in JavaScript to enable dynamic styling and component co-location.

## Problem

Without this pattern, the premise that writing styles in JavaScript to enable dynamic styling and component co-location falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on styling concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the CSS-in-JS pattern by writing styles in JavaScript to enable dynamic styling and component co-location, and reinforce it with concise examples or tests. For example, isolate a `Button` component's look with scoped classes while brand tokens stay in a shared theme file.
