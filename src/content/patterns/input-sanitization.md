---
title: "Input Sanitization"
added: 2025-10-10T00:00:00Z
tags: Security and Privacy
difficulty: Advanced
description: "Clean and validate user-provided data before rendering or processing to prevent injection attacks."
---
# Input Sanitization

## Problem

Applications are vulnerable to XSS attacks where malicious scripts execute in users' browsers. User-provided content with HTML or JavaScript tags can break layouts, steal session tokens, or redirect users to phishing sites. Display names, comments, or profile fields become security holes.

## Solution

Apply the Input Sanitization pattern by cleaning and validating user-provided data before rendering or processing to prevent injection attacks, and reinforce it with concise examples or tests. For example, lock down the marketing-site CSP so injected scripts can't touch dashboard session cookies.
