#!/usr/bin/env node
// Guard, not a test: verify the resolved cdktn source matches the intended mode
// so the harness never silently validates against the wrong build.
//   - CDKTN_REPO set   -> PR-head mode: cdktn must resolve from that local checkout,
//                         and its built CLI bundle must exist.
//   - CDKTN_REPO unset -> published mode: cdktn must resolve from npm (not a local
//                         file:/worktree path), and cdktn-cli must match its version.
// The resolved version is printed so `latest` (0.23.x) vs `next` (0.24.0-pre.x) is
// visible without pinning either here.
import fs from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';

const require = createRequire(import.meta.url);
const installedPackageJson = require.resolve('cdktn/package.json', {
  paths: [process.cwd()],
});
const installedPackage = JSON.parse(fs.readFileSync(installedPackageJson, 'utf8'));
const installedDirectory = fs.realpathSync(path.dirname(installedPackageJson));
const isLocal =
  installedDirectory.includes('file+') || installedDirectory.includes('/worktrees/');

const repo = process.env.CDKTN_REPO;

if (repo) {
  if (!isLocal) {
    throw new Error(
      `CDKTN_REPO is set but cdktn resolves from npm (${installedDirectory}); run pnpm run use:prhead`,
    );
  }
  const cli = path.resolve(repo, 'packages/cdktn-cli/bundle/bin/cdktn.js');
  if (!fs.existsSync(cli)) {
    throw new Error(`PR-head cdktn CLI bundle not found: ${cli}`);
  }
  console.log(`cdktn package: ${installedDirectory} (${installedPackage.version})`);
  console.log(`cdktn CLI: ${cli}`);
  console.log('OK: PR-head mode — cdktn library and CLI resolve from the local cdk-terrain checkout.');
} else {
  if (isLocal) {
    throw new Error(
      `cdktn resolves from a local worktree (${installedDirectory}) but CDKTN_REPO is not set; ` +
        'run pnpm run use:next or pnpm run use:latest to return to a published build.',
    );
  }
  const cliPackageJson = require.resolve('cdktn-cli/package.json', {
    paths: [process.cwd()],
  });
  const cliPackage = JSON.parse(fs.readFileSync(cliPackageJson, 'utf8'));
  const cli = require.resolve('cdktn-cli/bin/cdktn', { paths: [process.cwd()] });
  if (cliPackage.version !== installedPackage.version) {
    throw new Error(
      `cdktn (${installedPackage.version}) and cdktn-cli (${cliPackage.version}) versions differ; ` +
        'reinstall both from the same dist-tag (pnpm run use:next / use:latest).',
    );
  }
  if (!fs.existsSync(cli)) {
    throw new Error(`published cdktn CLI binary not found: ${cli}`);
  }
  console.log(`cdktn package: ${installedDirectory} (${installedPackage.version})`);
  console.log(`cdktn CLI: ${cli} (${cliPackage.version})`);
  console.log(`OK: published mode — cdktn and cdktn-cli both ${installedPackage.version} from npm.`);
}
