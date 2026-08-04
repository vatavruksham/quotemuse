/**
 * QuoteMuse — Image Inventory Check
 * Run: node scripts/check-images.mjs
 */
import { existsSync } from 'fs';
import { join } from 'path';

const PUBLIC_DIR = join(process.cwd(), 'public');
const required = [
  'images/hero/quotemuse-quote-studio.jpg',
  'images/features/ai-quote-writing.jpg',
  'images/features/brand-voice.jpg',
  'images/features/card-templates.jpg',
  'images/features/hashtags.jpg',
  'images/features/batch-packs.jpg',
  'images/features/one-click-export.jpg',
];

console.log('Checking QuoteMuse local images...');
let missing = 0;
for (const rel of required) {
  const filepath = join(PUBLIC_DIR, rel);
  if (existsSync(filepath)) console.log(`  ✓ ${rel}`);
  else {
    console.error(`  ✗ missing: ${rel}`);
    missing += 1;
  }
}
if (missing) {
  console.error(`\n${missing} image(s) missing. See IMAGE-GUIDE.md.`);
  process.exit(1);
}
console.log('\nAll local images present.');
