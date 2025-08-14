# データバックアップ戦略

Markdown Lite で作成したドキュメントを安全に保護するための包括的なバックアップ戦略を解説します。

## バックアップの基本原則

### 3-2-1 ルール
```markdown
3つのコピー:
1. 作業用のオリジナルファイル（ローカル）
2. 1つ目のバックアップ（別のローカル場所）  
3. 2つ目のバックアップ（オフサイト/クラウド）

2つの異なるメディア:
- 内蔵ストレージ（SSD/HDD）
- 外部ストレージ（外付けHDD、クラウド）

1つのオフサイト保存:
- クラウドストレージ
- 遠隔地の物理ストレージ
```

### リスク分析と対策
```markdown
想定リスク:
⚠️ ハードウェア障害（HDD/SSD故障）
⚠️ 人的ミス（誤削除、誤操作）
⚠️ ソフトウェア不具合
⚠️ マルウェア感染
⚠️ 火災、盗難、災害
⚠️ クラウドサービス障害

対策の基本方針:
✅ 複数世代の保持
✅ 定期的な自動バックアップ
✅ バックアップの検証
✅ 復旧手順の文書化
✅ 定期的な復旧テスト
```

## 自動バックアップの設定

### Markdown Lite の自動バックアップ
```json
{
  "backup": {
    "enabled": true,
    "interval": 300000,
    "maxGenerations": 20,
    "location": "~/Library/Application Support/Markdown Lite/backups/",
    "namePattern": "{filename}.backup.{timestamp}.md",
    "compress": true
  }
}
```

### Time Machine の活用
```bash
# Time Machine の設定確認
tmutil status

# 手動バックアップの実行
sudo tmutil startbackup

# 特定フォルダのバックアップ状態確認
tmutil compare /Users/$(whoami)/Documents
```

### スクリプトによる自動バックアップ
```bash
#!/bin/bash
# markdown_backup.sh

BACKUP_DATE=$(date +%Y%m%d_%H%M%S)
SOURCE_DIR="$HOME/Documents/Markdown"
BACKUP_DIR="$HOME/Backups/Markdown"
CLOUD_DIR="$HOME/Library/CloudStorage/Dropbox/Backups"

# ローカルバックアップ
mkdir -p "$BACKUP_DIR"
tar -czf "$BACKUP_DIR/markdown_backup_$BACKUP_DATE.tar.gz" "$SOURCE_DIR"

# クラウドバックアップ
mkdir -p "$CLOUD_DIR"
cp "$BACKUP_DIR/markdown_backup_$BACKUP_DATE.tar.gz" "$CLOUD_DIR/"

# 古いバックアップの削除（30日以上古いもの）
find "$BACKUP_DIR" -name "*.tar.gz" -mtime +30 -delete

echo "バックアップ完了: $BACKUP_DATE"
```

### LaunchAgent での自動実行
```xml
<!-- ~/Library/LaunchAgents/com.user.markdown.backup.plist -->
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.user.markdown.backup</string>
    <key>ProgramArguments</key>
    <array>
        <string>/bin/bash</string>
        <string>/Users/username/scripts/markdown_backup.sh</string>
    </array>
    <key>StartInterval</key>
    <integer>3600</integer>
    <key>RunAtLoad</key>
    <true/>
</dict>
</plist>
```

## クラウドストレージとの連携

### iCloud Drive 設定
```bash
# iCloud Drive の状態確認
brctl status

# 同期状況の確認
brctl monitor

# ファイルをiCloudにアップロード強制
brctl upload ~/Documents/Markdown/
```

### Dropbox 同期の最適化
```markdown
Dropbox 設定のベストプラクティス:
1. 選択同期でMarkdownフォルダのみ同期
2. LANによる高速同期の有効化  
3. バンド幅制限の適切な設定
4. 競合ファイルの自動解決設定
5. バージョン履歴の最大活用

同期除外設定:
- .DS_Store ファイル
- .git フォルダ（バージョン管理と重複）
- node_modules フォルダ
- 大きな画像ファイル（必要に応じて）
```

### Google Drive 活用
```bash
# Google Drive ファイルストリーム使用時
# コマンドラインツールの使用例
gdrive list --query "name contains 'markdown'"
gdrive upload --parent folder_id ~/Documents/important.md
```

## バージョン管理システムとの連携

### Git による管理
```bash
# Git リポジトリの初期化
cd ~/Documents/Markdown
git init
git add README.md
git commit -m "初回コミット"

# 定期的なコミット自動化
#!/bin/bash
# auto_commit.sh
cd ~/Documents/Markdown
if [[ -n $(git status -s) ]]; then
    git add .
    git commit -m "自動バックアップ: $(date)"
    git push origin main
fi
```

### GitHub/GitLab での管理
```bash
# リモートリポジトリとの連携
git remote add origin https://github.com/username/markdown-docs.git
git branch -M main
git push -u origin main

# プライベートリポジトリの推奨設定
# - 機密情報を含む場合は必ずプライベート
# - SSH キー認証の使用
# - 2段階認証の有効化
```

### .gitignore の設定
```gitignore
# Markdown Lite 固有ファイル
.markdown-lite/
*.backup.*
.autosave/

# macOS システムファイル
.DS_Store
.AppleDouble
.LSOverride

# 一時ファイル
*.tmp
*.temp
*~

# 大きなメディアファイル（必要に応じて）
*.mp4
*.mov
*.avi
```

## 外部ストレージでのバックアップ

### 外付けHDD/SSD活用
```bash
# 外付けドライブへのバックアップ
EXTERNAL_DRIVE="/Volumes/BackupDrive"
SOURCE_DIR="$HOME/Documents/Markdown"

if [ -d "$EXTERNAL_DRIVE" ]; then
    echo "外付けドライブが検出されました"
    rsync -av --delete "$SOURCE_DIR/" "$EXTERNAL_DRIVE/Markdown_Backup/"
    echo "バックアップ完了"
else
    echo "外付けドライブが見つかりません"
fi
```

### NAS (Network Attached Storage) 活用
```bash
# NAS へのマウントとバックアップ
NAS_MOUNT="/Volumes/NAS_Backup"
mount_point="smb://nas-server/backup"

# NAS をマウント
mkdir -p "$NAS_MOUNT"
mount -t smbfs "$mount_point" "$NAS_MOUNT"

# バックアップ実行
if [ -d "$NAS_MOUNT" ]; then
    rsync -av ~/Documents/Markdown/ "$NAS_MOUNT/Markdown/"
fi
```

## バックアップの検証と復旧テスト

### バックアップ整合性の確認
```bash
#!/bin/bash
# backup_verify.sh

ORIGINAL_DIR="$HOME/Documents/Markdown"
BACKUP_DIR="$HOME/Backups/Markdown"

# チェックサムによる整合性確認
cd "$ORIGINAL_DIR"
find . -type f -name "*.md" -exec shasum {} \; > /tmp/original_checksums.txt

cd "$BACKUP_DIR"  
find . -type f -name "*.md" -exec shasum {} \; > /tmp/backup_checksums.txt

# 差分確認
if diff /tmp/original_checksums.txt /tmp/backup_checksums.txt > /dev/null; then
    echo "✅ バックアップの整合性確認完了"
else
    echo "⚠️ バックアップに差分があります"
    diff /tmp/original_checksums.txt /tmp/backup_checksums.txt
fi
```

### 復旧テストの実施
```bash
# テスト環境での復旧手順
TEST_DIR="$HOME/Desktop/recovery_test"
mkdir -p "$TEST_DIR"

# バックアップからの復旧
cp -R ~/Backups/Markdown/latest/* "$TEST_DIR/"

# ファイルの動作確認
find "$TEST_DIR" -name "*.md" | while read file; do
    if [ ! -r "$file" ]; then
        echo "読み取りエラー: $file"
    fi
done

echo "復旧テスト完了"
```

### 監視とアラート設定
```bash
# バックアップ失敗時の通知
#!/bin/bash
# backup_monitor.sh

BACKUP_LOG="/var/log/markdown_backup.log"
LAST_BACKUP=$(tail -n 1 "$BACKUP_LOG" | grep "バックアップ完了")

if [ -z "$LAST_BACKUP" ]; then
    # 通知の送信
    osascript -e 'display notification "バックアップが失敗しています" with title "バックアップアラート"'
    
    # メール通知（設定済みの場合）
    echo "バックアップが失敗しました" | mail -s "バックアップアラート" user@example.com
fi
```

## 災害復旧計画

### 復旧優先順位の設定
```markdown
Priority 1: 最重要ドキュメント
- 進行中のプロジェクト
- 公開予定の文書
- 締切の近いドキュメント

Priority 2: 重要なドキュメント  
- 完成済みの重要文書
- リファレンス資料
- テンプレート集

Priority 3: アーカイブ
- 過去のプロジェクト
- 参考資料
- 学習メモ
```

### 復旧手順書の作成
```markdown
# 災害復旧手順書

## Phase 1: 緊急対応（目標：2時間以内）
1. 新しい Mac の環境構築
2. Markdown Lite のインストール
3. Priority 1 ドキュメントの復旧
4. 基本的な作業環境の確保

## Phase 2: 通常業務復旧（目標：24時間以内）
1. Priority 2 ドキュメントの復旧
2. 設定・テンプレートの復元
3. 自動バックアップの再設定
4. 外部連携の再構築

## Phase 3: 完全復旧（目標：1週間以内）
1. Priority 3 ドキュメントの復旧
2. 履歴・ログの復元
3. 監視体制の再構築
4. 改善点の検討・実装
```

## セキュリティ考慮事項

### 暗号化バックアップ
```bash
# GPG による暗号化バックアップ
tar -czf - ~/Documents/Markdown | gpg --symmetric --cipher-algo AES256 --output backup_$(date +%Y%m%d).tar.gz.gpg

# 復号化
gpg --decrypt backup_20250113.tar.gz.gpg | tar -xzf -
```

### 機密文書の取り扱い
```markdown
機密レベル別対策:
1. 公開文書
   - 通常のクラウド同期OK
   - GitHub パブリックリポジトリ可

2. 内部文書  
   - 暗号化クラウドストレージ
   - プライベートリポジトリのみ

3. 機密文書
   - ローカル+外付けドライブのみ
   - 暗号化必須
   - アクセス制御の実装
```

### アクセス制御
```bash
# ファイル権限の設定
chmod 600 sensitive_documents/*.md  # 所有者のみ読み書き可能
chmod 700 ~/Documents/Confidential  # フォルダへの所有者のみアクセス

# 暗号化フォルダの作成（FileVault以外）
hdiutil create -encryption AES-256 -size 1g -volname "Secure" -fs HFS+ encrypted_backup.dmg
```

## モニタリングとメンテナンス

### バックアップ状況の可視化
```python
#!/usr/bin/env python3
# backup_report.py

import os
import datetime
import json

def generate_backup_report():
    backup_dir = os.path.expanduser("~/Backups/Markdown")
    report = {
        "timestamp": datetime.datetime.now().isoformat(),
        "backups": []
    }
    
    for file in os.listdir(backup_dir):
        if file.endswith('.tar.gz'):
            path = os.path.join(backup_dir, file)
            stat = os.stat(path)
            report["backups"].append({
                "filename": file,
                "size": stat.st_size,
                "created": datetime.datetime.fromtimestamp(stat.st_ctime).isoformat()
            })
    
    with open(os.path.expanduser("~/Desktop/backup_report.json"), 'w') as f:
        json.dump(report, f, indent=2)

if __name__ == "__main__":
    generate_backup_report()
```

### 定期メンテナンス
```markdown
日次チェック:
□ 自動バックアップの実行確認
□ Markdown Lite のバックアップ設定確認
□ クラウド同期状況の確認

週次チェック:
□ バックアップファイルの整合性確認
□ ストレージ容量の確認
□ 古いバックアップファイルの整理

月次チェック:
□ 復旧テストの実施
□ バックアップ戦略の見直し
□ セキュリティ設定の確認
□ 災害復旧手順書の更新
```

---

**関連記事**
- [自動保存機能の活用](../features-guide/auto-save.md)
- [ファイル管理機能](../features-guide/file-management.md)
- [よくある問題と解決方法](../troubleshooting/common-issues.md)