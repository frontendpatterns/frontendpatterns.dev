---
title: "Micro-Frontend Communication"
added: 2025-10-10T00:00:00Z
tags: Developer Experience
difficulty: Intermediate
description: "Establish communication protocols between independently deployed frontend applications."
---
# Micro-Frontend Communication

Establish communication protocols between independently deployed frontend applications.

## Problem

Without this pattern, the premise that establishing communication protocols between independently deployed frontend applications falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on developer experience concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the Micro-Frontend Communication pattern by establishing communication protocols between independently deployed frontend applications, and reinforce it with concise examples or tests. For example, add a lint rule that rejects feature-flag commits without the cleanup task attached.
