---
title: "Multi-Store"
added: 2025-10-10T00:00:00Z
tags: State Management
difficulty: Intermediate
description: "Divide application state into multiple independent stores for better separation of concerns."
---
# Multi-Store

## Problem

A monolithic store becomes an unmaintainable mess as the application grows. Unrelated state changes trigger re-renders across the entire app. Team members conflict when editing the same massive state file. Authentication state, UI state, and business data are tangled together, making it hard to reason about each domain independently.

## Solution

Divide application state into multiple independent stores for better separation of concerns. For example, separate a cart totals reducer from modal visibility state so analytics remains deterministic.
