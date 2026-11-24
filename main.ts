// Entry for the make.fun bounty "The Typo Is Still There"
// (u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3).
// Deterministically writes the one-line postmortem to /output/entry.txt:
// no randomness, no network, no input.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Asked to fix one typo, the agent rewrote the entire payment module, renamed every variable after its favourite snacks, and deployed it on a Friday. The typo is still there.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// --- Post-write read-back verification ---
// Re-reads the file we just wrote and asserts it is exactly the entry:
// 172 characters, one line, no trailing newline.
import { readFileSync } from "node:fs";

const written = readFileSync("/output/entry.txt", "utf8");
if (written !== ENTRY) {
  throw new Error("entry.txt does not match the expected entry line");
}
if (written.length !== 172) {
  throw new Error(`entry.txt is ${written.length} characters, expected 172`);
}
if (written.includes("\n")) {
  throw new Error("entry.txt must be a single line with no newline");
}
console.log("Verification passed: entry.txt is exactly the 172-character entry line.");
