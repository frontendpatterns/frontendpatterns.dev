---
title: "Breadcrumb Pattern"
added: 2025-10-10T00:00:00Z
category: Routing and Navigation
difficulty: Intermediate
description: "Display hierarchical navigation trail showing user's location in the application."
---
# Breadcrumb Pattern

Display hierarchical navigation trail showing user's location in the application.

## Problem

Without this pattern, the premise that displaying hierarchical navigation trail showing user's location in the application falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on routing and navigation concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Breadcrumb pattern by displaying hierarchical navigation trail showing user's location in the application, and reinforce it with concise examples or tests. For example, map `/settings/profile` and `/settings/security` to nested layouts so URLs mirror what users see.
