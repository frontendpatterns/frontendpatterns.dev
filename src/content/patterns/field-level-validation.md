---
title: "Field-Level Validation"
added: 2025-10-10T00:00:00Z
tags: State Management
difficulty: Intermediate
description: "Validate individual form fields as users interact with them for immediate feedback."
---
# Field-Level Validation

## Problem

Users filling out forms expect immediate feedback when they enter invalid data. Waiting until form submission to show all errors at once is jarring and forces users to hunt through the form to find and fix problems. This creates a poor experience, especially on long forms where errors might be scattered across multiple sections.

## Solution

Validate individual form fields as users interact with them for immediate feedback. For example, separate a cart totals reducer from modal visibility state so analytics remains deterministic.
