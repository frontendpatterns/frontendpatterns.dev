---
title: "Compound Component"
added: 2025-10-10T00:00:00Z
tags: Component
difficulty: Beginner
description: "Create components that work together implicitly through shared context to manage complex interactions."
---
# Compound Component

## Problem

Complex UI components like tabs, accordions, or select menus require passing dozens of props through multiple levels to coordinate behavior. Parent components become cluttered with implementation details, and consumers struggle to understand which props go where, leading to brittle, hard-to-maintain component APIs.

## Solution

Apply the Compound Component pattern by creating components that work together implicitly through shared context to manage complex interactions, and reinforce it with concise examples or tests. For example, keep a `UserCard` component focused on presentation while a `useUserCard` hook fetches and normalizes its data.
