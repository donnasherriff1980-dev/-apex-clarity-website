# Kenvio website: working rules for Claude

Read `docs/source-of-truth.md` before doing anything in this repository.

- The live Base44 app "Kenvio" (app id `6a24770b8156364d64a8152b`) is the canonical website. `main` in this repo must match what is deployed.
- Start every change from `main`. Never start from, merge, or copy any `claude/*` branch. They are historical and frozen.
- Never reintroduce Apex Clarity branding. Run `bash scripts/brand-guard.sh` before proposing any change, and before any Base44 publish.
- Do not publish to Base44 or kenvio.co.uk without the owner's explicit approval, and do not edit the SaaS product repository from here.
