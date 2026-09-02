import { landingManifest } from './landings.manifest';
import type { LandingItem } from './types';

export const landings: LandingItem[] = landingManifest.map((entry) => ({
  id: `landing-${entry.slug}`,
  type: 'landing' as const,
  title: entry.title,
  url: entry.url,
  slug: entry.slug,
  tags: entry.tags,
  description: entry.description,
  designFocus: entry.designFocus,
  screenshots: entry.screenshots.map((shot) => ({
    src: shot.file,
    title: shot.title,
    caption: shot.caption,
  })),
}));

export function landingSubpagePath(slug: string): string {
  return `/collections/landings/${slug}`;
}

export function getLandingBySlug(slug: string): LandingItem | undefined {
  return landings.find((landing) => landing.slug === slug);
}

export function isLandingItem(item: { type: string; slug?: string }): item is LandingItem {
  return item.type === 'landing' && Boolean(item.slug);
}
