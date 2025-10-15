---
title: "API Mocking"
added: 2025-10-10T00:00:00Z
tags: Testing
difficulty: Intermediate
description: "Replace real API calls with controlled responses for predictable testing."
---
# API Mocking

## Problem

Tests that depend on real APIs are slow, flaky, and fragile. They fail when the network is down, break when backend endpoints change, and make it impossible to test error states or edge cases. Running the test suite requires a fully functioning backend, slowing down development and CI pipelines.

## Solution

Replace real API calls with controlled responses for predictable testing. For example, run an integration test that fills the checkout form, submits it, and asserts on the rendered receipt.
