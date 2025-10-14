---
title: "Controlled vs. Uncontrolled Components"
added: 2025-10-10T00:00:00Z
tags: Component
difficulty: Beginner
description: "Choose between parent-managed state or component-internal state for form inputs."
---
# Controlled vs. Uncontrolled Components

## Problem

Without this pattern, the premise that choosing between parent-managed state or component-internal state for form inputs falls apart, and small changes trigger cascading regressions.

## Solution

Apply the Controlled vs. Uncontrolled Components pattern by choosing between parent-managed state or component-internal state for form inputs, and reinforce it with concise examples or tests. For example, keep a `UserCard` component focused on presentation while a `useUserCard` hook fetches and normalizes its data.
