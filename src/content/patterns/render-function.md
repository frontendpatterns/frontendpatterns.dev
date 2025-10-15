---
title: "Render Function"
added: 2025-10-10T00:00:00Z
tags: Component
difficulty: Beginner
description: "Use functions to dynamically generate component output based on state and props."
---
# Render Function

## Problem

Components require static markup that can't adapt to different data structures or render variations. You end up creating separate components for minor rendering differences, or embedding complex conditional logic directly in JSX that becomes difficult to read and maintain.

## Solution

Use functions to dynamically generate component output based on state and props. For example, keep a `UserCard` component focused on presentation while a `useUserCard` hook fetches and normalizes its data.
