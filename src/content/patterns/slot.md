---
title: "Slot Pattern"
added: 2025-10-10T00:00:00Z
category: Component
difficulty: Beginner
description: "Allow parent components to inject content into designated areas of child components."
---
# Slot Pattern

Allow parent components to inject content into designated areas of child components.

## Problem

Without this pattern, the premise that allowing parent components to inject content into designated areas of child components falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on component concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Slot pattern by allowing parent components to inject content into designated areas of child components, and reinforce it with concise examples or tests. For example, keep a `UserCard` component focused on presentation while a `useUserCard` hook fetches and normalizes its data.
