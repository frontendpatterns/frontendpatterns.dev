---
title: "Output Encoding"
added: 2025-10-10T00:00:00Z
tags: Security and Privacy
difficulty: Advanced
description: "Escape data properly when rendering to prevent XSS by ensuring user input is treated as data, not executable code."
---
# Output Encoding

## Problem

User-provided data containing special characters like `<`, `>`, or `"` is interpreted as HTML or JavaScript when rendered. Attackers inject malicious scripts through form inputs, URL parameters, or API responses that execute when displayed to other users.

## Solution

Properly escape data when rendering to prevent XSS by ensuring user input is treated as data, not executable code. For example, lock down the marketing-site CSP so injected scripts can't touch dashboard session cookies.
