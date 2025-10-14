---
title: "Presentational vs. Container"
added: 2025-10-10T00:00:00Z
tags: Component
difficulty: Beginner
description: "Separate components that handle UI rendering from those that manage data and business logic."
---
# Presentational vs. Container

## Problem

Without this pattern, the premise that separating components that handle UI rendering from those that manage data and business logic falls apart, and small changes trigger cascading regressions.

## Solution

Apply the Presentational vs. Container pattern by separating components that handle UI rendering from those that manage data and business logic, and reinforce it with concise examples or tests. For example, keep a `UserCard` component focused on presentation while a `useUserCard` hook fetches and normalizes its data.
