#!/usr/bin/env node
import fs from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';

const expectedVersion = '0.24.0-pre.89';
const require = createRequire(import.meta.url);
const installedPackageJson = require.resolve('cdktn/package.json', {
  paths: [process.cwd()],
});
const installedPackage = JSON.parse(fs.readFileSync(installedPackageJson, 'utf8'));
const installedDirectory = fs.realpathSync(path.dirname(installedPackageJson));

if (installedPackage.version !== expectedVersion) {
  throw new Error(`cdktn is ${installedPackage.version}; expected published ${expectedVersion}`);
}
if (installedDirectory.includes('file+') || installedDirectory.includes('/worktrees/')) {
  throw new Error(`cdktn resolves from a local dependency instead of npm: ${installedDirectory}`);
}

const cliPackageJson = require.resolve('cdktn-cli/package.json', {
  paths: [process.cwd()],
});
const cliPackage = JSON.parse(fs.readFileSync(cliPackageJson, 'utf8'));
const cli = require.resolve('cdktn-cli/bin/cdktn', { paths: [process.cwd()] });
if (cliPackage.version !== expectedVersion) {
  throw new Error(`cdktn-cli is ${cliPackage.version}; expected published ${expectedVersion}`);
}
if (!fs.existsSync(cli)) {
  throw new Error(`published cdktn CLI binary not found: ${cli}`);
}

console.log(`cdktn package: ${installedDirectory} (${installedPackage.version})`);
console.log(`cdktn CLI: ${cli} (${cliPackage.version})`);
console.log(`OK: demo uses published cdktn and cdktn-cli ${expectedVersion}.`);
