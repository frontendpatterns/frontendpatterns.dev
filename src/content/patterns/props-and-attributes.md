---
title: "Props and Attributes"
added: 2025-10-10T00:00:00Z
tags: Component
difficulty: Beginner
description: "Pass data and configuration into components through properties or attributes."
---
# Props and Attributes

Pass data and configuration into components through properties or attributes.

## Problem

Without this pattern, the premise that passing data and configuration into components through properties or attributes falls apart, and small changes trigger cascading regressions.

## Solution

Apply the Props and Attributes pattern by passing data and configuration into components through properties or attributes, and reinforce it with concise examples or tests. For example, keep a `UserCard` component focused on presentation while a `useUserCard` hook fetches and normalizes its data.
