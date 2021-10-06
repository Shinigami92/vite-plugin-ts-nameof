#!/usr/bin/env bash
set -x

# Cleanup
rm -Rf dist
rm -Rf node_modules
rm pnpm-lock.yaml

# Prepare
pnpm install
pnpm run lint
pnpm audit
pnpm run build

# Publish
npm publish --dry-run

set +x

echo
echo "If everything looks okay, use 'npm publish --access public'"
echo
echo "Remember to create a tag"
echo "Remember to increase the version number"
echo
