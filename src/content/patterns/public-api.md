---
title: "Public API"
tags: Project Structure
added: 2025-10-10T00:00:00Z
difficulty: Beginner
description: "Expose only necessary interfaces while keeping implementation details private and flexible."
---
# Public API

Expose only necessary interfaces while keeping implementation details private and flexible.

## Problem

Without this pattern, the premise that exposing only necessary interfaces while keeping implementation details private and flexible falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on project structure concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Public API pattern by exposing only necessary interfaces while keeping implementation details private and flexible, and reinforce it with concise examples or tests. For example, split a billing feature so API clients, hooks, and UI elements live in distinct folders with explicit boundaries.
