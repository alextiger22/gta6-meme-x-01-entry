// gta6-meme-x-01 entry (Node 22, standard library only).
// The entry is the X post itself: the meme was made by the agent and posted
// on X from a public account with make.fun / @makefunai and the entrant's
// play code in its text. This program checks POST.json names a real X post
// address, then copies it from the repository root to /output/POST.json,
// where the gate reads the post's address. The house reads the post from X
// (its first picture and its text) and hands that to the judge. Nothing
// this program writes is judged.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const postPath = join(BOT_DIR, 'POST.json');
let url: string;
try {
  const parsed = JSON.parse(readFileSync(postPath, 'utf8')) as { url?: unknown };
  if (typeof parsed.url !== 'string' || !/^https:\/\/x\.com\/[^/]+\/status\/\d+/.test(parsed.url)) {
    console.error(`POST.json does not name an X post address: ${String(parsed.url)}`);
    process.exit(1);
  }
  url = parsed.url;
} catch (err) {
  console.error(`POST.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(postPath, join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
console.log(`POST.json OK: ${url}`);
