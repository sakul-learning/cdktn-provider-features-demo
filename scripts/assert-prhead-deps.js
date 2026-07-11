#!/usr/bin/env node
import fs from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';

const configuredRepo = process.env.CDKTN_REPO;
if (!configuredRepo) {
  throw new Error('CDKTN_REPO is required; run pnpm run use:prhead after setting it to a built cdk-terrain PR worktree.');
}
const repo = path.resolve(configuredRepo);
const expectedCdktn = path.resolve(repo, 'packages/cdktn');
const lockPath = path.join(process.cwd(), 'pnpm-lock.yaml');
const lock = fs.readFileSync(lockPath, 'utf8');
const expectedRelative = path.relative(process.cwd(), expectedCdktn).replaceAll('\\', '/');
const expectedLockFragments = [
  `file:${expectedCdktn}`,
  expectedRelative,
  expectedCdktn.replaceAll('\\', '/'),
];

if (!expectedLockFragments.some((fragment) => lock.includes(fragment))) {
  throw new Error(`demo dependency "cdktn" is not locked to PR-head package ${expectedCdktn}`);
}
if (!lock.includes(`version: file:${expectedRelative}`)) {
  throw new Error(`pnpm lockfile resolves cdktn somewhere other than PR-head package ${expectedCdktn}; run a clean use:prhead install.`);
}

const forbiddenRegistryPatterns = [
  /\/cdktn\/[0-9][^\n]*/,
  /\/(@cdktn\/[^/]+)\/[0-9][^\n]*/,
];
for (const pattern of forbiddenRegistryPatterns) {
  const match = lock.match(pattern);
  if (match) {
    throw new Error(`lockfile appears to contain a registry CDK Terrain package entry: ${match[0]}`);
  }
}

const cli = path.join(repo, 'packages/cdktn-cli/bundle/bin/cdktn.js');
if (!fs.existsSync(cli)) {
  throw new Error(`PR-head cdktn CLI bundle not found: ${cli}`);
}

const require = createRequire(import.meta.url);
const installedPkg = require.resolve('cdktn/package.json', { paths: [process.cwd()] });
const installedReal = fs.realpathSync(path.dirname(installedPkg));
if (!installedReal.includes('cdktn@file+')) {
  throw new Error(`cdktn resolves to ${installedReal}, expected a pnpm file dependency sourced from PR-head packages/cdktn`);
}

console.log(`cdktn package install: ${installedReal}`);
console.log(`cdktn package source: ${expectedCdktn}`);
console.log(`cdktn CLI: ${cli}`);
console.log('OK: cdk-terrain packages under test resolve from PR head, not npmjs.');
