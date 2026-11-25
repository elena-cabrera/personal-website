/**
 * Controlled visual-style vocabulary for landing-page references.
 * Keep this small and stable so /collections style filters stay scannable.
 */
export const landingStyleTags = [
  // Typography — primary display / headline face
  'serif',
  'sans-serif',
  'mono',
  // Vibe
  'minimal',
  'techy',
  'editorial',
  'playful',
  'corporate',
  'dark',
  // Color
  'monochrome',
  'warm',
  'cool',
  'green',
  'lime',
  'orange',
  'pastel',
  'gradient',
] as const;

export type LandingStyleTag = (typeof landingStyleTags)[number];

const styleTagSet = new Set<string>(landingStyleTags);

export function isLandingStyleTag(tag: string): tag is LandingStyleTag {
  return styleTagSet.has(tag);
}

export function partitionCollectionTags(tags: string[]): {
  business: string[];
  style: string[];
} {
  const business: string[] = [];
  const style: string[] = [];
  for (const tag of tags) {
    if (isLandingStyleTag(tag)) style.push(tag);
    else business.push(tag);
  }
  return { business, style };
}
