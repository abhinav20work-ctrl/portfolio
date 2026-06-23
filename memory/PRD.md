# PRD — Abhinav Sharma Portfolio

## Original Problem Statement
Create a portfolio for a content strategist, Abhinav Sharma with white background, minimal yet playful and creative feel. Focus on micro interactions. Required sections: hero 3-line paragraph, dummy art with moving arrows, three case studies, masonry project videos with popup player, journey-style process line with handdrawn spirals, and footer with philosophy/dummy art/social links.

## User Choices & Updates
- Recreate all visuals from written descriptions.
- Use polished placeholder videos/reels.
- Use dummy LinkedIn/email links.
- Refine for recruiter-friendly, production-level, unique portfolio.
- Keep hero and footer direction; remove “Operating System / Here’s How” section.
- Redesign process section and add more intuitive creative microinteractions.

## Architecture Decisions
- React single-page portfolio using componentized sections.
- Framer Motion powers text reveals, hover movement, animated SVG line/path, and modal/card microinteractions.
- Shadcn Dialog powers project video popup.
- Lenis smooth scrolling added for a more polished portfolio feel.
- No backend/API dependency required for current portfolio experience.

## User Personas
- Recruiters evaluating clarity, role fit, outcomes, and process maturity.
- Creative/content leads looking for strategic thinking and craft sensibility.
- Potential collaborators wanting quick proof of taste, experiments, and contact options.

## Core Requirements Implemented
- Hero with 3-line positioning paragraph, recruiter snapshot, strengths cloud, and CTAs.
- Outcome-driven three-card case study section.
- Masonry project/reel section with “I experiment a lot” note and video popup.
- Redesigned process section with recruiter-friendly workflow cards, animated path, spirals, artifacts, and hover motion.
- Footer with philosophy, center dummy art, and handdrawn LinkedIn/email links.
- Sticky desktop section nav for intuitive browsing.
- Responsive/mobile-safe layout; no horizontal overflow in checks.

## Implemented — 2026-06-23
- Built initial portfolio from scratch.
- Added recruiter-friendly refinement and proof signals.
- Removed Operating System / Here’s How section per feedback.
- Rebuilt Process section into a more production-ready creative workflow.
- Added/verified microinteractions: hover lift, card wiggle, play pulse, animated process dot/path, smooth scroll, modal interactions.

## Prioritized Backlog
### P0
- Replace dummy contact links with real LinkedIn/email when available.
- Replace placeholder project videos with Abhinav’s real reels/videos.

### P1
- Add downloadable real resume asset if provided.
- Add richer case study detail pages or expandable case notes.

### P2
- Add lightweight analytics events for recruiter CTA clicks.
- Add optional testimonials or client logos if available.

## Next Tasks
- Collect real portfolio videos and contact details.
- Replace placeholder case-study metrics with verified numbers.
- Add a real resume PDF or hosted resume page.


## Implemented — 2026-06-23 Follow-up Refinement
- Center-aligned the floating section navigation and verified exact viewport centering.
- Reworked case studies with richer editorial imagery, accent colors, floating outcome labels, hover lift, dashed image overlays, and stronger card depth.
- Expanded the experiments section to 12 project/video assets with masonry variation and hover/open-reel microinteractions.
- Replaced footer dummy artwork with the user-provided attached waving character artwork.
- Further refined the process section with centered heading, brief → story → system marker, animated path, and more visual card styling.
- Verified: 12 project cards, footer attached artwork visible, no mobile horizontal overflow, centered nav.
