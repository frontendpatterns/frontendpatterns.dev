---
title: "Trusted Types Pattern"
added: 2025-10-10T00:00:00Z
category: Security and Privacy
difficulty: Advanced
description: "Use browser APIs to enforce type checking on dangerous sinks like innerHTML to eliminate DOM-based XSS vulnerabilities."
---
# Trusted Types Pattern

Use browser APIs to enforce type checking on dangerous sinks like innerHTML to eliminate DOM-based XSS vulnerabilities.

## Problem

Without this pattern, the premise that using browser APIs to enforce type checking on dangerous sinks like innerHTML to eliminate DOM-based XSS vulnerabilities falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on security and privacy concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Trusted Types pattern by using browser APIs to enforce type checking on dangerous sinks like innerHTML to eliminate DOM-based XSS vulnerabilities, and reinforce it with concise examples or tests. For example, lock down the marketing-site CSP so injected scripts can't touch dashboard session cookies.
