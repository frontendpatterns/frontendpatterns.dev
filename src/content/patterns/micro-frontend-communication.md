---
title: "Micro-Frontend Communication"
added: 2025-10-10T00:00:00Z
tags: Developer Experience
difficulty: Intermediate
description: "Establish communication protocols between independently deployed frontend applications."
---
# Micro-Frontend Communication

## Problem

Independently deployed micro-frontends need to share state and coordinate behavior, but they can't import each other's modules. One team's shopping cart needs to notify another team's header when items are added. Global variables create tight coupling and version conflicts. Without clear communication protocols, micro-frontends become isolated silos.

## Solution

Establish communication protocols between independently deployed frontend applications. For example, add a lint rule that rejects feature-flag commits without the cleanup task attached.
