---
title: "Pure Component"
added: 2025-10-10T00:00:00Z
tags: Component
difficulty: Beginner
description: "Create components that render the same output for the same inputs without side effects."
---
# Pure Component

## Problem

Without this pattern, the premise that creating components that render the same output for the same inputs without side effects falls apart, and small changes trigger cascading regressions.

## Solution

Apply the Pure Component pattern by creating components that render the same output for the same inputs without side effects, and reinforce it with concise examples or tests. For example, keep a `UserCard` component focused on presentation while a `useUserCard` hook fetches and normalizes its data.
