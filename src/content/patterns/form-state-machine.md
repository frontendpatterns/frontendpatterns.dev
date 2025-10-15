---
title: "Form State Machine"
added: 2025-10-10T00:00:00Z
tags: State Management
difficulty: Intermediate
description: "Model form states (pristine, dirty, submitting, error) as explicit state transitions."
---
# Form State Machine

## Problem

Form state logic becomes a tangled mess of boolean flags and conditional checks. A form can be both "submitting" and "dirty" or "validating" and "error", but the code doesn't prevent impossible states. Submit buttons stay enabled during submission, or validation runs after successful submission, creating bugs and race conditions.

## Solution

Model form states (pristine, dirty, submitting, error) as explicit state transitions. For example, separate a cart totals reducer from modal visibility state so analytics remains deterministic.
