---
title: "CSS-in-JS"
added: 2025-10-10T00:00:00Z
tags: Styling
difficulty: Beginner
description: "Write styles in JavaScript to enable dynamic styling and component co-location."
---
# CSS-in-JS

## Problem

Styles live in separate CSS files disconnected from component logic, making it difficult to pass dynamic values like properties or state into styling. Developers manually toggle classes or inline styles based on conditions, leading to verbose code and maintenance overhead when styling needs to respond to runtime data.

## Solution

Write styles in JavaScript to enable dynamic styling and component co-location. For example, isolate a `Button` component's look with scoped classes while brand tokens stay in a shared theme file.
