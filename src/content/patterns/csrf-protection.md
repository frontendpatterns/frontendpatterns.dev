---
title: "CSRF Protection"
added: 2025-10-10T00:00:00Z
tags: Security and Privacy
difficulty: Advanced
description: "Implement anti-CSRF tokens or SameSite cookies to prevent cross-site request forgery attacks."
---
# CSRF Protection

## Problem

Attackers trick authenticated users into performing unwanted actions by embedding malicious requests in external sites. Users unknowingly transfer money, change passwords, or delete data simply by clicking a link or visiting a compromised page while logged in.

## Solution

Apply the CSRF Protection pattern by implementing anti-CSRF tokens or SameSite cookies to prevent cross-site request forgery attacks, and reinforce it with concise examples or tests. For example, lock down the marketing-site CSP so injected scripts can't touch dashboard session cookies.
