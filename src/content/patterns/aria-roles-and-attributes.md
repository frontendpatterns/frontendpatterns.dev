---
title: "ARIA Roles and Attributes"
added: 2025-10-10T00:00:00Z
tags: Accessibility
difficulty: Beginner
description: "Use ARIA roles and attributes to provide semantic information to assistive technologies when HTML semantics are insufficient."
---
# ARIA Roles and Attributes

## Problem

When semantic HTML alone cannot convey the full meaning or state of UI components, assistive technologies like screen readers lack the information needed to help users navigate and interact with the interface. Custom widgets, dynamic content, and complex interactions become inaccessible to users who rely on these technologies.

## Solution

Use ARIA roles and attributes to provide semantic information to assistive technologies when HTML semantics are insufficient. For example, use `role="dialog"` and `aria-modal="true"` on a modal, or `aria-label` to provide accessible names when visible text is insufficient.
