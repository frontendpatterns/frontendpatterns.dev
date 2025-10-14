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

Without this pattern, the premise that properly escaping data when rendering to prevent XSS by ensuring user input is treated as data, not executable code falls apart, and small changes trigger cascading regressions.

## Solution

Apply the Output Encoding pattern by properly escaping data when rendering to prevent XSS by ensuring user input is treated as data, not executable code, and reinforce it with concise examples or tests. For example, lock down the marketing-site CSP so injected scripts can't touch dashboard session cookies.
