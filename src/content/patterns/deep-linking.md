---
title: "Deep Linking"
added: 2025-10-10T00:00:00Z
tags: Routing and Navigation
difficulty: Intermediate
description: "Enable URLs that point directly to specific application states for shareability."
---
# Deep Linking

Enable URLs that point directly to specific application states for shareability.

## Problem

Without this pattern, the premise that enabling URLs that point directly to specific application states for shareability falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on routing and navigation concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Deep Linking pattern by enabling URLs that point directly to specific application states for shareability, and reinforce it with concise examples or tests. For example, map `/settings/profile` and `/settings/security` to nested layouts so URLs mirror what users see.
