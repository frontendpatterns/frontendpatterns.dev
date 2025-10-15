---
title: "Infinite Scroll"
added: 2025-10-10T00:00:00Z
tags: Data Fetching
difficulty: Advanced
description: "Load more content automatically as users scroll to create seamless browsing experiences."
---
# Infinite Scroll

## Problem

Traditional pagination forces users to click "Next" repeatedly, breaking flow and adding unnecessary interactions. Loading all content upfront overwhelms the browser with thousands of items. Users lose their scroll position when navigating back from detail pages. Feed-style interfaces feel clunky with manual page controls.

## Solution

Apply the Infinite Scroll pattern by automatically loading more content as users scroll to create seamless browsing experiences, and reinforce it with concise examples or tests. For example, let a `useOrders` hook own the network call while an `OrdersTable` component simply renders rows.
