export const collectionTypes = ['tool', 'book', 'inspiration'] as const;

export type CollectionType = (typeof collectionTypes)[number];

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
};
