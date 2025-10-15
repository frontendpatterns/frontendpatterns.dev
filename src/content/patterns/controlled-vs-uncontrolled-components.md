---
title: "Controlled vs. Uncontrolled Components"
added: 2025-10-10T00:00:00Z
tags: Component
difficulty: Beginner
description: "Choose between parent-managed state or component-internal state for form inputs."
---
# Controlled vs. Uncontrolled Components

## Problem

Form inputs behave inconsistently across the application, with some managed by React state and others by the DOM. This creates confusion about where form data lives, makes validation and submission logic unpredictable, and causes bugs when inputs don't update as expected or lose their values unexpectedly.

## Solution

Choose between parent-managed state or component-internal state for form inputs. For example, keep a `UserCard` component focused on presentation while a `useUserCard` hook fetches and normalizes its data.
