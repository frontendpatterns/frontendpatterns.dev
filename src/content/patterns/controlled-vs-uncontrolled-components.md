---
title: "Controlled vs. Uncontrolled Components Pattern"
added: 2025-10-10T00:00:00Z
category: Component
difficulty: Beginner
description: "Choose between parent-managed state or component-internal state for form inputs."
---
# Controlled vs. Uncontrolled Components Pattern

Choose between parent-managed state or component-internal state for form inputs.

## Problem

Without this pattern, the premise that choosing between parent-managed state or component-internal state for form inputs falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on component concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Controlled vs. Uncontrolled Components pattern by choosing between parent-managed state or component-internal state for form inputs, and reinforce it with concise examples or tests. For example, keep a `UserCard` component focused on presentation while a `useUserCard` hook fetches and normalizes its data.
