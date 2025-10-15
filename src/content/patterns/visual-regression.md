---
title: "Visual Regression"
added: 2025-10-10T00:00:00Z
tags: Testing
difficulty: Intermediate
description: "Compare screenshots to detect unintended visual changes automatically."
---
# Visual Regression

## Problem

CSS changes, dependency updates, or component refactors introduce subtle visual bugs that go unnoticed until users report them. Layouts shift unexpectedly, colors change, spacing breaks, or responsive breakpoints fail without anyone catching it during development.

## Solution

Compare screenshots to detect unintended visual changes automatically. For example, run an integration test that fills the checkout form, submits it, and asserts on the rendered receipt.
