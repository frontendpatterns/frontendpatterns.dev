---
title: "Absolute Import"
tags: Project Structure
added: 2025-10-10T00:00:00Z
difficulty: Beginner
description: "Configure absolute imports from a base directory to avoid complex relative path navigation."
---
# Absolute Import

## Problem

Import paths become fragile chains of ../../../ that break when files move. Developers waste time counting dots and navigating folder hierarchies, and refactoring becomes risky because changing a file's location requires updating all relative paths throughout the codebase.

## Solution

Apply the Absolute Import pattern by configuring absolute imports from a base directory to avoid complex relative path navigation, and reinforce it with concise examples or tests. For example, split a billing feature so API clients, hooks, and UI elements live in distinct folders with explicit boundaries.
