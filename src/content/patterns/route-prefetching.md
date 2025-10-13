---
title: "Route Prefetching Pattern"
added: 2025-10-10T00:00:00Z
category: Routing and Navigation
difficulty: Intermediate
description: "Load route code and data before users navigate for instant transitions."
---
# Route Prefetching Pattern

Load route code and data before users navigate for instant transitions.

## Problem

Without this pattern, the premise that loading route code and data before users navigate for instant transitions falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on routing and navigation concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Route Prefetching pattern by loading route code and data before users navigate for instant transitions, and reinforce it with concise examples or tests. For example, map `/settings/profile` and `/settings/security` to nested layouts so URLs mirror what users see.
