---
title: "Slot"
added: 2025-10-10T00:00:00Z
tags: Component
difficulty: Beginner
description: "Allow parent components to inject content into designated areas of child components."
---
# Slot

## Problem

Components hardcode their entire structure, forcing you to create new variants for each content combination. Layout components can't be reused because you can't inject custom content into specific areas like headers, footers, or sidebars without modifying the component itself.

## Solution

Apply the Slot pattern by allowing parent components to inject content into designated areas of child components, and reinforce it with concise examples or tests. For example, keep a `UserCard` component focused on presentation while a `useUserCard` hook fetches and normalizes its data.
