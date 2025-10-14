---
id: 12
title: Security and Privacy
description: Protecting users and applications.
---
# Security and Privacy Patterns

Frontends handle sensitive data, tokens, and business logic. These patterns layer defensive controls that keep attackers out while preserving trusted user experiences.

## Harden Every Path

- Lock down rendering sinks with [Content Security Policy (CSP)](/content-security-policy-csp), [Trusted Types](/trusted-types), and [Output Encoding](/output-encoding) so injected scripts never execute.
- Validate inbound data using [Input Sanitization](/input-sanitization) and protect state-changing calls via [CSRF Protection](/csrf-protection) with SameSite cookies.
- Treat secrets carefully: follow [Secure Token Storage](/secure-token-storage) and [PII Redaction](/pii-redaction) to limit exposure in logs or the browser.

## Operational Must-Haves

1. Make threat modeling part of design reviews for new flows and surface area changes.
2. Wire automated security scanning and dependency updates into CI to spot risky packages early.
3. Capture security incidents with structured runbooks; document the exploit, the patch, and the long-term mitigation so the team keeps learning.
