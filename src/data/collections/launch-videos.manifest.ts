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
  /** Optional cross-link to a landing subpage slug */
  relatedLandingSlug?: string;
};

const asset = (slug: string, file: string) =>
  `/assets/images/collections/launch-videos/${slug}/${file}`;

const videoAsset = (slug: string, file: string) =>
  `/assets/videos/collections/launch-videos/${slug}/${file}`;

export const launchVideoManifest: LaunchVideoManifestEntry[] = [
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
        purpose: 'Multiple coloured cursors build a Google Slides research deck in parallel.',
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
        purpose: 'Cursors drag scattered Google Drive files into department folders.',
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
      },
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
      },
    ],
    narrative:
      'A compressed Problem, Solution, Proof, Action arc built for social feeds. It hooks on a universal desire (move fast without the headcount), introduces the companions as the team, rapid-fires four tedious tasks being automated in familiar apps, overwhelms with scale and social proof, and lands on a frictionless free-download CTA.',
    palette: [
      { hex: '#FFFFFF', label: 'approximate' },
      { hex: '#8762D9', label: 'approximate' },
      { hex: '#EB6B56', label: 'approximate' },
      { hex: '#94C973', label: 'approximate' },
      { hex: '#75A9D2', label: 'approximate' },
      { hex: '#111111', label: 'approximate' },
    ],
  },
];
