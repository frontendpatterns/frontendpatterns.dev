---
title: "State Lifting"
added: 2025-10-10T00:00:00Z
tags: State Management
difficulty: Intermediate
description: "Move state up the component tree to share it between sibling components."
---
# State Lifting

Move state up the component tree to share it between sibling components.

## Problem

Sibling components that need to share data have no way to communicate. Developers resort to duplicating state in multiple places, leading to sync issues where one component shows outdated values while another updates. Props drilling or global state become the only options.

## Solution

Apply the State Lifting pattern by moving state up the component tree to share it between sibling components, and reinforce it with concise examples or tests. For example, separate a cart totals reducer from modal visibility state so analytics remains deterministic.
