---
title: "Secure Token Storage"
added: 2025-10-10T00:00:00Z
tags: Security and Privacy
difficulty: Advanced
description: "Store authentication tokens safely using httpOnly cookies, secure flags, or encrypted storage to prevent token theft."
---
# Secure Token Storage

## Problem

Authentication tokens stored in localStorage or sessionStorage are accessible to any JavaScript code, including malicious scripts from XSS attacks. Stolen tokens allow attackers to impersonate users, access protected resources, and maintain persistent access even after the original session ends.

## Solution

Apply the Secure Token Storage pattern by safely storing authentication tokens using httpOnly cookies, secure flags, or encrypted storage to prevent token theft, and reinforce it with concise examples or tests. For example, lock down the marketing-site CSP so injected scripts can't touch dashboard session cookies.
