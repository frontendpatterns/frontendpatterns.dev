---
title: "Semantic HTML"
added: 2025-10-10T00:00:00Z
tags: Accessibility
difficulty: Beginner
description: "Use correct HTML elements to convey meaning and structure before reaching for ARIA attributes."
---
# Semantic HTML

## Problem

Screen readers can't understand page structure when everything is a div. Users can't navigate by landmarks or skip to main content. Buttons built from divs don't work with keyboard navigation or assistive technology. Search engines and browser tools can't parse semantic meaning from generic elements, hurting SEO and user experience.

## Solution

Use correct HTML elements to convey meaning and structure before reaching for ARIA attributes. For example, wire a modal so focus jumps to the primary action and returns to the trigger when it closes.
