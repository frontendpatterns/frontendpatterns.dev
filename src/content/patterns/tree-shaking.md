---
title: "Tree Shaking"
added: 2025-10-10T00:00:00Z
tags: Performance
difficulty: Advanced
description: "Eliminate unused code from bundles during the build process."
---
# Tree Shaking

## Problem

Bundles include entire libraries even when only one function is used. Importing a single utility from lodash ships the entire 70KB library. Dead code from refactored features remains in production bundles indefinitely. Users download and parse thousands of unused functions on every page load.

## Solution

Eliminate unused code from bundles during the build process. For example, memoize the transformed dataset before rendering a 500-row analytics grid so scrolling stays smooth.
