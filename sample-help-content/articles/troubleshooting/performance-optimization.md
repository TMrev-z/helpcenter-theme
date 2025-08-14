# パフォーマンス最適化ガイド

Markdown Lite の動作を最適化し、快適な編集環境を実現する方法を詳しく解説します。

## パフォーマンス診断

### システム要件の確認
```bash
# システム情報の確認
system_profiler SPHardwareDataType | grep "Memory"
system_profiler SPHardwareDataType | grep "Processor"

# 利用可能ストレージの確認
df -h

# メモリ使用状況
vm_stat
```

### アプリケーション診断
```markdown
パフォーマンス指標の確認:
1. Activity Monitor でメモリ使用量をチェック
2. CPU使用率の監視
3. 起動時間の測定
4. ファイル読み込み時間の確認
5. プレビュー更新の応答性
```

### 問題の特定
```markdown
よくあるパフォーマンス問題:
⚠️ 起動時間が10秒以上
⚠️ メモリ使用量が1GB以上  
⚠️ CPU使用率が常時50%以上
⚠️ プレビュー更新に3秒以上
⚠️ ファイル保存時のフリーズ
⚠️ タイピング入力の遅延
```

## メモリ使用量の最適化

### 基本設定の調整
```json
{
  "memory": {
    "maxCacheSize": "200MB",
    "previewBufferLimit": 5,
    "recentFilesLimit": 10,
    "undoHistoryLimit": 100,
    "enableGarbageCollection": true,
    "garbageCollectionInterval": 300000
  }
}
```

### ファイル管理の最適化
```markdown
メモリ効率化のコツ:
1. 同時に開くファイル数を制限（推奨：5-10ファイル）
2. 大きなファイルは分割して編集
3. 不要なファイルをこまめに閉じる
4. 画像の多いドキュメントは別フォルダに整理
5. 定期的にアプリを再起動

具体的な手順:
- ファイル → 使用していないタブを閉じる
- 週に1度程度のアプリ再起動
- Activity Monitor での定期監視
```

### キャッシュの管理
```bash
# キャッシュのクリア
rm -rf ~/Library/Caches/com.cocoroai.markdown-lite/

# 一時ファイルの削除
find /tmp -name "*markdown-lite*" -delete

# プレビューキャッシュのクリア
rm -rf ~/Library/Application\ Support/Markdown\ Lite/preview-cache/
```

## CPU使用率の最適化

### レンダリング設定の調整
```json
{
  "rendering": {
    "throttlePreview": true,
    "updateDelay": 1000,
    "enableSyntaxHighlight": true,
    "simplifiedHighlight": false,
    "maxConcurrentRenders": 1,
    "enableHardwareAcceleration": true
  }
}
```

### プレビュー最適化
```markdown
CPU負荷軽減策:
1. プレビュー更新間隔を延長（1-3秒）
2. 長い文書ではプレビューを一時無効化
3. シンタックスハイライトの調整
4. 数式レンダリングの制限
5. 大きな画像の読み込み制限

設定方法:
環境設定 → プレビュー → 詳細設定
各項目をパフォーマンス重視で調整
```

### バックグラウンド処理の最適化
```json
{
  "background": {
    "autoSaveThrottle": 2000,
    "fileWatcher": false,
    "spellCheckDelay": 1000,
    "wordCountUpdate": 5000,
    "backupFrequency": 600000
  }
}
```

## 起動時間の短縮

### 起動設定の最適化
```markdown
起動時間短縮設定:
1. 前回のセッションを復元しない
2. プラグインの遅延読み込み
3. フォント読み込みの高速化
4. ウィンドウ位置の記憶を無効化
5. 最近使用したファイルの履歴制限

設定箇所:
環境設定 → 一般 → 起動時の動作
「前回のファイルを開く」をオフ
```

### システム最適化
```bash
# 不要なログイン項目を削除
osascript -e 'tell application "System Preferences" to activate'
osascript -e 'tell application "System Preferences" to reveal pane "Users & Groups"'

# Spotlight のインデックス再構築（必要に応じて）
sudo mdutil -E /

# システムキャッシュのクリア
sudo purge
```

### アプリケーション最適化
```markdown
アプリ固有の最適化:
1. 定期的な設定ファイルの整理
2. 不要なプラグインの無効化
3. テーマファイルの軽量化
4. カスタムCSSの最適化
5. ショートカット設定の簡素化
```

## 大きなファイルの処理

### 大容量ファイル対応設定
```json
{
  "largeFiles": {
    "threshold": "10MB",
    "enableChunking": true,
    "chunkSize": 1000,
    "disableAutoPreview": true,
    "simplifiedEditing": true,
    "limitUndoHistory": true,
    "maxUndoSteps": 50
  }
}
```

### 編集戦略
```markdown
大きなファイルの効率的な編集:
1. ファイル分割戦略の採用
   - 章ごとにファイルを分割
   - 目次ファイルでリンク管理
   - 必要時にマージ

2. 部分編集モード
   - 特定セクションのみを開く
   - プレビューの無効化
   - 自動保存間隔の延長

3. メモリ監視
   - Activity Monitor での監視
   - メモリ使用量が500MB超過時は分割を検討
```

### 画像最適化
```markdown
画像ファイルの最適化:
1. 適切なファイル形式の選択
   - スクリーンショット: PNG
   - 写真: JPEG（品質80-90%）
   - アイコン・図形: SVG
   - アニメーション: GIF（最小限）

2. サイズの最適化
   - 幅は1920px以下に制限
   - ファイルサイズは1MB以下を目標
   - 圧縮ツールの活用

3. 読み込み最適化
   - 遅延読み込みの活用
   - プログレッシブJPEGの使用
```

## ネットワークとI/O最適化

### ファイルI/O最適化
```bash
# SSD の最適化確認
system_profiler SPSerialATADataType | grep "Solid State"

# ディスク使用量の確認
du -sh ~/Documents/

# 断片化の確認（HDD の場合）
sudo diskutil verifyDisk disk0
```

### クラウド同期の最適化
```markdown
同期パフォーマンス向上:
1. 同期対象ファイルの選別
   - .md ファイルのみ同期
   - 大きな画像は除外
   - 一時ファイルの除外設定

2. 同期タイミングの調整
   - 編集中は同期を一時停止
   - 作業完了後にまとめて同期
   - 帯域制限の適切な設定

3. 競合回避策
   - 同時編集の回避
   - ファイルロック機能の活用
   - バージョン管理システムとの併用
```

## モニタリングと診断

### パフォーマンス監視ツール
```bash
# CPU 使用率の継続監視
top -pid $(pgrep "Markdown Lite") -l 0

# メモリ使用量の詳細表示
heap "Markdown Lite" -guarded

# ディスクI/O監視
sudo iotop -P $(pgrep "Markdown Lite")

# ネットワーク使用量監視
lsof -p $(pgrep "Markdown Lite") | grep IPv
```

### ベンチマーク測定
```javascript
// 起動時間測定用 JavaScript
const startTime = Date.now();

window.addEventListener('load', () => {
  const loadTime = Date.now() - startTime;
  console.log(`起動時間: ${loadTime}ms`);
});

// プレビュー更新時間測定
let updateStart;
editor.on('change', () => {
  updateStart = Date.now();
});

preview.on('updated', () => {
  if (updateStart) {
    const updateTime = Date.now() - updateStart;
    console.log(`プレビュー更新時間: ${updateTime}ms`);
    updateStart = null;
  }
});
```

### 問題の分析
```markdown
パフォーマンス問題の分析手順:
1. ベースライン測定
   - 空のファイルでの動作確認
   - システムリソースの確認

2. 段階的な負荷テスト
   - ファイルサイズを段階的に増加
   - 同時オープンファイル数を調整

3. ボトルネック特定
   - CPU/メモリ/ディスクI/Oの特定
   - 特定機能の無効化テスト

4. 改善策の実装
   - 設定調整
   - 使用方法の変更
   - ハードウェアのアップグレード検討
```

## 環境別最適化

### 低スペックMac向け設定
```json
{
  "lowSpecOptimization": {
    "disableAnimations": true,
    "limitPreviewFrameRate": 30,
    "reducedFeatureSet": true,
    "minimalUI": true,
    "batteryOptimization": true
  }
}
```

### 高性能Mac向け設定
```json
{
  "highPerformanceOptimization": {
    "enableAllFeatures": true,
    "maxPreviewFrameRate": 120,
    "enhancedRendering": true,
    "parallelProcessing": true,
    "advancedCaching": true
  }
}
```

### バッテリー使用時の最適化
```markdown
バッテリー節約設定:
1. プロセッサーの動的制御
2. ディスプレイ明度の自動調整
3. バックグラウンド処理の制限
4. 無線通信の最小化
5. ハードウェアアクセラレーションの調整

設定方法:
システム環境設定 → バッテリー
「バッテリー電源使用時」の最適化
```

## トラブルシューティング

### パフォーマンス問題の段階的解決
```markdown
Level 1: 基本対策
- アプリの再起動
- 不要なファイルを閉じる
- メモリ使用量の確認

Level 2: 設定調整
- プレビュー設定の最適化
- 自動保存間隔の調整
- キャッシュのクリア

Level 3: システム対策
- macOS の再起動
- ディスク容量の確保
- 他のアプリの終了

Level 4: 根本対策
- 設定のリセット
- アプリの再インストール
- ハードウェアのアップグレード検討
```

### 緊急時の対処
```bash
# 強制終了
killall "Markdown Lite"

# 設定の緊急リセット
mv ~/Library/Preferences/com.cocoroai.markdown-lite.plist ~/Desktop/backup.plist

# キャッシュの完全削除
sudo rm -rf ~/Library/Caches/com.cocoroai.markdown-lite/
sudo rm -rf /tmp/markdown-lite-*

# アプリの再起動
open -a "Markdown Lite"
```

---

**関連記事**
- [よくある問題と解決方法](common-issues.md)
- [カスタマイズ設定](../advanced-usage/customization.md)
- [ファイル管理機能](../features-guide/file-management.md)