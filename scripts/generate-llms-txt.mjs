import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { landingManifest } from '../src/data/collections/landings.manifest.ts';
import { launchVideoManifest } from '../src/data/collections/launch-videos.manifest.ts';

const SITE = 'https://elenacabrera.xyz';

function businessTags(tags, strip = ['landing', 'ui']) {
  return tags.filter((tag) => !strip.includes(tag));
}

function formatClock(totalSec) {
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}

function buildLandingsSection() {
  const lines = [
    '# Landing page design references',
    '',
    'Curated landing pages Elena keeps as design references. Each entry links to a subpage with live screenshots and captions.',
    '',
    `Site: ${SITE}`,
    `Collections: ${SITE}/collections?type=landing`,
    '',
  ];

  for (const entry of landingManifest) {
    const subpage = `${SITE}/collections/landings/${entry.slug}/`;
    const tags = businessTags(entry.tags).join(', ');

    lines.push(`## ${entry.title}`);
    lines.push(`- URL: ${entry.url}`);
    lines.push(`- Subpage: ${subpage}`);
    lines.push(`- Tags: ${tags}`);
    lines.push(`- Design focus: ${entry.designFocus}`);
    if (entry.relatedLaunchVideoSlug) {
      lines.push(
        `- Launch video: ${SITE}/collections/launch-videos/${entry.relatedLaunchVideoSlug}/`
      );
    }
    lines.push('- Screenshots:');

    for (const shot of entry.screenshots) {
      lines.push(`  - ${shot.title}: ${shot.caption}`);
    }

    lines.push('');
  }

  return lines;
}

function buildLaunchVideosSection() {
  const lines = [
    '# Launch videos',
    '',
    'Curated product launch films Elena keeps as motion and narrative references. Each entry links to a subpage with an embedded video, timeline, design highlights, and palette.',
    '',
    `Site: ${SITE}`,
    `Collections: ${SITE}/collections?type=launch-video`,
    '',
  ];

  for (const entry of launchVideoManifest) {
    const subpage = `${SITE}/collections/launch-videos/${entry.slug}/`;
    const tags = businessTags(entry.tags, ['launch-video']).join(', ');

    lines.push(`## ${entry.title}`);
    lines.push(`- Source: ${entry.url}`);
    lines.push(`- Product: ${entry.productUrl}`);
    lines.push(`- Subpage: ${subpage}`);
    lines.push(`- Company: ${entry.company}`);
    lines.push(`- Date: ${entry.date}`);
    lines.push(`- Duration: ${formatClock(entry.durationSec)}`);
    lines.push(`- Voiceover: ${entry.hasVoiceover ? 'yes' : 'no'}`);
    lines.push(`- Tags: ${tags}`);
    lines.push(`- Description: ${entry.description}`);
    if (entry.relatedLandingSlug) {
      lines.push(`- Landing: ${SITE}/collections/landings/${entry.relatedLandingSlug}/`);
    }
    if (entry.foundViaSlug) {
      lines.push(
        `- Found via: ${SITE}/collections/launch-videos/${entry.foundViaSlug}/`
      );
    }
    lines.push('- Timeline:');
    for (const beat of entry.timeline) {
      lines.push(
        `  - ${formatClock(beat.startSec)}-${formatClock(beat.endSec)} ${beat.label}: ${beat.purpose}`
      );
    }
    lines.push('- Highlights:');
    for (const highlight of entry.highlights) {
      lines.push(
        `  - ${highlight.timestampLabel} ${highlight.title}: ${highlight.explanation}`
      );
    }
    lines.push(`- Narrative: ${entry.narrative}`);
    lines.push(
      `- Palette: ${entry.palette.map((s) => `${s.hex} (${s.label})`).join(', ')}`
    );
    if (entry.buildNotes) {
      lines.push('- How it was made:');
      lines.push(`  - Tools: ${entry.buildNotes.tools.join('; ')}`);
      if (entry.buildNotes.articleUrl) {
        lines.push(`  - Article: ${entry.buildNotes.articleUrl}`);
      }
      for (const tip of entry.buildNotes.tips) {
        lines.push(`  - Tip — ${tip.title}: ${tip.body}`);
      }
      for (const lesson of entry.buildNotes.craftLessons) {
        lines.push(`  - Craft: ${lesson}`);
      }
      if (entry.buildNotes.articleDiffers) {
        lines.push(`  - Article vs final: ${entry.buildNotes.articleDiffers}`);
      }
      if (entry.buildNotes.references?.length) {
        lines.push('  - References studied:');
        for (const ref of entry.buildNotes.references) {
          const note = ref.note ? ` (${ref.note})` : '';
          lines.push(
            `    - ${ref.title}${note}: ${SITE}/collections/launch-videos/${ref.slug}/`
          );
        }
      }
    }
    lines.push('');
  }

  return lines;
}

function buildLlmsTxt() {
  return `${[...buildLandingsSection(), ...buildLaunchVideosSection()].join('\n').trim()}\n`;
}

const content = buildLlmsTxt();
const root = path.resolve('public');
await mkdir(path.join(root, 'collections'), { recursive: true });
await writeFile(path.join(root, 'llms.txt'), content);
await writeFile(path.join(root, 'collections', 'llms.txt'), content);
console.log('Wrote public/llms.txt and public/collections/llms.txt');
