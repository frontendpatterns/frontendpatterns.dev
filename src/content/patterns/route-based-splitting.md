---
title: "Route-Based Splitting"
added: 2025-10-10T00:00:00Z
tags: Performance
difficulty: Advanced
description: "Split code automatically at route boundaries for natural loading chunks."
---
# Route-Based Splitting

## Problem

Every route's code loads upfront even though users only visit one page at a time. Navigating to the homepage downloads JavaScript for the profile page, settings panel, and every other route. Bundle sizes grow linearly with each new route added, making initial load times progressively worse.

## Solution

Automatically splitting code at route boundaries for natural loading chunks. For example, memoize the transformed dataset before rendering a 500-row analytics grid so scrolling stays smooth.
