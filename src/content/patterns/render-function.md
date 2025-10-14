---
title: "Render Function"
added: 2025-10-10T00:00:00Z
tags: Component
difficulty: Beginner
description: "Use functions to dynamically generate component output based on state and props."
---
# Render Function

Use functions to dynamically generate component output based on state and props.

## Problem

Without this pattern, the premise that using functions to dynamically generate component output based on state and props falls apart, and small changes trigger cascading regressions.

## Solution

Apply the Render Function pattern by using functions to dynamically generate component output based on state and props, and reinforce it with concise examples or tests. For example, keep a `UserCard` component focused on presentation while a `useUserCard` hook fetches and normalizes its data.
