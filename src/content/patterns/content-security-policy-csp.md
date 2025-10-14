---
title: "Content Security Policy (CSP)"
added: 2025-10-10T00:00:00Z
tags: Security and Privacy
difficulty: Advanced
description: "Define allowed sources for scripts, styles, and resources through HTTP headers to prevent XSS and injection attacks."
---
# Content Security Policy (CSP)

Define allowed sources for scripts, styles, and resources through HTTP headers to prevent XSS and injection attacks.

## Problem

Without this pattern, the premise that defining allowed sources for scripts, styles, and resources through HTTP headers to prevent XSS and injection attacks falls apart, and small changes trigger cascading regressions.

## Solution

Apply the Content Security Policy (CSP) pattern by defining allowed sources for scripts, styles, and resources through HTTP headers to prevent XSS and injection attacks, and reinforce it with concise examples or tests. For example, lock down the marketing-site CSP so injected scripts can't touch dashboard session cookies.
