import { books } from './books';
import { inspiration } from './inspiration';
import { getLandingBySlug, isLandingItem, landings, landingSubpagePath } from './landings';
import {
  getLaunchVideoBySlug,
  isLaunchVideoItem,
  launchVideos,
  launchVideoSubpagePath,
} from './launch-videos';
import { personal } from './personal';
import { tools } from './tools';
import type { CollectionItem, CollectionType, LandingItem, LaunchVideoItem } from './types';

export type {
  CollectionItem,
  CollectionType,
  LandingItem,
  LandingScreenshot,
  LaunchVideoHighlight,
  LaunchVideoItem,
  LaunchVideoPaletteSwatch,
  LaunchVideoTimelineBeat,
} from './types';
export { collectionTypes } from './types';
export { getLandingBySlug, isLandingItem, landings, landingSubpagePath };
export {
  getLaunchVideoBySlug,
  isLaunchVideoItem,
  launchVideos,
  launchVideoSubpagePath,
};

export const collectionItems: CollectionItem[] = [
  ...tools,
  ...inspiration,
  ...landings,
  ...launchVideos,
  ...personal,
  ...books,
];

export const typeLabels: Record<CollectionType, string> = {
  tool: 'tools',
  book: 'books',
  inspiration: 'inspiration',
  landing: 'landing pages',
  'launch-video': 'Launch videos',
  personal: 'personal websites',
};

export const typeOrder: CollectionType[] = [
  'tool',
  'book',
  'inspiration',
  'landing',
  'launch-video',
  'personal',
];

export function hostname(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
}

export function faviconUrl(url: string): string {
  return `https://www.google.com/s2/favicons?domain=${hostname(url)}&sz=32`;
}

export function uniqueTags(items: CollectionItem[]): string[] {
  return [...new Set(items.flatMap((item) => item.tags))].sort((a, b) => a.localeCompare(b));
}
