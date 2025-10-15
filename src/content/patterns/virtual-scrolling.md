---
title: "Virtual Scrolling"
added: 2025-10-10T00:00:00Z
tags: Performance
difficulty: Advanced
description: "Render only visible list items in the viewport to handle massive datasets efficiently."
---
# Virtual Scrolling

## Problem

Rendering thousands of list items creates massive DOM trees that freeze the browser. Scrolling becomes janky as React reconciles updates across hundreds of nodes. Memory usage spikes when displaying large datasets like transaction histories, chat logs, or product catalogs. The page becomes unresponsive with just a few thousand items.

## Solution

Render only visible list items in the viewport to handle massive datasets efficiently. For example, memoize the transformed dataset before rendering a 500-row analytics grid so scrolling stays smooth.
