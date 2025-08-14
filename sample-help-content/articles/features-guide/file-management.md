# ファイル管理機能

Markdown Lite の強力なファイル管理機能を使って、プロジェクトやドキュメントを効率的に整理する方法を説明します。

## ファイル管理の基本

### サイドバーの構成
Markdown Lite のサイドバーは以下の要素で構成されています：

- **ワークスペースエリア**: 現在開いているフォルダの表示
- **ファイルツリー**: 階層構造でのファイル・フォルダ表示
- **クイックアクセス**: よく使用するファイルへのショートカット

### 対応ファイル形式
```
サポートファイル:
├── .md      (Markdown)
├── .markdown
├── .mdown
├── .mkd
├── .txt     (プレーンテキスト)
└── .rtf     (リッチテキスト、読み取りのみ)
```

## フォルダの操作

### ワークスペースを開く
複数の方法でフォルダをワークスペースとして開けます：

**方法1: メニューから**
1. ファイル → フォルダを開く
2. 対象フォルダを選択
3. 「開く」をクリック

**方法2: ドラッグ&ドロップ**
1. Finderからフォルダをドラッグ
2. Markdown Lite のウィンドウにドロップ
3. 自動的にワークスペースに設定

**方法3: ショートカット**
- `Cmd + Shift + O`: フォルダ選択ダイアログを表示

### フォルダ階層の管理
```
プロジェクト/
├── docs/
│   ├── user-guide/
│   │   ├── installation.md
│   │   ├── getting-started.md
│   │   └── advanced-features.md
│   └── api/
│       ├── authentication.md
│       └── endpoints.md
├── images/
│   ├── screenshots/
│   └── diagrams/
└── README.md
```

### 新規フォルダの作成
1. **右クリックメニュー**: サイドバーの空白エリアを右クリック → 「新規フォルダ」
2. **ショートカット**: `Cmd + Shift + N`
3. **メニューから**: ファイル → 新規フォルダ

## ファイルの基本操作

### ファイルの作成
```markdown
新規ファイルの作成方法:
1. サイドバーを右クリック → 「新規ファイル」
2. Cmd + N でクイック作成
3. ファイル → 新規ファイル

ファイル名のベストプラクティス:
- 小文字とハイフンを使用: `user-guide.md`
- スペースを避ける: `user guide.md` ❌ → `user-guide.md` ✅
- 意味のある名前を付ける: `doc1.md` ❌ → `installation-guide.md` ✅
```

### ファイルの移動・コピー
**ドラッグ&ドロップによる移動**
1. 移動したいファイルを選択
2. 目的のフォルダにドラッグ
3. ドロップして移動完了

**右クリックメニュー操作**
- **切り取り**: `Cmd + X`
- **コピー**: `Cmd + C`
- **貼り付け**: `Cmd + V`

**複数ファイルの一括操作**
1. `Cmd` キーを押しながらファイルを選択
2. 選択したファイルをまとめて移動・コピー

### ファイルの削除
```markdown
削除方法:
1. ファイルを選択 → Delete キー
2. 右クリック → 「削除」
3. ファイル → 削除

注意事項:
- 削除したファイルはゴミ箱に移動
- Cmd + Delete で完全削除（要注意）
- 削除前の確認ダイアログが表示
```

## 高度なファイル管理

### ファイル検索機能
**クイック検索**
- `Cmd + P`: ファイル名での高速検索
- 部分一致で素早くファイルを発見
- 矢印キーで選択、Enter で開く

**全文検索**
- `Cmd + Shift + F`: プロジェクト全体のテキスト検索
- 正規表現対応
- 置換機能付き

**フィルター機能**
```markdown
検索オプション:
- *.md: Markdownファイルのみ
- *.txt: テキストファイルのみ
- folder:docs: docsフォルダ内のみ
- modified:today: 今日変更されたファイル
```

### お気に入り機能
よく使用するファイルをお気に入りに登録：

1. ファイルを右クリック
2. 「お気に入りに追加」を選択
3. サイドバーの「お気に入り」セクションに表示

**お気に入りの管理**
- ドラッグで順序変更
- 右クリックで削除
- `Cmd + 数字` でクイックアクセス

### 最近のファイル
```markdown
最近開いたファイルへの素早いアクセス:
- ファイル → 最近のファイル
- Cmd + Shift + T で最近閉じたファイルを再開
- 履歴は最大20件まで保存
```

## プロジェクト構成のベストプラクティス

### ドキュメント管理の例
```
technical-writing/
├── content/
│   ├── user-guides/
│   │   ├── 01-installation.md
│   │   ├── 02-basic-usage.md
│   │   └── 03-advanced-features.md
│   ├── api-docs/
│   │   ├── authentication.md
│   │   ├── endpoints.md
│   │   └── examples.md
│   └── troubleshooting/
│       ├── common-issues.md
│       └── faq.md
├── assets/
│   ├── images/
│   ├── diagrams/
│   └── templates/
├── drafts/
│   └── work-in-progress.md
└── README.md
```

### ブログ管理の例
```
blog/
├── posts/
│   ├── 2025/
│   │   ├── 01-january/
│   │   │   ├── new-year-resolutions.md
│   │   │   └── markdown-tips.md
│   │   └── 02-february/
│   │       └── productivity-tools.md
├── drafts/
│   ├── upcoming-post.md
│   └── ideas.md
├── templates/
│   ├── post-template.md
│   └── review-template.md
└── assets/
    └── images/
```

## ファイル同期と バックアップ

### クラウド同期の設定
Markdown Lite は以下のクラウドサービスと連携可能：

**iCloud Drive**
```markdown
推奨フォルダ構成:
~/Library/Mobile Documents/com~apple~CloudDocs/Documents/Markdown/
├── Personal/
├── Work/
└── Projects/
```

**Dropbox**
```markdown
~/Dropbox/Documents/Markdown/
├── Shared/
├── Private/
└── Archive/
```

**Google Drive**
```markdown
~/Google Drive/My Drive/Documents/
├── Current Projects/
├── Archive/
└── Templates/
```

### バックアップ戦略
```markdown
推奨バックアップ方法:
1. 自動クラウド同期（リアルタイム）
2. 日次ローカルバックアップ
3. 週次外部ストレージバックアップ
4. 月次アーカイブ作成

バックアップの確認:
- ファイル → バックアップ状態を確認
- 緑: 同期済み
- 黄: 同期中
- 赤: エラー
```

## トラブルシューティング

### ファイルが見つからない場合
```markdown
対処法:
1. 検索機能を使用（Cmd + P）
2. 最近のファイル履歴を確認
3. ゴミ箱を確認
4. クラウド同期状態を確認

予防策:
- 定期的なフォルダ整理
- 意味のあるファイル名の使用
- お気に入り機能の活用
```

### ファイルが破損した場合
```markdown
復旧手順:
1. 自動保存ファイルを確認
2. バックアップから復元
3. バージョン履歴を確認（クラウドサービス）
4. 最後の手段: 手動復旧作業

予防策:
- 定期的なバックアップ
- バージョン管理システム（Git）の使用
- 重要なファイルの複製保存
```

### 同期エラーの解決
```markdown
よくある原因と対処法:
1. ネットワーク接続: Wi-Fi/インターネット接続を確認
2. 容量不足: クラウドストレージの容量確認
3. ファイル競合: 競合ファイルを手動解決
4. 権限問題: フォルダアクセス権限を確認
```

## 効率的なワークフロー

### 日常的な作業パターン
```markdown
Morning Routine:
1. Cmd + Shift + O でプロジェクトフォルダを開く
2. Cmd + P で今日作業するファイルを検索
3. お気に入りから参照ファイルを開く
4. 新規ファイル作成（必要に応じて）

Evening Review:
1. 変更されたファイルを確認
2. 不要なファイルを整理
3. バックアップ状態をチェック
4. 明日のタスクファイルを準備
```

### チームでの共有
```markdown
共有のベストプラクティス:
1. 共通のフォルダ構造を採用
2. ファイル命名規則を統一
3. README.md で構成を説明
4. 編集ルールを明文化

協働作業のコツ:
- 同時編集を避ける
- 変更時のコミュニケーション
- 定期的な同期確認
- バージョン管理の活用
```

---

**関連記事**
- [基本的な使い方ガイド](../getting-started/basic-usage.md)
- [自動保存機能](auto-save.md)
- [データのバックアップ](../advanced-usage/backup-strategies.md)