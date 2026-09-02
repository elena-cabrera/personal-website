import { books } from './books';
import { inspiration } from './inspiration';
import { getLandingBySlug, isLandingItem, landings, landingSubpagePath } from './landings';
import { personal } from './personal';
import { tools } from './tools';
import type { CollectionItem, CollectionType, LandingItem } from './types';

export type { CollectionItem, CollectionType, LandingItem, LandingScreenshot } from './types';
export { collectionTypes } from './types';
export { getLandingBySlug, isLandingItem, landings, landingSubpagePath };

export const collectionItems: CollectionItem[] = [
  ...tools,
  ...inspiration,
  ...landings,
  ...personal,
  ...books,
];

export const typeLabels: Record<CollectionType, string> = {
  tool: 'tools',
  book: 'books',
  inspiration: 'inspiration',
  landing: 'landing pages',
  personal: 'personal websites',
};

export const typeOrder: CollectionType[] = [
  'tool',
  'book',
  'inspiration',
  'landing',
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
