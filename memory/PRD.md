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


## Implemented — 2026-06-23 Requested Fixes
- Replaced footer image source with user-provided `abhinav-footer.png` asset.
- Converted Projects from CSS columns to a dense CSS grid to reduce empty gaps and keep the “I experiment a lot” note inside its box.
- Removed the process background line and moving yellow ball completely.
- Kept responsive animated spirals within each process step so the spiral interaction responds to the process cards instead of the background path.
- Verified: footer uses abhinav-footer asset, Projects has 12 cards, process path count is 0, responsive spirals visible, mobile has no horizontal overflow.


## Implemented — 2026-06-23 Footer/Nav Refinement
- Enlarged the footer character artwork and anchored it lower so it visually reaches the bottom edge of the footer area.
- Added a stronger layered drop shadow to the floating navbar for better depth and separation.
- Verified footer art dimensions and navbar shadow through screenshot inspection.


## Implemented — 2026-06-23 Process Icon Update
- Replaced generic spiral icons in process cards with process-specific Lucide icons: scan/search, branching, blocks/system, and repeat loop.
- Added animated icon badges while removing all old spiral marks from the process section.
- Verified: 4 process icons render and old `.spiral-mark` count is 0.


## Implemented — 2026-06-23 Unified Content Lab Experience
- Simplified the hero to reduce visual mess while retaining Content Lab identity: cleaner headline, ingredient tray, input/method/output strip, and lab console.
- Added a Product Core / Content Lab OS section with lab machine cards, formula chips, and clarity meter.
- Replaced case-study and experiment imagery with custom CSS-generated specimen/sample visuals to avoid generic portfolio thumbnails.
- Upgraded process into a lab protocol surface with readout panel, protocol bars, calibrated module cards, and consistent lab styling.
- Rebuilt footer as Content Lab checkout with matching dark header, lab mascot label, module label, and lab-style contact area.
- Verified visually: hero strip/tray visible, process readout and protocol bars visible, footer lab header/art label visible, no mobile horizontal overflow.


## Implemented — 2026-06-23 Content Lab Cleanup
- Removed the floating navbar completely.
- Removed duplicate section headline/kicker pairs so sections now use one clear module label plus one main headline.
- Removed the hero “enter lab” scroll cue placeholder.
- Removed the footer “lab mascot” tag.
- Blended the footer artwork into the lab-grid background using larger scale, no card styling, multiply blending, and matching footer background grid.
- Verified: navbar count 0, enter lab count 0, duplicate process kicker count 0, mascot tag count 0, footer art visible, no mobile horizontal overflow.


## Implemented — 2026-06-24 Popup & Persona Refinement
- Added hero persona interaction: clicking the right-side lab card opens an Abhinav character popup using `abhinav-hero.png`.
- Added case study detail popup with lab-styled specimen visual, outcome, description, and tags.
- Redesigned project video popup into a left-video / right-title-description layout matching the Content Lab visual system.
- Vertically aligned footer text and social links more closely while preserving center artwork.
- Verified: persona popup opens, case detail popup opens, video is left of copy in popup, footer alignment improved, no mobile horizontal overflow.
