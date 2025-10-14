---
title: "Output Encoding"
added: 2025-10-10T00:00:00Z
tags: Security and Privacy
difficulty: Advanced
description: "Escape data properly when rendering to prevent XSS by ensuring user input is treated as data, not executable code."
---
# Output Encoding

Escape data properly when rendering to prevent XSS by ensuring user input is treated as data, not executable code.

## Problem

User-provided data containing special characters like `<`, `>`, or `"` is interpreted as HTML or JavaScript when rendered. Attackers inject malicious scripts through form inputs, URL parameters, or API responses that execute when displayed to other users.

## Solution

Apply the Output Encoding pattern by properly escaping data when rendering to prevent XSS by ensuring user input is treated as data, not executable code, and reinforce it with concise examples or tests. For example, lock down the marketing-site CSP so injected scripts can't touch dashboard session cookies.
