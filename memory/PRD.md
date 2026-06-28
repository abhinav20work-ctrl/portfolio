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


## Implemented — 2026-06-24 UFO Beans Case Study
- Extracted the uploaded `UFO Beans.pdf` and converted it into the first real case study.
- Replaced the first placeholder proof card with “UFO Bean: Coffee from Another Dimension.”
- Added real case details: problem, strategy, execution phases, immersive launch concept, Gen Z audience angle, and PDF source link.
- Verified: UFO Beans appears as the first case, popup opens, problem/strategy/execution blocks render, and source PDF link is visible.


## Implemented — 2026-06-24 Case Study Popup Redesign
- Rebuilt the case study detail popup from a split card into a lab-style case sheet.
- Added a large yellow evidence/specimen hero area, compact case file summary, problem/strategy blocks, execution phase strip, and PDF source CTA.
- Reduced oversized typography and tightened spacing so the modal feels more polished and fits better in viewport.
- Verified: redesigned case popup opens, execution phases and PDF CTA remain visible, lint checks pass.


## Implemented — 2026-06-24 Detailed UFO Beans Popup & Scroll Lock
- Extracted all 8 pages from `UFO Beans.pdf` into real image assets under `/case-assets/ufo-beans/`.
- Added richer UFO Beans content: proposition, audience, big idea, problem, strategy, execution phases, tags, PDF CTA, and original PDF page gallery.
- Added original PDF cover preview inside the case file summary and an 8-image original frames gallery.
- Implemented stronger modal background scroll locking using fixed body positioning plus wheel/touch prevention outside the popup.
- Verified: PDF preview visible, 8 original images render, body/html locked while popup is open, lint checks pass.


## Implemented — 2026-06-28 UFO Beans Popup Bug Fix
- Removed the pasted PDF frame gallery from the UFO Beans popup.
- Rebuilt the popup using extracted PDF information and selected embedded visual assets: product world and strategy board.
- Added campaign pillars, proposition, audience, big idea, problem, strategy, and execution phases as recreated web content.
- Strengthened modal scroll locking with fixed body, html/body overflow lock, Lenis prevention attribute, and wheel/touch/scroll guards.
- Testing agent verified: no PDF frame gallery, extracted source visuals present, detailed content present, background scroll locked, popup scrollable, mobile no horizontal overflow.


## Implemented — 2026-06-28 Resume-Based Portfolio Rewrite
- Extracted Abhinav Sharma resume content and rewrote the site around Visual Designer / Associate Producer positioning.
- Removed unnecessary Content Lab sections, ticker, sticker tray, and excess lab copy.
- Updated hero, case studies, projects, process, and footer to reflect resume content and reference-image direction.
- Updated case studies to UFO Beans, Sarla Aviation, and The Spotlight Media.
- Updated contact links to Behance and `abhinav20.work@gmail.com`.
- QA agent verified requested rewrite and no-overflow behavior; fixed Radix dialog accessibility warnings by adding DialogTitle/DialogDescription semantics to persona and case modals.


## Implemented — 2026-06-28 Footer Bug Fix
- Reduced footer headline size so “Visual quality. Brand coherence. Audience impact.” no longer runs down/off the page.
- Removed colored background/border/shadow from the “My Philosophy” label, making it neutral/handwritten.
- Reduced footer artwork and shell height for better viewport fit.
- Adjusted footer link block upward for improved desktop column balance.
- Testing agent verified footer heading visibility, description visibility, neutral label, links present, and no desktop/mobile horizontal overflow; noted minor balance issue, now adjusted.


## Implemented — 2026-06-28 Footer Three-Line Heading Fix
- Forced “My Philosophy” label to remain on one line.
- Reformatted footer heading into exactly three single-line spans: “Visual Quality.” / “Brand coherence.” / “Audience impact.”
- Reduced heading font size and widened footer text column to prevent wrapping.
- Increased spacing between the blue footer banner and “My Philosophy.”
- Testing agent verified desktop/mobile: exact three-line heading, single-line label, visible links/description, and no horizontal overflow.


## Implemented — 2026-06-28 Footer Label Alignment Fix
- Left-aligned the “My Philosophy” label with the footer heading block.
- Preserved the exact three-line footer heading and single-line label behavior.
- Testing agent verified desktop/mobile alignment, visible description/links, and no horizontal overflow.


## Implemented — 2026-06-28 Dynamic Hero ID Card
- Reworked the right-side hero persona card into a dynamic ID badge.
- Added top ribbons extending out of the page, an ID pin, badge slot, deeper shadows, grid texture, and more dimensional card styling.
- Removed the unnecessary “click card” prompt while keeping the card interaction available.
- Verified visually: ID card, ribbon pin, and badge hole render correctly; lint checks pass.


## Implemented — 2026-06-28 UFO Beans Fullscreen Case Study Modal
- Built a custom 90vw × 90vh fullscreen interactive case study modal for UFO Beans.
- Added dark blurred overlay, spring scale/opacity entrance, sticky 25% sidebar, scrollable 75% case study content, progress indicator, skeleton loading, Esc close, focus trap, and body scroll lock.
- Extracted embedded images from the uploaded PDF and created cropped visual assets instead of pasting full PDF frames.
- Added sections: Hero, metrics, challenge, research, strategy, big idea, execution accordion, gallery/lightbox, business impact, process, key learnings.
- Testing agent verified fullscreen modal behavior, scroll lock, responsive layout, lightbox, progress nav, extracted-image usage, and no horizontal overflow.
- Fixed QA issue: campaign execution cards now truly expand/collapse, and added test IDs to accordion, gallery, progress, and lightbox controls.


## Implemented — 2026-06-28 UFO Popup + Motion Shelf Optimization
- Fixed UFO Beans fullscreen modal interactions: mouse-wheel scrolling works inside the modal, right-side progress navigation scrolls to the correct sections including Learnings, and outside overlay click closes the popup while inside clicks remain safe.
- Added 20 Sarla Aviation reels to the Reels / Motion Shelf with written titles, descriptions, tags, local video paths, and popup poster support.
- Optimized reel shelf loading: cards now use lightweight lazy poster images (~399KB total) and tiny hover-preview WebM clips (~2.15MB total) that play only on hover/focus instead of loading full videos upfront.
- Verified: 20 cards render, all poster previews load, hover preview plays and pauses correctly, old gradient-only/video-preload card behavior removed, UFO modal scroll/nav/outside-close pass smoke checks, lint checks pass.
