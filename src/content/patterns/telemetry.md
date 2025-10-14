---
title: "Telemetry"
added: 2025-10-10T00:00:00Z
tags: Developer Experience
difficulty: Intermediate
description: "Collect usage analytics and performance metrics to inform product decisions."
---
# Telemetry

## Problem

Without this pattern, the premise that collecting usage analytics and performance metrics to inform product decisions falls apart, and small changes trigger cascading regressions.

## Solution

Apply the Telemetry pattern by collecting usage analytics and performance metrics to inform product decisions, and reinforce it with concise examples or tests. For example, add a lint rule that rejects feature-flag commits without the cleanup task attached.
