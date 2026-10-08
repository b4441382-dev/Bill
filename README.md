# AI Revenue OS — product preview

A responsive front-end product concept for a B2B revenue-intelligence platform. It includes a marketing site and an interactive, explicitly labelled demo workspace.

## Run locally

```bash
npm install
npm run dev
```

Vite serves on `0.0.0.0` so the preview can be opened from the browser. To create a static production bundle of this prototype:

```bash
npm run build
npm run preview
```

## What is implemented

- Premium marketing page with product storytelling, platform sections, pricing, security, FAQ, responsive navigation and reduced-motion support.
- Interactive demo workspace: overview, Revenue Intelligence, website audit, Lead Intelligence, experiments, analytics, Revenue Copilot, integrations and settings.
- Five-step onboarding flow and local draft experiment creation.
- Light/dark workspace theme, demo date ranges, lead search/filter/profile, dashboard navigation search, notifications and responsive mobile navigation.
- Transparent labels for illustrative datasets, directional lead/opportunity scores, roadmap integrations and demo-only behaviors.

## Prototype boundaries

This is a **front-end product preview**, not a production SaaS. The demo workspace data is hard-coded in `src/data/demo.js`. There is no real authentication, database, multi-tenant isolation, analytics ingestion, live URL crawl, third-party integration, production AI service, billing, email delivery, or API. The Website Audit simulates a short report based on a front-end sample; it does not request the supplied URL. Copilot responses are deterministic demo responses and no prompt leaves the browser. Onboarding, settings and experiments are stored only in component state for the active session.

No real customers, testimonials, security certifications, or measured business outcomes are claimed. The sample profiles and metrics are fictional demonstration data.

## Suggested production architecture

Keep the current UI as a presentation layer and add separate services behind an authenticated API:

1. **Identity and tenant boundary:** OIDC/passkeys, secure sessions, workspace membership, RBAC, tenant-scoped authorization on every request, audit events and rate limits.
2. **Application API:** typed request/response contracts, server-side input validation, idempotent job endpoints and tenant-aware access to a relational store.
3. **Data ingestion:** isolated connector workers with OAuth credentials stored encrypted server-side; provider webhooks and scheduled sync with explicit consent and revocation.
4. **Analytics layer:** event schema/versioning, consent controls, aggregation and retention policies, data-quality reporting and reproducible funnel calculations.
5. **AI layer:** provider abstraction, server-only secrets, redaction/minimization, prompt/version logging, evidence references, confidence/uncertainty and human review for consequential recommendations.
6. **Website audit:** isolated server-side fetch/render workers with SSRF protections, DNS/IP allow/block lists, timeouts, content-size limits, robots/legal review and no cross-tenant caching.
7. **Observability and security:** structured logs without sensitive payloads, alerting, dependency scanning, backups, key rotation, incident response and independent security review before production.

Before launch, implement automated tests for authorization/tenant isolation, consent and deletion; verify WCAG 2.2 AA, keyboard/focus states, mobile layouts and performance budgets; complete privacy/legal review; and avoid exposing API keys or trusting client-provided workspace IDs.
