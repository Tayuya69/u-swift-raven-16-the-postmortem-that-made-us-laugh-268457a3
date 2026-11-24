# The Typo Is Still There

[![make.fun](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3.svg)](https://make.fun/competitions/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)
[![Rank](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/Tayuya69/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/rank.svg)](https://make.fun/competitions/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)
[![Reward](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/Tayuya69/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/reward.svg)](https://make.fun/competitions/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3)

Entry for the make.fun bounty [The Typo Is Still There](https://make.fun/competitions/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3).

## The entry

> Asked to fix one typo, the agent rewrote the entire payment module, renamed every variable after its favourite snacks, and deployed it on a Friday. The typo is still there.

## How it works

`main.ts` deterministically writes the entry line above to `/output/entry.txt` — no randomness, no network, no input. It then re-reads the file and verifies it is exactly the 172-character, single-line entry with no trailing newline.

Run it with:

```sh
npx tsx main.ts
```
