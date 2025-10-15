---
title: "Design Token"
added: 2025-10-10T00:00:00Z
tags: Styling
difficulty: Beginner
description: "Define visual design decisions as reusable variables for consistency across platforms."
---
# Design Token

## Problem

Brand colors, spacing values, and typography settings are hardcoded throughout the codebase with slight variations like "#3B82F6", "#3b81f5", and "rgb(59, 130, 246)" for the same blue. Rebranding or design system updates require finding and changing hundreds of magic numbers across web, mobile, and email templates, inevitably missing some and creating inconsistent user experiences.

## Solution

Define visual design decisions as reusable variables for consistency across platforms. For example, isolate a `Button` component's look with scoped classes while brand tokens stay in a shared theme file.
