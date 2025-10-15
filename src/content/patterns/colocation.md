---
title: "Colocation"
tags: Project Structure
added: 2025-10-10T00:00:00Z
difficulty: Beginner
description: "Place related files (tests, styles, types) next to the components they support for easier discovery. (See also: State Colocation Pattern)"
---
# Colocation

## Problem

Related files are scattered across distant folders: tests in /tests, styles in /styles, types in /types. When working on a component, developers jump between multiple directories, struggling to find the test file or styles that belong with it. Refactoring requires updating files in multiple locations, increasing the chance of missing something.

## Solution

Place related files (tests, styles, types) next to the components they support for easier discovery. (See also: State Colocation Pattern). For example, split a billing feature so API clients, hooks, and UI elements live in distinct folders with explicit boundaries.
