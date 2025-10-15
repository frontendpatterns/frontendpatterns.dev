---
title: "Resource Hint"
added: 2025-10-10T00:00:00Z
tags: Performance
difficulty: Advanced
description: "Use preload, prefetch, and preconnect to optimize resource loading timing."
---
# Resource Hint

## Problem

Browsers wait until they parse HTML to discover which resources to load, wasting precious milliseconds. DNS lookups and connection handshakes for third-party domains happen at render-time instead of proactively. Resources that will definitely be needed sit idle while the browser slowly discovers dependencies. Network waterfalls show avoidable gaps and sequential loading.

## Solution

Use preload, prefetch, and preconnect to optimize resource loading timing. For example, memoize the transformed dataset before rendering a 500-row analytics grid so scrolling stays smooth.
