---
title: "Default Props"
added: 2025-10-10T00:00:00Z
tags: Component
difficulty: Beginner
description: "Define fallback values for optional component inputs to ensure predictable behavior."
---
# Default Props

## Problem

Components crash with "Cannot read property of undefined" errors when optional props aren't provided. Every consumer has to remember to pass values for optional properties, and the component behaves unpredictably across different usage contexts, forcing defensive null checks throughout the code.

## Solution

Define fallback values for optional component inputs to ensure predictable behavior. For example, keep a `UserCard` component focused on presentation while a `useUserCard` hook fetches and normalizes its data.
