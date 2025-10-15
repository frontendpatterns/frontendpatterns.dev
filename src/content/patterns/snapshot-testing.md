---
title: "Snapshot Testing"
added: 2025-10-10T00:00:00Z
tags: Testing
difficulty: Intermediate
description: "Capture component output and detecting unintended changes over time."
---
# Snapshot Testing

## Problem

Component refactoring accidentally changes output structure, breaking downstream consumers or causing subtle rendering differences. Developers don't realize a "harmless" change altered the DOM structure, class names, or data attributes that other code depends on.

## Solution

Capture component output and detecting unintended changes over time. For example, run an integration test that fills the checkout form, submits it, and asserts on the rendered receipt.
