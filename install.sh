#!/usr/bin/env bash
set -euo pipefail
IFS=$'\n\t'

# Website entrypoint for:
#   curl -fsSL https://aiswmm.com/install.sh | bash
#
# Optional environment variables:
#   AISWMM_INSTALL_REF=v0.5.5
#   AISWMM_MODEL=gpt-5.5

REF="${AISWMM_INSTALL_REF:-main}"
REPO="Zhonghao1995/agentic-swmm-workflow"
URL="https://raw.githubusercontent.com/${REPO}/${REF}/scripts/bootstrap.sh"

printf '[INFO] Installing Agentic SWMM from %s (%s)\n' "$REPO" "$REF"
printf '[INFO] OpenAI model: %s\n' "${AISWMM_MODEL:-gpt-5.5}"
curl -fsSL "$URL" | bash -s -- "$@"
