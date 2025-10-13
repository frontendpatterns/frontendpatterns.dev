---
title: "Navigation Middleware Pattern"
added: 2025-10-10T00:00:00Z
category: Routing and Navigation
difficulty: Intermediate
description: "Execute logic before, during, or after navigation events."
---
# Navigation Middleware Pattern

Execute logic before, during, or after navigation events.

## Problem

Without this pattern, the premise that executing logic before, during, or after navigation events falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on routing and navigation concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Navigation Middleware pattern by executing logic before, during, or after navigation events, and reinforce it with concise examples or tests. For example, map `/settings/profile` and `/settings/security` to nested layouts so URLs mirror what users see.
