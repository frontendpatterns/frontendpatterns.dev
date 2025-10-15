---
title: "Controlled Input"
added: 2025-10-10T00:00:00Z
tags: State Management
difficulty: Intermediate
description: "Synchronize form inputs with component state for full programmatic control."
---
# Controlled Input

## Problem

You can't validate, format, or transform user input as they type because the DOM manages the input value directly. Features like real-time validation, input masking, or syncing multiple inputs become impossible or require awkward workarounds involving refs and manual DOM manipulation.

## Solution

Synchronize form inputs with component state for full programmatic control. For example, separate a cart totals reducer from modal visibility state so analytics remains deterministic.
