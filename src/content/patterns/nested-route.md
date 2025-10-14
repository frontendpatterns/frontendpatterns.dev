---
title: "Nested Route"
added: 2025-10-10T00:00:00Z
tags: Routing and Navigation
difficulty: Intermediate
description: "Compose routes hierarchically to match UI component structure."
---
# Nested Route

## Problem

Without this pattern, the premise that composing routes hierarchically to match UI component structure falls apart, and small changes trigger cascading regressions.

## Solution

Apply the Nested Route pattern by composing routes hierarchically to match UI component structure, and reinforce it with concise examples or tests. For example, map `/settings/profile` and `/settings/security` to nested layouts so URLs mirror what users see.
