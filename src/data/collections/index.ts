import { books } from './books';
import { inspiration } from './inspiration';
import { landings } from './landings';
import { tools } from './tools';
import type { CollectionItem, CollectionType } from './types';

export type { CollectionItem, CollectionType } from './types';
export { collectionTypes } from './types';

export const collectionItems: CollectionItem[] = [
  ...tools,
  ...inspiration,
  ...landings,
  ...books,
];

export const typeLabels: Record<CollectionType, string> = {
  tool: 'tools',
  book: 'books',
  inspiration: 'inspiration',
  landing: 'landing pages',
};

export const typeOrder: CollectionType[] = ['tool', 'book', 'inspiration', 'landing'];

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
