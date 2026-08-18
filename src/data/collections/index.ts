import { books } from './books';
import { inspiration } from './inspiration';
import { tools } from './tools';
import type { CollectionItem, CollectionType } from './types';

export type { BookStatus, CollectionItem, CollectionType } from './types';
export { bookStatuses, collectionTypes } from './types';

export const collectionItems: CollectionItem[] = [...tools, ...inspiration, ...books];

export const typeLabels: Record<CollectionType, string> = {
  tool: 'tools',
  book: 'books',
  inspiration: 'inspiration',
};

export const typeOrder: CollectionType[] = ['tool', 'book', 'inspiration'];

export const statusLabels = {
  read: 'read',
  reading: 'reading',
  'to-read': 'to-read',
} as const;

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
