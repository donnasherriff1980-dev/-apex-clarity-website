#!/usr/bin/env bash
# Brand guard for the Kenvio website source.
#
# Blocks NEW "Apex Clarity" branding from entering the website source. It is a
# ratchet: existing references (scripts/brand-guard.baseline) may be removed,
# but no file may gain one and no count may go up. Identifiers such as the
# --apex-* CSS tokens and the apex_cookie_consent storage key are NOT in scope,
# because renaming them would reset visitors' saved theme and cookie choices.
#
#   bash scripts/brand-guard.sh                  check (also run by CI)
#   bash scripts/brand-guard.sh --write-baseline regenerate the baseline
#                                                 (only with written approval)
set -euo pipefail
cd "$(git rev-parse --show-toplevel)"
PATTERN='apex clarity|apexclarity|apex-clarity'
SCOPE=(src public base44 index.html)
BASE=scripts/brand-guard.baseline

counts() {
  grep -rciE "$PATTERN" "${SCOPE[@]}" 2>/dev/null | grep -v ':0$' | sed 's/:\([0-9]*\)$/\t\1/' | sort || true
}

if [ "${1:-}" = "--write-baseline" ]; then
  counts > "$BASE"
  echo "wrote $BASE ($(wc -l < "$BASE") files)"
  exit 0
fi

fail=0
while IFS=$'\t' read -r path count; do
  [ -n "$path" ] || continue
  base=$(awk -F'\t' -v p="$path" '$1==p{print $2}' "$BASE")
  base=${base:-0}
  if [ "$count" -gt "$base" ]; then
    echo "BRAND GUARD: $path has $count 'Apex Clarity' reference(s); baseline allows $base."
    fail=1
  fi
done < <(counts)

if [ "$fail" -ne 0 ]; then
  echo "Remove the new reference. Do not raise the baseline without written approval."
  exit 1
fi
echo "Brand guard passed: no new Apex Clarity references in the Kenvio website source."
