---
title: "Catch-All Route"
added: 2025-10-10T00:00:00Z
tags: Routing and Navigation
difficulty: Intermediate
description: "Define fallback routes to handle unmatched URLs gracefully."
---
# Catch-All Route

## Problem

Without this pattern, the premise that defining fallback routes to handle unmatched URLs gracefully falls apart, and small changes trigger cascading regressions.

## Solution

Apply the Catch-All Route pattern by defining fallback routes to handle unmatched URLs gracefully, and reinforce it with concise examples or tests. For example, map `/settings/profile` and `/settings/security` to nested layouts so URLs mirror what users see.
