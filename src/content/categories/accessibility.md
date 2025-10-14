---
id: 9
title: Accessibility
description: Making apps usable for everyone.
---
# Accessibility Patterns

Accessible interfaces respect every way users perceive and interact with the web. Use these patterns to make keyboard navigation, screen reader support, and motion sensitivity first-class requirements instead of afterthoughts.

## When to Reach for These Patterns

- Audit new flows with [Screen Reader](/screen-reader) and [Keyboard Navigation](/keyboard-navigation) to confirm they expose clear roles, labels, and focus states.
- Announce dynamic changes such as inline validation or background sync via [Live Regions](/live-regions) so assistive tech users stay in the loop.
- Respect motion preferences using [Accessible Animation](/accessible-animation) and offer intuitive escape hatches like [Skip Links](/skip-links) for long content.

## How to Get Started

1. Add accessibility acceptance criteria to every story, noting required focus order and announcements.
2. Pair automated [Accessibility Testing](/accessibility-testing) with manual sweeps using VoiceOver, NVDA, and TalkBack.
3. Capture regressions early by including accessibility checks in code review and CI pipelines.
