---
title: "Subresource Integrity"
added: 2025-10-10T00:00:00Z
tags: Security and Privacy
difficulty: Advanced
description: "Use integrity hashes on external scripts and stylesheets to ensure resources haven't been tampered with."
---
# Subresource Integrity

Use integrity hashes on external scripts and stylesheets to ensure resources haven't been tampered with.

## Problem

Without this pattern, the premise that using integrity hashes on external scripts and stylesheets to ensure resources haven't been tampered with falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on security and privacy concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Subresource Integrity pattern by using integrity hashes on external scripts and stylesheets to ensure resources haven't been tampered with, and reinforce it with concise examples or tests. For example, lock down the marketing-site CSP so injected scripts can't touch dashboard session cookies.
