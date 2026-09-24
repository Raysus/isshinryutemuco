#!/usr/bin/env bash
# Sync Isshin Akira Temuco to the VPS and rebuild isshin.
# Local: ~/.ssh/oracle_santiago  |  CI: ssh-agent with DEPLOY_SSH_KEY
set -euo pipefail

HOST="${DEPLOY_HOST:-192.141.169.43}"
USER="${DEPLOY_USER:-root}"
REMOTE="${USER}@${HOST}"
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
KNOWN_HOSTS="${DEPLOY_KNOWN_HOSTS_FILE:-$ROOT/deploy/known_hosts}"

ssh_opts=(-o StrictHostKeyChecking=yes)
if [[ -f "$KNOWN_HOSTS" ]]; then
  ssh_opts+=(-o UserKnownHostsFile="$KNOWN_HOSTS")
fi
if [[ -z "${SSH_AUTH_SOCK:-}" && -f "${HOME}/.ssh/oracle_santiago" ]]; then
  ssh_opts+=(-i "${HOME}/.ssh/oracle_santiago" -o IdentitiesOnly=yes)
fi

ssh_cmd() { ssh "${ssh_opts[@]}" "$@"; }
rsync_ssh() { printf 'ssh'; for opt in "${ssh_opts[@]}"; do printf ' %q' "$opt"; done; }

excludes=(
  --exclude node_modules
  --exclude dist
  --exclude .git
  --exclude coverage
  --exclude '*.log'
  --exclude .env
  --exclude data
  --exclude uploads
  --exclude docs
)

echo "→ ${REMOTE}: isshinryutemuco"
rsync -az --delete "${excludes[@]}" -e "$(rsync_ssh)" \
  "$ROOT/" "$REMOTE:/opt/dozai/isshinryutemuco/"

echo "→ rebuild isshin"
ssh_cmd "$REMOTE" 'set -euo pipefail
cd /opt/dozai
docker compose build isshin
docker compose up -d isshin
sleep 6
docker compose ps isshin
'

echo "→ health"
curl -fsS -m 20 -H "Host: isshinryutemuco.cl" "http://${HOST}/api/health"
echo
echo "OK"
