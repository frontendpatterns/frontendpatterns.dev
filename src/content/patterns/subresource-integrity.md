---
title: "Subresource Integrity"
added: 2025-10-10T00:00:00Z
tags: Security and Privacy
difficulty: Advanced
description: "Use integrity hashes on external scripts and stylesheets to ensure resources haven't been tampered with."
---
# Subresource Integrity

## Problem

Loading scripts and stylesheets from external CDNs introduces a security risk: if the CDN is compromised or serves malicious content, your application executes that code without verification. Users trust your site, but you have no guarantee that external resources remain unchanged. A tampered script can steal user data, inject malware, or compromise your entire application.

## Solution

Use integrity hashes on external scripts and stylesheets to ensure resources haven't been tampered with. For example, lock down the marketing-site CSP so injected scripts can't touch dashboard session cookies.
