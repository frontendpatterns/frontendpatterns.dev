---
title: "Trusted Types"
added: 2025-10-10T00:00:00Z
tags: Security and Privacy
difficulty: Advanced
description: "Use browser APIs to enforce type checking on dangerous sinks like innerHTML to eliminate DOM-based XSS vulnerabilities."
---
# Trusted Types

## Problem

Developers accidentally introduce DOM-based XSS by passing unsanitized strings to dangerous APIs like innerHTML, eval, or document.write. These vulnerabilities are hard to spot in code reviews and can execute attacker-controlled code even when server-side protections are in place.

## Solution

Apply the Trusted Types pattern by using browser APIs to enforce type checking on dangerous sinks like innerHTML to eliminate DOM-based XSS vulnerabilities, and reinforce it with concise examples or tests. For example, lock down the marketing-site CSP so injected scripts can't touch dashboard session cookies.
