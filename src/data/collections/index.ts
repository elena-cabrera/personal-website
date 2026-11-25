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
import {
  isLandingStyleTag,
  landingStyleTags,
  partitionCollectionTags,
} from './style-tags';
import { tools } from './tools';
import type { CollectionItem, CollectionType, LandingItem, LaunchVideoItem } from './types';

export type {
  CollectionItem,
  CollectionType,
  LandingItem,
  LandingScreenshot,
  LaunchVideoBuildNotes,
  LaunchVideoBuildTip,
  LaunchVideoHighlight,
  LaunchVideoItem,
  LaunchVideoPaletteSwatch,
  LaunchVideoReferenceLink,
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
export {
  hasCapturedPreview,
  previewImagePath,
  resolvePreviewMedia,
  type CollectionPreviewMedia,
} from './preview';

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

/** Business/domain tags only — excludes the landing style vocabulary. */
export function uniqueBusinessTags(items: CollectionItem[]): string[] {
  return uniqueTags(items).filter((tag) => !isLandingStyleTag(tag));
}

/**
 * Style tags present on the given items, ordered by the controlled vocabulary
 * (not alphabetically) so the Style filter row stays stable.
 */
export function uniqueStyleTags(items: CollectionItem[]): string[] {
  const present = new Set(items.flatMap((item) => item.tags).filter(isLandingStyleTag));
  return landingStyleTags.filter((tag) => present.has(tag));
}

export {
  isLandingStyleTag,
  landingStyleTags,
  partitionCollectionTags,
};
export type { LandingStyleTag } from './style-tags';