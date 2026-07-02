#!/usr/bin/env bash
set -euo pipefail
mkdir -p schema
workdir="$(mktemp -d)"
trap 'rm -rf "$workdir"' EXIT
cat > "$workdir/main.tf" <<'TF'
terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
    }
  }
}
TF
tfbin="${TERRAFORM_BINARY_NAME:-terraform}"
(
  cd "$workdir"
  "$tfbin" init -backend=false -input=false >/dev/null
  "$tfbin" providers schema -json > "$OLDPWD/schema/aws-provider-schema.json"
)
node scripts/inspect-aws-schema.js schema/aws-provider-schema.json
