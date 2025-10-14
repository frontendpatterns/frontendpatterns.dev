---
title: "Choosing a Rendering Strategy"
description: Framework for selecting between SSG, SSR, ISR, CSR, and streaming approaches.
tags: Architecture
relatedPatterns:
  - code-splitting
  - route-based-splitting
  - lazy-loading
  - route-prefetching
  - server-state-vs-client-state
publishedAt: 2025-10-14
---

# Choosing a Rendering Strategy

Picking how your frontend renders is a balancing act between time to first byte, interactivity, infrastructure cost, and team workflows. This guide helps you evaluate rendering options and align them with product constraints so delivery teams can move fast without exhausting budgets or performance targets.

## Audit the Constraints First

- **Critical path metrics:** If search or conversion depends on first contentful paint, treat approaches that ship HTML on first response as the default. When interaction latency matters more, lean on client-side hydration strategies.
- **Content volatility:** Pages that change a handful of times per day fit static generation with cache revalidation, while live dashboards or user-specific views demand server rendering or client orchestration.
- **Infrastructure maturity:** Teams with managed edge platforms can adopt streaming and incremental regeneration easily. If deployment involves traditional servers, keep options scoped to standard SSR or static exports.
- **Team skill set:** Choose strategies aligned with debugging comfort. A team strong in React server components can reason about streaming, whereas a design systems team that prefers Markdown and CMS pipelines should favor static generation.

## Core Rendering Options

### Static Site Generation (SSG)

Pre-render pages at build time and serve them via a CDN. Reach for SSG when:

- Marketing pages only change after authors publish through a CMS.
- SEO critical content benefits from fast first paint with zero runtime cost.
- You can accept rebuilding or selectively regenerating pages when content updates.

Pair SSG with [Route Prefetching](/route-prefetching) to keep subsequent navigation instant and [Lazy Loading](/lazy-loading) for large interactive widgets.

### Server-Side Rendering (SSR)

Render the page on each request to guarantee fresh data. Favor SSR if:

- User specific personalization must appear in the initial HTML.
- Product teams rely on live feature flags or A/B tests at request time.
- Compliance requires that responses always reflect the latest server state.

Combine SSR with [Server State vs Client State](/server-state-vs-client-state) to decide which data hydrates on the client and [Code Splitting](/code-splitting) so interactive bundles remain lean.

### Incremental Static Regeneration (ISR)

Generate HTML once, then revalidate transparently. Choose ISR when:

- Content publishes frequently but not face to face with user actions.
- You need SSG like performance without recomputing the entire site.
- Editors can tolerate a seconds-long window before changes appear.

Coordinate ISR caches with [Route Based Splitting](/route-based-splitting) to keep rebuilds scoped to the routes that actually change.

### Client-Side Rendering (CSR)

Ship a mostly empty HTML shell and let the client render the UI. Use CSR if:

- The app is authenticated from the first route and SEO is secondary.
- Engineers need real-time experiences that rely on persistent connections.
- Deployment pipelines make server rendering difficult or expensive.

Support CSR with aggressive [Code Splitting](/code-splitting) and [Lazy Loading](/lazy-loading) to prevent the initial bundle from ballooning.

### Streaming and Edge Rendering

Stream HTML from the edge or server to reduce time to first byte on complex pages. Favor streaming if:

- You combine SSR data fetching with large components that can hydrate progressively.
- Users are globally distributed and edge platforms keep latency low.
- You already invest in observability that can trace streamed responses.

Streaming complements ISR fallbacks and CSR hydration because users see shell content sooner while scripts hydrate behind the scenes.

## Supporting Patterns

- Use [Route Based Splitting](/route-based-splitting) and [Code Splitting](/code-splitting) to ship only the code necessary for each navigation.
- Layer [Route Prefetching](/route-prefetching) on top of SSG, ISR, and CSR so your next route is ready before the user asks for it.
- Apply [Lazy Loading](/lazy-loading) for below-the-fold media or third-party widgets so every rendering mode feels responsive.
- Follow [Server State vs Client State](/server-state-vs-client-state) to prevent duplicate fetching after hydration and keep data ownership clear.

## Make the Call

| Signal | Strategy to Favor | Why |
| --- | --- | --- |
| Pages rarely change but must be lightning fast | SSG or ISR | Static HTML cached at the edge delivers the fastest first paint. |
| Personalization or regulated data must be accurate on first byte | SSR with streaming | Fresh data renders server side and streams to the client without blocking hydration. |
| Highly interactive app where SEO is less critical | CSR with code splitting | Focus on fast interactivity while keeping bundles under control. |
| Global audience and mixed content freshness requirements | ISR or streaming | Blend cached HTML with request time rendering to balance speed and accuracy. |

Document the decision, codify it in deployment templates, and keep score of performance and build times after release. Rendering strategy is not set and forget; revisit quarterly as platform capabilities, cache policies, and team structures evolve.
