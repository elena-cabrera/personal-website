export type LaunchVideoTimelineBeat = {
  startSec: number;
  endSec: number;
  label: string;
  purpose: string;
};

export type LaunchVideoHighlight = {
  title: string;
  timestampSec: number;
  timestampLabel: string;
  frame: string;
  explanation: string;
};

export type LaunchVideoPaletteSwatch = {
  hex: string;
  label: string;
};

export type LaunchVideoBuildTip = {
  title: string;
  body: string;
};

export type LaunchVideoReferenceLink = {
  slug: string;
  title: string;
  note?: string;
};

export type LaunchVideoBuildNotes = {
  tools: string[];
  articleUrl?: string;
  tips: LaunchVideoBuildTip[];
  craftLessons: string[];
  articleDiffers?: string;
  references?: LaunchVideoReferenceLink[];
};

export type LaunchVideoManifestEntry = {
  slug: string;
  title: string;
  company: string;
  url: string;
  productUrl: string;
  date: string;
  durationSec: number;
  tags: string[];
  description: string;
  video: {
    src: string;
    poster: string;
  };
  timeline: LaunchVideoTimelineBeat[];
  highlights: LaunchVideoHighlight[];
  narrative: string;
  palette: LaunchVideoPaletteSwatch[];
  hasVoiceover: boolean;
  /** Optional cross-link to a landing subpage slug */
  relatedLandingSlug?: string;
  /** Optional credit pointing at another launch-video slug */
  foundViaSlug?: string;
  /** Optional "How it was made" block (Mila) */
  buildNotes?: LaunchVideoBuildNotes;
};

const asset = (slug: string, file: string) =>
  `/assets/images/collections/launch-videos/${slug}/${file}`;

const videoAsset = (slug: string, file: string) =>
  `/assets/videos/collections/launch-videos/${slug}/${file}`;

const viaMila = 'mila-capchase' as const;

export const launchVideoManifest: LaunchVideoManifestEntry[] = [
  {
    slug: 'karumi-ai-csm',
    title: 'Karumi — AI CSM',
    company: 'Karumi (YC F25)',
    url: 'https://www.linkedin.com/posts/pablo-omenaca-muro_your-csms-onboard-your-best-50-accounts-activity-7520847482231111680-cj-x',
    productUrl: 'https://karumi.ai/',
    date: '2026-10-27',
    durationSec: 60,
    tags: ['launch-video', 'ai', 'productivity', 'motion'],
    description:
      "60-second launch film for Karumi's AI CSM: low-fi UI wireframes over fluid warm halftone/dot-matrix backgrounds. Dialogue voiceover between a confused user and the Karumi AI; electronic track goes tense, drops to silence on 'Meet Karumi.', then restarts upbeat with crisp UI SFX. Posted by Pablo Omenaca on LinkedIn.",
    video: {
      src: videoAsset('karumi-ai-csm', 'video.mp4'),
      poster: videoAsset('karumi-ai-csm', 'poster.webp'),
    },
    hasVoiceover: true,
    timeline: [
      {
        startSec: 0,
        endSec: 13,
        label: 'User monologue',
        purpose:
          "Over the app: 'Okay...' 'where do I connect my domain?' 'Wait...' 'Did I already set up permissions?' 'This is so difficult!' 'Yeah, I'll come back later.'",
      },
      {
        startSec: 14,
        endSec: 19,
        label: 'Broken onboarding',
        purpose:
          "'Onboarding processes are broken.' / 'Users want to ask and get what they need instantly.' surrounded by popping question tooltips ('? What's step 2 of 47?', '? How do I configure SSO?', '? Where do I invite my team?'...).",
      },
      {
        startSec: 20,
        endSec: 21,
        label: 'Meet Karumi',
        purpose: "Silence, then 'Meet Karumi.'",
      },
      {
        startSec: 22,
        endSec: 26,
        label: 'Positioning',
        purpose:
          "'An onboarding specialist for every customer that talks / listens / shows. Instantly.' (slot-machine verb swap).",
      },
      {
        startSec: 27,
        endSec: 29,
        label: 'Ask',
        purpose: "'Ask anything...' / 'Connecting...'",
      },
      {
        startSec: 30,
        endSec: 49,
        label: 'Voice chat demo',
        purpose:
          "Floating widget dialogue: 'Hmm, how can I start using this tool?' > 'Hi, let's get you live in three quick steps. First, your domain.' > 'Sure, it's acme.com.' > 'Connected. Now drop your contact list right here.' > 'Perfect. Your first campaign is ready. Shall I send it?' > 'Oh! That was easy. Send it.' while Karumi's own red cursor clicks through the real app.",
      },
      {
        startSec: 50,
        endSec: 51,
        label: 'Proof',
        purpose: "'You're live' / 'Onboarding complete - 3 of 3 steps' + success chime.",
      },
      {
        startSec: 52,
        endSec: 58,
        label: 'CTA',
        purpose:
          "'Stop losing users who get lost' / 'With live AI onboarding by Karumi'.",
      }
    ],
    highlights: [
      {
        title: 'Simplified UI wireframes',
        timestampSec: 3,
        timestampLabel: '0:03',
        frame: asset('karumi-ai-csm', '01-simplified-ui-wireframes.webp'),
        explanation:
          'Grey blocks, focus on the action — low-fi app chrome so the struggle stays readable.',
      },
      {
        title: 'Halftone topography background',
        timestampSec: 5,
        timestampLabel: '0:05',
        frame: asset('karumi-ai-csm', '02-halftone-topography.webp'),
        explanation:
          'Fluid warm halftone / dot-matrix field under the floating UI.',
      },
      {
        title: 'Diegetic typography',
        timestampSec: 9,
        timestampLabel: '0:09',
        frame: asset('karumi-ai-csm', '03-diegetic-typography.webp'),
        explanation:
          'Type moves with the camera so the confused monologue feels inside the scene.',
      },
      {
        title: 'Pixel-block grid transitions',
        timestampSec: 13,
        timestampLabel: '0:13',
        frame: asset('karumi-ai-csm', '04-pixel-block-transitions.webp'),
        explanation:
          'Pixel-block grid bridges scenes as the monologue tips into the problem beat.',
      },
      {
        title: 'Anxiety tooltip cloud',
        timestampSec: 17,
        timestampLabel: '0:17',
        frame: asset('karumi-ai-csm', '05-anxiety-tooltip-cloud.webp'),
        explanation:
          "Question tooltips pop around 'Users want…' — '? What's step 2 of 47?', '? How do I configure SSO?', '? Where do I invite my team?'…",
      },
      {
        title: 'Floating chat UI',
        timestampSec: 33,
        timestampLabel: '0:33',
        frame: asset('karumi-ai-csm', '06-floating-chat-ui.webp'),
        explanation:
          'Voice chat widget with waveform and typing over the real app.',
      },
      {
        title: 'Ghost cursor automation',
        timestampSec: 41,
        timestampLabel: '0:41',
        frame: asset('karumi-ai-csm', '07-ghost-cursor-automation.webp'),
        explanation:
          "Karumi's branded red cursor clicks through the app while the dialogue runs.",
      }
    ],
    narrative:
      "Problem (lost users churn) > silence + reveal 'Meet Karumi' > voice demo, AI clicks the app > proof 'You're live' > CTA. Music: tense ticking beat, cut to silence at 20s, upbeat bassline restarts at 21s, success chime at 50s.",
    palette: [
      { hex: '#FFFFFF', label: 'white' },
      { hex: '#F9EBE6', label: 'light peach' },
      { hex: '#E85D45', label: 'coral (brand)' },
      { hex: '#D93D26', label: 'deep orange' },
      { hex: '#1A1A1A', label: 'near black' }
    ],
  },
  {
    slug: 'mila-capchase',
    title: 'Mila (Capchase)',
    company: 'Capchase',
    url: 'https://x.com/GuliMoreno/status/2110370319638954119',
    productUrl: 'https://www.capchase.com/',
    date: '2026-10-14',
    durationSec: 53,
    tags: ['launch-video', 'ai', 'fintech', 'motion'],
    description:
      "53-second, no-voiceover motion-graphics launch for Capchase's AI deal-desk agent Mila: inbox chaos, Meet Mila on the bass drop, a frosted proposal demo, then scale and a finance.new end card. Made by Guli Moreno with Claude Code + HyperFrames; track Terminal Velocity by Cospe (Epidemic Sound).",
    video: {
      src: videoAsset('mila-capchase', 'video.mp4'),
      poster: videoAsset('mila-capchase', 'poster.webp'),
    },
    hasVoiceover: false,
    timeline: [
      {
        startSec: 0,
        endSec: 3,
        label: 'Problem',
        purpose:
          "Typed 'Traditional vendor financing is broken.' on a blank field; 'is broken.' goes bold on a tense typing beat.",
      },
      {
        startSec: 3,
        endSec: 11,
        label: 'Overwhelm',
        purpose:
          'Vertical waterfall of financing emails motion-blurs; three late-night chat bubbles and a notification pile on as the music builds.',
      },
      {
        startSec: 11,
        endSec: 14,
        label: 'Pivot',
        purpose:
          "Screen clears; 'But it doesn't have to be that way.' types, then a lavender highlight block; riser into silence.",
      },
      {
        startSec: 14,
        endSec: 17,
        label: 'Meet Mila',
        purpose:
          "Drop: concentric rings, fluid orange/peach orb, 'Meet Mila.'",
      },
      {
        startSec: 17,
        endSec: 30,
        label: 'Demo',
        purpose:
          "Orb docks into 'Ask Mila anything'; quote → credit check → proposal card → upfront tweak → Send → Pay now → Signed, on a macro zoom of the orb gradient.",
      },
      {
        startSec: 30,
        endSec: 35,
        label: 'Channels',
        purpose:
          "Quick cuts: 'Just ask.' then Via Gmail / Slack / finance.new in a light theme with real product UI.",
      },
      {
        startSec: 35,
        endSec: 40,
        label: 'Callback',
        purpose:
          'Same frantic bubbles return; Mila answers instantly with approvals and send confirmations.',
      },
      {
        startSec: 40,
        endSec: 45,
        label: 'Scale',
        purpose:
          "Camera pulls back to an infinite isometric card grid: 'A 24/7 deal desk.' / 'With instant answers.'",
      },
      {
        startSec: 45,
        endSec: 53,
        label: 'CTA',
        purpose:
          "Orange circular wipe to Capchase lockup, tagline 'Vendor financing at the speed of sales.', cursor clicks finance.new.",
      }
    ],
    highlights: [
      {
        title: 'Typing as rhythm',
        timestampSec: 1.5,
        timestampLabel: '0:02',
        frame: asset('mila-capchase', '01-typing-as-rhythm.webp'),
        explanation:
          'Keystrokes land on the tense beat so the problem line feels scored, not just typed.',
      },
      {
        title: 'Motion blur for overwhelm',
        timestampSec: 7.5,
        timestampLabel: '0:08',
        frame: asset('mila-capchase', '02-motion-blur-overwhelm.webp'),
        explanation:
          'Email rows streak vertically; speed itself becomes the metaphor for a broken desk.',
      },
      {
        title: 'Highlight block as gear-shift',
        timestampSec: 13.5,
        timestampLabel: '0:14',
        frame: asset('mila-capchase', '03-highlight-block-pivot.webp'),
        explanation:
          'Lavender selection on the pivot line telegraphs the cut into silence before the drop.',
      },
      {
        title: 'Orb as character',
        timestampSec: 15.5,
        timestampLabel: '0:16',
        frame: asset('mila-capchase', '04-orb-as-character.webp'),
        explanation:
          'The orange/peach orb is logo, loader and avatar in one object that carries the Meet Mila hit.',
      },
      {
        title: 'Macro-gradient backgrounds',
        timestampSec: 23.5,
        timestampLabel: '0:24',
        frame: asset('mila-capchase', '05-macro-gradient-bg.webp'),
        explanation:
          'Demo cards sit on a zoomed slice of the same orb gradient, so UI and brand stay one surface.',
      },
      {
        title: 'Callback resolves the problem',
        timestampSec: 37,
        timestampLabel: '0:37',
        frame: asset('mila-capchase', '06-callback-bubbles.webp'),
        explanation:
          'The same late-night pings return with instant Mila replies — problem shot paid off, not abandoned.',
      },
      {
        title: 'Isometric infinite grid',
        timestampSec: 41.5,
        timestampLabel: '0:42',
        frame: asset('mila-capchase', '07-isometric-grid.webp'),
        explanation:
          'One card becomes a plane of deal-desk tiles; scale without a number counter.',
      }
    ],
    narrative:
      'Problem, pivot, Meet Mila on the drop, step-by-step demo, channels, callback that answers the opening chaos, scale, then end card. No voiceover — on-screen type and the Epidemic track carry the arc.',
    palette: [
      { hex: '#F5F6F8', label: 'bg' },
      { hex: '#111111', label: 'text' },
      { hex: '#E85D36', label: 'Mila / emphasis' },
      { hex: '#F69D79', label: 'peach' },
      { hex: '#D2C4ED', label: 'lavender pivot' },
      { hex: '#FFFFFF', label: 'cards' }
    ],

    buildNotes: {
      tools: [
        'Claude Code',
        'HyperFrames (HTML + GSAP → MP4)',
        'Epidemic Sound (Terminal Velocity by Cospe)',
        'ffmpeg / contact sheets / librosa / whisper for reference analysis',
      ],
      articleUrl: 'https://www.gulipad.com/writings/mila-launch-video',
      tips: [
        {
          title: 'Start with references, not the brief',
          body: 'Rank and study launch films before product context, music, or script. Shared references beat a cold brief.',
        },
        {
          title: "Music first, drop on 'Meet Mila'",
          body: 'Pick the track before visuals and lock cuts to measured onsets. The bass drop lands on Meet Mila; the logo lands on the last hit.',
        },
        {
          title: 'Be blunt, but say what works',
          body: 'Reviews can be harsh ("teletienda", "AI slop") if they also name the beat that is already right and ask for more of it.',
        },
        {
          title: "Commit what's good",
          body: 'Git commits are save points and a clear signal not to rewrite the parts that already work.',
        },
        {
          title: 'Course-correct on the go',
          body: 'Send mid-task nudges instead of waiting for a full pass to finish.',
        },
        {
          title: 'Ask for its opinion',
          body: "When a half of the film stalls, ask what is missing and let the model propose the next move.",
        },
        {
          title: 'Keep the taste calls',
          body: 'Human picks SFX links, tagline, and message-carrying lines; the agent handles execution and measurement.',
        },
      ],
      craftLessons: [
        'Reference music often hits hardest ~70% in after 1–2s of silence; Attio uses a sub swell, Raycast slams every cut, Rippling peaks on the product name and the logo.',
        'Script rule: ~12 headline lines max, one idea per film, product carries the story, single CTA.',
        'Camera never stalls: constant drift plus punch-ins (shared expo.out curve); more short overlapping scenes beat fewer long ones.',
        'Transitions should morph what is already on screen (Attio approach), not hard-cut to new content.',
        "Avoid AI-slop: number counters, glitches, crack effects, cheesy SFX.",
        'Epidemic Creator plan excludes brand marketing — need Business/Enterprise and swap preview stems for licensed masters.',
      ],
      articleDiffers:
        "The article's in-chat cut (30 fps) differs from the final X post (60 fps) after ~20s: opening line is 'Traditional vendor financing is broken.' (not 'Software and hardware…'); the 'Just ask.' / Via channels section is light-theme with real Gmail and Slack UIs instead of dark glass; scale line is 'A 24/7 deal desk. With instant answers.'; end tagline is 'Vendor financing at the speed of sales.' not '…speed of tech.'",
      references: [
        { slug: 'attio-ask-attio', title: 'Ask Attio', note: "1 — Guli's top pick" },
        { slug: 'raycast-coming-2026', title: 'New Raycast — Coming 2026', note: '2' },
        { slug: 'elevenlabs-reception', title: 'Reception by ElevenLabs', note: '3' },
        { slug: 'claude-slides-design-docs', title: 'Claude Slides, Design & Docs', note: '4' },
        { slug: 'harvey-ii', title: 'Harvey II', note: '5' },
        {
          slug: 'rippling-ai',
          title: 'Rippling AI',
          note: 'Added later as a key structure reference (two peaks: product name + logo)',
        },
        { slug: 'ramp-accounting-bench', title: 'Ramp Accounting Bench' },
        { slug: 'hebbia-projects', title: 'Hebbia Projects' },
        { slug: 'linear-agent', title: 'Linear Agent' },
        {
          slug: 'ramp-policy-agent',
          title: 'Ramp Policy Agent',
          note: 'Weakest of the set; kept as fintech reference',
        },
        { slug: 'superhuman', title: 'Superhuman power tools' },
        { slug: 'cursor-2-0', title: 'Cursor 2.0' },
        { slug: 'notion-3-0-agents', title: 'Notion 3.0 Agents' },
        { slug: 'krea-2', title: 'Krea 2' },
        { slug: 'chatly-flowjam', title: 'Chatly × Flowjam' },
      ],
    },
  },
  {
    slug: 'strawberry-1-0',
    title: 'Strawberry 1.0 launch',
    company: 'Strawberry',
    url: 'https://x.com/charles_maddock/status/2114659351470247986',
    productUrl: 'https://strawberrybrowser.com/',
    date: '2026-10-26',
    durationSec: 90,
    tags: ['launch-video', 'ai', 'browser', 'productivity', 'motion'],
    description:
      "90-second, no-voiceover launch film: 3D AI 'companion' characters, kinetic type and abstracted app UIs on a white dot grid, driven by an upbeat electronic track and UI sound effects.",
    video: {
      src: videoAsset('strawberry-1-0', 'video.mp4'),
      poster: videoAsset('strawberry-1-0', 'poster.webp'),
    },
    relatedLandingSlug: 'strawberry',
    hasVoiceover: false,
    foundViaSlug: viaMila,
    timeline: [
      {
        startSec: 0,
        endSec: 5,
        label: 'Hook',
        purpose:
          "Kinetic type ('You have plans', 'You want to move fast', 'You need a team') with characters running; establishes the need for speed and scale.",
      },
      {
        startSec: 5,
        endSec: 11,
        label: 'Solution',
        purpose:
          "'The AI team that works alongside you'; words take on the characters' colours, characters pop into a command bar.",
      },
      {
        startSec: 11,
        endSec: 30,
        label: 'Demo, sales',
        purpose:
          "'Book 100 sales calls' leads to automated LinkedIn outreach and Google Calendar filling up, then what companions can do across apps.",
      },
      {
        startSec: 30,
        endSec: 47,
        label: 'Demo, collaboration',
        purpose:
          'Multiple coloured cursors build a Google Slides research deck in parallel.',
      },
      {
        startSec: 47,
        endSec: 57,
        label: 'Demo, admin',
        purpose:
          'Google Meet note-taking, then Gmail follow-up, HubSpot update and the next call booked.',
      },
      {
        startSec: 57,
        endSec: 67,
        label: 'Demo, organisation',
        purpose:
          'Cursors drag scattered Google Drive files into department folders.',
      },
      {
        startSec: 68,
        endSec: 76,
        label: 'Proof',
        purpose:
          "'1.8 billion websites', floating SaaS icons, cascading testimonial cards, a ticking companions counter (267k+).",
      },
      {
        startSec: 77,
        endSec: 89,
        label: 'CTA',
        purpose:
          "'Discover a new way to work', character lineup, end card with logo, 'Download now for free', Mac/Windows buttons, URL.",
      }
    ],
    highlights: [
      {
        title: 'Kinetic type with colour binding',
        timestampSec: 1,
        timestampLabel: '0:01',
        frame: asset('strawberry-1-0', '01-kinetic-type.webp'),
        explanation:
          "Bold, tightly tracked sans; words swap in place and take on each character's colour, tying copy to the product.",
      },
      {
        title: 'Functional palette',
        timestampSec: 10,
        timestampLabel: '0:10',
        frame: asset('strawberry-1-0', '02-functional-palette.webp'),
        explanation:
          "Neutral white/grey dot grid plus soft accents, roughly purple #8762D9, coral #EB6B56, green #94C973, blue #75A9D2, each tied to a 'department' or companion.",
      },
      {
        title: 'Abstracted UI framing',
        timestampSec: 18,
        timestampLabel: '0:18',
        frame: asset('strawberry-1-0', '03-abstracted-ui.webp'),
        explanation:
          'Real apps (LinkedIn, Slides) shown as clean floating white cards with soft shadows and no browser chrome, so focus stays on the action.',
      },
      {
        title: 'Snappy motion and easing',
        timestampSec: 27,
        timestampLabel: '0:27',
        frame: asset('strawberry-1-0', '04-snappy-motion.webp'),
        explanation:
          'Fast-in, slow-out; elements pop and scale with slight overshoot and slide off quickly, which reads as speed.',
      },
      {
        title: 'Oversized coloured cursors',
        timestampSec: 43,
        timestampLabel: '0:43',
        frame: asset('strawberry-1-0', '05-coloured-cursors.webp'),
        explanation:
          'Stylised cursors in the character palette make invisible AI actions tangible.',
      },
      {
        title: 'Multi-agent visualisation',
        timestampSec: 46,
        timestampLabel: '0:46',
        frame: asset('strawberry-1-0', '06-multi-agent.webp'),
        explanation:
          'Several cursors building one deck at once, a visual metaphor for a team working in parallel.',
      },
      {
        title: 'Layered social proof',
        timestampSec: 71,
        timestampLabel: '1:11',
        frame: asset('strawberry-1-0', '07-social-proof.webp'),
        explanation:
          'Testimonial cards cascade and overlap, then a fast-ticking counter, so it reads as lots of praise without slowing the pace.',
      },
      {
        title: 'High-contrast end card',
        timestampSec: 84,
        timestampLabel: '1:24',
        frame: asset('strawberry-1-0', '08-end-card.webp'),
        explanation:
          'Characters stripped away: white, black/coral type, OS download buttons, URL. Zero ambiguity.',
      }
    ],
    narrative:
      'A compressed Problem, Solution, Proof, Action arc built for social feeds. It hooks on a universal desire (move fast without the headcount), introduces the companions as the team, rapid-fires four tedious tasks being automated in familiar apps, overwhelms with scale and social proof, and lands on a frictionless free-download CTA.',
    palette: [
      { hex: '#FFFFFF', label: 'approximate' },
      { hex: '#8762D9', label: 'approximate' },
      { hex: '#EB6B56', label: 'approximate' },
      { hex: '#94C973', label: 'approximate' },
      { hex: '#75A9D2', label: 'approximate' },
      { hex: '#111111', label: 'approximate' }
    ],
  },
  {
    slug: 'ramp-accounting-bench',
    title: 'Ramp Accounting Bench',
    company: 'Ramp',
    url: 'https://www.youtube.com/watch?v=hrkp_DIHTk8',
    productUrl: 'https://labs.ramp.com/ramp-accounting-bench',
    date: '2026-09-18',
    durationSec: 55,
    tags: ['launch-video', 'ai', 'fintech', 'analytics', 'motion'],
    description:
      'Editorial, typography-led launch of Ramp Accounting Bench: vintage adding-machine props, 22 simulated companies / 137 tasks, then scatter and bar charts of model scores. No voiceover; strings and piano.',
    video: {
      src: videoAsset('ramp-accounting-bench', 'video.mp4'),
      poster: videoAsset('ramp-accounting-bench', 'poster.webp'),
    },
    hasVoiceover: false,
    foundViaSlug: viaMila,
    timeline: [
      {
        startSec: 0,
        endSec: 3,
        label: 'Intro',
        purpose:
          "3D vintage cash register on warm off-white: 'INTRODUCING / Ramp Accounting Bench'.",
      },
      {
        startSec: 3,
        endSec: 10,
        label: 'Setup',
        purpose:
          'Companies (22), tasks (137), rubrics by accounting pros — left-third copy, right-two-thirds machine printing cards.',
      },
      {
        startSec: 10,
        endSec: 23,
        label: 'Example task',
        purpose:
          'Allowance for doubtful accounts; machine prints TURN 01–05 receipt cards while a display counts the turns.',
      },
      {
        startSec: 23,
        endSec: 41,
        label: 'Results',
        purpose:
          'Scatter with model logos and a dashed Pareto frontier, then a grouped bar chart of how models compare.',
      },
      {
        startSec: 41,
        endSec: 50,
        label: 'Mistakes',
        purpose:
          'Common mistakes bars compress into a 100% stacked bar, duplicated per model.',
      },
      {
        startSec: 50,
        endSec: 55,
        label: 'CTA',
        purpose:
          'Ramp Accounting Bench lockup and labs.ramp.com URL.',
      }
    ],
    highlights: [
      {
        title: 'Editorial grid',
        timestampSec: 7,
        timestampLabel: '0:07',
        frame: asset('ramp-accounting-bench', '01-editorial-grid.webp'),
        explanation:
          'Left third holds kickers and headlines; right two-thirds stay visual — magazine layout, not a product tour.',
      },
      {
        title: 'Vintage machine + AI data',
        timestampSec: 5.1,
        timestampLabel: '0:05',
        frame: asset('ramp-accounting-bench', '02-vintage-machine.webp'),
        explanation:
          'Anachronistic adding machine printing modern benchmark cards makes the subject feel tangible.',
      },
      {
        title: 'Agent turns as receipts',
        timestampSec: 17.5,
        timestampLabel: '0:18',
        frame: asset('ramp-accounting-bench', '03-receipt-turns.webp'),
        explanation:
          'Each agent turn lands as a printed receipt strip instead of a UI timeline.',
      },
      {
        title: 'Scatter + Pareto',
        timestampSec: 26.5,
        timestampLabel: '0:26',
        frame: asset('ramp-accounting-bench', '04-scatter-pareto.webp'),
        explanation:
          'Model logos build on a scatter; a dashed frontier draws the performance envelope.',
      },
      {
        title: 'Giant metric callouts',
        timestampSec: 29,
        timestampLabel: '0:29',
        frame: asset('ramp-accounting-bench', '05-metric-callouts.webp'),
        explanation:
          'Huge tabular figures (49.7% mean reward, 21.2% Pass@3) do the proof work without voiceover.',
      },
      {
        title: 'Bar morphs to stacked',
        timestampSec: 45.5,
        timestampLabel: '0:46',
        frame: asset('ramp-accounting-bench', '06-bar-to-stacked.webp'),
        explanation:
          'Common-mistakes bars compress into 100% stacked bars so composition stays continuous.',
      }
    ],
    narrative:
      'Introduce the bench as an object, define companies/tasks/rubrics, walk one example through printed turns, prove with charts, then URL. Editorial and quiet — strings, no VO.',
    palette: [
      { hex: '#F4F3EE', label: 'warm off-white' },
      { hex: '#111111', label: 'ink' },
      { hex: '#8C8C8C', label: 'grey' },
      { hex: '#D59B7D', label: 'terracotta' },
      { hex: '#B6899E', label: 'mauve' },
      { hex: '#87A9A2', label: 'sage' }
    ],
  },
  {
    slug: 'claude-slides-design-docs',
    title: 'Claude Slides, Design & Docs',
    company: 'Anthropic',
    url: 'https://www.youtube.com/watch?v=To5nrYqvR44',
    productUrl: 'https://claude.ai/',
    date: '2026-09-16',
    durationSec: 95,
    tags: ['launch-video', 'ai', 'productivity', 'motion', 'ui'],
    description:
      "95-second continuous workflow for a fictional 'Varde 2.0' launch kit: chat → slides → social artboards → multiplayer doc, ending in a share delight and logo compress. No voiceover; synth and tactile UI SFX.",
    video: {
      src: videoAsset('claude-slides-design-docs', 'video.mp4'),
      poster: videoAsset('claude-slides-design-docs', 'poster.webp'),
    },
    hasVoiceover: false,
    foundViaSlug: viaMila,
    timeline: [
      {
        startSec: 0,
        endSec: 3,
        label: 'Hook',
        purpose:
          "Cream field, serif headline 'Create docs, slides, and designs. Same conversation.' morphs into Docs/Slides/Design chips; 'Now in beta'.",
      },
      {
        startSec: 3,
        endSec: 17,
        label: 'Chat → deck',
        purpose:
          "Claude chat greets Frankie; zip upload and prompt to build a readiness deck; 'Your deck is ready — eight slides, one job each.'",
      },
      {
        startSec: 17,
        endSec: 32,
        label: 'Slide edit',
        purpose:
          'Inline edit on a slide line, theme shifts to teal as the bass kicks in.',
      },
      {
        startSec: 32,
        endSec: 57,
        label: 'Social artboards',
        purpose:
          'Overlay chat asks to mock social images; four artboards (16:9 / 1:1 / 4:5 / 9:16) update accent colour together.',
      },
      {
        startSec: 57,
        endSec: 81,
        label: 'Multiplayer doc',
        purpose:
          'One-pager with clarifying multiple-choice; named cursors Claude/Frankie/Zak type and comment.',
      },
      {
        startSec: 81,
        endSec: 95,
        label: 'Share + logo',
        purpose:
          "Share with orange glow and confetti; 'Claude makes it. You steer it.' box-select compresses into the Claude logo.",
      }
    ],
    highlights: [
      {
        title: 'Headline words → UI chips',
        timestampSec: 2,
        timestampLabel: '0:02',
        frame: asset('claude-slides-design-docs', '01-headline-to-chips.webp'),
        explanation:
          'Display words morph into Docs/Slides/Design chips so the promise becomes the product chrome.',
      },
      {
        title: 'Overlay chat on canvas',
        timestampSec: 36.5,
        timestampLabel: '0:36',
        frame: asset('claude-slides-design-docs', '02-overlay-chat.webp'),
        explanation:
          'Chat sits on the slide instead of leaving the canvas — same-conversation made literal.',
      },
      {
        title: 'Four artboards at once',
        timestampSec: 55.5,
        timestampLabel: '0:56',
        frame: asset('claude-slides-design-docs', '03-four-artboards.webp'),
        explanation:
          'All aspect ratios restyle together; one decision, many outputs.',
      },
      {
        title: 'Clarifying multiple-choice',
        timestampSec: 61,
        timestampLabel: '1:01',
        frame: asset('claude-slides-design-docs', '04-clarifying-choices.webp'),
        explanation:
          'Chat asks a structured choice mid-doc instead of dumping a draft.',
      },
      {
        title: 'Multiplayer cursor choreography',
        timestampSec: 70.5,
        timestampLabel: '1:10',
        frame: asset('claude-slides-design-docs', '05-multiplayer-cursors.webp'),
        explanation:
          'Named cursors make co-editing visible and paced.',
      },
      {
        title: 'Share confetti',
        timestampSec: 82.5,
        timestampLabel: '1:22',
        frame: asset('claude-slides-design-docs', '06-share-confetti.webp'),
        explanation:
          'Orange glow + confetti as a micro-delight on Share.',
      },
      {
        title: 'Tagline compresses into logo',
        timestampSec: 89.5,
        timestampLabel: '1:30',
        frame: asset('claude-slides-design-docs', '07-tagline-into-logo.webp'),
        explanation:
          'Box-select squeezes the closing line into the Claude mark.',
      }
    ],
    narrative:
      'One conversation, three surfaces. Hook on same-conversation creation, demo slides then social then a shared doc, celebrate share, end on the logo. Product motion does the talking.',
    palette: [
      { hex: '#FCFAF8', label: 'warm off-white' },
      { hex: '#1E1E1E', label: 'charcoal' },
      { hex: '#D96D55', label: 'Claude rust' },
      { hex: '#36B2B2', label: 'teal demo' },
      { hex: '#E5E5E5', label: 'grey' }
    ],
  },
  {
    slug: 'elevenlabs-reception',
    title: 'Reception by ElevenLabs',
    company: 'ElevenLabs',
    url: 'https://www.youtube.com/watch?v=3RojrjVVFSg',
    productUrl: 'https://reception.ai/',
    date: '2026-09-16',
    durationSec: 33,
    tags: ['launch-video', 'ai', 'productivity', 'motion'],
    description:
      '33-second kinetic-type launch from missed business calls to a calm AI receptionist. Male narrator plus AI/caller dialogue over halftone grids, 3D props and glass chat bubbles.',
    video: {
      src: videoAsset('elevenlabs-reception', 'video.mp4'),
      poster: videoAsset('elevenlabs-reception', 'poster.webp'),
    },
    hasVoiceover: true,
    foundViaSlug: viaMila,
    timeline: [
      {
        startSec: 0,
        endSec: 8,
        label: 'Problem triad',
        purpose:
          "White kinetic type + 3D props assemble: appointment, book a job, schedule a meeting — phone rings 'INCOMING CALL'.",
      },
      {
        startSec: 8,
        endSec: 13,
        label: 'Nobody around',
        purpose:
          "Clutter over shifting halftone: 'But nobody's around to pickup.'",
      },
      {
        startSec: 13,
        endSec: 15,
        label: 'Until now',
        purpose:
          'Red-orange halftone floods, morphs into a glowing orb in deep space.',
      },
      {
        startSec: 15,
        endSec: 23,
        label: 'Conversation',
        purpose:
          'Orb softens into colour; glass bubbles of receptionist ↔ caller booking dialogue (spoken).',
      },
      {
        startSec: 23,
        endSec: 30,
        label: 'Claim + lineup',
        purpose:
          "Black: 'Stop missing calls…' blurs into 'Stop losing clients.'; three agent cards (Informational / Receptionist / Reservation).",
      },
      {
        startSec: 30,
        endSec: 33,
        label: 'Logo',
        purpose:
          'Green laser sweep reveals Reception.ai / ElevenAgents.',
      }
    ],
    highlights: [
      {
        title: 'Kinetic type grid',
        timestampSec: 2.1,
        timestampLabel: '0:02',
        frame: asset('elevenlabs-reception', '01-kinetic-type-grid.webp'),
        explanation:
          'Scattered objects assemble into a grid while type states the call reason.',
      },
      {
        title: '3D objects vs flat type',
        timestampSec: 5.5,
        timestampLabel: '0:06',
        frame: asset('elevenlabs-reception', '02-3d-objects-vs-type.webp'),
        explanation:
          'Hard hat, vest, crane against flat headlines sell industry context fast.',
      },
      {
        title: 'Halftone gradient transitions',
        timestampSec: 8.5,
        timestampLabel: '0:08',
        frame: asset('elevenlabs-reception', '03-halftone-transitions.webp'),
        explanation:
          'Halftone colour fields bridge scenes without hard cuts.',
      },
      {
        title: 'Halftone-to-orb morph',
        timestampSec: 14.5,
        timestampLabel: '0:14',
        frame: asset('elevenlabs-reception', '04-halftone-to-orb.webp'),
        explanation:
          'Problem colour collapses into the product orb — Until now as a visual flip.',
      },
      {
        title: 'Glass chat bubbles',
        timestampSec: 19.5,
        timestampLabel: '0:20',
        frame: asset('elevenlabs-reception', '05-glass-chat-bubbles.webp'),
        explanation:
          'Frosted bubbles on a blurred field make the conversation the product.',
      },
      {
        title: 'Kinetic text replacement',
        timestampSec: 25.8,
        timestampLabel: '0:26',
        frame: asset('elevenlabs-reception', '06-kinetic-text-replace.webp'),
        explanation:
          'Claim blurs and is replaced mid-phrase for a sharper punchline.',
      },
      {
        title: 'Glowing dark glass cards',
        timestampSec: 28.5,
        timestampLabel: '0:28',
        frame: asset('elevenlabs-reception', '07-glowing-glass-cards.webp'),
        explanation:
          'Three agent types as backlighted glass tiles before the logo.',
      }
    ],
    narrative:
      'Problem triad of missed calls, Until now colour flip, product as a spoken conversation, tightened claim, agent lineup, logo. Voiceover + dialogue are the craft distinction.',
    palette: [
      { hex: '#F6F6F4', label: 'cream' },
      { hex: '#050505', label: 'black' },
      { hex: '#FF5A36', label: 'orange' },
      { hex: '#67A042', label: 'green' },
      { hex: '#4B8CC8', label: 'blue' }
    ],
  },
  {
    slug: 'harvey-ii',
    title: 'Harvey II',
    company: 'Harvey',
    url: 'https://www.youtube.com/watch?v=31_moi-cVXg',
    productUrl: 'https://www.harvey.ai/',
    date: '2026-08-18',
    durationSec: 60,
    tags: ['launch-video', 'ai', 'enterprise', 'motion'],
    description:
      '60-second textured paper/paint collage film for Harvey II: scattered legal matter becomes a memory-driven workspace. Female voiceover over classical strings; 3D primitives and labelled multiplayer cursors.',
    video: {
      src: videoAsset('harvey-ii', 'video.mp4'),
      poster: videoAsset('harvey-ii', 'poster.webp'),
    },
    hasVoiceover: true,
    foundViaSlug: viaMila,
    timeline: [
      {
        startSec: 0,
        endSec: 10,
        label: 'Collage',
        purpose:
          'Paper textures, paint and legal snippets converge into a black 3D cube.',
      },
      {
        startSec: 10,
        endSec: 16,
        label: 'Workspace',
        purpose:
          'Collage snaps to UI; isometric Project Titan hub with Agents/Tasks/Past context/Memories.',
      },
      {
        startSec: 16,
        endSec: 29,
        label: 'Memory',
        purpose:
          'Acme Acquisition workspace; textured cube with pill callouts for memories, BLUF preference, templates.',
      },
      {
        startSec: 29,
        endSec: 40,
        label: 'Intelligence',
        purpose:
          "Geometric abstractions; serif letters 'INFORMATION' snap to 'Intelligence.'",
      },
      {
        startSec: 40,
        endSec: 53,
        label: 'Review + tasks',
        purpose:
          'Circular frames around web/file review; hub fills with parallel task cards.',
      },
      {
        startSec: 53,
        endSec: 60,
        label: 'Collab + logo',
        purpose:
          'Multiplayer cursors (Senior Partner, General Counsel); cube unfolds to H logo.',
      }
    ],
    highlights: [
      {
        title: 'Collage to UI',
        timestampSec: 10,
        timestampLabel: '0:10',
        frame: asset('harvey-ii', '01-collage-to-ui.webp'),
        explanation:
          'Abstract paper/paint material resolves into crisp product chrome.',
      },
      {
        title: 'Isometric UI hub',
        timestampSec: 14.2,
        timestampLabel: '0:14',
        frame: asset('harvey-ii', '02-isometric-hub.webp'),
        explanation:
          'Project Titan as a mind-map hub framed by stone-textured 3D corners.',
      },
      {
        title: 'Textured 3D primitives',
        timestampSec: 25.5,
        timestampLabel: '0:26',
        frame: asset('harvey-ii', '03-textured-3d.webp'),
        explanation:
          'Rotating cube keeps the collage material language inside the product story.',
      },
      {
        title: 'Pill callouts',
        timestampSec: 26.5,
        timestampLabel: '0:26',
        frame: asset('harvey-ii', '04-pill-callouts.webp'),
        explanation:
          'Thin-line callouts radiate memories and preferences from one object.',
      },
      {
        title: 'Information → Intelligence',
        timestampSec: 36.5,
        timestampLabel: '0:36',
        frame: asset('harvey-ii', '05-letters-snap.webp'),
        explanation:
          'Scattered serif letters snap into the sharper claim.',
      },
      {
        title: 'Labelled collaborative cursors',
        timestampSec: 54,
        timestampLabel: '0:54',
        frame: asset('harvey-ii', '06-labelled-cursors.webp'),
        explanation:
          'Role-named cursors sell multiplayer legal work.',
      },
      {
        title: 'Cube unfolds to logo',
        timestampSec: 57.6,
        timestampLabel: '0:58',
        frame: asset('harvey-ii', '07-cube-to-logo.webp'),
        explanation:
          'Texture peels open to the H in negative space.',
      }
    ],
    narrative:
      'Scattered legal matter coalesces into a remembered workspace, proves parallel review, then lands on collaboration and the mark. VO + strings; collage craft over UI polish alone.',
    palette: [
      { hex: '#F4F4F4', label: 'paper' },
      { hex: '#2D2D2D', label: 'charcoal' },
      { hex: '#8E848D', label: 'mauve' },
      { hex: '#AAB9BA', label: 'slate blue' },
      { hex: '#DCD6CD', label: 'warm grey' }
    ],
  },
  {
    slug: 'krea-2',
    title: 'Krea 2',
    company: 'Krea',
    url: 'https://x.com/krea_ai/status/2054207481421975829',
    productUrl: 'https://www.krea.ai/k2',
    date: '2026-05-12',
    durationSec: 67,
    tags: ['launch-video', 'ai', 'motion', 'ui'],
    description:
      '67-second Swiss black-on-white launch for Krea 2: brand type as a neutral canvas for explosive imagery, silhouette restyles, abstract dials, then a black-hole collapse into the k logo. Calm female voiceover.',
    video: {
      src: videoAsset('krea-2', 'video.mp4'),
      poster: videoAsset('krea-2', 'poster.webp'),
    },
    hasVoiceover: true,
    foundViaSlug: viaMila,
    timeline: [
      {
        startSec: 0,
        endSec: 6,
        label: 'Intro',
        purpose:
          "Collage clears to white: 'This is Krea 2' / 'An image model' / 'made for aesthetics' over a full-bleed slideshow.",
      },
      {
        startSec: 7,
        endSec: 15,
        label: 'Any style',
        purpose:
          'Create in any style — horse silhouette filled by a scan line through neon, pointillism, cartoon.',
      },
      {
        startSec: 16,
        endSec: 30,
        label: 'Moodboard → you',
        purpose:
          "Upload/moodboard beat; portrait with orbiting style cycles; OS-blue selection on 'it'.",
      },
      {
        startSec: 31,
        endSec: 50,
        label: 'Gets better + controls',
        purpose:
          "Typed 'The better it gets'; Z-axis cascade of variations; Creativity/Randomness/Style strength dials restyle live.",
      },
      {
        startSec: 51,
        endSec: 67,
        label: 'Logo',
        purpose:
          'Galaxy of images zooms out and collapses into the k mark; krea.ai/k2.',
      }
    ],
    highlights: [
      {
        title: 'Blank canvas contrast',
        timestampSec: 2.5,
        timestampLabel: '0:02',
        frame: asset('krea-2', '01-blank-canvas-contrast.webp'),
        explanation:
          'Brand type steps back so imagery can explode on white.',
      },
      {
        title: 'Text as window',
        timestampSec: 5.5,
        timestampLabel: '0:06',
        frame: asset('krea-2', '02-text-as-window.webp'),
        explanation:
          'Letterforms mask a rapid slideshow underneath.',
      },
      {
        title: 'Silhouette scan-line restyle',
        timestampSec: 10.5,
        timestampLabel: '0:10',
        frame: asset('krea-2', '03-silhouette-scanline.webp'),
        explanation:
          'One outline, many styles painted through by a scan.',
      },
      {
        title: 'OS text-selection highlight',
        timestampSec: 30.8,
        timestampLabel: '0:31',
        frame: asset('krea-2', '04-os-selection.webp'),
        explanation:
          'System-blue selection on a single word as a product wink.',
      },
      {
        title: 'Z-axis iteration cascade',
        timestampSec: 36.5,
        timestampLabel: '0:36',
        frame: asset('krea-2', '05-z-axis-cascade.webp'),
        explanation:
          'Variations stack into depth instead of a flat grid.',
      },
      {
        title: 'Line/dial controls',
        timestampSec: 45,
        timestampLabel: '0:45',
        frame: asset('krea-2', '06-line-dial-controls.webp'),
        explanation:
          'Thin scrubber and dotted dial over live restyles — unique controls made visible.',
      },
      {
        title: 'Collapse into logo',
        timestampSec: 62,
        timestampLabel: '1:02',
        frame: asset('krea-2', '07-collapse-into-logo.webp'),
        explanation:
          'Image galaxy sucks into a point that becomes the k.',
      }
    ],
    narrative:
      'Announce the model, prove any-style control, show personalisation and unique dials, then vacuum everything into the mark. VO is calm; type stays Swiss and sparse.',
    palette: [
      { hex: '#FFFFFF', label: 'bg' },
      { hex: '#000000', label: 'type' },
      { hex: '#A6C8FF', label: 'selection blue' },
      { hex: '#FF2A85', label: 'neon pink' },
      { hex: '#0033CC', label: 'deep blue' }
    ],
  },
  {
    slug: 'hebbia-projects',
    title: 'Hebbia Projects',
    company: 'Hebbia',
    url: 'https://www.youtube.com/watch?v=yoLe4_XscqA',
    productUrl: 'https://www.hebbia.com/',
    date: '2026-04-21',
    durationSec: 45,
    tags: ['launch-video', 'ai', 'enterprise', 'productivity'],
    description:
      '45-second editorial launch for Hebbia Projects: serif type over live-action b-roll into a dark-mode workspace demo (create / collaborate / automate), ending on a copper monolith. No voiceover; pulsing electronic. Includes filmed b-roll.',
    video: {
      src: videoAsset('hebbia-projects', 'video.mp4'),
      poster: videoAsset('hebbia-projects', 'poster.webp'),
    },
    hasVoiceover: false,
    foundViaSlug: viaMila,
    timeline: [
      {
        startSec: 0,
        endSec: 5,
        label: 'Intro',
        purpose:
          "Split-screen b-roll, serif 'INTRODUCING PROJECTS', corner metadata Spring 2026; shared-intelligence line.",
      },
      {
        startSec: 5,
        endSec: 11,
        label: 'Into UI',
        purpose:
          'Black typed text becomes the dark UI header for Project Alpha / ACME sell-side.',
      },
      {
        startSec: 11,
        endSec: 25,
        label: 'Create/Collaborate/Automate',
        purpose:
          'Off-white sidebar with blue progress dot; draft R1 process letter with searching/reading pills, publish, feed.',
      },
      {
        startSec: 25,
        endSec: 37,
        label: 'Background agents',
        purpose:
          'Sidebar centres on always-on agents; dashboard widgets with floating avatars.',
      },
      {
        startSec: 38,
        endSec: 45,
        label: 'Outro',
        purpose:
          'Dark copper ridged abstract, sliced type, Hebbia logo, metadata returns.',
      }
    ],
    highlights: [
      {
        title: 'Split-screen montage',
        timestampSec: 1.5,
        timestampLabel: '0:02',
        frame: asset('hebbia-projects', '01-split-screen-montage.webp'),
        explanation:
          'Live b-roll beside serif intro type — institutional tone before UI.',
      },
      {
        title: 'High-contrast serif on dark',
        timestampSec: 4,
        timestampLabel: '0:04',
        frame: asset('hebbia-projects', '02-serif-on-dark.webp'),
        explanation:
          'Garamond-like display carries the positioning line.',
      },
      {
        title: 'Typewriter into UI header',
        timestampSec: 6.5,
        timestampLabel: '0:06',
        frame: asset('hebbia-projects', '03-typewriter-to-ui.webp'),
        explanation:
          'Typed statement becomes the project chrome without a cut.',
      },
      {
        title: 'Progress sidebar',
        timestampSec: 13.5,
        timestampLabel: '0:14',
        frame: asset('hebbia-projects', '04-progress-sidebar.webp'),
        explanation:
          'Create/Collaborate/Automate with a moving blue dot as the spine.',
      },
      {
        title: 'Sequential loading pills',
        timestampSec: 17.5,
        timestampLabel: '0:18',
        frame: asset('hebbia-projects', '05-loading-pills.webp'),
        explanation:
          'Searching / Reading CIM… pills stage agent work in order.',
      },
      {
        title: 'Floating avatars on widgets',
        timestampSec: 32,
        timestampLabel: '0:32',
        frame: asset('hebbia-projects', '06-floating-avatars.webp'),
        explanation:
          'People presence on dashboard tiles for collaboration.',
      },
      {
        title: 'Metallic monolith outro',
        timestampSec: 39.5,
        timestampLabel: '0:40',
        frame: asset('hebbia-projects', '07-metallic-outro.webp'),
        explanation:
          'Copper ridged abstract closes the film with brand weight.',
      }
    ],
    narrative:
      'Editorial cold open, type lands inside the product, walk Create→Collaborate→Automate, show always-on agents, exit on a material brand beat. No VO.',
    palette: [
      { hex: '#0A0A0A', label: 'black' },
      { hex: '#FFFFFF', label: 'white' },
      { hex: '#171717', label: 'near-black' },
      { hex: '#F3F2EE', label: 'off-white' },
      { hex: '#513EE8', label: 'indigo' },
      { hex: '#375DFB', label: 'blue dot' }
    ],
  },
  {
    slug: 'linear-agent',
    title: 'Linear Agent',
    company: 'Linear',
    url: 'https://www.youtube.com/watch?v=mRql2VJ99gM',
    productUrl: 'https://linear.app/',
    date: '2026-03-24',
    durationSec: 55,
    tags: ['launch-video', 'ai', 'devtools', 'productivity', 'motion'],
    description:
      '55-second cinematic continuous shot through dark Linear UI: Ask Linear finds loading bugs, plans an optimistic-loading refactor, generates a PRD and architecture diagram. No voiceover; dark synth to bass drop.',
    video: {
      src: videoAsset('linear-agent', 'video.mp4'),
      poster: videoAsset('linear-agent', 'poster.webp'),
    },
    hasVoiceover: false,
    foundViaSlug: viaMila,
    timeline: [
      {
        startSec: 0,
        endSec: 11,
        label: 'Ask',
        purpose:
          "Slow pan over blurred workspace; Ask Linear pill; types 'Find issues with loading performance'.",
      },
      {
        startSec: 11,
        endSec: 21,
        label: 'Findings → plan',
        purpose:
          'Pill expands to chat with 13 bugs; prompt to plan optimistic loading refactor.',
      },
      {
        startSec: 21,
        endSec: 40,
        label: 'PRD + diagram',
        purpose:
          'Fast pan to generating doc with table; architecture boxes then arrows; zoom out to doc + chat.',
      },
      {
        startSec: 40,
        endSec: 45,
        label: 'Summary',
        purpose:
          "Card: 'I created the PRD around the issues you surfaced.'",
      },
      {
        startSec: 45,
        endSec: 55,
        label: 'Tagline',
        purpose:
          "Black: 'Linear. At your command.' with purple-blue sweep and logo.",
      }
    ],
    highlights: [
      {
        title: 'Shallow depth of field',
        timestampSec: 2.5,
        timestampLabel: '0:02',
        frame: asset('linear-agent', '01-shallow-dof.webp'),
        explanation:
          'UI treated like cinema glass — focus pulls sell seriousness.',
      },
      {
        title: 'Vignette spotlight',
        timestampSec: 5.5,
        timestampLabel: '0:06',
        frame: asset('linear-agent', '02-vignette-spotlight.webp'),
        explanation:
          'Dark falloff keeps attention on the Ask pill.',
      },
      {
        title: 'Pill morphs into chat',
        timestampSec: 12,
        timestampLabel: '0:12',
        frame: asset('linear-agent', '03-pill-to-chat.webp'),
        explanation:
          'Search control expands into the agent panel without a hard cut.',
      },
      {
        title: 'Spatial camera pans',
        timestampSec: 22,
        timestampLabel: '0:22',
        frame: asset('linear-agent', '04-spatial-camera.webp'),
        explanation:
          'One continuous move through workspace → doc.',
      },
      {
        title: 'Generative text reveal',
        timestampSec: 26.5,
        timestampLabel: '0:26',
        frame: asset('linear-agent', '05-generative-text.webp'),
        explanation:
          'PRD body types on with table structure emerging.',
      },
      {
        title: 'Diagram boxes then arrows',
        timestampSec: 32,
        timestampLabel: '0:32',
        frame: asset('linear-agent', '06-diagram-arrows.webp'),
        explanation:
          'Architecture draws boxes first, then connects — readable generation.',
      },
      {
        title: 'Chromatic sweep on tagline',
        timestampSec: 47.5,
        timestampLabel: '0:48',
        frame: asset('linear-agent', '07-chromatic-sweep.webp'),
        explanation:
          'Purple-blue wash under the closing line.',
      }
    ],
    narrative:
      'Question → structured findings → plan → PRD/diagram → quiet command tagline. Cinematic camera, no VO; agent work is the story.',
    palette: [
      { hex: '#08080A', label: 'bg' },
      { hex: '#1A1A1F', label: 'panel' },
      { hex: '#FFFFFF', label: 'text' },
      { hex: '#8A8A93', label: 'muted' },
      { hex: '#7A73E7', label: 'accent' }
    ],
  },
  {
    slug: 'chatly-flowjam',
    title: 'Chatly × Flowjam',
    company: 'Chatly',
    url: 'https://vimeo.com/1175426523',
    productUrl: 'https://www.flowjam.com/chatly',
    date: '2026-03-20',
    durationSec: 52,
    tags: ['launch-video', 'ai', 'productivity', 'motion'],
    description:
      '52-second problem-solution film by Flowjam for Chatly: dark 3D void of scattered AI tools, then one white canvas morphing chat → doc → slides → sheet → site. Male voiceover.',
    video: {
      src: videoAsset('chatly-flowjam', 'video.mp4'),
      poster: videoAsset('chatly-flowjam', 'poster.webp'),
    },
    hasVoiceover: true,
    foundViaSlug: viaMila,
    timeline: [
      {
        startSec: 0,
        endSec: 10,
        label: 'Messy AI',
        purpose:
          "Dark 3D space: 'AI can do a lot' → 'Messy'; tab explosion and logos flying at camera.",
      },
      {
        startSec: 10,
        endSec: 12,
        label: 'Pivot',
        purpose:
          "'This ends today.' / 'with Chatly.' logo.",
      },
      {
        startSec: 12,
        endSec: 23,
        label: 'Chat',
        purpose:
          'White chat, oversized cursor, flower-shop prompt, Claude/GPT/Gemini switcher.',
      },
      {
        startSec: 23,
        endSec: 48,
        label: 'One canvas morphs',
        purpose:
          'Colour-coded pills: Documents → Slides → Sheets → Sites with Publish.',
      },
      {
        startSec: 48,
        endSec: 52,
        label: 'Logo',
        purpose:
          '3D silver logo spins and flattens on dark.',
      }
    ],
    highlights: [
      {
        title: 'Depth of field in 3D void',
        timestampSec: 1.5,
        timestampLabel: '0:02',
        frame: asset('chatly-flowjam', '01-depth-of-field.webp'),
        explanation:
          'Foreground UI blurs into a dark void of floating chrome.',
      },
      {
        title: 'Logo explosion toward camera',
        timestampSec: 7.5,
        timestampLabel: '0:08',
        frame: asset('chatly-flowjam', '02-logo-explosion.webp'),
        explanation:
          'AI marks rush the lens to sell scattered distraction.',
      },
      {
        title: 'Oversized cursor typing',
        timestampSec: 14.2,
        timestampLabel: '0:14',
        frame: asset('chatly-flowjam', '03-oversized-cursor.webp'),
        explanation:
          'Giant cursor makes the first prompt feel directed, not automated.',
      },
      {
        title: 'Colour-coded feature pills',
        timestampSec: 24.5,
        timestampLabel: '0:24',
        frame: asset('chatly-flowjam', '04-feature-pill-glows.webp'),
        explanation:
          'Docs blue / Slides orange / Sheets green / Sites lavender glow as modes.',
      },
      {
        title: 'Canvas morphs between formats',
        timestampSec: 31,
        timestampLabel: '0:31',
        frame: asset('chatly-flowjam', '05-canvas-morph.webp'),
        explanation:
          'Same surface becomes deck, sheet, site — one product, many shapes.',
      },
      {
        title: 'Cursor-driven storytelling',
        timestampSec: 47.5,
        timestampLabel: '0:48',
        frame: asset('chatly-flowjam', '06-cursor-storytelling.webp'),
        explanation:
          'Cursor leads Publish and the close of the demo.',
      },
      {
        title: '3D logo spin to flat',
        timestampSec: 49,
        timestampLabel: '0:49',
        frame: asset('chatly-flowjam', '07-3d-logo-flatten.webp'),
        explanation:
          'Silver mark flattens onto black as the end card.',
      }
    ],
    narrative:
      'Chaos of many AI tools, hard pivot to Chatly, then one canvas that becomes every work format. VO carries the problem line; morphs do the product proof.',
    palette: [
      { hex: '#121212', label: 'void' },
      { hex: '#FFFFFF', label: 'ui' },
      { hex: '#7CA5F5', label: 'docs blue' },
      { hex: '#E35E45', label: 'slides orange' },
      { hex: '#35C759', label: 'sheets green' },
      { hex: '#DDBDF2', label: 'sites lavender' }
    ],
  },
  {
    slug: 'rippling-ai',
    title: 'Rippling AI',
    company: 'Rippling',
    url: 'https://www.youtube.com/watch?v=Ve6565BeUxI',
    productUrl: 'https://www.rippling.com/',
    date: '2026-03-18',
    durationSec: 60,
    tags: ['launch-video', 'ai', 'enterprise', 'productivity', 'motion'],
    description:
      "60-second kinetic-type launch for Rippling AI: query with deep data-layer context, act on bonuses, cite sources and scope permissions. No voiceover; driving synth. Key structure reference in Guli's Mila research.",
    video: {
      src: videoAsset('rippling-ai', 'video.mp4'),
      poster: videoAsset('rippling-ai', 'poster.webp'),
    },
    hasVoiceover: false,
    foundViaSlug: viaMila,
    timeline: [
      {
        startSec: 0,
        endSec: 9,
        label: 'Hook',
        purpose:
          "Spark into prompt 'Who are my top performers in Support?'; rich answer; user starts 'Holy s' and is cut off.",
      },
      {
        startSec: 9,
        endSec: 22,
        label: 'Positioning',
        purpose:
          'Introducing Rippling AI — deep access to the data layer, full context, better decisions, instant reports, logic you can see; chips orbit type.',
      },
      {
        startSec: 22,
        endSec: 34,
        label: 'Act',
        purpose:
          "Risk query → attrition table; 'Enough talk / Save time with action'; bonus flow to Done.",
      },
      {
        startSec: 34,
        endSec: 48,
        label: 'Trust',
        purpose:
          "Cites sources, hover profile, math typed line by line; scopes permissions with a dry 'Nice try.'",
      },
      {
        startSec: 48,
        endSec: 60,
        label: 'Close',
        purpose:
          'Every employee has Rippling at their fingertips over blurred queries; RIPPLING AI logo.',
      }
    ],
    highlights: [
      {
        title: 'Holy s interrupt cut',
        timestampSec: 8.8,
        timestampLabel: '0:09',
        frame: asset('rippling-ai', '01-holy-s-interrupt.webp'),
        explanation:
          'User reaction cut mid-type sells the answer quality with humour.',
      },
      {
        title: 'Chips orbit typography',
        timestampSec: 14.5,
        timestampLabel: '0:14',
        frame: asset('rippling-ai', '02-chips-orbit-type.webp'),
        explanation:
          'UI chips circle bold statements so data feels in motion around the claim.',
      },
      {
        title: 'Stacked better better rhythm',
        timestampSec: 19.5,
        timestampLabel: '0:20',
        frame: asset('rippling-ai', '03-better-better-rhythm.webp'),
        explanation:
          'Word repetition as a beat, not a typo.',
      },
      {
        title: 'Keyword colour shift',
        timestampSec: 29,
        timestampLabel: '0:29',
        frame: asset('rippling-ai', '04-keyword-colour-shift.webp'),
        explanation:
          "'action' flips mint to mark the act chapter.",
      },
      {
        title: 'Glass magnifier sweep',
        timestampSec: 35.8,
        timestampLabel: '0:36',
        frame: asset('rippling-ai', '05-glass-magnifier.webp'),
        explanation:
          'Trust section opens with a lens over the UI.',
      },
      {
        title: 'Inline hover profile card',
        timestampSec: 38.2,
        timestampLabel: '0:38',
        frame: asset('rippling-ai', '06-hover-profile-card.webp'),
        explanation:
          'Source citation as a tangible hover card.',
      },
      {
        title: 'Math typed line by line',
        timestampSec: 41,
        timestampLabel: '0:41',
        frame: asset('rippling-ai', '07-math-typed.webp'),
        explanation:
          'Shows its work as incremental arithmetic, not a dumped total.',
      },
      {
        title: "Dry 'Nice try.' card",
        timestampSec: 48,
        timestampLabel: '0:48',
        frame: asset('rippling-ai', '08-nice-try-card.webp'),
        explanation:
          'Permissions denial lands as a deadpan card.',
      }
    ],
    narrative:
      'Query → position the data layer → act → prove trust (citations, math, scopes) → logo. Two structural peaks (product name, logo) made it a later Mila reference.',
    palette: [
      { hex: '#000000', label: 'bg' },
      { hex: '#FFFFFF', label: 'type' },
      { hex: '#1C1C1C', label: 'panel' },
      { hex: '#8B2C7A', label: 'AI spark' },
      { hex: '#34D399', label: 'mint' },
      { hex: '#3B82F6', label: 'blue' }
    ],
  },
  {
    slug: 'attio-ask-attio',
    title: 'Ask Attio',
    company: 'Attio',
    url: 'https://www.youtube.com/watch?v=HSVVMgExV9U',
    productUrl: 'https://attio.com/ask',
    date: '2026-02-04',
    durationSec: 47,
    tags: ['launch-video', 'ai', 'productivity', 'motion', 'ui'],
    description:
      "47-second typography-driven launch of Ask Attio: every email/call/note becomes Universal Context™, then slot-machine predicates under a fixed Ask Attio. No voiceover; synced sound design. Guli's #1 reference for Mila.",
    video: {
      src: videoAsset('attio-ask-attio', 'video.mp4'),
      poster: videoAsset('attio-ask-attio', 'poster.webp'),
    },
    hasVoiceover: false,
    foundViaSlug: viaMila,
    timeline: [
      {
        startSec: 0,
        endSec: 7,
        label: 'Hook',
        purpose:
          "Good morning.; Ask or search anything → 'How do I win this deal'; Thinking…; black iris wipe.",
      },
      {
        startSec: 7,
        endSec: 21,
        label: 'Sources',
        purpose:
          'creates signal; montage Every email / call / note / web search on a white grid.',
      },
      {
        startSec: 21,
        endSec: 32,
        label: 'Context',
        purpose:
          "Ticker of record types; 'Everything is context' → Universal Context™ with dotted data horizon.",
      },
      {
        startSec: 32,
        endSec: 38,
        label: 'Ask',
        purpose:
          'Ask Attio fixed left; grey predicates cycle and accelerate.',
      },
      {
        startSec: 38,
        endSec: 47,
        label: 'Tagline',
        purpose:
          "Morphs to 'Ask more from CRM.'; isometric Attio logo and attio.com/ask.",
      }
    ],
    highlights: [
      {
        title: 'UI abstraction',
        timestampSec: 2.5,
        timestampLabel: '0:02',
        frame: asset('attio-ask-attio', '01-ui-abstraction.webp'),
        explanation:
          'Floating search and meeting chrome without heavy product chrome.',
      },
      {
        title: 'Iris wipe to black',
        timestampSec: 6.5,
        timestampLabel: '0:06',
        frame: asset('attio-ask-attio', '02-iris-wipe.webp'),
        explanation:
          'Black circle wipe as a gear change into the under-the-hood chapter.',
      },
      {
        title: 'Cascading staggered windows',
        timestampSec: 11,
        timestampLabel: '0:11',
        frame: asset('attio-ask-attio', '03-cascading-windows.webp'),
        explanation:
          'Every email as stacked windows on a white grid.',
      },
      {
        title: 'Kinetic ticker',
        timestampSec: 25.5,
        timestampLabel: '0:26',
        frame: asset('attio-ask-attio', '04-kinetic-ticker.webp'),
        explanation:
          'Horizontal record-type ticker as the data firehose.',
      },
      {
        title: 'Dotted data horizon',
        timestampSec: 31,
        timestampLabel: '0:31',
        frame: asset('attio-ask-attio', '05-dotted-data-horizon.webp'),
        explanation:
          'Arc of vertical dotted lines rising like a data skyline.',
      },
      {
        title: 'Slot-machine predicates',
        timestampSec: 35,
        timestampLabel: '0:35',
        frame: asset('attio-ask-attio', '06-slot-machine-predicates.webp'),
        explanation:
          'Fixed Ask Attio; grey completions spin and click.',
      },
      {
        title: 'Morphing tagline',
        timestampSec: 41,
        timestampLabel: '0:41',
        frame: asset('attio-ask-attio', '07-morphing-tagline.webp'),
        explanation:
          "Ask Attio becomes 'Ask more from CRM.' before the logo build.",
      }
    ],
    narrative:
      'Relatable question, under-the-hood signal from every source, Universal Context, then every task you can ask — Ask more from CRM. Morph transitions, not hard cuts.',
    palette: [
      { hex: '#FFFFFF', label: 'bg' },
      { hex: '#000000', label: 'dark scenes' },
      { hex: '#111111', label: 'UI text' },
      { hex: '#F9F9F9', label: 'UI fills' },
      { hex: '#8C8C8C', label: 'cycling grey' },
      { hex: '#EAEAEA', label: 'grid' }
    ],
  },
  {
    slug: 'ramp-policy-agent',
    title: 'Ramp Policy Agent',
    company: 'Ramp',
    url: 'https://www.youtube.com/watch?v=Dq9-WUeZD0w',
    productUrl: 'https://ramp.com/',
    date: '2026-01-12',
    durationSec: 123,
    tags: ['launch-video', 'ai', 'fintech', 'enterprise'],
    description:
      '123-second slide-deck explainer for Ramp Policy Agent: floating expense UI, accuracy claims, status cards, workflow builder, manager-vs-agent matrix, then real-app setup. Female voiceover. Guli called it the weakest of the set; kept as fintech reference.',
    video: {
      src: videoAsset('ramp-policy-agent', 'video.mp4'),
      poster: videoAsset('ramp-policy-agent', 'poster.webp'),
    },
    hasVoiceover: true,
    foundViaSlug: viaMila,
    timeline: [
      {
        startSec: 0,
        endSec: 16,
        label: 'Intro',
        purpose:
          "Logo, Introducing Policy Agent; blue gradient with floating 'Can I expense this chair?' and approval states.",
      },
      {
        startSec: 16,
        endSec: 49,
        label: 'Claims + statuses',
        purpose:
          '85% reviews / 99%+ accuracy slide; three cards Approval / Requires review / Rejection with tooltip zoom.',
      },
      {
        startSec: 49,
        endSec: 90,
        label: 'Workflow + matrix',
        purpose:
          'When these conditions… builder; Manager vs Ramp Agent throughput matrix (50–100/day vs 10,000+).',
      },
      {
        startSec: 90,
        endSec: 112,
        label: 'Dashboard',
        purpose:
          'Policy dashboard charts.',
      },
      {
        startSec: 112,
        endSec: 123,
        label: 'Real UI',
        purpose:
          "Live app 'Set up your policy agent' and logo.",
      }
    ],
    highlights: [
      {
        title: 'Floating UI composition',
        timestampSec: 7.5,
        timestampLabel: '0:08',
        frame: asset('ramp-policy-agent', '01-floating-ui.webp'),
        explanation:
          'Expense and fraud cards float on a blue field as concept UI.',
      },
      {
        title: 'Glow pulse on AI',
        timestampSec: 8.1,
        timestampLabel: '0:08',
        frame: asset('ramp-policy-agent', '02-glow-pulse.webp'),
        explanation:
          'Soft glow marks agent decisions in the mock.',
      },
      {
        title: 'Slide-deck layout',
        timestampSec: 18.5,
        timestampLabel: '0:18',
        frame: asset('ramp-policy-agent', '03-slide-deck-layout.webp'),
        explanation:
          'Bullet claim slide — presentation grammar more than film grammar.',
      },
      {
        title: 'Contextual micro-zoom',
        timestampSec: 29,
        timestampLabel: '0:29',
        frame: asset('ramp-policy-agent', '04-contextual-zoom.webp'),
        explanation:
          'Push-in on an (i) tooltip for detail without leaving the card.',
      },
      {
        title: 'Colour-coded status cards',
        timestampSec: 32.4,
        timestampLabel: '0:32',
        frame: asset('ramp-policy-agent', '05-status-cards.webp'),
        explanation:
          'Green / amber / red recommendation states at a glance.',
      },
      {
        title: 'Old vs new matrix',
        timestampSec: 65.2,
        timestampLabel: '1:05',
        frame: asset('ramp-policy-agent', '06-comparison-matrix.webp'),
        explanation:
          'Manager throughput vs agent scale as a comparison table.',
      },
      {
        title: 'Concept to real UI',
        timestampSec: 114,
        timestampLabel: '1:54',
        frame: asset('ramp-policy-agent', '07-concept-to-real-ui.webp'),
        explanation:
          'Mock language gives way to the actual setup screen.',
      }
    ],
    narrative:
      'Explainer arc: introduce, claim accuracy, show decision states and workflow, prove scale vs managers, land in the real product. VO-led; useful as a fintech counterexample to tighter kinetic films.',
    palette: [
      { hex: '#000000', label: 'bg' },
      { hex: '#F4F5F7', label: 'surface' },
      { hex: '#E6F4EA', label: 'green' },
      { hex: '#FFF3E0', label: 'amber' },
      { hex: '#FCE8E6', label: 'red' },
      { hex: '#3B82F6', label: 'blue' }
    ],
  },
  {
    slug: 'raycast-coming-2026',
    title: 'New Raycast — Coming 2026',
    company: 'Raycast',
    url: 'https://www.youtube.com/watch?v=Mi173xGb0ZA',
    productUrl: 'https://www.raycast.com/',
    date: '2025-12-18',
    durationSec: 39,
    tags: ['launch-video', 'ai', 'devtools', 'productivity', 'motion'],
    description:
      "39-second dark frosted-glass fly-through of redesigned Raycast in one continuous camera move, ending on a beat-synced typographic strobe. No voiceover. Guli's #2 Mila reference.",
    video: {
      src: videoAsset('raycast-coming-2026', 'video.mp4'),
      poster: videoAsset('raycast-coming-2026', 'poster.webp'),
    },
    hasVoiceover: false,
    foundViaSlug: viaMila,
    timeline: [
      {
        startSec: 0,
        endSec: 8,
        label: 'Search + hotkey',
        purpose:
          'Glass pill search types clip → Clipboard History; Configure / Set Hotkey; ⌥⌘V keycaps; Saved.',
      },
      {
        startSec: 8,
        endSec: 19,
        label: 'History → emoji → voice',
        purpose:
          'Pan through clipboard thumbs/swatches, emoji grid with elastic highlight, voice waveform pill.',
      },
      {
        startSec: 19,
        endSec: 27,
        label: 'AI focus session',
        purpose:
          'Prompt to get Linear issues and start Focus Session; Checking for updates… then black silence.',
      },
      {
        startSec: 27,
        endSec: 39,
        label: 'Strobe CTA',
        purpose:
          'Bass drop; strobe feature cards; NEW RAYCAST / COMING 2026; rotating logo.',
      }
    ],
    highlights: [
      {
        title: 'Frosted glass over dark silk',
        timestampSec: 1.5,
        timestampLabel: '0:02',
        frame: asset('raycast-coming-2026', '01-frosted-glass.webp'),
        explanation:
          'Glass search pill on a moving dark field sets the material language.',
      },
      {
        title: '3D keycap press',
        timestampSec: 7.5,
        timestampLabel: '0:08',
        frame: asset('raycast-coming-2026', '02-keycap-press.webp'),
        explanation:
          '⌥⌘V keycaps depress as a tactile micro-interaction.',
      },
      {
        title: 'One continuous camera move',
        timestampSec: 8.5,
        timestampLabel: '0:08',
        frame: asset('raycast-coming-2026', '03-continuous-camera.webp'),
        explanation:
          'No hard cuts through the product tour — camera does the editing.',
      },
      {
        title: 'Rich inline previews',
        timestampSec: 9.5,
        timestampLabel: '0:10',
        frame: asset('raycast-coming-2026', '04-inline-previews.webp'),
        explanation:
          'Thumbs and colour swatches inside clipboard history.',
      },
      {
        title: 'Elastic highlight snapping',
        timestampSec: 14.5,
        timestampLabel: '0:14',
        frame: asset('raycast-coming-2026', '05-elastic-highlight.webp'),
        explanation:
          'Emoji selection snaps with stretch.',
      },
      {
        title: 'Ambient voice waveform',
        timestampSec: 18,
        timestampLabel: '0:18',
        frame: asset('raycast-coming-2026', '06-voice-waveform.webp'),
        explanation:
          'Voice input as a calm waveform pill.',
      },
      {
        title: 'Typographic strobe on the bass',
        timestampSec: 30,
        timestampLabel: '0:30',
        frame: asset('raycast-coming-2026', '07-typographic-strobe.webp'),
        explanation:
          'Feature cards flash on the drop after a silent breath.',
      }
    ],
    narrative:
      'Continuous product fly-through locked to music, silence, then a strobe feature dump and Coming 2026. Slam-on-every-cut energy Guli studied for Mila.',
    palette: [
      { hex: '#000000', label: 'bg' },
      { hex: '#1A1A1A', label: 'glass' },
      { hex: '#FFFFFF', label: 'type' },
      { hex: '#FF6363', label: 'coral' },
      { hex: '#56C2FF', label: 'blue' },
      { hex: '#F58331', label: 'orange' }
    ],
  },
  {
    slug: 'superhuman',
    title: 'Superhuman power tools',
    company: 'Superhuman',
    url: 'https://www.youtube.com/watch?v=nJUylrt1OdU',
    productUrl: 'https://superhuman.com/',
    date: '2025-10-30',
    durationSec: 62,
    tags: ['launch-video', 'ai', 'productivity', 'motion'],
    description:
      '62-second hand-drawn 2D stick-figure film (with live-action speaker cuts) personifying Mail, Grammarly and Coda as robot sidekicks rescuing an overwhelmed worker. Spoken performance / voiceover.',
    video: {
      src: videoAsset('superhuman', 'video.mp4'),
      poster: videoAsset('superhuman', 'poster.webp'),
    },
    hasVoiceover: true,
    foundViaSlug: viaMila,
    timeline: [
      {
        startSec: 0,
        endSec: 10,
        label: 'Overwhelm',
        purpose:
          'Speaker cut; blue box-head robot and purple figure; dizzy worker under handwritten PROJECTS/EMAILS/READING…',
      },
      {
        startSec: 10,
        endSec: 20,
        label: 'False win',
        purpose:
          'Inbox Zero celebration crushed by 49 NEW EMAILS; Help me; four robots overwhelm.',
      },
      {
        startSec: 20,
        endSec: 33,
        label: 'Sidekicks',
        purpose:
          'One caped hero splits into MAIL / GRAMMARLY / CODA; Mail sorts into Important / Today / Starred / Other.',
      },
      {
        startSec: 33,
        endSec: 45,
        label: 'Helpers',
        purpose:
          'Grammarly suggestions; Coda rescues a figure drowning in paper.',
      },
      {
        startSec: 45,
        endSec: 62,
        label: 'Close',
        purpose:
          "Trio pose; 'AI that works where you work.'; superhuman.com on light purple.",
      }
    ],
    highlights: [
      {
        title: 'Wobbly hand-drawn 2D',
        timestampSec: 2,
        timestampLabel: '0:02',
        frame: asset('superhuman', '01-hand-drawn-2d.webp'),
        explanation:
          'Illustration style stands apart from polished SaaS UI tours.',
      },
      {
        title: 'Handwritten words crowd the frame',
        timestampSec: 9,
        timestampLabel: '0:09',
        frame: asset('superhuman', '02-handwritten-crowd.webp'),
        explanation:
          'Marker labels physically overwhelm the character.',
      },
      {
        title: 'Inbox-zero envelope squash',
        timestampSec: 12,
        timestampLabel: '0:12',
        frame: asset('superhuman', '03-inbox-zero-squash.webp'),
        explanation:
          'Giant envelope gag undoes the false win.',
      },
      {
        title: 'Live-action interruptions',
        timestampSec: 13,
        timestampLabel: '0:13',
        frame: asset('superhuman', '04-live-action-cut.webp'),
        explanation:
          'Speaker cuts break the animation for emphasis.',
      },
      {
        title: 'Apps as robot sidekicks',
        timestampSec: 28,
        timestampLabel: '0:28',
        frame: asset('superhuman', '05-robot-sidekicks.webp'),
        explanation:
          'Mail / Grammarly / Coda personified as a squad.',
      },
      {
        title: 'Sorting replaces UI',
        timestampSec: 33,
        timestampLabel: '0:33',
        frame: asset('superhuman', '06-sorting-animation.webp'),
        explanation:
          'Priority buckets shown as physical sorting, not inbox chrome.',
      },
      {
        title: 'Drowning in paper',
        timestampSec: 45,
        timestampLabel: '0:45',
        frame: asset('superhuman', '07-drowning-in-paper.webp'),
        explanation:
          'Literal metaphor for doc overload before the Coda save.',
      }
    ],
    narrative:
      'Overwhelm, false inbox-zero, too many helpers, then three named sidekicks and a workplace AI close. Character comedy instead of UI glass.',
    palette: [
      { hex: '#7B49B6', label: 'purple' },
      { hex: '#D9383A', label: 'red' },
      { hex: '#3983D6', label: 'blue' },
      { hex: '#11A680', label: 'green' },
      { hex: '#E55C3E', label: 'orange' },
      { hex: '#EADCF8', label: 'light purple' }
    ],
  },
  {
    slug: 'cursor-2-0',
    title: 'Cursor 2.0',
    company: 'Cursor',
    url: 'https://www.youtube.com/watch?v=An8IM-kPyms',
    productUrl: 'https://cursor.com/',
    date: '2025-10-29',
    durationSec: 64,
    tags: ['launch-video', 'ai', 'devtools', 'productivity', 'motion'],
    description:
      '64-second light UI walkthrough of Cursor 2.0: Composer model, agents tab, multi-model parallel runs, unified review, built-in browser. No voiceover; percussive bongos and synth.',
    video: {
      src: videoAsset('cursor-2-0', 'video.mp4'),
      poster: videoAsset('cursor-2-0', 'poster.webp'),
    },
    hasVoiceover: false,
    foundViaSlug: viaMila,
    timeline: [
      {
        startSec: 0,
        endSec: 8,
        label: 'Composer',
        purpose:
          '3D cube flattens to logo + 2.0; Introducing Composer with black-vs-grey bar chart.',
      },
      {
        startSec: 8,
        endSec: 33,
        label: 'Agents + multi-model',
        purpose:
          'New Cursor built for agents; parallel Sonnet / GPT-5 Fast / Composer columns.',
      },
      {
        startSec: 33,
        endSec: 61,
        label: 'Review + browser',
        purpose:
          'Unified diffs; built-in browser with select-element prompt updating layout.',
      },
      {
        startSec: 61,
        endSec: 64,
        label: 'Outro',
        purpose:
          'Black; white cube into CURSOR logo.',
      }
    ],
    highlights: [
      {
        title: '3D-to-2D logo',
        timestampSec: 0.8,
        timestampLabel: '0:01',
        frame: asset('cursor-2-0', '01-3d-to-2d-logo.webp'),
        explanation:
          'Cube spins flat into the 2.0 mark.',
      },
      {
        title: 'Black-vs-grey bar chart',
        timestampSec: 5.5,
        timestampLabel: '0:06',
        frame: asset('cursor-2-0', '02-bar-chart.webp'),
        explanation:
          'Composer called out by contrast, not colour noise.',
      },
      {
        title: 'Typographic signposts',
        timestampSec: 9.5,
        timestampLabel: '0:10',
        frame: asset('cursor-2-0', '03-typographic-signposts.webp'),
        explanation:
          'Each UI beat is announced with a clean statement line.',
      },
      {
        title: 'Parallel multi-model columns',
        timestampSec: 23,
        timestampLabel: '0:23',
        frame: asset('cursor-2-0', '04-parallel-models.webp'),
        explanation:
          'Three models work the same task side by side.',
      },
      {
        title: 'Sped-up generation',
        timestampSec: 27.5,
        timestampLabel: '0:28',
        frame: asset('cursor-2-0', '05-sped-up-generation.webp'),
        explanation:
          'Generation time-lapse keeps the runtime short.',
      },
      {
        title: 'Prompt on selected element',
        timestampSec: 51.5,
        timestampLabel: '0:52',
        frame: asset('cursor-2-0', '06-prompt-on-element.webp'),
        explanation:
          'Browser agent attached to a concrete DOM node.',
      },
      {
        title: 'Dark outro punctuation',
        timestampSec: 62.5,
        timestampLabel: '1:02',
        frame: asset('cursor-2-0', '07-dark-outro.webp'),
        explanation:
          'Hard cut to black logo as a period.',
      }
    ],
    narrative:
      'Name the model, show the agent IDE, parallelise models, review, browser, logo. Signposted chapters; no VO.',
    palette: [
      { hex: '#F8F8F8', label: 'bg' },
      { hex: '#1A1A1A', label: 'ink' },
      { hex: '#E5E5E5', label: 'chrome' },
      { hex: '#F0FDF4', label: 'diff add' },
      { hex: '#FEF2F2', label: 'diff remove' },
      { hex: '#3B82F6', label: 'accent' }
    ],
  },
  {
    slug: 'notion-3-0-agents',
    title: 'Notion 3.0 Agents',
    company: 'Notion',
    url: 'https://www.youtube.com/watch?v=R1cF4T4lgI4',
    productUrl: 'https://www.notion.com/',
    date: '2025-09-18',
    durationSec: 90,
    tags: ['launch-video', 'ai', 'productivity', 'motion'],
    description:
      "90-second playful character demo of Notion 3.0 Agents — customise 'Lucky the Bug Wrangler', run cross-app work with a visible thinking sidebar, zoom out to a grid of agents. No voiceover; upbeat track and themed SFX (horse whinny).",
    video: {
      src: videoAsset('notion-3-0-agents', 'video.mp4'),
      poster: videoAsset('notion-3-0-agents', 'poster.webp'),
    },
    hasVoiceover: false,
    foundViaSlug: viaMila,
    timeline: [
      {
        startSec: 0,
        endSec: 10,
        label: 'Assign',
        purpose:
          "Line-drawn faces: You assign / Agents do the work; Andy's OS personalize sheet.",
      },
      {
        startSec: 10,
        endSec: 34,
        label: 'Persona + prompt',
        purpose:
          'Accessory carousel, cowboy Lucky Bug Wrangler, Howdy; prompt scales up as transition into Thinking…',
      },
      {
        startSec: 35,
        endSec: 72,
        label: 'Work',
        purpose:
          'Dashboard generates; thinking sidebar searches Notion/Slack/Mail; assignees fill; transcripts update statuses.',
      },
      {
        startSec: 73,
        endSec: 89,
        label: 'Scale + CTA',
        purpose:
          'Yeehaw, all complete; infinite agent grid; faces return — Get started at notion.com.',
      }
    ],
    highlights: [
      {
        title: 'Character faces as brand motif',
        timestampSec: 2.5,
        timestampLabel: '0:02',
        frame: asset('notion-3-0-agents', '01-character-faces.webp'),
        explanation:
          'Line faces bookend the film as the agent metaphor.',
      },
      {
        title: 'Accessory carousel',
        timestampSec: 11.5,
        timestampLabel: '0:12',
        frame: asset('notion-3-0-agents', '02-accessory-carousel.webp'),
        explanation:
          'Hats and props make customisation tactile.',
      },
      {
        title: 'Persona-themed copy + SFX',
        timestampSec: 20.1,
        timestampLabel: '0:20',
        frame: asset('notion-3-0-agents', '03-persona-sfx.webp'),
        explanation:
          'Howdy, Partner! and a whinny lock the Bug Wrangler bit.',
      },
      {
        title: 'Prompt scales as transition',
        timestampSec: 24,
        timestampLabel: '0:24',
        frame: asset('notion-3-0-agents', '04-prompt-scale-transition.webp'),
        explanation:
          'Typed prompt grows to fill the frame into the next scene.',
      },
      {
        title: 'Visible thinking sidebar',
        timestampSec: 39.5,
        timestampLabel: '0:40',
        frame: asset('notion-3-0-agents', '05-thinking-sidebar.webp'),
        explanation:
          'Searched Notion 27 / Slack 14 / Mail 21 — work made countable.',
      },
      {
        title: 'Cascading table fill',
        timestampSec: 50,
        timestampLabel: '0:50',
        frame: asset('notion-3-0-agents', '06-cascading-table.webp'),
        explanation:
          'Assignee column populates in cascade.',
      },
      {
        title: 'Infinite agent grid',
        timestampSec: 79,
        timestampLabel: '1:19',
        frame: asset('notion-3-0-agents', '07-infinite-agent-grid.webp'),
        explanation:
          'One finished card zooms out to a field of agents.',
      }
    ],
    narrative:
      'Customise a character agent, watch it think across apps, celebrate completion, reveal a whole team of agents. Playful SFX; no VO.',
    palette: [
      { hex: '#F8F8F6', label: 'bg' },
      { hex: '#000000', label: 'ink' },
      { hex: '#2383E2', label: 'blue frame' },
      { hex: '#F5F4F0', label: 'beige' },
      { hex: '#D9EADD', label: 'green tag' },
      { hex: '#FDECC8', label: 'yellow tag' }
    ],
  },
];
