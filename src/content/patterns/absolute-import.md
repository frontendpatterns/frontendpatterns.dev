---
title: "Absolute Import"
tags: Project Structure
added: 2025-10-10T00:00:00Z
difficulty: Beginner
description: "Configure absolute imports from a base directory to avoid complex relative path navigation."
---
# Absolute Import

Configure absolute imports from a base directory to avoid complex relative path navigation.

## Problem

Without this pattern, the premise that configuring absolute imports from a base directory to avoid complex relative path navigation falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on project structure concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Absolute Import pattern by configuring absolute imports from a base directory to avoid complex relative path navigation, and reinforce it with concise examples or tests. For example, split a billing feature so API clients, hooks, and UI elements live in distinct folders with explicit boundaries.
