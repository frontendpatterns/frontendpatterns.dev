---
id: 8
title: Routing and Navigation
description: The flow through an app.
---
# Routing and Navigation Patterns

Great navigation keeps users oriented no matter how deep the experience goes. These patterns help you model URLs, transitions, and loading strategies that scale from marketing pages to multi-tenant dashboards.

## What to Reach For

- Structure your route tree with [Nested Route](/nested-route) and [Dynamic Route](/dynamic-route) so layout shells and data fetchers stay in sync.
- Accelerate movement using [Route Prefetching](/route-prefetching) and [Route-Based Splitting](/route-based-splitting) to pull in code and data before the user clicks.
- Keep context intact and accessible with [Breadcrumb](/breadcrumb) and [Scroll Restoration](/scroll-restoration) to reduce disorientation between pages.

## Implementation Tips

1. Treat your navigation schema as a contract—document route parameters, query string usage, and guard conditions.
2. Add analytics to route transitions to spot dead ends or loops that frustrate users.
3. Pair router tests with [Navigation Middleware](/navigation-middleware) or [Route Guard](/route-guard) patterns to keep private sections secure and predictable.
