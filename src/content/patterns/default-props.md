---
title: "Default Props Pattern"
added: 2025-10-10T00:00:00Z
category: Component
difficulty: Beginner
description: "Define fallback values for optional component inputs to ensure predictable behavior."
---
# Default Props Pattern

Define fallback values for optional component inputs to ensure predictable behavior.

## Problem

Without this pattern, the premise that defining fallback values for optional component inputs to ensure predictable behavior falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on component concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Default Props pattern by defining fallback values for optional component inputs to ensure predictable behavior, and reinforce it with concise examples or tests. For example, keep a `UserCard` component focused on presentation while a `useUserCard` hook fetches and normalizes its data.
