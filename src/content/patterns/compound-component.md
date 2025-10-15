---
title: "Compound Component"
added: 2025-10-10T00:00:00Z
tags: Component
difficulty: Beginner
description: "Create components that work together implicitly through shared context to manage complex interactions."
---
# Compound Component

## Problem

Complex UI components like tabs, accordions, or select menus require passing dozens of properties through multiple levels to coordinate behavior. Parent components become cluttered with implementation details, and consumers struggle to understand which properties go where, leading to brittle, hard-to-maintain component APIs.

## Solution

Create components that work together implicitly through shared context to manage complex interactions. For example, keep a `UserCard` component focused on presentation while a data fetching layer fetches and normalizes its data.
