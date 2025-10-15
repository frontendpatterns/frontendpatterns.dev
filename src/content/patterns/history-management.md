---
title: "History Management"
added: 2025-10-10T00:00:00Z
tags: Routing and Navigation
difficulty: Intermediate
description: "Control browser history programmatically for custom back/forward behavior."
---
# History Management

## Problem

Browser back and forward buttons behave unexpectedly in complex workflows like multi-step forms or modal dialogs. Each UI state change pollutes history, trapping users in endless back-button cycles, or legitimate navigation steps get skipped entirely.

## Solution

Programmatically controlling browser history for custom back/forward behavior. For example, map `/settings/profile` and `/settings/security` to nested layouts so URLs mirror what users see.
