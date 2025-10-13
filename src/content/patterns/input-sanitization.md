---
title: "Input Sanitization Pattern"
added: 2025-10-10T00:00:00Z
category: Security and Privacy
difficulty: Advanced
description: "Clean and validate user-provided data before rendering or processing to prevent injection attacks."
---
# Input Sanitization Pattern

Clean and validate user-provided data before rendering or processing to prevent injection attacks.

## Problem

Without this pattern, the premise that cleaning and validating user-provided data before rendering or processing to prevent injection attacks falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on security and privacy concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Input Sanitization pattern by cleaning and validating user-provided data before rendering or processing to prevent injection attacks, and reinforce it with concise examples or tests. For example, lock down the marketing-site CSP so injected scripts can't touch dashboard session cookies.
