---
title: "Separation of Concerns"
tags: Project Structure
added: 2025-10-10T00:00:00Z
difficulty: Beginner
description: "Divide code into distinct sections for logic, presentation, and styling to improve maintainability."
---
# Separation of Concerns

## Problem

Business logic, UI markup, styles, and data fetching are intertwined in single files, making it impossible to change one without risking breaks in others. Developers must understand the entire codebase to make simple changes, and reusing logic or styling across different contexts requires extensive refactoring.

## Solution

Divide code into distinct sections for logic, presentation, and styling to improve maintainability. For example, split a billing feature so API clients, hooks, and UI elements live in distinct folders with explicit boundaries.
