---
title: "Props and Attributes Pattern"
added: 2025-10-10T00:00:00Z
category: Component
difficulty: Beginner
description: "Pass data and configuration into components through properties or attributes."
---
# Props and Attributes Pattern

Pass data and configuration into components through properties or attributes.

## Problem

Without this pattern, the premise that passing data and configuration into components through properties or attributes falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on component concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Props and Attributes pattern by passing data and configuration into components through properties or attributes, and reinforce it with concise examples or tests. For example, keep a `UserCard` component focused on presentation while a `useUserCard` hook fetches and normalizes its data.
