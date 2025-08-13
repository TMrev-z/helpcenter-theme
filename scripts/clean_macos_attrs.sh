#!/usr/bin/env bash
set -euo pipefail

# 不要ファイルの削除
find . -name '.DS_Store' -type f -delete 2>/dev/null || true
find . -name '__MACOSX' -type d -prune -exec rm -rf {} + 2>/dev/null || true
find . -name '._*' -type f -delete 2>/dev/null || true

# macOS拡張属性の一括削除（存在すれば）
if command -v xattr >/dev/null 2>&1; then
  # プロジェクト直下すべてから拡張属性を剥がす
  xattr -rc . 2>/dev/null || true
  # 残存チェック（provenance / quarantine / ResourceFork など）
  if xattr -r -l . 2>/dev/null | grep -E 'com\.apple\.(provenance|quarantine|ResourceFork)' >/dev/null 2>&1; then
    echo "WARNING: macOS拡張属性が一部残っています。再度cleanを実行することを推奨します。" >&2
  else
    echo "OK: macOS属性/ゴミファイルを除去しました。"
  fi
else
  echo "OK: xattrコマンドが存在しないため、拡張属性チェックをスキップしました。"
fi