---
title: "Colocation"
tags: Project Structure
added: 2025-10-10T00:00:00Z
difficulty: Beginner
description: "Place related files (tests, styles, types) next to the components they support for easier discovery. (See also: State Colocation Pattern)"
---
# Colocation

Place related files (tests, styles, types) next to the components they support for easier discovery. (See also: State Colocation Pattern)

## Problem

Without this pattern, the premise that placing related files (tests, styles, types) next to the components they support for easier discovery. (See also: State Colocation Pattern) falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on project structure concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Colocation pattern by placing related files (tests, styles, types) next to the components they support for easier discovery. (See also: State Colocation Pattern), and reinforce it with concise examples or tests. For example, split a billing feature so API clients, hooks, and UI elements live in distinct folders with explicit boundaries.
