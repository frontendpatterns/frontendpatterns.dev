---
title: "Nested Route"
added: 2025-10-10T00:00:00Z
tags: Routing and Navigation
difficulty: Intermediate
description: "Compose routes hierarchically to match UI component structure."
---
# Nested Route

## Problem

Complex layouts with shared navigation, sidebars, or headers require duplicating markup across every route. URL structure doesn't reflect the visual hierarchy, making it difficult to maintain consistent layouts as the application grows. Each route must manually re-render common UI elements.

## Solution

Apply the Nested Route pattern by composing routes hierarchically to match UI component structure, and reinforce it with concise examples or tests. For example, map `/settings/profile` and `/settings/security` to nested layouts so URLs mirror what users see.
