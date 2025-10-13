---
title: "Dynamic Route Pattern"
added: 2025-10-10T00:00:00Z
category: Routing and Navigation
difficulty: Intermediate
description: "Generate routes programmatically based on data or configuration."
---
# Dynamic Route Pattern

Generate routes programmatically based on data or configuration.

## Problem

Without this pattern, the premise that generating routes programmatically based on data or configuration falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on routing and navigation concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Dynamic Route pattern by generating routes programmatically based on data or configuration, and reinforce it with concise examples or tests. For example, map `/settings/profile` and `/settings/security` to nested layouts so URLs mirror what users see.
