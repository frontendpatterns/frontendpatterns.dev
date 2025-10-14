---
title: "Link Preloading"
added: 2025-10-10T00:00:00Z
tags: Routing and Navigation
difficulty: Intermediate
description: "Detect hover or focus on links to preload destinations before clicks."
---
# Link Preloading

Detect hover or focus on links to preload destinations before clicks.

## Problem

Without this pattern, the premise that detecting hover or focus on links to preload destinations before clicks falls apart, and small changes trigger cascading regressions.

## Solution

Apply the Link Preloading pattern by detecting hover or focus on links to preload destinations before clicks, and reinforce it with concise examples or tests. For example, map `/settings/profile` and `/settings/security` to nested layouts so URLs mirror what users see.
