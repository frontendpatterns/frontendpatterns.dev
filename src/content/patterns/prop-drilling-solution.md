---
title: "Prop Drilling Solution"
added: 2025-10-10T00:00:00Z
tags: Component
difficulty: Beginner
description: "Avoid passing props through many intermediate components unnecessarily using context or state management."
---
# Prop Drilling Solution

## Problem

Deeply nested components require data from the top of the tree, forcing you to thread props through every intermediate layer. Components that don't need the data become coupled to it. Adding a new prop means updating five or more components that simply pass it along unchanged.

## Solution

Apply the Prop Drilling Solution pattern by techniques to avoid passing props through many intermediate components unnecessarily, and reinforce it with concise examples or tests. For example, keep a `UserCard` component focused on presentation while a `useUserCard` hook fetches and normalizes its data.
