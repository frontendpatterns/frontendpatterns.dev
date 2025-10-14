---
id: 5
title: Data Fetching
description: Getting data from APIs, caching, synchronization.
---
# Data Fetching Patterns

Reliable frontends treat the network as lossy and unpredictable. These patterns help you model server interaction, caching, and synchronization so UI stays trustworthy under stress.

## Start with Strategy

- Define ownership with [Server State vs Client State](/server-state-vs-client-state) to decide which layer tracks truth.
- Keep requests in check using [Parallel Request](/parallel-request), [Dependent Query](/dependent-query), and [Query Deduplication](/query-deduplication) to avoid redundant calls.
- Manage lifecycle edges with [Request Cancellation](/request-cancellation), [Retry](/retry), and [Stale-While-Revalidate](/stale-while-revalidate) for resilient UX under latency spikes.

## Delivery Playbook

1. Wrap critical flows in [Async Boundary](/async-boundary) and [Error Boundary](/error-boundary) components to fail gracefully.
2. Log cache hits, misses, and mutation conflicts so you can tune policies with real data.
3. Document data contracts next to components—include example payloads, loading states, and optimistic assumptions to keep teams aligned.
