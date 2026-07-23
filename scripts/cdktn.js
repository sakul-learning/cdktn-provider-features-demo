#!/usr/bin/env node
// Mode-aware cdktn CLI wrapper so every generate/synth command works against any
// of the three sources this harness targets:
//   - published npm dist-tag (`latest` = current release, `next` = 0.24 prerelease line)
//   - a locally built cdk-terrain PR head (set CDKTN_REPO)
// When CDKTN_REPO is set we invoke that checkout's built CLI bundle directly;
// otherwise we invoke the `cdktn-cli` installed from npm.
import { spawnSync } from 'node:child_process';
import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';

const repo = process.env.CDKTN_REPO;
let cli;

if (repo) {
  cli = path.resolve(repo, 'packages/cdktn-cli/bundle/bin/cdktn.js');
  if (!fs.existsSync(cli)) {
    console.error(
      `CDKTN_REPO is set but the PR-head CLI bundle was not found: ${cli}\n` +
        'Build the cdk-terrain PR head first, or unset CDKTN_REPO to use the published cdktn-cli.',
    );
    process.exit(1);
  }
} else {
  const require = createRequire(import.meta.url);
  try {
    cli = require.resolve('cdktn-cli/bin/cdktn', { paths: [process.cwd()] });
  } catch {
    console.error(
      'cdktn-cli is not installed. Select a source first:\n' +
        '  pnpm run use:next    # published 0.24 prerelease (@next)\n' +
        '  pnpm run use:latest  # published release (@latest)\n' +
        '  CDKTN_REPO=/path/to/cdk-terrain pnpm run use:prhead  # local PR head',
    );
    process.exit(1);
  }
}

const result = spawnSync(process.execPath, [cli, ...process.argv.slice(2)], {
  stdio: 'inherit',
  env: process.env,
});
process.exit(result.status ?? 1);
