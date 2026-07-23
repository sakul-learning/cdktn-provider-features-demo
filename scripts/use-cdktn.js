#!/usr/bin/env node
// Repoint the demo's `cdktn` (and `cdktn-cli`) dependency at one of the three
// sources this harness supports, then reinstall:
//   latest  -> published @latest release line (currently 0.23.x)
//   next    -> published @next prerelease line (currently 0.24.0-pre.x) -- the default
//   prhead  -> a locally built cdk-terrain checkout via CDKTN_REPO (file: dependency)
//
// `latest`/`next` are mutable npm dist-tags: this writes the tag (not a pinned
// version) into package.json so `pnpm update cdktn cdktn-cli` re-resolves to the
// newest published build under that tag.
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const MODES = ['latest', 'next', 'prhead'];
const mode = process.argv[2];
if (!MODES.includes(mode)) {
  console.error(`Usage: node scripts/use-cdktn.js <${MODES.join('|')}>`);
  process.exit(1);
}

const pkgPath = path.join(process.cwd(), 'package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
pkg.dependencies ??= {};
pkg.devDependencies ??= {};

function run(cmd, args) {
  const result = spawnSync(cmd, args, { stdio: 'inherit', env: process.env });
  if ((result.status ?? 1) !== 0) process.exit(result.status ?? 1);
}

if (mode === 'prhead') {
  const repo = process.env.CDKTN_REPO;
  if (!repo) {
    console.error('CDKTN_REPO is required for prhead mode, e.g. CDKTN_REPO=/path/to/cdk-terrain');
    process.exit(1);
  }
  const cdktnPkg = path.resolve(repo, 'packages/cdktn');
  const cli = path.resolve(repo, 'packages/cdktn-cli/bundle/bin/cdktn.js');
  if (!fs.existsSync(path.join(cdktnPkg, 'package.json'))) {
    console.error(`cdktn package not found at ${cdktnPkg}`);
    process.exit(1);
  }
  if (!fs.existsSync(cli)) {
    console.error(`cdktn CLI bundle not found at ${cli}. Build the PR head first.`);
    process.exit(1);
  }
  // The library is consumed as a file: dependency; the CLI is invoked from the
  // built bundle by scripts/cdktn.js (which keys off CDKTN_REPO), so cdktn-cli
  // stays as-is and unused in this mode.
  pkg.dependencies.cdktn = `file:${cdktnPkg}`;
} else {
  // Mutable dist-tag for both the library and the CLI.
  pkg.dependencies.cdktn = mode;
  pkg.devDependencies['cdktn-cli'] = mode;
}

fs.writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`);
console.log(`package.json: cdktn -> ${pkg.dependencies.cdktn}`);
if (mode !== 'prhead') {
  console.log(`package.json: cdktn-cli -> ${pkg.devDependencies['cdktn-cli']}`);
}

run('pnpm', ['install']);

if (mode === 'prhead') {
  console.log('\nOK: cdktn library repointed at the PR-head worktree.');
  console.log('Run generate/synth with CDKTN_REPO set so scripts/cdktn.js uses the built bundle.');
} else {
  console.log(`\nOK: cdktn/cdktn-cli set to the mutable @${mode} tag.`);
  console.log(`Re-run \`pnpm update cdktn cdktn-cli\` to pull the newest published @${mode} build.`);
}
