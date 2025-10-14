---
title: "Prop Drilling Solution"
added: 2025-10-10T00:00:00Z
tags: Component
difficulty: Beginner
description: "Avoid passing props through many intermediate components unnecessarily using context or state management."
---
# Prop Drilling Solution

## Problem

Without this pattern, the premise that techniques to avoid passing props through many intermediate components unnecessarily falls apart, and small changes trigger cascading regressions.

## Solution

Apply the Prop Drilling Solution pattern by techniques to avoid passing props through many intermediate components unnecessarily, and reinforce it with concise examples or tests. For example, keep a `UserCard` component focused on presentation while a `useUserCard` hook fetches and normalizes its data.
