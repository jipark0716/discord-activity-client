#!/usr/bin/env bash

set -euo pipefail

VERSION="${1:?version is required}"

rm -f dist.tar.gz
tar -czf dist.tar.gz dist

gh release create "$VERSION" dist.tar.gz \
  --title "$VERSION" \
  --generate-notes

rm -f dist.tar.gz