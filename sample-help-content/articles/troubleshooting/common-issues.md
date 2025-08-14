# よくある問題と解決方法

Markdown Lite 使用中に遭遇する可能性のある問題と、その解決方法をまとめています。

## アプリケーションの起動・終了に関する問題

### アプリが起動しない

**症状**
- ダブルクリックしても反応がない
- 起動途中でクラッシュする
- エラーメッセージが表示される

**解決方法**

**Step 1: 基本的な確認**
```markdown
1. システム要件の確認
   - macOS 10.15 (Catalina) 以降
   - 4GB以上のRAM
   - 200MB以上の空き容量

2. アプリケーションの整合性確認
   - アプリを一度削除して再インストール
   - 公式サイトから最新版をダウンロード
```

**Step 2: 権限とセキュリティ設定**
```markdown
1. システム環境設定 → セキュリティとプライバシー
2. 「一般」タブを選択
3. 「このまま開く」ボタンをクリック
4. または右クリック → 「開く」で強制実行
```

**Step 3: ターミナルからの起動確認**
```bash
# ターミナルを開いて実行
/Applications/Markdown\ Lite.app/Contents/MacOS/Markdown\ Lite

# エラーメッセージを確認
```

### 「開発元が未確認」エラー

**症状**
```
"Markdown Lite.app" は、開発元が未確認のため開けません。
```

**解決方法**
1. アプリアイコンを右クリック
2. 「開く」を選択
3. 警告ダイアログで「開く」をクリック
4. 今後は通常通り起動可能

**代替方法（ターミナル使用）**
```bash
# Gatekeeper の設定を一時的に変更
sudo spctl --master-disable

# アプリ起動後、設定を戻す
sudo spctl --master-enable
```

### アプリが予期せず終了する

**症状**
- 作業中に突然アプリが閉じる
- 特定の操作で必ずクラッシュする
- 大きなファイルを開くとクラッシュ

**診断方法**
```markdown
1. コンソールアプリでクラッシュログを確認
   Applications → Utilities → Console

2. クラッシュレポートの場所
   ~/Library/Logs/DiagnosticReports/

3. メモリ使用量の確認
   Activity Monitor でメモリ使用状況をチェック
```

**解決方法**
```markdown
1. アプリの再起動
2. macOS の再起動
3. 大きなファイルを分割
4. 他のアプリケーションを終了してメモリを解放
5. アプリの再インストール
```

## ファイル関連の問題

### ファイルが開けない

**症状**
- ファイルをダブルクリックしても開かない
- 「ファイルが見つかりません」エラー
- 文字化けして表示される

**原因別解決方法**

**ファイル拡張子の問題**
```markdown
対応拡張子: .md, .markdown, .mdown, .mkd, .txt

解決策:
1. ファイル名を確認し、正しい拡張子に変更
2. 例: document.txt → document.md
```

**ファイルパスの問題**
```markdown
問題: 日本語やスペースを含むパス
解決策:
1. フォルダ名・ファイル名を英数字に変更
2. スペースをハイフン（-）に置換
例: "My Documents/文書.md" → "Documents/document.md"
```

**エンコーディングの問題**
```markdown
症状: 文字化けや一部文字が表示されない
解決策:
1. ファイルをUTF-8で保存し直す
2. 他のテキストエディタで開き、UTF-8で保存
3. 文字エンコーディングを確認
```

### ファイルが保存されない

**症状**
- 編集内容が保存されない
- 「保存できません」エラー
- ファイルが読み取り専用状態

**解決方法**

**権限の確認**
```bash
# ファイルの権限確認
ls -la /path/to/file.md

# 権限の変更（書き込み権限を追加）
chmod 644 /path/to/file.md

# フォルダの権限確認
ls -la /path/to/folder/
```

**ディスク容量の確認**
```markdown
1. Apple メニュー → このマックについて → ストレージ
2. 十分な空き容量があることを確認
3. 不要なファイルを削除してスペースを確保
```

**自動保存機能の確認**
```markdown
設定確認:
1. Markdown Lite → 環境設定
2. エディター → 自動保存設定
3. 自動保存間隔: 1秒（推奨）
```

### ファイルが消失した

**症状**
- 保存したはずのファイルが見つからない
- ファイルが空になっている
- 古いバージョンに戻っている

**復旧方法**

**Step 1: 基本的な場所を確認**
```markdown
確認場所:
1. 最近使用したファイル（ファイルメニュー）
2. ゴミ箱
3. デスクトップ
4. ダウンロードフォルダ
5. 書類フォルダ
```

**Step 2: Spotlight検索**
```markdown
1. Cmd + Space でSpotlight起動
2. ファイル名の一部を入力
3. 作成日時で絞り込み
4. ファイルタイプで絞り込み（.md）
```

**Step 3: 自動バックアップの確認**
```markdown
Time Machine使用時:
1. Time Machine を起動
2. 該当フォルダに移動
3. 過去のバックアップから復元

iCloud Drive使用時:
1. iCloud.com にログイン
2. ファイル → 最近削除した項目
3. 復元可能なファイルを選択
```

**Step 4: 一時ファイルの確認**
```bash
# 一時ファイルの場所を確認
ls -la ~/Library/Application\ Support/Markdown\ Lite/temp/
ls -la /tmp/
```

## 表示・レンダリングの問題

### プレビューが表示されない

**症状**
- プレビューエリアが真っ白
- 「プレビューを読み込めません」エラー
- プレビューが更新されない

**解決方法**

**Step 1: プレビューの再読み込み**
```markdown
1. プレビューエリアで右クリック → 「再読み込み」
2. または Cmd + R
3. プレビューを一度閉じて再表示
```

**Step 2: Markdown記法の確認**
```markdown
よくあるエラー:
1. 閉じタグの不一致
   ❌ **太字*
   ✅ **太字**

2. コードブロックの不完全な記述
   ❌ ```javascript
   ✅ ```javascript
      code here
      ```

3. 無効なHTML記述
```

**Step 3: アプリケーション設定の確認**
```markdown
1. 表示 → プレビュー設定
2. プレビュー形式の選択
3. カスタムCSSの確認
4. JavaScript設定の確認
```

### フォントや文字サイズがおかしい

**症状**
- 文字が小さすぎる/大きすぎる
- フォントが正しく表示されない
- 日本語フォントが適用されない

**解決方法**

**エディター設定の調整**
```markdown
1. Markdown Lite → 環境設定 → エディター
2. フォント設定:
   - フォントファミリー: SF Mono, Monaco, Menlo
   - サイズ: 12-16px（推奨）
   - 行間: 1.4-1.6（推奨）
```

**プレビュー設定の調整**
```markdown
1. 表示 → プレビュー設定
2. スタイルテーマの変更
3. カスタムCSS適用:
```

```css
body {
    font-family: 'Helvetica Neue', 'Hiragino Sans', 'ヒラギノ角ゴ ProN W3', sans-serif;
    font-size: 16px;
    line-height: 1.6;
}
```

## パフォーマンスの問題

### 動作が重い・遅い

**症状**
- 文字入力に遅延がある
- プレビュー更新が遅い
- ファイル切り替えに時間がかかる
- アプリ全体の反応が悪い

**原因と対策**

**大きなファイルが原因の場合**
```markdown
対策:
1. ファイルサイズの確認（推奨: 1MB未満）
2. 長大なファイルを章ごとに分割
3. 不要な画像や添付ファイルを削除
4. プレビューの一時無効化
```

**メモリ不足が原因の場合**
```markdown
対策:
1. Activity Monitor でメモリ使用量確認
2. 他のアプリケーションを終了
3. 開いているファイル数を制限
4. Mac の再起動
```

**システム設定の最適化**
```markdown
1. ストレージの確認と整理
   - 不要ファイルの削除
   - キャッシュのクリア

2. アクセシビリティ設定の確認
   - システム環境設定 → アクセシビリティ
   - 不要な支援技術を無効化

3. 起動項目の整理
   - システム環境設定 → ユーザとグループ → 起動項目
```

### プレビューの更新が遅い

**症状**
- 入力してから数秒後にプレビューが更新される
- 更新が断続的に停止する
- CPU使用率が高い

**最適化方法**

**自動更新設定の調整**
```json
{
  "preview": {
    "updateDelay": 1000,
    "throttleUpdate": true,
    "maxUpdateFrequency": 500
  }
}
```

**プレビュー機能の制限**
```markdown
一時的な対策:
1. 大きなファイル編集時はプレビューを無効化
2. 完了後に一度だけプレビューを表示
3. 分割表示から単一表示に変更
```

## ネットワーク・同期の問題

### クラウド同期が失敗する

**症状**
- iCloud Driveで同期されない
- Dropboxの同期エラー
- ファイルの競合が発生

**iCloud Driveの問題**
```markdown
対策:
1. インターネット接続の確認
2. iCloud設定の確認
   - システム環境設定 → Apple ID → iCloud
   - iCloud Driveが有効になっているか確認

3. 容量の確認
   - iCloudストレージの使用量をチェック
   - 必要に応じて容量追加

4. 同期の強制実行
   - ファイルを右クリック → 「今すぐダウンロード」
```

**Dropbox同期の問題**
```markdown
対策:
1. Dropboxアプリの状態確認
2. 同期除外設定の確認
3. 帯域幅制限の確認
4. アプリの再起動

競合ファイルの解決:
- "file (conflicted copy).md" ファイルを手動マージ
- 最新版を特定して不要なコピーを削除
```

## 緊急時の対処法

### データの緊急復旧

**完全バックアップからの復元**
```bash
# Time Machineからの復元
sudo tmutil restore /path/to/backup /path/to/destination

# 手動バックアップからの復元
cp -R /backup/location/Markdown/ ~/Documents/
```

**部分的なファイル復旧**
```markdown
1. 自動保存ファイルの確認
   ~/Library/Application Support/Markdown Lite/autosave/

2. 一時ファイルの確認
   /tmp/markdown-lite-*

3. 各クラウドサービスのバージョン履歴確認
```

### アプリケーションのリセット

**設定の完全リセット**
```bash
# 設定ファイルの削除
rm -rf ~/Library/Preferences/com.cocoroai.markdown-lite.plist
rm -rf ~/Library/Application\ Support/Markdown\ Lite/

# アプリの再起動で初期設定に戻る
```

**キャッシュのクリア**
```bash
# キャッシュファイルの削除
rm -rf ~/Library/Caches/com.cocoroai.markdown-lite/

# 一時ファイルの削除
find /tmp -name "*markdown-lite*" -delete
```

## サポートリソース

### ログファイルの場所
```bash
# アプリケーションログ
~/Library/Logs/Markdown Lite/

# システムログ
tail -f /var/log/system.log | grep "Markdown Lite"

# クラッシュレポート
~/Library/Logs/DiagnosticReports/Markdown\ Lite*
```

### 問題報告時に必要な情報
```markdown
報告時に含めるべき情報:
1. macOSバージョン
2. Markdown Liteバージョン
3. 問題の詳細な症状
4. 再現手順
5. エラーメッセージ（あれば）
6. 関連するログファイル
```

### さらなるサポート
- [GitHub Issues](https://github.com/TMrev-z/markdown-lite/issues)
- [FAQ](../faq/basic-questions.md)
- [パフォーマンス最適化](performance-optimization.md)

---

**関連記事**
- [インストールガイド](../getting-started/install-guide.md)
- [基本的な使い方](../getting-started/basic-usage.md)
- [パフォーマンス最適化](performance-optimization.md)