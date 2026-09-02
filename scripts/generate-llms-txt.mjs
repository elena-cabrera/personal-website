import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { landingManifest } from '../src/data/collections/landings.manifest.ts';

const SITE = 'https://elenacabrera.xyz';

function businessTags(tags) {
  return tags.filter((tag) => tag !== 'landing' && tag !== 'ui');
}

function buildLlmsTxt() {
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
    const subpage = `${SITE}/collections/landings/${entry.slug}`;
    const tags = businessTags(entry.tags).join(', ');

    lines.push(`## ${entry.title}`);
    lines.push(`- URL: ${entry.url}`);
    lines.push(`- Subpage: ${subpage}`);
    lines.push(`- Tags: ${tags}`);
    lines.push(`- Design focus: ${entry.designFocus}`);
    lines.push('- Screenshots:');

    for (const shot of entry.screenshots) {
      lines.push(`  - ${shot.title}: ${shot.caption}`);
    }

    lines.push('');
  }

  return `${lines.join('\n').trim()}\n`;
}

const content = buildLlmsTxt();
const root = path.resolve('public');
await mkdir(path.join(root, 'collections'), { recursive: true });
await writeFile(path.join(root, 'llms.txt'), content);
await writeFile(path.join(root, 'collections', 'llms.txt'), content);
console.log('Wrote public/llms.txt and public/collections/llms.txt');
