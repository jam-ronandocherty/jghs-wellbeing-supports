# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

static HTML/CSS/vanilla JS (single `index.html`, no build step)

## Users

Three audiences share one page:
- **Students at JGHS** looking for help directly, for themselves or a friend.
- **Parents/carers** seeking support for their child or for themselves.
- **School staff** (teachers, pastoral/guidance staff) signposting pupils to appropriate services.

## Product Purpose

A single-page directory of mental health and wellbeing support services, searchable and filterable by category, so any visitor can quickly find and reach the right service. Success is a visitor finding a relevant, trustworthy service and reaching it (via outbound link) in as few steps as possible — especially in a crisis.

## Positioning

Not a general information page — a curated, categorized directory combining national UK/Scotland services with locally verified Edinburgh ("cec") services, maintained by the school rather than a third party.

## Operating Context

- Distributed as a link from the school website and potentially via posters/QR codes, so the page must work well as a cold, unauthenticated first load with no dependency on prior navigation.
- No login or account system — must remain a simple static page anyone can open directly.
- Resource list (`RESOURCES` array in `index.html`) is maintained directly in code; no CMS.

## Capabilities and Constraints

- Single static HTML page, no login, no backend — must stay deployable as-is (e.g. to Cloudflare Pages, per prior commit history).
- Search and category-pill filtering over a client-side array of resources (name, description, category, URL, optional `cec` flag for Edinburgh-specific services).
- Crisis/emergency contact banner is a distinct, first-class element on the page, not just another card.

## Brand Commitments

- School identity: JGHS crest (`JGHS-Crest-Transparent-300.png`) used in the header.
- Existing brand palette: teal/green primary (`--brand: #2E7D6B`), red/crisis accent (`--crisis: #C0392B`) — treated as incumbent visual authority, not yet documented in DESIGN.md.

## Evidence on Hand

- Full current resource directory lives in `index.html` (categories include Anxiety & Sleep, Bullying, Self-Harm & Suicidal Ideation, Eating Disorders & OCD, Abuse, Bereavement, LGBTQ+, Young Carers, Cultural Support, Substance Misuse, Parents & Carers, Apps & Websites).
- No testimonials, pricing, or usage metrics exist or should be fabricated.

## Product Principles

1. Crisis-sensitive UX is a hard requirement: emergency/crisis contact information must be maximally visible and unambiguous at all times, not a nice-to-have.
2. Never add friction (login, multi-step flows) between a visitor and finding/reaching a service.
3. Serve three distinct audiences (students, parents/carers, staff) from one undifferentiated page — clarity and scannability outrank density.
4. Treat locally-verified Edinburgh services and national services as equally first-class, but keep them distinguishable (`cec` badge).
5. Stay maintainable by non-developers reading/editing the resource list in code.

## Accessibility & Inclusion

Crisis-sensitive UX is a strict requirement: the crisis/emergency contact section must be maximally visible and unambiguous, ranked above general good-practice accessibility. No formal WCAG standard was mandated, but this crisis-visibility bar governs any redesign of that section.
