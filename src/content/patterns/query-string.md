---
title: "Query String"
added: 2025-10-10T00:00:00Z
tags: Routing and Navigation
difficulty: Intermediate
description: "Use URL query parameters for optional filters, search, and pagination state."
---
# Query String

Use URL query parameters for optional filters, search, and pagination state.

## Problem

Without this pattern, the premise that using URL query parameters for optional filters, search, and pagination state falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on routing and navigation concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Query String pattern by using URL query parameters for optional filters, search, and pagination state, and reinforce it with concise examples or tests. For example, map `/settings/profile` and `/settings/security` to nested layouts so URLs mirror what users see.
