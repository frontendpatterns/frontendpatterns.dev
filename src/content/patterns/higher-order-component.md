---
title: "Higher-Order Component"
added: 2025-10-10T00:00:00Z
tags: Component
difficulty: Beginner
description: "Wrap components with additional functionality through function composition."
---
# Higher-Order Component

## Problem

You copy-paste the same logic across multiple components - authentication checks, data fetching, analytics tracking, or error handling. Every component duplicates this behavior, making updates tedious and error-prone as you hunt down every instance to keep them in sync.

## Solution

Wrap components with additional functionality through function composition. For example, keep a `UserCard` component focused on presentation while a data fetching layer fetches and normalizes its data.
