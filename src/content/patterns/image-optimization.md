---
title: "Image Optimization Pattern"
added: 2025-10-10T00:00:00Z
category: Performance
difficulty: Advanced
description: "Compressing, resizing, and serving images in modern formats to reduce bandwidth usage."
---
# Image Optimization Pattern

Compressing, resizing, and serving images in modern formats to reduce bandwidth usage.

## Problem

Without this pattern, the premise that compressing, resizing, and serving images in modern formats to reduce bandwidth falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on performance concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Image Optimization pattern by compressing, resizing, and serving images in modern formats to reduce bandwidth, and reinforce it with concise examples or tests. For example, memoize the transformed dataset before rendering a 500-row analytics grid so scrolling stays smooth.
