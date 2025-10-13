---
title: "CSRF Protection"
added: 2025-10-10T00:00:00Z
tags: Security and Privacy
difficulty: Advanced
description: "Implement anti-CSRF tokens or SameSite cookies to prevent cross-site request forgery attacks."
---
# CSRF Protection

Implement anti-CSRF tokens or SameSite cookies to prevent cross-site request forgery attacks.

## Problem

Without this pattern, the premise that implementing anti-CSRF tokens or SameSite cookies to prevent cross-site request forgery attacks falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on security and privacy concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the CSRF Protection pattern by implementing anti-CSRF tokens or SameSite cookies to prevent cross-site request forgery attacks, and reinforce it with concise examples or tests. For example, lock down the marketing-site CSP so injected scripts can't touch dashboard session cookies.
