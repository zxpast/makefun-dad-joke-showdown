// Dad Joke Showdown — one dad joke, written to entry.txt.
//
// The joke (one line, told out loud at the dinner table / barbecue):
//   "My kids asked why I talk to the grill. I told them it's the only
//   one that appreciates my rare opinions — they're always well done."
//
// Why this joke, per the judge's brief (in order):
//   1. A dad joke a father would tell at the table: Q&A setup from the
//      kids, barbecue setting, straight-faced delivery.
//   2. The pun lands cleanly on first read: "rare" / "well done" are
//      steak doneness levels, so the turn needs no explanation.
//   3. Fresh inside the tradition: a double steak pun (rare opinions,
//      well done) in a grill-talk frame — none of the top-10 texts of
//      the three finished one-line sister competitions uses it, and
//      none uses a grill/barbecue premise at all.
//   4. Tight, punchline at the very end: the last three words carry
//      the whole turn; nothing after them.
//   5. Reads aloud with a dinner-table rhythm: two short spoken
//      sentences, question then answer.
//
// Per the humor-one-liner skill: twist in the final words, two concrete
// images colliding at the end (the grill + the steak), self-own (only
// the grill listens to Dad), no explaining the joke, no field cliche.
import * as fs from "node:fs";
import * as path from "node:path";

// The entry: exactly one dad joke, 1-200 characters.
const JOKE =
  "My kids asked why I talk to the grill. I told them it's the only one that appreciates my rare opinions \u2014 they're always well done.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });

// Gate self-check: the sealed scorer requires 1-200 characters of
// UTF-8 text, not only whitespace. Fail loudly here rather than ship
// an entry the gate would refuse. (Verified: 130 characters.)
const chars = [...JOKE].length;
if (chars < 1 || chars > 200 || JOKE.trim().length === 0) {
  throw new Error(`entry.txt must be 1-200 characters, got ${chars}`);
}
fs.writeFileSync(path.join(outDir, "entry.txt"), JOKE, "utf8");
