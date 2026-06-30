export const caseStudies = [
  {
    id: "case-01",
    label: "01",
    title: "UFO Bean: Coffee from Another Dimension",
    outcome: "Coffee launch → story-led engagement",
    brief: "Positioned a coffee brand as an otherworldly discovery, using mystery, cinematic storytelling, and shareable Gen Z-first launch mechanics.",
    proposition: "Coffee from Another Dimension",
    audience: "Gen Z and young millennials who value story, aesthetics, and shareability as much as the product itself.",
    bigIdea: "The Signal Has Arrived — launch the brand like an unexplained event, not a product announcement.",
    problem:
      "The coffee category is saturated with brands repeating the same promises around taste, quality, and lifestyle. UFO Bean needed a world that made people curious before they even knew it was coffee.",
    strategy:
      "Instead of selling coffee as a product, the brand was framed as a signal arriving from another dimension. The launch became an unexplained event: something to decode, share, and participate in.",
    execution: [
      "Tease: leaked footage, alien language, distorted signals, and cryptic posts to create intrigue.",
      "Reveal: cinematic POV content and AR filters that made the audience feel like they had discovered the product.",
      "Sustain: Spot the UFO challenges, alien transmissions, fan theories, and limited-edition flavor drops.",
    ],
    campaignPillars: [
      "A mysterious discovery, not a manufactured product",
      "UFO-shaped packaging as the story anchor",
      "Cryptic teaser content built for Gen Z sharing",
      "AR filters, POV reels, alien transmissions, and UGC loops",
    ],
    visualAssets: {
      productWorld: "/case-assets/ufo-beans/extracted/image-p1-1.jpeg",
      strategyBoard: "/case-assets/ufo-beans/extracted/image-p2-1.png",
    },
    tags: ["Visual strategy", "Campaign idea", "Gen Z", "Brand world"],
    image:
      "https://images.pexels.com/photos/29579755/pexels-photo-29579755.jpeg?auto=compress&cs=tinysrgb&w=1100",
    accent: "#1782F3",
    pdfUrl: "https://customer-assets.emergentagent.com/job_micro-moments-8/artifacts/t61qfkf2_UFO%20Beans.pdf",
  },
  {
    id: "case-02",
    label: "02",
    title: "Next Gen Transportation Content Idea for FUTURAMA",
    outcome: "Info-Ent Content - Indirect Brand promotion",
    brief: "Wrote and created this info-entertainment style video where we talk about the future of transportation while indirectly promoting eVTOLs and Sarla Aviation.",
    problem: "A high-context aviation team needed progress, data, and technical work shaped into content that felt clear, credible, and watchable.",
    strategy: "Turn technical progress into a visual story: simplify the message, sequence the proof, and use motion to make the update easier to understand.",
    execution: [
      "Built motion-led marketing and branding content.",
      "Worked with the founders’ team on annual progress update video.",
      "Created short-form informative content for Futurama media page.",
    ],
    tags: ["Motion graphics", "Info-ent content", "Branding", "Aviation"],
    image:
      "https://images.pexels.com/photos/31622947/pexels-photo-31622947.jpeg?auto=compress&cs=tinysrgb&w=1100",
    accent: "#5C5C5C",
    palette: {
      sidebar: "linear-gradient(180deg, #04070C 0%, #171717 48%, #3B3B3B 100%)",
      shell: "#F3F3F3",
      content: "#FFFFFF",
      dot: "#111111",
      mutedDot: "#8A8A8A",
      ctaText: "#111111",
      ctaHover: "#E6E6E6",
      cardBorder: "rgba(4, 7, 12, 0.42)",
      text: "#04070C",
    },
    modalMeta: {
      format: "Case Study",
      role: "Content Strategy + Production",
      source: "Multiple news articles, Reddit, YouTube",
      snapshotTitle: "Case Snapshot",
      snapshotLines: ["Info-Ent Content - Indirect Brand promotion"],
    },
    pdfFrames: Array.from({ length: 4 }, (_, index) => `/case-assets/sarla-transport-pdf/frame-${String(index + 1).padStart(2, "0")}.jpg`),
    pdfUrl: "/case-assets/sarla-transport-pdf/sarla-transport.pdf",
  },
  {
    id: "case-03",
    label: "03",
    title: "The Spotlight Media: Four original shows from scratch",
    outcome: "Concept → scripting → final production",
    brief: "Oversaw concept development, scripting, design quality, brand coherence, and final production for original media shows built to engage audiences.",
    problem: "Original shows needed more than execution — they needed a repeatable production approach from idea to final audience-facing content.",
    strategy: "Build every show around a strong visual language, clean scripting flow, and production system that protects both quality and audience impact.",
    execution: [
      "Produced four original shows from scratch.",
      "Oversaw concept development and scripting.",
      "Managed design process from concept to execution.",
    ],
    tags: ["Associate producer", "Original shows", "Creative direction"],
    image:
      "https://images.unsplash.com/photo-1612180768015-56180b567352?auto=format&fit=crop&w=1100&q=80",
    accent: "#D5BFA4",
    palette: {
      sidebar: "linear-gradient(180deg, #04070C 0%, #2A262B 52%, #A59D92 100%)",
      shell: "#F5F1EA",
      content: "#FAF7F1",
      dot: "#A59D92",
      cardBorder: "rgba(165, 157, 146, 0.44)",
      text: "#04070C",
    },
    pdfFrames: Array.from({ length: 4 }, (_, index) => `/case-assets/spotlight-scifi-pdf/frame-${String(index + 1).padStart(2, "0")}.jpg`),
    pdfUrl: "/case-assets/spotlight-scifi-pdf/spotlight-scifi.pdf",
  },
];

export const recruiterSignals = [
  { id: "signal-01", value: "2025", label: "Motion Graphic Designer at Sarla Aviation" },
  { id: "signal-02", value: "4 shows", label: "produced from concept to final production" },
  { id: "signal-03", value: "Bengaluru", label: "visual designer shaping content for impact" },
];

export const strengths = [
  "Motion graphics",
  "Video production",
  "Creative direction",
  "Script visualization",
  "Production management",
  "Brand films",
];

export const labModules = [
  {
    id: "scanner",
    code: "CL-01",
    title: "Signal Scanner",
    input: "messy notes, interviews, objections",
    output: "patterns worth building around",
    accent: "mint",
  },
  {
    id: "reactor",
    code: "CL-02",
    title: "Voice Reactor",
    input: "founder instinct + audience tension",
    output: "language that sounds ownable",
    accent: "yellow",
  },
  {
    id: "synth",
    code: "CL-03",
    title: "Format Synth",
    input: "one sharp idea",
    output: "campaigns, reels, landing sections",
    accent: "lavender",
  },
];

export const labFormula = ["Signal", "Tension", "Voice", "Format", "Rhythm"];

export const projects = [
  {
    id: "featured-project-01",
    title: "Next-gen transport in motion",
    description: "A wide-format motion piece exploring how future mobility, aviation, and city movement can be framed as a clear social-first story.",
    videoUrl:
      "/reels/featured-reel-01.mp4",
    posterUrl: "/reels/posters/featured-reel-01.jpg",
    aspectRatio: 1.773399,
    previewUrl: "/reels/previews/featured-reel-01-preview.webm",
    tags: ["Future mobility", "Wide edit", "Sarla Aviation"],
    shape: "wide",
  },
  {
    id: "featured-project-02",
    title: "Future travel visual cut",
    description: "A second wide-format reel built around transport storytelling, using movement, pacing, and sharp visual proof to hold attention.",
    videoUrl:
      "/reels/featured-reel-02.mp4",
    posterUrl: "/reels/posters/featured-reel-02.jpg",
    aspectRatio: 1.773399,
    previewUrl: "/reels/previews/featured-reel-02-preview.webm",
    tags: ["Future travel", "Wide edit", "Motion story"],
    shape: "wide",
  },
  {
    id: "project-01",
    title: "Building flying taxis in India",
    description:
      "Founder-led short-form content for Sarla Aviation, framing India’s urban traffic problem as a bold product mission with a direct, memorable hook.",
    videoUrl:
      "/reels/sarla-reel-01.mp4",
    posterUrl: "/reels/posters/sarla-reel-01.jpg",
    aspectRatio: 0.562500,
    previewUrl: "/reels/previews/sarla-reel-01-preview.webm",
    tags: ["Founder story", "Mobility", "Interview reel"],
    shape: "tall",
  },
  {
    id: "project-02",
    title: "Built here. Built for real.",
    description:
      "A proof-led build update that turns engineering progress into a confident launch beat: grounded, tactile, and designed to feel real rather than speculative.",
    videoUrl:
      "/reels/sarla-reel-02.mp4",
    posterUrl: "/reels/posters/sarla-reel-02.jpg",
    aspectRatio: 1.773399,
    previewUrl: "/reels/previews/sarla-reel-02-preview.webm",
    tags: ["Build update", "Proof of work", "Launch rhythm"],
    shape: "wide",
  },
  {
    id: "project-03",
    title: "From decks to highways",
    description:
      "A progress reel about watching a concept move from renders and decks into real-world road movement — built around the emotional shift from plan to proof.",
    videoUrl:
      "/reels/sarla-reel-03.mp4",
    posterUrl: "/reels/posters/sarla-reel-03.jpg",
    aspectRatio: 0.562500,
    previewUrl: "/reels/previews/sarla-reel-03-preview.webm",
    tags: ["Progress story", "Real-world proof", "Sarla Aviation"],
    shape: "tall",
  },
  {
    id: "project-04",
    title: "Sustainable mobility at ICT",
    description:
      "Event-led content featuring Payal Satish on sustainable mobility and the future of cities, edited to keep a technical theme clear and social-first.",
    videoUrl:
      "/reels/sarla-reel-04.mp4",
    posterUrl: "/reels/posters/sarla-reel-04.jpg",
    aspectRatio: 0.562500,
    previewUrl: "/reels/previews/sarla-reel-04-preview.webm",
    tags: ["Event content", "Sustainable mobility", "Speaker edit"],
    shape: "tall",
  },
  {
    id: "project-05",
    title: "Little wins, steady steps",
    description:
      "A warmer people-and-progress reel built around the line, ‘Imagining what we’re doing is a dream, basically’ — capturing momentum without over-explaining it.",
    videoUrl:
      "/reels/sarla-reel-05.mp4",
    posterUrl: "/reels/posters/sarla-reel-05.jpg",
    aspectRatio: 1.773399,
    previewUrl: "/reels/previews/sarla-reel-05-preview.webm",
    tags: ["Team story", "Emotional beat", "Progress reel"],
    shape: "wide",
  },
  {
    id: "project-06",
    title: "Vintage footage for future pilots",
    description: "A future-facing Sarla reel with a playful archival lens — positioning today’s test moments as the footage tomorrow’s pilots will look back on.",
    videoUrl:
      "/reels/sarla-reel-06.mp4",
    posterUrl: "/reels/posters/sarla-reel-06.jpg",
    aspectRatio: 1.773399,
    previewUrl: "/reels/previews/sarla-reel-06-preview.webm",
    tags: ["Aviation future", "Brand voice", "Sarla reel"],
    shape: "wide",
  },
  {
    id: "project-07",
    title: "Wings India felt real",
    description: "A crisp event-memory reel from Wings India 2026, shaped to make a milestone feel immediate, credible, and worth sharing.",
    videoUrl:
      "/reels/sarla-reel-07.mp4",
    posterUrl: "/reels/posters/sarla-reel-07.jpg",
    aspectRatio: 0.562500,
    previewUrl: "/reels/previews/sarla-reel-07-preview.webm",
    tags: ["Event reel", "Wings India", "Milestone"],
    shape: "tall",
  },
  {
    id: "project-08",
    title: "Sanchan’s first year",
    description: "A people-first anniversary piece celebrating one year at Sarla Aviation with warmth, personality, and a clear internal culture signal.",
    videoUrl:
      "/reels/sarla-reel-08.mp4",
    posterUrl: "/reels/posters/sarla-reel-08.jpg",
    aspectRatio: 1.773399,
    previewUrl: "/reels/previews/sarla-reel-08-preview.webm",
    tags: ["Culture content", "Team story", "Anniversary reel"],
    shape: "wide",
  },
  {
    id: "project-09",
    title: "Sarla merch, now live",
    description: "A product-drop reel for Sarla merch, turning a shop announcement into a clean branded moment with national pride and launch clarity.",
    videoUrl:
      "/reels/sarla-reel-09.mp4",
    posterUrl: "/reels/posters/sarla-reel-09.jpg",
    aspectRatio: 0.562500,
    previewUrl: "/reels/previews/sarla-reel-09-preview.webm",
    tags: ["Merch launch", "Product drop", "Brand content"],
    shape: "tall",
  },
  {
    id: "project-10",
    title: "MoU to breaking the internet",
    description: "A high-stakes announcement reel translating the SkyFactory MoU into a strong public milestone for Sarla Aviation and eVTOL visibility.",
    videoUrl:
      "/reels/sarla-reel-10.mp4",
    posterUrl: "/reels/posters/sarla-reel-10.jpg",
    aspectRatio: 1.773399,
    previewUrl: "/reels/previews/sarla-reel-10-preview.webm",
    tags: ["Announcement", "SkyFactory", "eVTOL"],
    shape: "wide",
  },
  {
    id: "project-11",
    title: "Dubai Airshow energy",
    description: "A high-energy event recap shaped around big ideas, bold conversations, and the momentum of Sarla’s presence at Dubai Airshow.",
    videoUrl:
      "/reels/sarla-reel-11.mp4",
    posterUrl: "/reels/posters/sarla-reel-11.jpg",
    aspectRatio: 0.562500,
    previewUrl: "/reels/previews/sarla-reel-11-preview.webm",
    tags: ["Dubai Airshow", "Event recap", "Brand momentum"],
    shape: "tall",
  },
  {
    id: "project-12",
    title: "Built before the scale",
    description: "A reflective build-history reel that frames early work as the foundation for something much larger than the team initially imagined.",
    videoUrl:
      "/reels/sarla-reel-12.mp4",
    posterUrl: "/reels/posters/sarla-reel-12.jpg",
    aspectRatio: 1.773399,
    previewUrl: "/reels/previews/sarla-reel-12-preview.webm",
    tags: ["Origin story", "Build journey", "Sarla Aviation"],
    shape: "wide",
  },
  {
    id: "project-13",
    title: "India will grow wings",
    description: "A conviction-led national mobility reel, turning self-reliance and aviation ambition into a clear emotional statement for public audiences.",
    videoUrl:
      "/reels/sarla-reel-13.mp4",
    posterUrl: "/reels/posters/sarla-reel-13.jpg",
    aspectRatio: 1.773399,
    previewUrl: "/reels/previews/sarla-reel-13-preview.webm",
    tags: ["India story", "Self-reliance", "Aviation ambition"],
    shape: "wide",
  },
  {
    id: "project-14",
    title: "Crossing borders for opportunity",
    description: "A travel-and-opportunity reel built around global aviation conversations, keeping the tone personal while preserving the brand’s ambition.",
    videoUrl:
      "/reels/sarla-reel-14.mp4",
    posterUrl: "/reels/posters/sarla-reel-14.jpg",
    aspectRatio: 1.773399,
    previewUrl: "/reels/previews/sarla-reel-14-preview.webm",
    tags: ["Global mobility", "Opportunity", "Travel reel"],
    shape: "wide",
  },
  {
    id: "project-15",
    title: "SYLLA SYL-X1 ground testing",
    description: "A technical milestone reel announcing ground testing for Sarla Aviation’s half-scale eVTOL demonstrator with clarity, confidence, and launch weight.",
    videoUrl:
      "/reels/sarla-reel-15.mp4",
    posterUrl: "/reels/posters/sarla-reel-15.jpg",
    aspectRatio: 1.773399,
    previewUrl: "/reels/previews/sarla-reel-15-preview.webm",
    tags: ["Ground testing", "SYLLA SYL-X1", "Technical milestone"],
    shape: "wide",
  },
  {
    id: "project-16",
    title: "Inflection Point is out",
    description: "A release announcement for Adrien Schmidt’s Inflection Point episode with Accel India, built to drive attention toward the full conversation.",
    videoUrl:
      "/reels/sarla-reel-16.mp4",
    posterUrl: "/reels/posters/sarla-reel-16.jpg",
    aspectRatio: 0.562500,
    previewUrl: "/reels/previews/sarla-reel-16-preview.webm",
    tags: ["Podcast launch", "Founder voice", "Accel India"],
    shape: "tall",
  },
  {
    id: "project-17",
    title: "Goodbye, Indiranagar office",
    description: "A sentimental team-memory reel marking the move from Sarla’s Indiranagar office, balancing nostalgia with the promise of a bigger chapter.",
    videoUrl:
      "/reels/sarla-reel-17.mp4",
    posterUrl: "/reels/posters/sarla-reel-17.jpg",
    aspectRatio: 1.773399,
    previewUrl: "/reels/previews/sarla-reel-17-preview.webm",
    tags: ["Culture reel", "Office move", "Team memory"],
    shape: "wide",
  },
  {
    id: "project-18",
    title: "Ground test season continues",
    description: "A momentum reel from Sarla’s continued ground testing cycle, connecting eVTOL progress, Bengaluru, flying taxis, and made-in-India energy.",
    videoUrl:
      "/reels/sarla-reel-18.mp4",
    posterUrl: "/reels/posters/sarla-reel-18.jpg",
    aspectRatio: 1.773399,
    previewUrl: "/reels/previews/sarla-reel-18-preview.webm",
    tags: ["Ground test", "Made in India", "eVTOL"],
    shape: "wide",
  },
  {
    id: "project-19",
    title: "Flight-test cutdown",
    description: "A compact technical reel packaged as a clean visual update, giving Sarla’s test footage a sharp social-first rhythm.",
    videoUrl:
      "/reels/sarla-reel-19.mp4",
    posterUrl: "/reels/posters/sarla-reel-19.jpg",
    aspectRatio: 1.773399,
    previewUrl: "/reels/previews/sarla-reel-19-preview.webm",
    tags: ["Test footage", "Technical reel", "Sarla Aviation"],
    shape: "wide",
  },
  {
    id: "project-20",
    title: "Wing workout day",
    description: "A ground-test update turning wing data and engineering progress into a confident made-in-India eVTOL content moment.",
    videoUrl:
      "/reels/sarla-reel-20.mp4",
    posterUrl: "/reels/posters/sarla-reel-20.jpg",
    aspectRatio: 1.773399,
    previewUrl: "/reels/previews/sarla-reel-20-preview.webm",
    tags: ["Wing testing", "Data looks good", "Made in India"],
    shape: "wide",
  },
];

export const processSteps = [
  {
    id: "audience-first",
    number: "01",
    label: "Audience first",
    note: "I begin by understanding the audience, the platform, and the goal. Great content starts with context—not the timeline.",
    artifact: "Audience map",
  },
  {
    id: "ai-workflow",
    number: "02",
    label: "AI workflow",
    note: "I use AI to accelerate research, ideation, scripting, and storyboarding, turning ideas into a strong creative foundation in minutes.",
    artifact: "AI storyboard",
  },
  {
    id: "creative-craft",
    number: "03",
    label: "Creative craft",
    note: "This is where design, motion, pacing, and visual decisions transform a rough draft into something people actually want to watch.",
    artifact: "Creative cut",
  },
  {
    id: "final-delivery",
    number: "04",
    label: "Final delivery",
    note: "I fine-tune the edit, motion, sound, and details to create content that's clear, engaging, and memorable.",
    artifact: "Final content",
  },
];