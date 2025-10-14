---
title: "Normalized State"
added: 2025-10-10T00:00:00Z
tags: State Management
difficulty: Intermediate
description: "Structure state as flat lookup tables to avoid data duplication and simplify updates."
---
# Normalized State

## Problem

Nested data structures lead to duplicated entities scattered throughout state, causing sync nightmares when updating a single item. Updating a user's name requires searching through multiple arrays and objects. Deeply nested updates are verbose and error-prone. The same blog post appears in multiple places with different versions, showing inconsistent data to users.

## Solution

Apply the Normalized State pattern by structuring state as flat lookup tables to avoid data duplication and simplify updates, and reinforce it with concise examples or tests. For example, separate a cart totals reducer from modal visibility state so analytics remains deterministic.
