---
title: "Presentational vs. Container"
added: 2025-10-10T00:00:00Z
tags: Component
difficulty: Beginner
description: "Separate components that handle UI rendering from those that manage data and business logic."
---
# Presentational vs. Container

## Problem

Components tightly couple UI rendering with data fetching, state management, and business logic, making them impossible to reuse with different data sources or test independently. Changes to the API or business rules require modifying components that should only care about presentation.

## Solution

Separate components that handle UI rendering from those that manage data and business logic. For example, keep a `UserCard` component focused on presentation while a data fetching layer fetches and normalizes its data.
