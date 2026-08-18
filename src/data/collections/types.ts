export const collectionTypes = ['tool', 'book', 'inspiration'] as const;

export type CollectionType = (typeof collectionTypes)[number];

export const bookStatuses = ['read', 'reading', 'to-read'] as const;

export type BookStatus = (typeof bookStatuses)[number];

export type CollectionItem = {
  id: string;
  type: CollectionType;
  title: string;
  url: string;
  tags: string[];
  description?: string;
  author?: string;
  rating?: number;
  status?: BookStatus;
  year?: number;
  note?: string;
};
