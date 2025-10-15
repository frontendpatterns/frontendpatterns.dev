---
title: "Utility-First CSS"
added: 2025-10-10T00:00:00Z
tags: Styling
difficulty: Beginner
description: "Build interfaces using small, single-purpose utility classes rather than semantic class names."
---
# Utility-First CSS

## Problem

Creating custom CSS classes for every component variation leads to bloated stylesheets and decision fatigue. Developers spend time naming classes like "card-header-large-bold-centered" only to need similar styles elsewhere, resulting in duplicated CSS and inconsistent spacing or colors across the interface.

## Solution

Build interfaces using small, single-purpose utility classes rather than semantic class names. For example, isolate a `Button` component's look with scoped classes while brand tokens stay in a shared theme file.
