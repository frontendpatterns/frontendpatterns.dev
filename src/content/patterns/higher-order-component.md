---
title: "Higher-Order Component"
added: 2025-10-10T00:00:00Z
tags: Component
difficulty: Beginner
description: "Wrap components with additional functionality through function composition."
---
# Higher-Order Component

Wrap components with additional functionality through function composition.

## Problem

Without this pattern, the premise that wrapping components with additional functionality through function composition falls apart, and small changes trigger cascading regressions.

## Solution

Apply the Higher-Order Component pattern by wrapping components with additional functionality through function composition, and reinforce it with concise examples or tests. For example, keep a `UserCard` component focused on presentation while a `useUserCard` hook fetches and normalizes its data.
