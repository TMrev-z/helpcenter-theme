# エクスポート・インポート機能

Markdown Lite で作成したドキュメントを様々な形式でエクスポートしたり、他の形式からインポートする方法を詳しく解説します。

## エクスポート機能

### 対応エクスポート形式
```markdown
標準対応形式:
📄 HTML - ウェブ表示用
📄 PDF - 印刷・共有用
📄 DOCX - Microsoft Word形式
📄 TXT - プレーンテキスト
📄 RTF - リッチテキスト
📄 EPUB - 電子書籍形式

上級者向け:
🔧 LaTeX - 学術論文用
🔧 JSON - データ交換用
🔧 XML - 構造化データ
🔧 Custom - カスタム形式
```

### HTML エクスポート
```markdown
HTML エクスポートの特徴:
✅ 完全なスタイル保持
✅ インタラクティブ要素対応
✅ 埋め込み画像の処理
✅ カスタムCSS適用
✅ JavaScript統合

エクスポート手順:
1. ファイル → エクスポート → HTML
2. エクスポート設定を選択
3. 保存場所を指定
4. 「エクスポート」をクリック
```

#### HTML エクスポート設定
```json
{
  "html": {
    "includeCSS": true,
    "embedImages": true,
    "minify": false,
    "template": "github",
    "customCSS": "path/to/custom.css",
    "includeTableOfContents": true,
    "syntaxHighlighting": true,
    "mathRendering": true
  }
}
```

### PDF エクスポート
```markdown
PDF エクスポートの特徴:
📖 印刷最適化レイアウト
📖 フォント埋め込み
📖 高解像度画像
📖 しおり（目次）自動生成
📖 ページ番号とヘッダー・フッター

PDF 設定オプション:
- 用紙サイズ: A4, US Letter, A3, カスタム
- 余白: 標準, 狭い, 広い, カスタム
- フォント: システムフォント, 埋め込み
- 画像品質: 高品質, 標準, 圧縮
```

#### PDF エクスポート詳細設定
```json
{
  "pdf": {
    "pageSize": "A4",
    "margin": {
      "top": "2cm",
      "bottom": "2cm", 
      "left": "2cm",
      "right": "2cm"
    },
    "header": {
      "enabled": true,
      "content": "{{title}} - {{date}}"
    },
    "footer": {
      "enabled": true,
      "content": "Page {{pageNumber}} of {{totalPages}}"
    },
    "tableOfContents": true,
    "bookmarks": true,
    "embedFonts": true
  }
}
```

### Word (DOCX) エクスポート
```markdown
DOCX エクスポートの特徴:
📝 Microsoft Word完全互換
📝 スタイル・書式保持
📝 コメント・変更履歴対応
📝 目次・図表目次自動生成
📝 相互参照の保持

互換性確認済みバージョン:
- Microsoft Word 2019/2021/365
- LibreOffice Writer 7.x
- Google Docs（インポート時）
- Pages（macOS）
```

### エクスポートのバッチ処理
```bash
#!/bin/bash
# batch_export.sh - 複数ファイルの一括エクスポート

INPUT_DIR="~/Documents/Markdown"
OUTPUT_DIR="~/Documents/Exports"

# HTMLエクスポート
for file in "$INPUT_DIR"/*.md; do
    filename=$(basename "$file" .md)
    markdown-lite export html "$file" "$OUTPUT_DIR/$filename.html"
done

# PDFエクスポート
for file in "$INPUT_DIR"/*.md; do
    filename=$(basename "$file" .md)
    markdown-lite export pdf "$file" "$OUTPUT_DIR/$filename.pdf"
done

echo "一括エクスポート完了"
```

## インポート機能

### 対応インポート形式
```markdown
標準対応形式:
📥 DOCX - Word文書
📥 HTML - ウェブページ
📥 TXT - プレーンテキスト
📥 RTF - リッチテキスト
📥 EPUB - 電子書籍
📥 CSV - 表データ

特殊形式:
🔄 Notion Export
🔄 Bear Export
🔄 Obsidian Vault
🔄 Typora Files
🔄 Evernote Export
```

### Word文書からのインポート
```markdown
DOCX インポート機能:
✅ テキスト内容の完全保持
✅ 見出し構造の自動変換
✅ 表の Markdown 変換
✅ 画像の抽出と配置
✅ リンクの保持

変換例:
Word見出し1 → # 見出し1
Word見出し2 → ## 見出し2
太字 → **太字**
斜体 → *斜体*
表 → Markdown テーブル記法
```

#### DOCX インポート設定
```json
{
  "docx": {
    "preserveStyles": true,
    "convertTables": true,
    "extractImages": true,
    "imageDirectory": "./images/",
    "convertComments": "footnotes",
    "handlePageBreaks": "section",
    "preserveMetadata": true
  }
}
```

### HTML からのインポート
```markdown
HTML インポート機能:
🌐 HTML タグの Markdown 変換
🌐 CSS スタイル情報の保持（可能な範囲）
🌐 埋め込み画像の抽出
🌐 リンク構造の保持
🌐 メタデータの抽出

変換マッピング:
<h1> → # 見出し
<strong>/<b> → **太字**
<em>/<i> → *斜体*
<code> → `コード`
<blockquote> → > 引用
<ul><li> → - リスト
<ol><li> → 1. リスト
```

### 他のMarkdownエディターからの移行

#### Typora からの移行
```bash
# Typora ファイルのインポート
find ~/Documents/Typora -name "*.md" | while read file; do
    # ファイルパス調整
    newpath=$(echo "$file" | sed 's|/Typora/|/Markdown Lite/|')
    mkdir -p "$(dirname "$newpath")"
    
    # 画像パス修正
    sed 's|typora-user-images/|images/|g' "$file" > "$newpath"
done
```

#### Bear からの移行
```markdown
Bear エクスポート手順:
1. Bear で「ファイル」→「エクスポート」
2. 「Markdown」形式を選択
3. エクスポート先フォルダを指定
4. Markdown Lite で「ファイル」→「フォルダを開く」
5. エクスポートしたフォルダを選択

注意事項:
- Bear のタグ機能はフォルダ構造に変換
- 画像は自動で抽出・配置
- 内部リンクは可能な限り保持
```

#### Obsidian からの移行
```markdown
Obsidian Vault インポート:
特徴:
✅ Wiki スタイルリンクの変換
✅ フォルダ構造の完全保持
✅ プラグイン設定の移行支援
✅ バックリンクの解決

移行手順:
1. Obsidian Vault フォルダをバックアップ
2. Markdown Lite で「ファイル」→「Obsidian Vault をインポート」
3. Vault フォルダを選択
4. インポート設定を確認
5. 「インポート開始」をクリック
```

## 高度なエクスポート・インポート

### LaTeX エクスポート
```latex
% 生成される LaTeX の例
\documentclass{article}
\usepackage[utf8]{inputenc}
\usepackage{graphicx}
\usepackage{hyperref}

\title{ドキュメントタイトル}
\author{作成者名}
\date{\today}

\begin{document}

\maketitle
\tableofcontents

\section{はじめに}
このドキュメントは...

\subsection{概要}
概要の内容...

\end{document}
```

### JSON エクスポート（構造化データ）
```json
{
  "document": {
    "title": "ドキュメントタイトル",
    "author": "作成者",
    "created": "2025-01-13T00:00:00Z",
    "modified": "2025-01-13T12:00:00Z",
    "sections": [
      {
        "level": 1,
        "title": "はじめに",
        "content": "このドキュメントは...",
        "subsections": [
          {
            "level": 2,
            "title": "概要",
            "content": "概要の内容..."
          }
        ]
      }
    ],
    "metadata": {
      "wordCount": 1234,
      "readingTime": 5,
      "tags": ["documentation", "markdown"]
    }
  }
}
```

### カスタムテンプレート
```html
<!-- custom-template.html -->
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <title>{{title}}</title>
    <style>
        body { 
            font-family: 'Noto Sans JP', sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 2rem;
        }
        .header {
            border-bottom: 2px solid #333;
            padding-bottom: 1rem;
            margin-bottom: 2rem;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>{{title}}</h1>
        <p>作成者: {{author}} | 作成日: {{date}}</p>
    </div>
    
    <div class="content">
        {{content}}
    </div>
    
    <div class="footer">
        <p>Generated by Markdown Lite</p>
    </div>
</body>
</html>
```

## 自動化とワークフロー

### GitHub Actions 連携
```yaml
# .github/workflows/export.yml
name: Document Export

on:
  push:
    paths:
      - 'docs/**/*.md'

jobs:
  export:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Markdown Lite CLI
        run: |
          npm install -g markdown-lite-cli
          
      - name: Export to HTML
        run: |
          find docs -name "*.md" -exec markdown-lite export html {} {}.html \;
          
      - name: Export to PDF
        run: |
          find docs -name "*.md" -exec markdown-lite export pdf {} {}.pdf \;
          
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./docs
```

### 定期的な自動エクスポート
```bash
#!/bin/bash
# auto_export.sh - 定期的なエクスポートスクリプト

SOURCE_DIR="$HOME/Documents/Markdown"
EXPORT_DIR="$HOME/Documents/Auto-Exports"
BACKUP_DIR="$HOME/Backups/Exports"

# 日付付きディレクトリ作成
DATE=$(date +%Y%m%d)
mkdir -p "$EXPORT_DIR/$DATE"

# 変更されたファイルのみエクスポート
find "$SOURCE_DIR" -name "*.md" -newer "$EXPORT_DIR/.last_export" | while read file; do
    rel_path=$(realpath --relative-to="$SOURCE_DIR" "$file")
    output_dir="$EXPORT_DIR/$DATE/$(dirname "$rel_path")"
    mkdir -p "$output_dir"
    
    # HTML エクスポート
    markdown-lite export html "$file" "$output_dir/$(basename "$file" .md).html"
    
    # PDF エクスポート
    markdown-lite export pdf "$file" "$output_dir/$(basename "$file" .md).pdf"
done

# 最終エクスポート時刻を記録
touch "$EXPORT_DIR/.last_export"

# 古いエクスポートの削除（30日以上古い）
find "$EXPORT_DIR" -type d -name "2*" -mtime +30 -exec rm -rf {} +

echo "自動エクスポート完了: $DATE"
```

## トラブルシューティング

### エクスポートでよくある問題

**文字化けが発生する**
```markdown
原因と対策:
1. 文字エンコーディング不一致
   → UTF-8 で保存し直す
   
2. フォントに含まれない文字
   → システムフォントの確認
   
3. 特殊文字の問題
   → HTML エンティティに変換
```

**画像が表示されない**
```markdown
原因と対策:
1. 相対パスの問題
   → 画像を埋め込みエクスポート
   
2. 画像ファイルの欠落
   → エクスポート前にファイル存在確認
   
3. サポートされていない形式
   → JPEG/PNG 形式に変換
```

**レイアウトが崩れる**
```markdown
原因と対策:
1. CSS の競合
   → カスタムスタイルシートの確認
   
2. フォントサイズの問題
   → エクスポート設定でフォントサイズ調整
   
3. 長い表の問題
   → 表を分割または画像として挿入
```

### インポートでよくある問題

**フォーマットが正しく変換されない**
```markdown
対策:
1. インポート設定の確認
2. 手動での後処理
3. 段階的なインポート（小さなファイルで試行）
4. プレビューでの確認
```

**画像が見つからない**
```markdown
対策:
1. 画像ファイルの手動コピー
2. インポート設定で画像ディレクトリ指定
3. 相対パスから絶対パスへの変更
```

---

**関連記事**
- [基本的な使い方ガイド](../getting-started/basic-usage.md)
- [画像とメディアの活用](media-handling.md)
- [よくある問題と解決方法](../troubleshooting/common-issues.md)