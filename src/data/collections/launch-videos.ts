import { launchVideoManifest } from './launch-videos.manifest';
import type { LaunchVideoItem } from './types';

export const launchVideos: LaunchVideoItem[] = launchVideoManifest.map((entry) => ({
  id: `launch-video-${entry.slug}`,
  type: 'launch-video' as const,
  title: entry.title,
  url: entry.url,
  slug: entry.slug,
  tags: entry.tags,
  description: entry.description,
  company: entry.company,
  productUrl: entry.productUrl,
  date: entry.date,
  durationSec: entry.durationSec,
  video: entry.video,
  timeline: entry.timeline,
  highlights: entry.highlights,
  narrative: entry.narrative,
  palette: entry.palette,
  relatedLandingSlug: entry.relatedLandingSlug,
  hasVoiceover: entry.hasVoiceover,
  foundViaSlug: entry.foundViaSlug,
  buildNotes: entry.buildNotes,
  note: entry.foundViaSlug
    ? "Found via Guli Moreno's Mila launch video research"
    : undefined,
}));

export function launchVideoSubpagePath(slug: string): string {
  return `/collections/launch-videos/${slug}/`;
}

export function getLaunchVideoBySlug(slug: string): LaunchVideoItem | undefined {
  return launchVideos.find((item) => item.slug === slug);
}

export function isLaunchVideoItem(item: {
  type: string;
  slug?: string;
}): item is LaunchVideoItem {
  return item.type === 'launch-video' && Boolean(item.slug);
}
