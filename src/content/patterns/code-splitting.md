---
title: "Code Splitting"
added: 2025-10-10T00:00:00Z
tags: Performance
difficulty: Advanced
description: "Break application code into smaller bundles loaded on demand to reduce initial load time."
---
# Code Splitting

## Problem

Applications ship a single massive JavaScript bundle containing all routes, features, and dependencies. Users downloading the homepage must wait for the entire admin dashboard, checkout flow, and analytics code to download and parse. First contentful paint is delayed by hundreds of kilobytes of unused code, especially painful on slow networks.

## Solution

Apply the Code Splitting pattern by breaking application code into smaller bundles loaded on demand to reduce initial load time, and reinforce it with concise examples or tests. For example, memoize the transformed dataset before rendering a 500-row analytics grid so scrolling stays smooth.
