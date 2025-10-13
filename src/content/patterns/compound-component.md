---
title: "Compound Component Pattern"
added: 2025-10-10T00:00:00Z
category: Component
difficulty: Beginner
description: "Create components that work together implicitly through shared context to manage complex interactions."
---
# Compound Component Pattern

Create components that work together implicitly through shared context to manage complex interactions.

## Problem

Without this pattern, the premise that creating components that work together implicitly through shared context to manage complex interactions falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on component concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Compound Component pattern by creating components that work together implicitly through shared context to manage complex interactions, and reinforce it with concise examples or tests. For example, keep a `UserCard` component focused on presentation while a `useUserCard` hook fetches and normalizes its data.
