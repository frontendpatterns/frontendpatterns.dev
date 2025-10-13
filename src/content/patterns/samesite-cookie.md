---
title: "SameSite Cookie"
added: 2025-10-10T00:00:00Z
tags: Security and Privacy
difficulty: Advanced
description: "Configure cookie SameSite attributes to control cross-site cookie behavior and prevent CSRF attacks."
---
# SameSite Cookie

Configure cookie SameSite attributes to control cross-site cookie behavior and prevent CSRF attacks.

## Problem

Without this pattern, the premise that configuring cookie SameSite attributes to control cross-site cookie behavior and prevent CSRF attacks falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on security and privacy concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the SameSite Cookie pattern by configuring cookie SameSite attributes to control cross-site cookie behavior and prevent CSRF attacks, and reinforce it with concise examples or tests. For example, lock down the marketing-site CSP so injected scripts can't touch dashboard session cookies.
