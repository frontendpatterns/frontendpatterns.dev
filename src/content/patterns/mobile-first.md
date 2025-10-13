---
title: "Mobile-First Pattern"
added: 2025-10-10T00:00:00Z
category: Styling
difficulty: Beginner
description: "Design for small screens first, then progressively enhancing for larger viewports."
---
# Mobile-First Pattern

Design for small screens first, then progressively enhancing for larger viewports.

## Problem

Without this pattern, the premise that designing for small screens first, then progressively enhancing for larger viewports falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on styling concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Mobile-First pattern by designing for small screens first, then progressively enhancing for larger viewports, and reinforce it with concise examples or tests. For example, isolate a `Button` component's look with scoped classes while brand tokens stay in a shared theme file.
