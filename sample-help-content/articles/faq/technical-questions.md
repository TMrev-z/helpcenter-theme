# よくある質問 - 技術編

Markdown Lite の技術的な内容について、よく寄せられる質問と回答をまとめています。

## アーキテクチャと技術仕様

### Q: Markdown Lite はどの技術で作られていますか？
**A:** ElectronとJavaScriptを基盤としています。

```markdown
技術スタック:
- フレームワーク: Electron 31.7.7
- 言語: JavaScript (ES Modules)
- Markdownパーサー: Marked.js
- エディター: CodeMirror
- ビルドツール: electron-builder
- パッケージマネージャー: npm
```

### Q: Universal Binary とは何ですか？
**A:** Intel と Apple Silicon の両方で最適化されたバイナリです。

```markdown
Universal Binary の利点:
✅ Apple M1/M2/M3 で最高性能
✅ Intel Mac でも最適化済み
✅ Rosetta 2 が不要
✅ 単一のアプリファイル

技術的詳細:
- arm64 と x86_64 の両アーキテクチャを含む
- アーキテクチャ自動判定で最適コードを実行
- ファイルサイズは約2倍だが利便性が向上
```

### Q: レンダリングエンジンは何を使用していますか？
**A:** Chromium エンジンを使用しています。

```markdown
Chromium エンジンの特徴:
- 最新のWeb標準に対応
- 高速な HTML/CSS レンダリング
- JavaScript 実行環境
- セキュリティ機能

対応する仕様:
- HTML5 完全対応
- CSS3 完全対応  
- ES2022 JavaScript
- WebAssembly
- Canvas/SVG
```

## データ処理と互換性

### Q: Markdown の方言はどれに対応していますか？
**A:** CommonMark ベースで GitHub Flavored Markdown に対応しています。

```markdown
対応する記法:
✅ CommonMark (標準)
✅ GitHub Flavored Markdown
✅ テーブル記法
✅ タスクリスト
✅ 取り消し線
✅ コードブロックのシンタックスハイライト

拡張機能:
✅ 数式レンダリング (MathJax)
✅ Mermaid 図表
✅ 脚注記法
✅ 定義リスト
```

### Q: 文字エンコーディングは何に対応していますか？
**A:** UTF-8 を主として複数のエンコーディングに対応しています。

```markdown
対応エンコーディング:
✅ UTF-8 (推奨・デフォルト)
✅ UTF-16
✅ Shift_JIS (日本語)
✅ EUC-JP (日本語)
✅ ISO-8859-1 (Latin-1)
✅ ASCII

自動検出機能:
- BOM (Byte Order Mark) による判定
- 文字パターンによる推定
- ユーザーによる手動指定
```

### Q: 大きなファイルのパフォーマンスはどうですか？
**A:** 10MB程度まで快適、それ以上は最適化機能が動作します。

```markdown
ファイルサイズ別パフォーマンス:
- 1MB未満: リアルタイム処理
- 1-10MB: 若干の遅延、快適
- 10-50MB: 最適化機能有効
- 50MB以上: 制限モード

最適化技術:
- チャンク単位での処理
- 仮想スクロール
- レンダリングの間引き
- メモリ使用量の制限
```

## セキュリティとプライバシー

### Q: ユーザーデータはどのように保護されますか？
**A:** ローカル処理とエンドツーエンド暗号化で保護しています。

```markdown
セキュリティ対策:
🔒 完全ローカル処理 (外部送信なし)
🔒 サンドボックス実行
🔒 Gatekeeper 対応
🔒 コード署名済み
🔒 Notarization (公証)

プライバシー保護:
✅ テレメトリー無し
✅ アナリティクス無し  
✅ 広告表示無し
✅ クッキー不使用
✅ ネットワーク通信最小限
```

### Q: 機密文書を扱っても安全ですか？
**A:** はい、厳重なセキュリティ対策を実装しています。

```markdown
機密情報保護:
- メモリ上のデータ暗号化
- 一時ファイルの自動削除
- プロセス分離
- 他アプリからのアクセス制限

追加の対策:
- FileVault 暗号化の推奨
- 定期的な機密データの完全削除
- アクセス権限の最小化
- 監査ログの記録
```

### Q: ネットワーク通信は何を行いますか？
**A:** 最小限の通信のみ実行します。

```markdown
ネットワーク使用場面:
1. アップデート確認 (任意)
2. ライセンス確認 (なし - 無料)
3. 拡張機能ダウンロード (任意)
4. 外部リンクのアクセス (ユーザー操作時のみ)

通信しないデータ:
❌ ドキュメント内容
❌ ファイルパス・名前
❌ 個人設定
❌ 使用統計
❌ エラー情報（自動送信なし）
```

## 拡張性とカスタマイズ

### Q: プラグインシステムはありますか？
**A:** 基本的なプラグイン機能と JavaScript 拡張に対応しています。

```javascript
// プラグイン例
class MarkdownLitePlugin {
  constructor() {
    this.name = 'Sample Plugin';
    this.version = '1.0.0';
  }
  
  onLoad() {
    // プラグイン読み込み時の処理
    this.registerCommand('insertDate', this.insertCurrentDate);
    this.registerShortcut('Cmd+D', 'insertDate');
  }
  
  insertCurrentDate() {
    const now = new Date();
    const dateStr = now.toISOString().split('T')[0];
    editor.insertText(dateStr);
  }
  
  onUnload() {
    // プラグイン無効化時のクリーンアップ
  }
}
```

### Q: API は公開されていますか？
**A:** 限定的な内部 API を提供しています。

```javascript
// 利用可能な API 例
const MarkdownLiteAPI = {
  // エディター操作
  editor: {
    getText: () => string,
    setText: (text: string) => void,
    getSelection: () => object,
    insertText: (text: string) => void,
    replaceSelection: (text: string) => void
  },
  
  // ファイル操作
  file: {
    save: () => Promise<boolean>,
    open: (path: string) => Promise<boolean>,
    create: (path: string) => Promise<boolean>
  },
  
  // 設定管理
  settings: {
    get: (key: string) => any,
    set: (key: string, value: any) => void
  },
  
  // イベント処理
  events: {
    on: (event: string, callback: function) => void,
    emit: (event: string, data: object) => void
  }
};
```

### Q: テーマの作成は可能ですか？
**A:** CSS とJSON による完全なテーマカスタマイズが可能です。

```json
{
  "theme": {
    "name": "My Custom Theme",
    "version": "1.0.0",
    "author": "Your Name",
    "description": "説明文",
    "colors": {
      "background": "#ffffff",
      "foreground": "#333333",
      "accent": "#007acc",
      "border": "#e1e1e1"
    },
    "fonts": {
      "editor": "SF Mono, Monaco, Menlo",
      "preview": "system-ui, sans-serif",
      "size": {
        "small": 12,
        "medium": 14,
        "large": 16
      }
    },
    "spacing": {
      "tight": 4,
      "normal": 8,
      "loose": 16
    }
  }
}
```

## パフォーマンスと最適化

### Q: メモリ使用量を抑える方法はありますか？
**A:** 複数の最適化設定が利用できます。

```json
{
  "performance": {
    "memoryOptimization": {
      "enabled": true,
      "maxCacheSize": "100MB",
      "garbageCollectionFrequency": 30000,
      "previewBufferSize": 10
    },
    "rendering": {
      "throttlePreview": true,
      "updateDelay": 500,
      "maxConcurrentRenders": 2
    }
  }
}
```

### Q: CPU使用率が高い場合の対処法は？
**A:** 複数の設定調整で改善できます。

```markdown
CPU使用率軽減策:
1. プレビュー更新間隔の延長
2. シンタックスハイライトの簡略化  
3. 自動保存頻度の調整
4. ファイル監視の無効化
5. アニメーション効果の削減

設定方法:
環境設定 → 高度 → パフォーマンス
各項目を用途に応じて調整
```

### Q: 起動時間を短縮できますか？
**A:** 起動最適化設定で改善できます。

```markdown
起動時間短縮方法:
1. 前回のファイルを復元しない
2. プラグインの読み込みを延期
3. 最近使用したファイル履歴を制限
4. フォントキャッシュの有効化
5. ウィンドウ状態の簡素化

設定箇所:
環境設定 → 一般 → 起動時の動作
```

## データ移行と互換性

### Q: 他のMarkdownエディターからデータ移行できますか？
**A:** 大部分のエディターから移行可能です。

```markdown
対応エディター:
✅ Typora - 直接ファイル読み込み
✅ Bear - エクスポート経由
✅ Obsidian - フォルダ構造維持  
✅ Notion - Markdown エクスポート
✅ Ulysses - テキスト形式で
✅ MacDown - 完全互換

移行手順:
1. 元エディターからMarkdown形式でエクスポート
2. Markdown Lite でフォルダを開く
3. 必要に応じて画像パスを調整
4. 設定をカスタマイズ
```

### Q: 設定ファイルはエクスポート可能ですか？
**A:** はい、完全なエクスポート・インポート機能があります。

```bash
# 設定エクスポート
markdown-lite --export-settings ~/Desktop/settings.json

# 設定インポート  
markdown-lite --import-settings ~/Desktop/settings.json

# 手動での設定ファイル位置
~/Library/Preferences/com.cocoroai.markdown-lite.plist
~/Library/Application Support/Markdown Lite/
```

## 将来の開発計画

### Q: 今後予定されている機能はありますか？
**A:** ロードマップを公開しています。

```markdown
近期予定 (v0.5):
- タブ機能の改善
- 検索・置換の高度化
- プラグインシステムの拡張
- パフォーマンス最適化

中期予定 (v1.0):
- 多言語UI対応
- 協作編集機能  
- 高度なエクスポート
- 統計・分析機能

長期計画:
- モバイル版の検討
- クラウド統合
- AI機能の組み込み
```

### Q: 機能リクエストはどこで行えますか？
**A:** GitHub Issues で受け付けています。

```markdown
リクエスト方法:
1. GitHub リポジトリにアクセス
2. Issues タブを選択
3. 「New Issue」をクリック
4. Feature Request テンプレートを使用
5. 詳細を記載して投稿

良いリクエストの条件:
- 具体的な使用場面の説明
- 期待する動作の明確化
- 類似機能との比較
- 技術的制約の理解
```

---

**関連記事**
- [基本的な質問](basic-questions.md)
- [よくある問題と解決方法](../troubleshooting/common-issues.md)
- [カスタマイズ設定](../advanced-usage/customization.md)