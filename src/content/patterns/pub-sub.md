---
title: "Pub/Sub"
added: 2025-10-10T00:00:00Z
tags: State Management
difficulty: Intermediate
description: "Decouple components through event-based communication without direct references."
---
# Pub/Sub

Decouple components through event-based communication without direct references.

## Problem

Without this pattern, the premise that decoupling components through event-based communication without direct references falls apart, and small changes trigger cascading regressions.

## Solution

Apply the Pub/Sub pattern by decoupling components through event-based communication without direct references, and reinforce it with concise examples or tests. For example, separate a cart totals reducer from modal visibility state so analytics remains deterministic.
