---
title: "Async Validation"
added: 2025-10-10T00:00:00Z
tags: State Management
difficulty: Intermediate
description: "Perform server-side validation checks without blocking user interaction."
---
# Async Validation

## Problem

Some validation rules require server-side checks, such as verifying that a username is available or that a coupon code is valid. If these checks block user interaction, the form becomes sluggish and frustrating to use. Users may submit the form before validation completes, or they may abandon it entirely because the interface feels unresponsive.

## Solution

Perform server-side validation checks without blocking user interaction. For example, separate a cart totals reducer from modal visibility state so analytics remains deterministic.
