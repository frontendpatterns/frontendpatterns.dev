---
title: "Composition over Inheritance Pattern"
added: 2025-10-10T00:00:00Z
category: Component
difficulty: Beginner
description: "Build complex components by combining simpler ones rather than using class hierarchies."
---
# Composition over Inheritance Pattern

Build complex components by combining simpler ones rather than using class hierarchies.

## Problem

Without this pattern, the premise that building complex components by combining simpler ones rather than using class hierarchies falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on component concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Composition over Inheritance pattern by building complex components by combining simpler ones rather than using class hierarchies, and reinforce it with concise examples or tests. For example, keep a `UserCard` component focused on presentation while a `useUserCard` hook fetches and normalizes its data.
