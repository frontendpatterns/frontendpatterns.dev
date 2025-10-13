---
title: "Folder Organization Strategy"
category: Project Structure
added: 2025-10-10T00:00:00Z
difficulty: Beginner
description: "Choose between shallow folder structures for simplicity or deep nesting for organization based on project scale."
---
# Folder Organization Strategy

Choose between shallow folder structures for simplicity or deep nesting for organization based on project scale.

## Problem

Without this pattern, the premise that choosing between shallow folder structures for simplicity or deep nesting for organization based on project scale falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on project structure concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Folder Organization Strategy by choosing between shallow folder structures for simplicity or deep nesting for organization based on project scale, and reinforce it with concise examples or tests. For example, split a billing feature so API clients, hooks, and UI elements live in distinct folders with explicit boundaries.
