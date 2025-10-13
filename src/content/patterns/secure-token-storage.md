---
title: "Secure Token Storage Pattern"
added: 2025-10-10T00:00:00Z
category: Security and Privacy
difficulty: Advanced
description: "Store authentication tokens safely using httpOnly cookies, secure flags, or encrypted storage to prevent token theft."
---
# Secure Token Storage Pattern

Store authentication tokens safely using httpOnly cookies, secure flags, or encrypted storage to prevent token theft.

## Problem

Without this pattern, the premise that safely storing authentication tokens using httpOnly cookies, secure flags, or encrypted storage to prevent token theft falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on security and privacy concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Secure Token Storage pattern by safely storing authentication tokens using httpOnly cookies, secure flags, or encrypted storage to prevent token theft, and reinforce it with concise examples or tests. For example, lock down the marketing-site CSP so injected scripts can't touch dashboard session cookies.
