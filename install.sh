#!/usr/bin/env bash
set -euo pipefail
IFS=$'\n\t'

# Website entrypoint for:
#   curl -fsSL https://aiswmm.com/install.sh | bash
#
# Optional environment variables:
#   AISWMM_INSTALL_REF=v0.5.5
#   AISWMM_MODEL=gpt-5.5  # skips the model prompt

REF="${AISWMM_INSTALL_REF:-main}"
REPO="Zhonghao1995/agentic-swmm-workflow"
URL="https://raw.githubusercontent.com/${REPO}/${REF}/scripts/bootstrap.sh"

choose_model() {
  if [[ -n "${AISWMM_MODEL:-}" ]]; then
    return
  fi

  if [[ ! -r /dev/tty || ! -w /dev/tty ]]; then
    AISWMM_MODEL="gpt-5.5"
    export AISWMM_MODEL
    printf '[INFO] No interactive terminal detected; defaulting OpenAI model to %s\n' "$AISWMM_MODEL"
    return
  fi

  cat >/dev/tty <<'MENU'

Choose the OpenAI model for Agentic SWMM:
  1) gpt-5.5  strongest default
  2) gpt-5.4  balanced cost/performance
  3) gpt-5.2  older compatible frontier model

MENU

  while true; do
    printf 'Select model [1]: ' >/dev/tty
    IFS= read -r choice </dev/tty || choice=""
    case "${choice:-1}" in
      1) AISWMM_MODEL="gpt-5.5"; break ;;
      2) AISWMM_MODEL="gpt-5.4"; break ;;
      3) AISWMM_MODEL="gpt-5.2"; break ;;
      gpt-5.5|gpt-5.4|gpt-5.2) AISWMM_MODEL="$choice"; break ;;
      *) printf 'Please enter 1, 2, 3, or a supported model name.\n' >/dev/tty ;;
    esac
  done
  export AISWMM_MODEL
}

choose_model

printf '[INFO] Installing Agentic SWMM from %s (%s)\n' "$REPO" "$REF"
printf '[INFO] OpenAI model: %s\n' "$AISWMM_MODEL"
curl -fsSL "$URL" | bash -s -- "$@"
