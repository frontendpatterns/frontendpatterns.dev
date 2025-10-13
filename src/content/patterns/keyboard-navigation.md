---
title: "Keyboard Navigation Pattern"
added: 2025-10-10T00:00:00Z
category: Accessibility
difficulty: Beginner
description: "Support full keyboard interaction for users who can't or don't use pointing devices."
---
# Keyboard Navigation Pattern

Support full keyboard interaction for users who can't or don't use pointing devices.

## Problem

Without this pattern, the premise that supporting full keyboard interaction for users who can't or don't use pointing devices falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on accessibility concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Keyboard Navigation pattern by supporting full keyboard interaction for users who can't or don't use pointing devices, and reinforce it with concise examples or tests. For example, wire a modal so focus jumps to the primary action and returns to the trigger when it closes.
