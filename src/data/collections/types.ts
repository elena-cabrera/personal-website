export const collectionTypes = [
  'tool',
  'book',
  'inspiration',
  'landing',
  'personal',
] as const;

export type CollectionType = (typeof collectionTypes)[number];

export type LandingScreenshot = {
  src: string;
  title: string;
  caption: string;
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
  /** Landing-only: URL slug for /collections/landings/[slug] */
  slug?: string;
  /** Landing-only: annotated screenshots of the live page */
  screenshots?: LandingScreenshot[];
  /** Landing-only: why this landing is in the reference library (agent index) */
  designFocus?: string;
};

export type LandingItem = CollectionItem & {
  type: 'landing';
  slug: string;
  screenshots: LandingScreenshot[];
  designFocus: string;
  description: string;
};
