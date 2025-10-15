---
title: "Prop Drilling Solution"
added: 2025-10-10T00:00:00Z
tags: Component
difficulty: Beginner
description: "Avoid passing props through many intermediate components unnecessarily using context or state management."
---
# Prop Drilling Solution

## Problem

Deeply nested components require data from the top of the tree, forcing you to thread properties through every intermediate layer. Components that don't need the data become coupled to it. Adding a new property means updating five or more components that simply pass it along unchanged.

## Solution

Techniques to avoid passing properties through many intermediate components unnecessarily. For example, keep a `UserCard` component focused on presentation while a data fetching layer fetches and normalizes its data.
