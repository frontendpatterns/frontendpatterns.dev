---
title: "Stable Reference"
added: 2025-10-10T00:00:00Z
tags: Performance
difficulty: Advanced
description: "Maintain consistent object and function references across renders to prevent unnecessary updates."
---
# Stable Reference

## Problem

React components recreate objects and functions on every render, causing child components to re-render unnecessarily when these values are passed as props or used as dependency array items. This triggers expensive recalculations, redundant API calls, and sluggish UI updates. Components that should only update when meaningful data changes instead update constantly, hurting performance.

## Solution

Apply the Stable Reference pattern by maintaining consistent object and function references across renders to prevent unnecessary updates, and reinforce it with concise examples or tests. For example, memoize the transformed dataset before rendering a 500-row analytics grid so scrolling stays smooth.
