# CDK Terrain PR #296 provider-feature demo

This repository is a small, repeatable demo harness for validating provider bindings generated from the `open-constructs/cdk-terrain` PR #296 head.

It intentionally uses the AWS provider because its current Terraform plugin protocol schema includes several non-baseline capabilities:

- provider-defined functions: `functions` (`arn_build`, `arn_parse`, `trim_iam_role_path`, `user_agent`)
- ephemeral resources: `ephemeral_resource_schemas`
- list resources: `list_resource_schemas`
- provider actions: `action_schemas`
- resource identities: `resource_identity_schemas`

At the time this demo was generated from AWS provider `6.53.0`, PR #296 generated TypeScript bindings for provider functions and ephemeral resources, but did **not** emit first-class bindings for list resources, actions, or resource identity schemas. The verification scripts keep those schema counts visible so future PR heads can be compared.

## Prerequisites

- `pnpm`
- `mise` with `terraform@1.15.7` and `opentofu@1.12.3` available
- a built cdk-terrain PR checkout; by default scripts expect `/data/repos/hermes-pr-reviewer/worktrees/cdk-terrain/pr-296`
- AWS credentials/profile for Terraform planning; default profile is `tcons-hermes`, override with `AWS_PROFILE=...`

## Quick check

```bash
export CDKTN_REPO=/path/to/cdk-terrain-pr-head
export AWS_PROFILE=tcons-hermes
export TERRAFORM_BINARY_NAME=$(mise x terraform@1.15.7 -- which terraform)
pnpm install
pnpm run use:prhead
pnpm run assert:prhead-deps
pnpm run schema:aws
pnpm run generate:aws
pnpm run inspect:schema
pnpm run assert:generated-features
pnpm exec tsc --noEmit
pnpm run synth:all
pnpm run plan:all
```

For OpenTofu schema generation / synth / plan compatibility:

```bash
export CDKTN_REPO=/path/to/cdk-terrain-pr-head
export AWS_PROFILE=tcons-hermes
export TERRAFORM_BINARY_NAME=$(mise x opentofu@1.12.3 -- which tofu)
pnpm run schema:aws
pnpm run generate:aws
pnpm run inspect:schema
pnpm run assert:generated-features
pnpm exec tsc --noEmit
pnpm run synth:all
pnpm run plan:all
```

`assert:prhead-deps` is intentionally part of the flow: it verifies the `cdktn` package is installed from the PR-head worktree and the `cdktn` CLI is invoked from the same PR-head checkout instead of npmjs.

## Example projects

Each subdirectory under `examples/` has its own `cdktf.json`.

- `examples/functions-ephemeral`: uses AWS provider-defined functions in outputs, plus an AWS ephemeral resource reference through `Fn.ephemeralasnull(...)`. It avoids creating infrastructure and is designed for `terraform plan -refresh=false`.
- `examples/functions-only`: focuses on provider-defined function bindings without configuring the provider. This is a smaller repro if function token synthesis regresses.

## Current verification results

Against cdk-terrain PR #296 head `78299b4b9ece16c45ab26a0cd28dec08e8ba57e9`:

- Terraform `1.15.7`: `assert:prhead-deps`, `schema:aws`, `generate:aws`, `inspect:schema`, `tsc --noEmit`, `synth:all`, and `plan:all` passed.
  - AWS provider schema exposed `functions: 4`, `ephemeral_resource_schemas: 10`, `list_resource_schemas: 153`, `action_schemas: 11`, and `resource_identity_schemas: 437`.
  - Generated bindings confirmed: provider functions and ephemeral resources.
  - No first-class generated directories/classes were emitted for list resources, provider actions, or resource identity schemas; keep the schema counts visible so this gap is easy to see on future PR heads.
- OpenTofu `1.12.3`: using the Terraform-generated bindings, `assert:prhead-deps`, `assert:generated-features`, `tsc --noEmit`, `synth:all`, and `plan:all` passed.
  - A separate OpenTofu schema probe had provider functions, ephemeral resources, and resource identities, but reported `list_resource_schemas: 0` and `action_schemas: 0`.

One portability note: this demo's `package.json` intentionally points `cdktn` at the local PR-head worktree (`file:/data/repos/hermes-pr-reviewer/worktrees/cdk-terrain/pr-296/packages/cdktn`) for the recorded run. When re-running elsewhere, edit that path or run with an equivalent checkout path before `pnpm install`; `scripts/cdktn.js` also honors `CDKTN_REPO` for the CLI bundle.

## Notes

The generated bindings in `.gen/` are committed intentionally: they are the artifact under review and make diffs between PR heads easy to inspect.
