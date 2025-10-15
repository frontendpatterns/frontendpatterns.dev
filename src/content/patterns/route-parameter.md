---
title: "Route Parameter"
added: 2025-10-10T00:00:00Z
tags: Routing and Navigation
difficulty: Intermediate
description: "Pass dynamic values through URL paths to load specific resources."
---
# Route Parameter

## Problem

URLs can't capture specific resources or entities, forcing applications to use generic paths with client-side state management. Users can't bookmark or share links to specific items, and refreshing the page loses context about which resource was being viewed.

## Solution

Apply the Route Parameter pattern by passing dynamic values through URL paths to load specific resources, and reinforce it with concise examples or tests. For example, map `/settings/profile` and `/settings/security` to nested layouts so URLs mirror what users see.
