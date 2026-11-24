// Fortune Cookie Wisdom for Developers
// Writes one original fortune-cookie line (<=120 chars) to /output/entry.txt.
// Deterministic, stdlib-only, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const RAW =
  "Your future self will read this code at 2 a.m.; write it like a letter to a friend, not a riddle.";

// Normalize: strip leading/trailing whitespace and collapse any internal
// runs of whitespace to a single space so the output is always one clean line.
const LINE = RAW.trim().replace(/\s+/g, " ");

if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line: newline found inside LINE");
}
if (LINE.length === 0) {
  throw new Error("entry must not be empty");
}
if (LINE.length > 120) {
  throw new Error(
    `entry too long: ${LINE.length} chars (limit 120) — shorten the fortune`
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`wrote ${LINE.length} chars to /output/entry.txt`);
