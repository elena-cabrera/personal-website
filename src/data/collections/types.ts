export const collectionTypes = [
  'tool',
  'book',
  'inspiration',
  'landing',
  'launch-video',
  'personal',
] as const;

export type CollectionType = (typeof collectionTypes)[number];

export type LandingScreenshot = {
  src: string;
  title: string;
  caption: string;
};

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
  /** Optional ranking / role note, e.g. "1 — Guli's top pick" */
  note?: string;
};

export type LaunchVideoBuildNotes = {
  tools: string[];
  articleUrl?: string;
  tips: LaunchVideoBuildTip[];
  craftLessons: string[];
  /** How the article/in-chat cut differs from the final published cut */
  articleDiffers?: string;
  references?: LaunchVideoReferenceLink[];
};

export type CollectionItem = {
  id: string;
  type: CollectionType;
  title: string;
  url: string;
  tags: string[];
  description?: string;
  author?: string;
  rating?: number;
  year?: number;
  note?: string;
  cover?: string;
  /** Landing / launch-video: URL slug for detail subpage */
  slug?: string;
  /** Landing-only: annotated screenshots of the live page */
  screenshots?: LandingScreenshot[];
  /** Landing-only: why this landing is in the reference library (agent index) */
  designFocus?: string;
  /** Landing-only: related launch-video slug */
  relatedLaunchVideoSlug?: string;
  /** Launch-video fields */
  company?: string;
  productUrl?: string;
  date?: string;
  durationSec?: number;
  video?: { src: string; poster: string };
  timeline?: LaunchVideoTimelineBeat[];
  highlights?: LaunchVideoHighlight[];
  narrative?: string;
  palette?: LaunchVideoPaletteSwatch[];
  relatedLandingSlug?: string;
  /** Launch-video: whether the film uses spoken narration */
  hasVoiceover?: boolean;
  /** Launch-video: optional credit linking back to another entry */
  foundViaSlug?: string;
  /** Launch-video: optional "How it was made" section */
  buildNotes?: LaunchVideoBuildNotes;
  /**
   * Optional hover preview image. When omitted, landings use the first screenshot,
   * books use the cover, launch videos use the poster/video, and other types look
   * for `/assets/images/collections/previews/<id>.webp`.
   */
  previewImage?: string;
};

export type LandingItem = CollectionItem & {
  type: 'landing';
  slug: string;
  screenshots: LandingScreenshot[];
  designFocus: string;
  description: string;
};

export type LaunchVideoItem = CollectionItem & {
  type: 'launch-video';
  slug: string;
  company: string;
  productUrl: string;
  date: string;
  durationSec: number;
  description: string;
  video: { src: string; poster: string };
  timeline: LaunchVideoTimelineBeat[];
  highlights: LaunchVideoHighlight[];
  narrative: string;
  palette: LaunchVideoPaletteSwatch[];
  hasVoiceover: boolean;
  foundViaSlug?: string;
  buildNotes?: LaunchVideoBuildNotes;
};
