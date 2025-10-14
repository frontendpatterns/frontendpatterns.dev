---
title: "SameSite Cookie"
added: 2025-10-10T00:00:00Z
tags: Security and Privacy
difficulty: Advanced
description: "Configure cookie SameSite attributes to control cross-site cookie behavior and prevent CSRF attacks."
---
# SameSite Cookie

## Problem

Browsers send authentication cookies with every request to a domain, even when the request originates from a malicious third-party site. This enables CSRF attacks where attackers trick users into performing authenticated actions without their knowledge or consent.

## Solution

Apply the SameSite Cookie pattern by configuring cookie SameSite attributes to control cross-site cookie behavior and prevent CSRF attacks, and reinforce it with concise examples or tests. For example, lock down the marketing-site CSP so injected scripts can't touch dashboard session cookies.
