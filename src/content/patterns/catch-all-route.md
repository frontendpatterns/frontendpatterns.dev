---
title: "Catch-All Route"
added: 2025-10-10T00:00:00Z
tags: Routing and Navigation
difficulty: Intermediate
description: "Define fallback routes to handle unmatched URLs gracefully."
---
# Catch-All Route

## Problem

Users who mistype URLs, follow broken links, or access deleted pages see browser error pages or blank screens. There's no way to handle 404s gracefully within the application, leaving users stranded without helpful navigation or error messages.

## Solution

Apply the Catch-All Route pattern by defining fallback routes to handle unmatched URLs gracefully, and reinforce it with concise examples or tests. For example, map `/settings/profile` and `/settings/security` to nested layouts so URLs mirror what users see.
