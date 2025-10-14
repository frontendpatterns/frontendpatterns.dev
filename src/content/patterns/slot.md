---
title: "Slot"
added: 2025-10-10T00:00:00Z
tags: Component
difficulty: Beginner
description: "Allow parent components to inject content into designated areas of child components."
---
# Slot

## Problem

Without this pattern, the premise that allowing parent components to inject content into designated areas of child components falls apart, and small changes trigger cascading regressions.

## Solution

Apply the Slot pattern by allowing parent components to inject content into designated areas of child components, and reinforce it with concise examples or tests. For example, keep a `UserCard` component focused on presentation while a `useUserCard` hook fetches and normalizes its data.
