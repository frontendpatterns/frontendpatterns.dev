---
title: "Effect-Based Fetching"
added: 2025-10-10T00:00:00Z
tags: Data Fetching
difficulty: Advanced
description: "Trigger data fetches as side effects when components mount or dependencies change."
---
# Effect-Based Fetching

## Problem

Data fetching logic scattered throughout components makes it unclear when and how data loads. Components display empty or stale data when properties change because fetches don't re-run. Users see outdated information after filter changes, navigation, or property updates. Developers struggle to coordinate when fetches should trigger and often miss edge cases.

## Solution

Trigger data fetches as side effects when components mount or dependencies change. For example, let a data fetching layer own the network call while a table component simply renders rows.
