---
title: "Composition over Inheritance"
added: 2025-10-10T00:00:00Z
tags: Component
difficulty: Beginner
description: "Build complex components by combining simpler ones rather than using class hierarchies."
---
# Composition over Inheritance

## Problem

Deep inheritance hierarchies make components fragile and hard to understand. Changes to a base class ripple through all subclasses unpredictably, and you can't mix behaviors from multiple parents without complex multiple inheritance or awkward workarounds that create tight coupling.

## Solution

Build complex components by combining simpler ones rather than using class hierarchies. For example, keep a `UserCard` component focused on presentation while a `useUserCard` hook fetches and normalizes its data.
