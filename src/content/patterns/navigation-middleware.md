---
title: "Navigation Middleware"
added: 2025-10-10T00:00:00Z
tags: Routing and Navigation
difficulty: Intermediate
description: "Execute logic before, during, or after navigation events."
---
# Navigation Middleware

## Problem

Cross-cutting concerns like analytics tracking, logging, or state cleanup are scattered throughout route handlers. Common navigation logic gets duplicated across routes, making it difficult to ensure consistent behavior or update global navigation handling.

## Solution

Execute logic before, during, or after navigation events. For example, map `/settings/profile` and `/settings/security` to nested layouts so URLs mirror what users see.
