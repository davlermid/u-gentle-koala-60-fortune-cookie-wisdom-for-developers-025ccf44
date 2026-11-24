// Fortune Cookie Wisdom for Developers
// Writes one original fortune-cookie line (<=120 chars) to /output/entry.txt.
// Deterministic, stdlib-only, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Your future self will read this code at 2 a.m.; write it like a letter to a friend, not a riddle.";

if (LINE.length > 120) {
  throw new Error(`entry too long: ${LINE.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`wrote ${LINE.length} chars to /output/entry.txt`);
