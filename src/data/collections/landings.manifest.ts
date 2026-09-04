export type LandingScreenshotManifest = {
  file: string;
  title: string;
  caption: string;
};

export type LandingManifestEntry = {
  slug: string;
  title: string;
  url: string;
  tags: string[];
  description: string;
  designFocus: string;
  screenshots: LandingScreenshotManifest[];
};

const asset = (slug: string, file: string) =>
  `/assets/images/collections/landings/${slug}/${file}`;

export const landingManifest: LandingManifestEntry[] = [
  {
    slug: 'superlogical',
    title: 'Superlogical',
    url: 'https://superlogical.com/',
    tags: ['landing', 'ui', 'devtools', 'productivity', 'ai'],
    description:
      'Superlogical is building a terminal multiplexer and broader work multiplexer that unifies developer environments, agents, CI, and production systems into durable sessions.',
    designFocus:
      'Ultra-minimal devtool landing that sells a technical vision through long-form editorial copy and a single bold gradient visual anchor instead of product UI chrome.',
    screenshots: [
      {
        file: asset('superlogical', '01-hero.webp'),
        title: 'Split hero with gradient',
        caption:
          'Left-aligned headline and layered keyword stack sit opposite a tall rounded gradient block, establishing a typographic-first hero with almost no chrome.',
      },
      {
        file: asset('superlogical', '02-section.webp'),
        title: 'Three-step product vision',
        caption:
          'A manifesto section lays out a numbered three-part plan beside the same gradient motif, using restrained hierarchy and generous whitespace to sell a technical vision.',
      },
      {
        file: asset('superlogical', '04-section.webp'),
        title: 'Founder pedigree grid',
        caption:
          'Team bios with headshots and heavyweight prior-company credentials create authority through pedigree rather than logos or metrics.',
      },
      {
        file: asset('superlogical', '05-section.webp'),
        title: 'Investor list and waitlist',
        caption:
          'Named investor columns and a minimal underline-style email capture close the page, using social proof density plus a low-friction beta signup.',
      },
    ],
  },
  {
    slug: 'typo',
    title: 'Typo',
    url: 'https://www.typo.so/',
    tags: ['landing', 'ui', 'productivity', 'ai'],
    description:
      'Typo is a modular personal workspace for creating, organizing, and sharing pages with blocks for audio, social links, docs, and publishing.',
    designFocus:
      'Soft, cloud-themed consumer SaaS landing that uses floating modular cards and bento layouts to show a flexible workspace product.',
    screenshots: [
      {
        file: asset('typo', '01-hero.webp'),
        title: 'Username claim hero',
        caption:
          'A sky-background hero centers a username claim field while orbiting content cards preview integrations like Spotify and audio, selling modularity through scattered UI tiles.',
      },
      {
        file: asset('typo', '02-section.webp'),
        title: 'Product canvas preview',
        caption:
          'A large rounded product mockup demonstrates the bento workspace layout with profile blocks, media widgets, and folder navigation under a concise value headline.',
      },
      {
        file: asset('typo', '03-section.webp'),
        title: 'Persona icon columns',
        caption:
          'Four equal columns with 3D icons segment the audience into Creator, Builder, Artist, and Brand, using playful illustration to broaden appeal.',
      },
      {
        file: asset('typo', '04-section.webp'),
        title: 'Orbital feature hub',
        caption:
          'A radial layout places the brand at the center with orbiting capability icons for AI, storage, shop, and blogging, visualizing an all-in-one platform.',
      },
      {
        file: asset('typo', '06-section.webp'),
        title: 'Quote testimonial row',
        caption:
          'Minimal bordered cards in a horizontal row carry short user quotes with lots of negative space, keeping social proof light and airy.',
      },
      {
        file: asset('typo', '07-section.webp'),
        title: 'Privacy and share features',
        caption:
          'A split grid pairs short feature copy with simple UI controls like a public/private toggle and circular share menu to explain publishing workflows.',
      },
      {
        file: asset('typo', '08-section.webp'),
        title: 'Community closing CTA',
        caption:
          'A centered headline and pill button are ringed by user avatars, using circular social proof to reinforce a personal, community-driven product.',
      },
    ],
  },
  {
    slug: 'eliseai',
    title: 'EliseAI',
    url: 'https://eliseai.com/healthai',
    tags: ['landing', 'ui', 'ai', 'health', 'enterprise'],
    description:
      'EliseAI provides AI automation for healthcare practices, handling patient communication, scheduling, billing follow-ups, and EHR-integrated workflows across voice, text, email, and chat.',
    designFocus:
      'Enterprise healthcare AI landing that combines bold gradient heroes, compliance badges, and proof-heavy mid-page sections.',
    screenshots: [
      {
        file: asset('eliseai', '01-hero.webp'),
        title: 'Healthcare demo hero',
        caption:
          'A blue gradient hero pairs a demo-booking form with HIPAA and G2 trust marks and a floating scheduling card mockup showing VoiceAI output.',
      },
      {
        file: asset('eliseai', '02-section.webp'),
        title: 'Customer video carousel',
        caption:
          'A centered headline introduces a horizontal video testimonial carousel with client logos overlaid on thumbnails, prioritizing founder/operator proof.',
      },
      {
        file: asset('eliseai', '03-section.webp'),
        title: 'VoiceAI product split',
        caption:
          'A dark split section contrasts copy and CTA on the left with a phone mockup on the right, then transitions into a white feature headline block below.',
      },
      {
        file: asset('eliseai', '05-section.webp'),
        title: 'Specialty coverage grid',
        caption:
          'A 2x2 grid maps healthcare specialties to photo-backed cards with Learn More links, tailoring the product to vertical use cases.',
      },
      {
        file: asset('eliseai', '06-section.webp'),
        title: 'Benefits and integrations',
        caption:
          'A dark three-column icon grid quantifies operational benefits before a white integrations section cites EHR compatibility and SOC 2/HIPAA compliance.',
      },
      {
        file: asset('eliseai', '07-section.webp'),
        title: 'Competitive comparison table',
        caption:
          'A highlighted EliseAI column with checkmarks versus gray competitor columns uses a classic us-vs-them table to communicate feature superiority.',
      },
      {
        file: asset('eliseai', '08-section.webp'),
        title: 'Resource links and FAQ',
        caption:
          'Three case-study link columns sit above a large FAQ accordion, handling late-funnel objections with expandable technical questions.',
      },
    ],
  },
  {
    slug: 'visitors',
    title: 'Visitors',
    url: 'https://visitors.now/',
    tags: ['landing', 'ui', 'analytics'],
    description:
      'Visitors is a privacy-first, revenue-focused web analytics platform offering realtime tracking, visitor profiles, Core Web Vitals, Stripe revenue attribution, and GDPR-compliant analytics without cookie banners.',
    designFocus:
      'Polished indie-analytics SaaS page with floating nav, lavender gradients, and product-led hero previews.',
    screenshots: [
      {
        file: asset('visitors', '01-hero.webp'),
        title: 'Dashboard hero preview',
        caption:
          'A centered headline and dual CTAs sit above a logo strip and tabbed dashboard mockup embedded in a soft purple gradient, showing the product immediately.',
      },
      {
        file: asset('visitors', '03-section.webp'),
        title: 'Color-coded feature bento',
        caption:
          'A 2x2 card grid uses distinct accent colors and mini charts or globe visuals to explain revenue attribution, realtime tracking, profiles, and performance metrics.',
      },
      {
        file: asset('visitors', '05-section.webp'),
        title: 'Competitor comparison table',
        caption:
          'A highlighted Visitors column compares GDPR, revenue, and journey features against GA, Plausible, and Fathom in a clean matrix layout.',
      },
      {
        file: asset('visitors', '06-section.webp'),
        title: 'Usage-based pricing',
        caption:
          'A split pricing card combines a monthly/yearly toggle, event slider, and included-features checklist with a simulated globe visualization on the right.',
      },
      {
        file: asset('visitors', '07-section.webp'),
        title: 'FAQ accordion',
        caption:
          'A minimalist accordion addresses privacy, limits, and Google Analytics comparisons, with one expanded answer explaining no-cookie compliance.',
      },
    ],
  },
  {
    slug: 'kapia',
    title: 'Kapia',
    url: 'https://kapia.co/',
    tags: ['landing', 'ui', 'ai', 'enterprise', 'productivity'],
    description:
      'Kapia maps a company\'s operational knowledge from documents, tickets, and tools into AI systems and agents that follow real business processes, exceptions, and tribal rules.',
    designFocus:
      'Premium enterprise AI landing that mixes fine-art backgrounds, editorial typography, and abstract process UI mockups.',
    screenshots: [
      {
        file: asset('kapia', '01-hero.webp'),
        title: 'Painterly hero',
        caption:
          'Left-aligned enterprise copy and a Talk to us CTA sit over a full-width impressionist cloud painting, giving the AI product a calm, high-trust aesthetic.',
      },
      {
        file: asset('kapia', '02-section.webp'),
        title: 'Knowledge gap diagram',
        caption:
          'A central diagram connects sticky notes, folders, and contracts into the Kapia hub above a large headline about business knowledge living outside manuals.',
      },
      {
        file: asset('kapia', '03-section.webp'),
        title: 'Understand process map',
        caption:
          'A split feature block pairs explanatory copy with a process-map UI mockup overlaid on art, showing how operational logic is extracted and reviewed.',
      },
    ],
  },
  {
    slug: 'midday',
    title: 'Midday',
    url: 'https://midday.ai/',
    tags: ['landing', 'ui', 'fintech', 'invoicing', 'productivity'],
    description:
      'Midday is a business finance platform that centralizes invoicing, time tracking, banking transactions, and project data for founders and studios.',
    designFocus:
      'Clean fintech/productivity landing with serif hero typography, step-based product walkthroughs, and structured case-study social proof.',
    screenshots: [
      {
        file: asset('midday', '01-hero.webp'),
        title: 'Serif hero with acquisition badge',
        caption:
          'A centered serif headline and single black CTA sit beneath a pill announcement badge, with faint integration logos providing quiet credibility before a dark product preview band.',
      },
      {
        file: asset('midday', '02-section.webp'),
        title: 'How it works stepper',
        caption:
          'A vertical step list on the left highlights the active workflow stage while a crisp transaction table mockup on the right demonstrates unified banking data.',
      },
      {
        file: asset('midday', '03-section.webp'),
        title: 'Feature grid headline',
        caption:
          'A centered section title introduces the full product surface area— invoicing, transactions, time tracking— before a bento-style capability grid below.',
      },
      {
        file: asset('midday', '04-section.webp'),
        title: 'Invoicing feature card',
        caption:
          'Large rounded cards pair short benefit copy with embedded invoice UI previews, using alternating layouts to walk through core finance workflows.',
      },
      {
        file: asset('midday', '05-section.webp'),
        title: 'Accounting time-savings proof',
        caption:
          'A bold 4–6 hours savings callout anchors a section about accounting readiness, quantifying operational benefit with oversized numerals instead of testimonial quotes.',
      },
      {
        file: asset('midday', '06-section.webp'),
        title: 'Built with users band',
        caption:
          'A community-forward section uses avatar stacks and short founder quotes to show the product is shaped alongside real operators, not shipped in isolation.',
      },
      {
        file: asset('midday', '07-section.webp'),
        title: 'Footer navigation close',
        caption:
          'A multi-column footer with Features, Product, Company, and Resources links closes the page with information density and minimal visual noise.',
      },
    ],
  },
  {
    slug: 'arche',
    title: 'Arche',
    url: 'https://thearcheproject.com/',
    tags: ['landing', 'ui', 'ai', 'devtools', 'productivity'],
    description:
      'Arche is a free, open-source agentic core that connects team knowledge, tools, and specialized AI agents across models and apps to automate busywork without vendor lock-in.',
    designFocus:
      'Warm, editorial open-source AI landing that combines serif headlines, retro photography, and crisp product diagrams.',
    screenshots: [
      {
        file: asset('arche', '01-hero.webp'),
        title: 'Gradient hero with install',
        caption:
          'A centered serif headline with textured orange emphasis words sits above Mac download and curl-install commands on a peach-to-cream radial gradient.',
      },
      {
        file: asset('arche', '02-section.webp'),
        title: 'Retro problem cards',
        caption:
          'Three tall cards use grainy vintage photos and short pain-point labels like the glue and the silos before a bold mission statement about irreplaceable decisions.',
      },
      {
        file: asset('arche', '03-section.webp'),
        title: 'One harness diagram',
        caption:
          'An alternating text-and-diagram section shows fragmented copy-paste between Claude, Cursor, ChatGPT, and Notion flowing into a single Arche harness.',
      },
      {
        file: asset('arche', '05-section.webp'),
        title: 'Integrations library grid',
        caption:
          'A dense 4-column connector grid lists major SaaS tools with one-line capability descriptions, signaling breadth through recognizable logos and uniform cards.',
      },
      {
        file: asset('arche', '06-section.webp'),
        title: 'Open-source mission',
        caption:
          'A centered manifesto section with a highlighted needs to exist headline and three bordered principle cards explains why the project is public and self-hostable.',
      },
      {
        file: asset('arche', '07-section.webp'),
        title: 'FAQ accordion',
        caption:
          'A warm-background FAQ uses serif heading typography and simple plus icons in a spacious vertical list aimed at differentiation from ChatGPT and Notion.',
      },
      {
        file: asset('arche', '08-section.webp'),
        title: 'Final action CTA',
        caption:
          'A gradient footer block pairs a pixel-styled Death to busywork headline with See it in action and Self-host now buttons for dual conversion paths.',
      },
    ],
  },
  {
    slug: 'ngrok',
    title: 'ngrok',
    url: 'https://ngrok.com/',
    tags: ['landing', 'ui', 'devtools', 'ai', 'enterprise'],
    description:
      'ngrok is developer infrastructure for routing and securing traffic to apps, APIs, and AI models, spanning localhost sharing, cloud gateways, and an AI Gateway for model routing.',
    designFocus:
      'Dark, premium devinfra landing that mixes serif hero typography, rainbow accents, and CLI-first onboarding.',
    screenshots: [
      {
        file: asset('ngrok', '01-hero.webp'),
        title: 'Gradient serif hero',
        caption:
          'A black hero uses rainbow-gradient headline text, a glowing free-start CTA, enterprise logo strip, and the start of a two-product cards section below.',
      },
      {
        file: asset('ngrok', '02-section.webp'),
        title: 'Dual gateway products',
        caption:
          'Side-by-side yellow and green cards use simplified system diagrams to compare AI Gateway model routing against general Gateway security and traffic routing.',
      },
      {
        file: asset('ngrok', '03-section.webp'),
        title: 'CLI quickstart and quotes',
        caption:
          'A grid-framed brew install command and platform icons lead into a horizontal row of short developer tweet-style testimonials.',
      },
      {
        file: asset('ngrok', '04-section.webp'),
        title: 'Testimonial wall',
        caption:
          'A masonry grid of dark quote cards from engineers and directors at known companies creates high-volume social proof before a security headline.',
      },
      {
        file: asset('ngrok', '05-section.webp'),
        title: 'Compliance and closing CTA',
        caption:
          'A two-row compliance checklist with green checks transitions into a glowing aura-backed final CTA with free start and pricing buttons.',
      },
      {
        file: asset('ngrok', '06-section.webp'),
        title: 'Footer product links',
        caption:
          'A structured dark footer organizes product, solutions, and docs links beneath the closing conversion band, keeping navigation scannable at page end.',
      },
    ],
  },
  {
    slug: 'ramp',
    title: 'Ramp',
    url: 'https://ramp.com/',
    tags: ['landing', 'ui', 'fintech', 'ai', 'enterprise'],
    description:
      'Ramp is a spend management platform combining corporate cards, expenses, bill payments, and AI agents for finance teams.',
    designFocus:
      'Enterprise fintech landing with lime accent CTAs, live product UI in the hero, and data-visualization sections that turn complex finance workflows into scannable proof.',
    screenshots: [
      {
        file: asset('ramp', '01-hero.webp'),
        title: 'AI spend dashboard hero',
        caption:
          'A split hero pairs a bold savings headline with a detailed token-spend dashboard mockup— line chart, KPI tiles, and model breakdown bars— on a subtle dot-grid background.',
      },
      {
        file: asset('ramp', '02-section.webp'),
        title: 'Efficiency comparison chart',
        caption:
          'A stippled bar chart card visualizes cost-per-token differences between efficient and inefficient teams beside explanatory copy and a See how you compare link.',
      },
      {
        file: asset('ramp', '03-section.webp'),
        title: 'Savings stats and testimonials',
        caption:
          'Oversized percentage stats in dark cards lead into a three-column testimonial row from finance leaders, mixing quantitative proof with operator quotes.',
      },
      {
        file: asset('ramp', '04-section.webp'),
        title: 'Weekly briefing feature',
        caption:
          'An alternating layout places a briefing UI mockup opposite copy about translating tokens into explainable dollars, showing product depth through realistic dashboard chrome.',
      },
      {
        file: asset('ramp', '05-section.webp'),
        title: 'Ramp Router API',
        caption:
          'A minimal gray product card with task prompts and a loading indicator supports a concise API value prop about cutting inference costs through one endpoint.',
      },
      {
        file: asset('ramp', '06-section.webp'),
        title: 'FAQ and closing CTA',
        caption:
          'A ruled FAQ accordion addresses AI spend objections before a repeated email-capture CTA closes the page with the core Time is money headline.',
      },
      {
        file: asset('ramp', '07-section.webp'),
        title: 'Logo strip social proof',
        caption:
          'A horizontal logo marquee of ambitious companies reinforces scale claims above late-page feature sections, using grayscale marks for understated credibility.',
      },
    ],
  },
  {
    slug: 'aside',
    title: 'Aside',
    url: 'https://aside.com/',
    tags: ['landing', 'ui', 'ai', 'browser', 'productivity'],
    description:
      'Aside is an AI-native browser and agent platform that performs real web tasks across logged-in apps, with local memory, benchmark-leading agent performance, and a built-in password manager for agents.',
    designFocus:
      'Apple-clean AI browser landing that leads with product UI, benchmark proof, and security feature grids.',
    screenshots: [
      {
        file: asset('aside', '01-hero.webp'),
        title: 'Browser product hero',
        caption:
          'A cloud-sky hero centers a full browser mockup with agent tabs, Ask AI search, model picker, and recent tasks beneath a YC badge and download CTA.',
      },
      {
        file: asset('aside', '03-section.webp'),
        title: 'Use-case card trio',
        caption:
          'Three pastel-backed cards show login, messaging, and spreadsheet workflows with prompt labels above UI snippets, explaining agent capability through scenarios.',
      },
      {
        file: asset('aside', '04-section.webp'),
        title: 'Benchmark bar chart',
        caption:
          'A horizontal bar chart highlights Aside at 99% against Browser Use, GPT, Claude, and ChatGPT Atlas, using data visualization as competitive social proof.',
      },
      {
        file: asset('aside', '05-section.webp'),
        title: 'Agent password manager',
        caption:
          'A feature hero uses masked-password wordplay in the headline and three UI vignettes to explain autofill for agents without exposing credentials to AI.',
      },
      {
        file: asset('aside', '07-section.webp'),
        title: 'Privacy four-column grid',
        caption:
          'Four equal columns with small UI illustrations cover local processing, encryption, sandbox permissions, and bring-your-own-model subscriptions.',
      },
      {
        file: asset('aside', '08-section.webp'),
        title: 'Gradient closing CTA',
        caption:
          'A soft blue dotted-gradient banner carries a final human-and-agent headline and download button above a structured multi-column footer.',
      },
    ],
  },
  {
    slug: 'granola',
    title: 'Granola',
    url: 'https://www.granola.ai/',
    tags: ['landing', 'ui', 'ai', 'productivity'],
    description:
      'Granola is an AI notepad for back-to-back meetings that captures notes, actions, and memory without joining calls as a visible bot.',
    designFocus:
      'Premium meeting-productivity landing with serif headlines, floating nav, and product-in-context mockups that emphasize calm, human-first AI.',
    screenshots: [
      {
        file: asset('granola', '01-hero.webp'),
        title: 'Product-in-context hero',
        caption:
          'A serif headline and subline sit left while layered app and call UI mockups float right, immediately showing the no-bot meeting workflow on a clean white canvas.',
      },
      {
        file: asset('granola', '02-section.webp'),
        title: 'Logo strip social proof',
        caption:
          'A dark band with Trusted by teams we admire centers a two-row logo grid of well-known startups, using high-contrast marks for understated credibility.',
      },
      {
        file: asset('granola', '03-section.webp'),
        title: 'Meeting workflow stepper',
        caption:
          'A vertical Before / In / After step list pairs with a live meeting UI mockup, walking the visitor through note capture without leaving the call.',
      },
      {
        file: asset('granola', '04-section.webp'),
        title: 'Perfect meeting memory',
        caption:
          'A saturated green hero block introduces Granola Chat with a minimal input card and team badge, using color blocking to separate a secondary product surface.',
      },
      {
        file: asset('granola', '05-section.webp'),
        title: 'Humans in the room',
        caption:
          'Split copy explains the no-bot positioning beside a large in-context app screenshot over landscape photography, blending product UI with atmospheric imagery.',
      },
      {
        file: asset('granola', '06-section.webp'),
        title: 'Private by default sharing',
        caption:
          'A serif headline about privacy pairs with a share-sheet mockup showing internal recipients, demonstrating default-private notes with optional export.',
      },
      {
        file: asset('granola', '07-section.webp'),
        title: 'Calendar sync widget',
        caption:
          'A macOS menu-bar style widget mockup shows one-click Join & take notes above a calendar event, selling OS-level integration through realistic chrome.',
      },
    ],
  },
  {
    slug: 'heyclicky',
    title: 'heyclicky',
    url: 'https://www.heyclicky.com/',
    tags: ['landing', 'ui', 'ai', 'productivity'],
    description:
      'heyclicky is a free macOS AI buddy that watches your screen on demand to teach software, answer questions, spawn voice-controlled agents, and connect to tools like Gmail and Notion.',
    designFocus:
      'Playful, personality-driven AI consumer landing that mimics a messy Mac desktop with skeuomorphic windows and lowercase copy.',
    screenshots: [
      {
        file: asset('heyclicky', '01-hero.webp'),
        title: 'Chaotic desktop hero',
        caption:
          'A graph-paper background scatters floating video windows, stickers, and kaomoji around a centered lowercase headline and Mac download buttons.',
      },
      {
        file: asset('heyclicky', '02-section.webp'),
        title: 'Alternating feature rows',
        caption:
          'Split sections pair waveform speech bubbles and bold lowercase copy with macOS window-framed demo videos in an alternating left-right rhythm.',
      },
      {
        file: asset('heyclicky', '05-section.webp'),
        title: 'Tweet testimonial grid',
        caption:
          'Social proof appears as pastel macOS-window cards containing real tweet screenshots, plus a floating join-them CTA bar over the grid.',
      },
      {
        file: asset('heyclicky', '06-section.webp'),
        title: 'Glassmorphism pricing',
        caption:
          'Three translucent plan cards sit on a cloud-sky background with a monthly/yearly toggle, a popular badge on Pro, and macOS window chrome.',
      },
      {
        file: asset('heyclicky', '07-section.webp'),
        title: 'FAQ accordion',
        caption:
          'A centered FAQ uses rounded rows, lowercase questions, and an expanded first answer describing screen visibility and agent behavior.',
      },
    ],
  },
  {
    slug: 'acctual',
    title: 'Acctual',
    url: 'https://www.acctual.com/',
    tags: ['landing', 'ui', 'fintech', 'invoicing', 'crypto'],
    description:
      'Acctual is a no-subscription invoicing platform for freelancers and agencies that lets clients pay by card, bank transfer, or stablecoin with same-day payouts and QuickBooks/Xero sync.',
    designFocus:
      'Warm, lifestyle-forward fintech landing that mixes desk photography, serif testimonials, and product UI previews.',
    screenshots: [
      {
        file: asset('acctual', '01-hero.webp'),
        title: 'Desk-style invoice hero',
        caption:
          'A centered headline and fee callouts are framed by photorealistic desk objects and overlapping invoice cards, grounding the product in tactile office context.',
      },
      {
        file: asset('acctual', '02-section.webp'),
        title: 'Audience persona grid',
        caption:
          'A 3x2 card grid segments freelancers, agencies, consultants, contractors, eCommerce, and cross-border users with colored icons and concise benefit copy.',
      },
      {
        file: asset('acctual', '04-section.webp'),
        title: 'Testimonial and payment split',
        caption:
          'A serif testimonial under star ratings leads into a two-column feature section explaining one-link multi-method payments beside lifestyle photography.',
      },
      {
        file: asset('acctual', '05-section.webp'),
        title: 'Lifestyle payment proof',
        caption:
          'A large photo of sushi and a phone with payment notifications supports a USDC speed testimonial, using lifestyle imagery to make payouts feel instant and real.',
      },
      {
        file: asset('acctual', '06-section.webp'),
        title: 'Accounting sync feature',
        caption:
          'A grey rounded feature block highlights QuickBooks and Xero reconciliation with logo rows and adjacent PCI/SSL trust columns below another customer quote.',
      },
      {
        file: asset('acctual', '07-section.webp'),
        title: 'Lifestyle FAQ lead-in',
        caption:
          'A paper invoice photographed in a wildflower field transitions into a simple FAQ accordion, blending editorial photography with objection handling.',
      },
    ],
  },
  {
    slug: 'corgi',
    title: 'Corgi',
    url: 'https://www.corgi.insure/',
    tags: ['landing', 'ui', 'insurance', 'fintech', 'enterprise', 'ai'],
    description:
      'Corgi is an AI-native, full-stack insurance platform for technology startups, offering instant quotes and stage-based coverage packages from pre-seed through growth.',
    designFocus:
      'Startup insurance landing that combines orange brand energy, lifecycle-based packaging, and playful corgi illustration with serious B2B structure.',
    screenshots: [
      {
        file: asset('corgi', '01-hero.webp'),
        title: 'Dark hero with AI visual',
        caption:
          'A rounded dark hero card explains the AI-native full-stack platform beside a drag-and-drop document simplification graphic and a Series B fundraise banner.',
      },
      {
        file: asset('corgi', '02-section.webp'),
        title: 'Startup journey packages',
        caption:
          'Four horizontal stage cards from Pre-Seed to Custom Package use woodcut-style growth illustrations and policy tag chips to map coverage to company maturity.',
      },
      {
        file: asset('corgi', '03-section.webp'),
        title: 'Legacy versus Corgi compare',
        caption:
          'Two large white cards on a dark background contrast slow broker workflows with Corgi\'s glowing centralized platform diagram and full-stack positioning.',
      },
      {
        file: asset('corgi', '04-section.webp'),
        title: 'Self-serve quote CTA',
        caption:
          'An orange-bordered application mockup with playful file-drop UI sits beside copy and a Start your application button for instant self-serve binding.',
      },
    ],
  },
  {
    slug: 'tempo',
    title: 'Tempo',
    url: 'https://tempo.xyz/',
    tags: ['landing', 'ui', 'fintech', 'crypto', 'enterprise'],
    description:
      'Tempo is a payments-first Layer 1 blockchain incubated by Stripe and Paradigm, built as a stablecoin-native settlement layer for global payments, embedded finance, and agentic commerce.',
    designFocus:
      'High-end institutional crypto landing that relies on serif editorial typography, monochrome palettes, and abstract 3D wireframe art.',
    screenshots: [
      {
        file: asset('tempo', '01-hero.webp'),
        title: 'Editorial blockchain hero',
        caption:
          'A split hero pairs a serif headline and Stripe/Paradigm credibility line with a wireframe globe graphic and a small product video thumbnail.',
      },
      {
        file: asset('tempo', '03-section.webp'),
        title: 'Enterprise logo grid',
        caption:
          'A dense three-column logo wall of fintech and enterprise brands provides understated social proof beside a large abstract geometric illustration.',
      },
      {
        file: asset('tempo', '05-section.webp'),
        title: 'Numbered solutions list',
        caption:
          'Large serif section titles with numbered entries for payroll, embedded finance, microtransactions, and agentic commerce create a catalog-style solutions layout.',
      },
      {
        file: asset('tempo', '06-section.webp'),
        title: 'Protocol feature list',
        caption:
          'Numbered technical features like dedicated payment lanes and stablecoin-native gas are paired with translucent stacked-pane 3D art in a two-column composition.',
      },
      {
        file: asset('tempo', '08-section.webp'),
        title: 'Newsletter and footer',
        caption:
          'A motion-blurred image band hosts a minimal email signup above a four-column footer covering solutions, developers, resources, and social links.',
      },
    ],
  },
  {
    slug: 'goldsand',
    title: 'Goldsand',
    url: 'https://goldsand.fi/',
    tags: ['landing', 'ui', 'fintech', 'crypto'],
    description:
      'Goldsand is a Shariah-compliant high-yield savings app that shares stablecoin payment-network fees with users, offering up to 7% returns without interest-based riba.',
    designFocus:
      'Calm, trust-first consumer fintech landing that combines serif headlines, app-store CTAs, and educational charts for ethical finance products.',
    screenshots: [
      {
        file: asset('goldsand', '01-hero.webp'),
        title: 'App download hero',
        caption:
          'A minimalist centered hero states the 7% no-interest value prop with iOS and Google Play buttons and a partial phone mockup revealing the balance UI.',
      },
      {
        file: asset('goldsand', '02-section.webp'),
        title: 'Expert testimonial cards',
        caption:
          'A horizontal row of white quote cards with gold stars and expert headshots builds credibility around design quality and halal finance positioning.',
      },
      {
        file: asset('goldsand', '03-section.webp'),
        title: 'Feature bento grid',
        caption:
          'A 2x2 grid mixes short benefit headlines with a phone UI mockup, simple step graphic, and gold shield icon to explain deposits, growth, and security.',
      },
      {
        file: asset('goldsand', '04-section.webp'),
        title: 'Yield comparison chart',
        caption:
          'A serif headline and fee-sharing explanation sit beside a three-bar chart that visually elevates Goldsand above banks and investment products.',
      },
      {
        file: asset('goldsand', '05-section.webp'),
        title: '20-year projection card',
        caption:
          'A large rounded card compares expected value with and without Goldsand using green/red figures, a line chart, and adjacent security partner copy.',
      },
      {
        file: asset('goldsand', '07-section.webp'),
        title: 'FAQ accordion',
        caption:
          'Stacked pill-shaped FAQ rows with plus icons address returns, costs, risk, and team access before a partial bottom CTA card appears.',
      },
    ],
  },
  {
    slug: 'anyformat',
    title: 'anyformat',
    url: 'https://www.anyformat.ai/es',
    tags: ['landing', 'ui', 'ai', 'enterprise'],
    description:
      'anyformat is an AI document processing platform that parses, extracts, classifies, splits, and validates messy documents into clean structured data, with EU data residency, ISO 27001, and self-hosting options.',
    designFocus:
      'Enterprise document-AI landing that pairs bilingual product storytelling with composable workflow tabs, benchmark tables against frontier models, and trust signals around EU residency.',
    screenshots: [
      {
        file: asset('anyformat', '01-hero.webp'),
        title: 'Split document-AI hero',
        caption:
          'A left-aligned Spanish headline and dual CTAs sit beside a 3D isometric document-on-platform illustration, selling parse-extract-validate workflows with EU residency and ISO 27001 callouts.',
      },
      {
        file: asset('anyformat', '02-section.webp'),
        title: 'Composable workflow tabs',
        caption:
          'A pill tab bar for Parsear / Extraer / Clasificar / Dividir / Validar / Orquestar drives a split feature block with a scanning-document visual and stacked capability cards for structured markdown output.',
      },
      {
        file: asset('anyformat', '03-section.webp'),
        title: 'Parser benchmark table',
        caption:
          'A comparison table ranks anyformat against Claude, GPT, Azure DI, and Textract on parse score and cost-per-page, then transitions into a Made for production not demos section header.',
      },
      {
        file: asset('anyformat', '04-section.webp'),
        title: 'SDK and agent skill install',
        caption:
          'A dark terminal mockup of Claude Code building an extract workflow sits beside TypeScript/Python SDK, CLI, and Agent Skill install cards for a developer-first integration story.',
      },
      {
        file: asset('anyformat', '05-section.webp'),
        title: 'Mode toggle and annie loop',
        caption:
          'Two product cards show Fast/Standard/Agentic mode switching with a waveform graphic and an annie optimization chart that lifts precision across iterations.',
      },
      {
        file: asset('anyformat', '06-section.webp'),
        title: 'Security and industry tabs',
        caption:
          'A dark EU-residency security band leads into a light industry tab strip—AP, logistics, finance, healthcare—with an invoice illustration for accounts-payable use cases.',
      },
      {
        file: asset('anyformat', '07-section.webp'),
        title: 'FAQ accordion',
        caption:
          'A spacious Preguntas Frecuentes list expands the first answer defining anyformat as document intelligence for enterprise teams, covering IDP, OCR, and LLM differentiation.',
      },
      {
        file: asset('anyformat', '08-section.webp'),
        title: 'Dark closing CTA',
        caption:
          'A high-contrast black rounded panel pairs Empieza por tus documentos más difíciles with free-start and demo buttons plus a metallic chameleon mark, closing on no-card free credits.',
      },
    ],
  },
];
