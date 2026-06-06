#!/bin/bash
set -euo pipefail
cd "$(dirname "$0")/.."

mkdir -p .secrets

echo "Generating secrets for nexumchat deployment..."

# 32-byte base64 keys
openssl rand -base64 32 > .secrets/KEY_VAULTS_SECRET
openssl rand -base64 32 > .secrets/AUTH_SECRET
openssl rand -base64 32 > .secrets/RUSTFS_SECRET_KEY

# 8-byte hex access key for RustFS
openssl rand -hex 8 > .secrets/RUSTFS_ACCESS_KEY

# JWKS for OIDC (RSA 2048, RS256)
node -e '
const crypto = require("crypto");
const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", { modulusLength: 2048 });
const jwk = privateKey.export({ format: "jwk" });
const keys = [{
  kty: jwk.kty,
  n: jwk.n,
  e: jwk.e,
  d: jwk.d,
  p: jwk.p,
  q: jwk.q,
  dp: jwk.dp,
  dq: jwk.dq,
  qi: jwk.qi,
  alg: "RS256",
  kid: crypto.randomUUID(),
  use: "sig"
}];
console.log(JSON.stringify({ keys }));
' > .secrets/JWKS_KEY

echo "Secrets generated in .secrets/"
ls -la .secrets/
