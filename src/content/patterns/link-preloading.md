---
title: "Link Preloading"
added: 2025-10-10T00:00:00Z
tags: Routing and Navigation
difficulty: Intermediate
description: "Detect hover or focus on links to preload destinations before clicks."
---
# Link Preloading

## Problem

Navigation feels sluggish because pages only start loading after users click. Every route transition shows a loading spinner while JavaScript chunks download. Users experience noticeable delays between clicking links and seeing content. The app feels slower than it needs to be despite having code splitting implemented.

## Solution

Detect hover or focus on links to preload destinations before clicks. For example, map `/settings/profile` and `/settings/security` to nested layouts so URLs mirror what users see.
