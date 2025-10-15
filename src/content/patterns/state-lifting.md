---
title: "State Lifting"
added: 2025-10-10T00:00:00Z
tags: State Management
difficulty: Intermediate
description: "Move state up the component tree to share it between sibling components."
---
# State Lifting

## Problem

Sibling components that need to share data have no way to communicate. Developers resort to duplicating state in multiple places, leading to sync issues where one component shows outdated values while another updates. Props drilling or global state become the only options.

## Solution

Move state up the component tree to share it between sibling components. For example, separate a cart totals reducer from modal visibility state so analytics remains deterministic.
