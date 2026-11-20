// news-image-20261119 — "Sum up 19 November's world news in one image".
// The entry image (entry.png, drawn with Pillow from verified 19 Nov 2026
// reporting: the Shenzhen three-way summit, the ICJ Rohingya genocide ruling,
// the third Crimea bridge strike, Gaza, the record Anthropic IPO and COP31)
// is copied to the grader's output directory as entry.png.
//
// Node 22, standard library only. Outside the grader's container,
// MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const dest = join(outDir, "entry.png");
copyFileSync(new URL("./entry.png", import.meta.url), dest);
