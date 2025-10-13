---
title: "API Mocking"
added: 2025-10-10T00:00:00Z
tags: Testing
difficulty: Intermediate
description: "Replace real API calls with controlled responses for predictable testing."
---
# API Mocking

Replace real API calls with controlled responses for predictable testing.

## Problem

Without this pattern, the premise that replacing real API calls with controlled responses for predictable testing falls apart, and small changes trigger cascading regressions.

## Context

Use it whenever you're working on testing concerns in a codebase that multiple engineers touch daily.

## Solution

Apply the API Mocking pattern by replacing real API calls with controlled responses for predictable testing, and reinforce it with concise examples or tests. For example, run an integration test that fills the checkout form, submits it, and asserts on the rendered receipt.
