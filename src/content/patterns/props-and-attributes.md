---
title: "Props and Attributes"
added: 2025-10-10T00:00:00Z
tags: Component
difficulty: Beginner
description: "Pass data and configuration into components through properties or attributes."
---
# Props and Attributes

## Problem

Components hardcode their data and behavior, making them impossible to reuse across different contexts. Every variation requires duplicating the entire component, and testing becomes painful because you can't easily inject different values to verify edge cases.

## Solution

Apply the Props and Attributes pattern by passing data and configuration into components through properties or attributes, and reinforce it with concise examples or tests. For example, keep a `UserCard` component focused on presentation while a `useUserCard` hook fetches and normalizes its data.
