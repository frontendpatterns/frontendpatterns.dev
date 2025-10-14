---
title: "Scroll Restoration"
added: 2025-10-10T00:00:00Z
tags: Routing and Navigation
difficulty: Intermediate
description: "Remember and restore scroll positions when navigating backward."
---
# Scroll Restoration

## Problem

Without this pattern, the premise that remembering and restoring scroll positions when navigating backward falls apart, and small changes trigger cascading regressions.

## Solution

Apply the Scroll Restoration pattern by remembering and restoring scroll positions when navigating backward, and reinforce it with concise examples or tests. For example, map `/settings/profile` and `/settings/security` to nested layouts so URLs mirror what users see.
