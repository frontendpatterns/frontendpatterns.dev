---
title: "Event Handler Contract"
added: 2025-10-10T00:00:00Z
tags: Type Safety and Contracts
difficulty: Advanced
description: "Type event handlers to ensure type-safe event handling."
---
# Event Handler Contract

## Problem

Event handlers are untyped, allowing functions with wrong signatures to be passed without warning. Developers access event properties that don't exist, mistype event types, or pass handlers that expect different event shapes. Callback parameters are unclear, making it hard to know what data is available when handling clicks, form submissions, or custom events.

## Solution

Apply the Event Handler Contract pattern by typing event handlers to ensure type-safe event handling, and reinforce it with concise examples or tests. For example, share a TypeScript interface between the API client and the `OrderSummary` component so breaking changes fail fast.
