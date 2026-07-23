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
  // Not enough that the library is *some* local dependency — it must resolve from
  // THIS CDKTN_REPO checkout. Otherwise changing only CDKTN_REPO (without re-running
  // use:prhead) makes scripts/cdktn.js run one checkout's CLI while imports still
  // resolve cdktn from the previously installed one — a mixed build that both being
  // local would otherwise let slip through.
  const expectedCdktn = path.resolve(repo, 'packages/cdktn');
  const expectedRelative = path.relative(process.cwd(), expectedCdktn).split(path.sep).join('/');
  // pnpm relativizes a file: dep to the lockfile dir and encodes it into the store
  // directory name (`/` -> `+`); it records the same relative path in the lockfile.
  const expectedDepDir = `cdktn@file+${expectedRelative.replaceAll('/', '+')}`;
  if (!installedDirectory.includes(expectedDepDir)) {
    throw new Error(
      `cdktn library resolves from ${installedDirectory}, not the CDKTN_REPO checkout at ${expectedCdktn}. ` +
        'Re-run pnpm run use:prhead so the installed library and the CLI come from the same PR head.',
    );
  }
  const lock = fs.readFileSync(path.join(process.cwd(), 'pnpm-lock.yaml'), 'utf8');
  if (!lock.includes(`file:${expectedRelative}`)) {
    throw new Error(
      `pnpm-lock.yaml does not resolve cdktn from ${expectedRelative}; run a clean pnpm run use:prhead.`,
    );
  }
  const cli = path.resolve(repo, 'packages/cdktn-cli/bundle/bin/cdktn.js');
  if (!fs.existsSync(cli)) {
    throw new Error(`PR-head cdktn CLI bundle not found: ${cli}`);
  }
  console.log(`cdktn library: ${installedDirectory} (${installedPackage.version})`);
  console.log(`cdktn source:  ${expectedCdktn}`);
  console.log(`cdktn CLI:     ${cli}`);
  console.log('OK: PR-head mode — installed cdktn library and CLI both resolve from the CDKTN_REPO checkout.');
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
