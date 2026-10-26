# Kenvio website: source of truth and working rules

**Status:** in force from 26 October 2026. Supersedes any earlier note that treated a `claude/*` branch or the old Apex Clarity repository as current.

## 1. What is canonical

| Thing | Where | Role |
| --- | --- | --- |
| Live Kenvio website | Base44 app "Kenvio", id `6a24770b8156364d64a8152b`, main branch, published at kenvio.co.uk | **Canonical.** Deployed state. |
| `main` in this repository | `donnasherriff1980-dev/-apex-clarity-website` | **Mirror of the approved deployed source.** Review record. Not an independent source. |
| Baseline | Tag `kenvio-website-live-baseline-2026-10-26`, commit `9ac66be` (text source), `2d36d1e` (binary assets) | Frozen starting point for 26 October 2026. |
| `claude/apex-clarity-website-audit-tqufgo` | GitHub | **Historical. Do not use.** Apex Clarity branding, September 2026 state, plus an SEO audit commit added 26 October. |
| `claude/kenvio-launch-audit-301fd9` | GitHub | **Historical. Do not use.** Pre-baseline Kenvio work plus the 7 October homepage pass, which was never applied and is not being resurrected. |

The SaaS product repository is separate and out of scope for this website workflow.

## 2. The working rule

1. Branch from current `main`, never from an old branch.
2. Make the change in a Base44 branch, or in a feature branch here, and review it on its **preview**.
3. Owner approves. Nothing is published without that approval.
4. Merge the Base44 branch into Base44 main, then deploy.
5. Verify the live site.
6. Mirror the approved change into `main` here, so `main` again equals the deployed source (see section 3). A task is not closed until this step is done.

There must never be two independent evolving website sources.

## 3. The mirror step (mandatory until a supported sync is in place)

Base44 is not connected to this repository, and the connection cannot target an existing repository. So the mirror is an explicit step with a check:

1. Read the live app: `list_directory` (recursive) and `read_file` on every text file.
2. Compare with `main`, ignoring the governance files listed in `docs/baseline-manifest.md`.
3. Commit the differences to `main`, with a message naming the Base44 checkpoint they came from.
4. Run `bash scripts/brand-guard.sh`. It must pass.
5. Record the checkpoint id and the commit SHA in the task notes.

If the comparison shows any difference that nobody approved, stop and report it. Do not overwrite either side.

## 4. Brand guard

`scripts/brand-guard.sh` is a ratchet. It fails if any file under `src`, `public`, `base44` or `index.html` gains an "Apex Clarity" reference, or if an existing count rises. CI runs it on every push and pull request to `main` (`.github/workflows/brand-guard.yml`).

Reducing the 15 known references (see `scripts/brand-guard.baseline`) is welcome. Each one is a decision: the footer copyright and Terms clauses wait for the registered legal entity, and the demo link waits for a decision on the demo domain.

Raising the baseline requires written approval and a note in `docs/baseline-manifest.md`.

## 5. Checkpoint naming

Name every Base44 checkpoint `<what changed> (github <commit sha>)`, using the commit that mirrors it. Example: `Contact email to info@kenvio.co.uk (github 4c7e1f9)`.

## 6. What must never be done

- Using `claude/*` branches as a starting point, or merging them into `main`.
- Deleting the old branches, or force-pushing `main`. They are preserved for history.
- Publishing from a branch that has not been reviewed on its preview.
- Reintroducing Apex Clarity branding, or the old pricing and "30-minute" copy.
- Editing the SaaS product repository from a website task.

## 7. Open items

- Set the GitHub default branch to `main` (repository settings). It is still the historical audit branch, so new clones default to the wrong code until this is done.
- Create the baseline tag. The tag could not be pushed from the environment, so create it on `2d36d1e` in the GitHub UI or with `git tag`.
- Decide whether to connect Base44's GitHub integration to a new repository. That removes the manual mirror, and it is the supported route. See `docs/baseline-manifest.md`.
