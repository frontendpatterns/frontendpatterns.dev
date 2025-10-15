---
title: "Route Prefetching"
added: 2025-10-10T00:00:00Z
tags: Routing and Navigation
difficulty: Intermediate
description: "Load route code and data before users navigate for instant transitions."
---
# Route Prefetching

## Problem

Every navigation triggers loading spinners as code and data are fetched, making the application feel sluggish. Users wait for resources that could have been loaded during idle time, especially frustrating for predictable navigation patterns like pagination or common workflows.

## Solution

Apply the Route Prefetching pattern by loading route code and data before users navigate for instant transitions, and reinforce it with concise examples or tests. For example, map `/settings/profile` and `/settings/security` to nested layouts so URLs mirror what users see.
