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
};
