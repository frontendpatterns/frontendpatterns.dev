---
title: "Hot Module Replacement"
added: 2025-10-10T00:00:00Z
tags: Developer Experience
difficulty: Intermediate
description: "Update code in running applications without full page reloads for faster iteration."
---
# Hot Module Replacement

## Problem

Every code change triggers a full page reload, losing application state and forcing developers to manually recreate their working context. Form inputs reset, modals close, and navigation state disappears with each edit. Development velocity suffers as developers waste time clicking through the same flows repeatedly. Multi-step workflows become tedious to test during active development.

## Solution

Update code in running applications without full page reloads for faster iteration. For example, add a lint rule that rejects feature-flag commits without the cleanup task attached.
