---
title: "Form-Level Validation"
added: 2025-10-10T00:00:00Z
tags: State Management
difficulty: Intermediate
description: "Validate entire forms on submission to check cross-field rules and constraints."
---
# Form-Level Validation

## Problem

Some validation rules depend on multiple fields working together - like ensuring a password confirmation matches, checking that a date range is valid, or verifying that at least one contact method is provided. Individual field validation can't catch these cross-field constraints, allowing users to submit forms with logically inconsistent data that only becomes apparent when all fields are considered together.

## Solution

Apply the Form-Level Validation pattern by validating entire forms on submission to check cross-field rules and constraints, and reinforce it with concise examples or tests. For example, separate a cart totals reducer from modal visibility state so analytics remains deterministic.
