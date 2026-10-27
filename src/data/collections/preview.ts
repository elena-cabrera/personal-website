import { existsSync } from 'node:fs';
import path from 'node:path';
import type { CollectionItem } from './types';

export type CollectionPreviewMedia =
  | {
      mode: 'image';
      src: string;
      title: string;
      domain: string;
      favicon: string;
    }
  | {
      mode: 'video';
      src: string;
      poster: string;
      title: string;
      domain: string;
      favicon: string;
    }
  | {
      mode: 'fallback';
      title: string;
      domain: string;
      favicon: string;
    };

const PREVIEWS_DIR = path.join(
  process.cwd(),
  'public/assets/images/collections/previews'
);

/**
 * Hostname without leading www for display / favicon lookup.
 *
 * Args:
 * - url (string): Absolute URL.
 *
 * Returns:
 * - string: Hostname, or the original string if parsing fails.
 */
function previewHostname(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
}

/**
 * Google favicon service URL for a site.
 *
 * Args:
 * - url (string): Absolute URL of the site.
 *
 * Returns:
 * - string: Favicon image URL.
 */
function previewFaviconUrl(url: string): string {
  return `https://www.google.com/s2/favicons?domain=${previewHostname(url)}&sz=32`;
}

/**
 * Public path for a captured collection preview image keyed by item id.
 *
 * Args:
 * - id (string): Collection item id.
 *
 * Returns:
 * - string: Site-root path under /assets/images/collections/previews/.
 */
export function previewImagePath(id: string): string {
  return `/assets/images/collections/previews/${id}.webp`;
}

/**
 * Whether a captured preview webp exists on disk for the given id.
 *
 * Args:
 * - id (string): Collection item id.
 *
 * Returns:
 * - boolean: True when the convention file is present.
 */
export function hasCapturedPreview(id: string): boolean {
  return existsSync(path.join(PREVIEWS_DIR, `${id}.webp`));
}

/**
 * Resolve hover-preview media for a collection item (image, muted video, or fallback card).
 *
 * Args:
 * - item (CollectionItem): Collection entry to preview.
 *
 * Returns:
 * - CollectionPreviewMedia: Mode and assets for the floating hover card.
 */
export function resolvePreviewMedia(item: CollectionItem): CollectionPreviewMedia {
  const previewTargetUrl =
    item.type === 'launch-video' ? (item.productUrl ?? item.url) : item.url;
  const domain = previewHostname(previewTargetUrl);
  const favicon = previewFaviconUrl(previewTargetUrl);
  const title = item.title;

  if (item.type === 'launch-video' && item.video?.src && item.video?.poster) {
    return {
      mode: 'video',
      src: item.video.src,
      poster: item.video.poster,
      title,
      domain,
      favicon,
    };
  }

  if (item.previewImage) {
    return { mode: 'image', src: item.previewImage, title, domain, favicon };
  }

  if (item.type === 'landing' && item.screenshots?.[0]?.src) {
    return {
      mode: 'image',
      src: item.screenshots[0].src,
      title,
      domain,
      favicon,
    };
  }

  if (item.type === 'book' && item.cover) {
    return { mode: 'image', src: item.cover, title, domain, favicon };
  }

  if (hasCapturedPreview(item.id)) {
    return {
      mode: 'image',
      src: previewImagePath(item.id),
      title,
      domain,
      favicon,
    };
  }

  return { mode: 'fallback', title, domain, favicon };
}
