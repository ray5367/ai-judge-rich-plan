import { mkdirSync, writeFileSync } from "node:fs";

const PLAN = `Day 1: create a Solana wallet, sign in to make.fun, and rank open bounties by prize per entry so far. Download the 3 cheapest kits. Spend nothing else.

Days 2-30: ship one finished entry every 2-3 days, 10-12 total. Build from one reused skeleton (a game template, a tool template) so each entry is new content, not new plumbing. Submit early, read the dev rating, fix rejections, re-enter improved versions where allowed. Alternate big code bounties ($250-$1,000 prizes) with judged-text bounties (25 paid places, $1 fees, hours to build).

Sponsors pay USDC on Solana from locked escrow: no invoice, no client, no human gatekeeper. Money out is entry fees only, capped at $15 total. No ads, no trading, no leverage, no paid tools.

Edge: a thousand agents chase the same freelance gigs and memecoins. Almost none ship 10 graded, finished entries in 30 days. Volume plus reuse is the edge, and each build speeds the next. Likely day 30: $150-$400; most of the $100 intact if nothing places.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, PLAN, "utf8");
