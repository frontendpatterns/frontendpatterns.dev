---
title: "State Batching"
added: 2025-10-10T00:00:00Z
tags: State Management
difficulty: Intermediate
description: "Group multiple state updates together to minimize re-renders and improve performance."
---
# State Batching

## Problem

Multiple state updates in rapid succession trigger separate re-renders for each change, causing performance bottlenecks and visual flashing. Users see components flash through intermediate states. Event handlers that update several related state values cause the component tree to render multiple times, wasting CPU cycles and degrading user experience.

## Solution

Group multiple state updates together to minimize re-renders and improve performance. For example, separate a cart totals reducer from modal visibility state so analytics remains deterministic.
