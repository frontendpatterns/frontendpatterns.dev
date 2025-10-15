---
title: "Content Security Policy (CSP)"
added: 2025-10-10T00:00:00Z
tags: Security and Privacy
difficulty: Advanced
description: "Define allowed sources for scripts, styles, and resources through HTTP headers to prevent XSS and injection attacks."
---
# Content Security Policy (CSP)

## Problem

Any injected script can execute freely, stealing user data or modifying the page. Third-party dependencies or compromised CDNs can load malicious code without detection. Inline scripts from XSS attacks bypass all other security measures.

## Solution

Define allowed sources for scripts, styles, and resources through HTTP headers to prevent XSS and injection attacks. For example, lock down the marketing-site CSP so injected scripts can't touch dashboard session cookies.
