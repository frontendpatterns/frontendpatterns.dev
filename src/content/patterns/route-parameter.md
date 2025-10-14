---
title: "Route Parameter"
added: 2025-10-10T00:00:00Z
tags: Routing and Navigation
difficulty: Intermediate
description: "Pass dynamic values through URL paths to load specific resources."
---
# Route Parameter

## Problem

Without this pattern, the premise that passing dynamic values through URL paths to load specific resources falls apart, and small changes trigger cascading regressions.

## Solution

Apply the Route Parameter pattern by passing dynamic values through URL paths to load specific resources, and reinforce it with concise examples or tests. For example, map `/settings/profile` and `/settings/security` to nested layouts so URLs mirror what users see.
