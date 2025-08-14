# カスタマイズ設定

Markdown Lite を自分の作業スタイルに合わせてカスタマイズする方法を詳しく説明します。

## 基本設定の変更

### 環境設定へのアクセス
```markdown
アクセス方法:
1. メニューバー → Markdown Lite → 環境設定
2. ショートカット: Cmd + ,（カンマ）
3. 設定ウィンドウが開きます
```

### 設定カテゴリの概要
```markdown
設定タブ:
1. 一般 - 基本的な動作設定
2. エディター - 編集画面の設定
3. プレビュー - プレビュー表示の設定  
4. ファイル - ファイル操作の設定
5. 高度 - 詳細設定
```

## エディター設定

### フォント設定
```json
{
  "editor": {
    "fontFamily": "SF Mono, Menlo, Monaco, 'Courier New'",
    "fontSize": 14,
    "lineHeight": 1.5,
    "fontWeight": "normal"
  }
}
```

**推奨フォント:**
```markdown
プログラマー向け:
- SF Mono (macOS標準)
- JetBrains Mono  
- Fira Code
- Source Code Pro

日本語対応:
- SF Mono + Hiragino Sans
- Monaco + Yu Gothic
- Menlo + Noto Sans CJK
```

### テーマとカラー設定
```markdown
エディターテーマ:
- Light (明るい)
- Dark (暗い)  
- High Contrast (高コントラスト)
- Custom (カスタム)

カラーカスタマイズ:
- 背景色
- テキスト色
- シンタックスハイライト色
- 選択範囲の色
- 行番号の色
```

### 編集動作の設定
```json
{
  "editor": {
    "tabSize": 4,
    "insertSpaces": true,
    "wordWrap": true,
    "showLineNumbers": true,
    "highlightCurrentLine": true,
    "autoCloseBrackets": true,
    "autoIndent": true
  }
}
```

## プレビュー設定

### プレビュースタイルの選択
```markdown
利用可能スタイル:
1. GitHub - GitHub風デザイン（デフォルト）
2. Minimal - ミニマルデザイン
3. Academic - 学術論文風
4. Custom CSS - カスタムスタイル
```

### カスタムCSS の作成
```css
/* custom-preview.css の例 */
body {
    font-family: 'Helvetica Neue', 'Hiragino Sans', sans-serif;
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    line-height: 1.8;
    color: #333;
}

/* 見出しのカスタマイズ */
h1, h2, h3, h4, h5, h6 {
    color: #2c3e50;
    font-weight: 600;
    margin-top: 2rem;
    margin-bottom: 1rem;
}

h1 {
    border-bottom: 3px solid #3498db;
    padding-bottom: 0.5rem;
}

h2 {
    border-bottom: 2px solid #e9ecef;
    padding-bottom: 0.3rem;
}

/* コードブロックのカスタマイズ */
pre {
    background: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 6px;
    padding: 1rem;
    overflow-x: auto;
    font-size: 0.9em;
}

code {
    background: #f8f9fa;
    padding: 0.2rem 0.4rem;
    border-radius: 3px;
    font-family: 'SF Mono', 'Monaco', monospace;
    font-size: 0.9em;
}

/* テーブルのカスタマイズ */
table {
    border-collapse: collapse;
    width: 100%;
    margin: 1rem 0;
}

th, td {
    border: 1px solid #dee2e6;
    padding: 0.75rem;
    text-align: left;
}

th {
    background: #f8f9fa;
    font-weight: 600;
}

/* 引用のカスタマイズ */
blockquote {
    border-left: 4px solid #3498db;
    margin: 1rem 0;
    padding: 0.5rem 1rem;
    background: #f8f9fa;
    font-style: italic;
}

/* リンクのカスタマイズ */
a {
    color: #3498db;
    text-decoration: none;
}

a:hover {
    color: #2980b9;
    text-decoration: underline;
}
```

### プレビュー表示オプション
```json
{
  "preview": {
    "synchronizeScroll": true,
    "showLineNumbers": false,
    "mathSupport": true,
    "mermaidSupport": true,
    "highlightCodeBlocks": true,
    "openLinksInNewWindow": true
  }
}
```

## キーボードショートカット

### デフォルトショートカット
```markdown
ファイル操作:
- Cmd + N: 新規ファイル
- Cmd + O: ファイルを開く
- Cmd + S: 保存
- Cmd + Shift + S: 名前を付けて保存

編集操作:
- Cmd + Z: 取り消し
- Cmd + Shift + Z: やり直し
- Cmd + A: すべて選択
- Cmd + F: 検索
- Cmd + G: 次を検索
- Cmd + R: 置換

表示操作:
- Cmd + +: ズームイン
- Cmd + -: ズームアウト  
- Cmd + 0: デフォルトサイズ
- Cmd + Shift + P: プレビュー切り替え
```

### カスタムショートカット設定
```json
{
  "shortcuts": {
    "togglePreview": "Cmd+P",
    "insertImage": "Cmd+Shift+I",
    "insertTable": "Cmd+T",
    "toggleBold": "Cmd+B",
    "toggleItalic": "Cmd+I",
    "insertLink": "Cmd+K"
  }
}
```

## 自動化機能

### テンプレート機能
```markdown
# ブログ投稿テンプレート
---
title: "[タイトル]"
date: "2025-01-13"
tags: ["タグ1", "タグ2"]
author: "Author Name"
---

# [記事タイトル]

## はじめに

[導入文を記載]

## 本文

[メイン内容]

## まとめ

[結論・まとめ]

---
参考文献:
- [参考1](URL)
- [参考2](URL)
```

### スニペット機能
```json
{
  "snippets": {
    "code": "```$language\n$code\n```",
    "table": "| 列1 | 列2 | 列3 |\n|-----|-----|-----|\n| データ1 | データ2 | データ3 |",
    "image": "![${alt}](${src} \"${title}\")",
    "link": "[${text}](${url} \"${title}\")",
    "callout": "> **注意**: ${content}"
  }
}
```

### マクロ機能
```javascript
// 日付挿入マクロ
function insertCurrentDate() {
  const now = new Date();
  const dateString = now.toISOString().split('T')[0];
  return dateString;
}

// 目次生成マクロ
function generateTOC(content) {
  const headings = content.match(/^#{1,6}\s.+$/gm) || [];
  return headings.map(heading => {
    const level = (heading.match(/#/g) || []).length;
    const text = heading.replace(/^#+\s/, '');
    const indent = '  '.repeat(level - 1);
    return `${indent}- [${text}](#${text.toLowerCase().replace(/\s+/g, '-')})`;
  }).join('\n');
}
```

## 拡張機能とプラグイン

### 利用可能な拡張機能
```markdown
公式拡張:
- Math Renderer (数式表示)
- Mermaid Diagrams (図表作成)
- Table Editor (表編集支援)
- Spell Checker (スペルチェック)

コミュニティ拡張:
- Word Count (文字数カウント)
- Reading Time (読了時間推定)
- Export Enhanced (拡張エクスポート)
- Git Integration (Git連携)
```

### 拡張機能のインストール
```markdown
手順:
1. 環境設定 → 拡張機能
2. 「利用可能な拡張機能」から選択
3. 「インストール」ボタンをクリック
4. アプリを再起動して有効化
```

## ワークスペース設定

### プロジェクト固有の設定
```json
// .markdown-lite-config.json
{
  "projectName": "技術文書プロジェクト",
  "defaultTemplate": "./templates/tech-article.md",
  "imageDirectory": "./assets/images",
  "exportSettings": {
    "format": "html",
    "stylesheet": "./styles/export.css"
  },
  "spellCheck": {
    "language": "ja-JP",
    "customDictionary": "./dictionary.txt"
  }
}
```

### チーム設定の共有
```markdown
共有すべき設定:
1. コーディング規約
2. テンプレート
3. カスタムCSS
4. スニペット集
5. 辞書ファイル

共有方法:
- 設定ファイルをリポジトリに含める
- 設定エクスポート・インポート機能
- 設定同期サービス
```

## パフォーマンス調整

### メモリ使用量の最適化
```json
{
  "performance": {
    "maxFileSize": "50MB",
    "previewUpdateThrottle": 500,
    "autoSaveThrottle": 1000,
    "maxRecentFiles": 20,
    "enableFileWatcher": true
  }
}
```

### 大きなファイル向け設定
```json
{
  "largeFiles": {
    "disableAutoPreview": true,
    "simplifiedHighlighting": true,
    "chunkSize": 1000,
    "virtualScrolling": true
  }
}
```

## トラブルシューティング

### 設定のリセット
```bash
# 全設定をデフォルトに戻す
rm ~/Library/Preferences/com.cocoroai.markdown-lite.plist
rm -rf ~/Library/Application\ Support/Markdown\ Lite/

# 特定の設定のみリセット
defaults delete com.cocoroai.markdown-lite EditorSettings
```

### 設定のバックアップ
```bash
# 設定をバックアップ
cp ~/Library/Preferences/com.cocoroai.markdown-lite.plist ~/Desktop/markdown-lite-backup.plist

# Application Support フォルダをバックアップ  
cp -R ~/Library/Application\ Support/Markdown\ Lite ~/Desktop/markdown-lite-support-backup
```

### 設定の復元
```bash
# 設定を復元
cp ~/Desktop/markdown-lite-backup.plist ~/Library/Preferences/com.cocoroai.markdown-lite.plist

# Application Support フォルダを復元
rm -rf ~/Library/Application\ Support/Markdown\ Lite
cp -R ~/Desktop/markdown-lite-support-backup ~/Library/Application\ Support/Markdown\ Lite
```

## 高度なカスタマイズ

### CSS変数を使用したテーマ作成
```css
:root {
  --primary-color: #3498db;
  --secondary-color: #2c3e50;
  --background-color: #ffffff;
  --text-color: #333333;
  --border-color: #e9ecef;
  --code-background: #f8f9fa;
  --blockquote-border: var(--primary-color);
}

/* ダークモード対応 */
@media (prefers-color-scheme: dark) {
  :root {
    --background-color: #2c3e50;
    --text-color: #ecf0f1;
    --border-color: #34495e;
    --code-background: #34495e;
  }
}
```

### JavaScript拡張の例
```javascript
// 文字数カウント機能
class WordCounter {
  constructor() {
    this.setupUI();
    this.bindEvents();
  }
  
  setupUI() {
    const statusBar = document.querySelector('.status-bar');
    this.counter = document.createElement('span');
    this.counter.className = 'word-count';
    statusBar.appendChild(this.counter);
  }
  
  bindEvents() {
    const editor = document.querySelector('.editor');
    editor.addEventListener('input', () => {
      this.updateCount();
    });
  }
  
  updateCount() {
    const text = this.getEditorText();
    const wordCount = this.countWords(text);
    const charCount = text.length;
    
    this.counter.textContent = `${wordCount} words, ${charCount} characters`;
  }
  
  countWords(text) {
    return text.trim() ? text.trim().split(/\s+/).length : 0;
  }
  
  getEditorText() {
    return document.querySelector('.editor').value || '';
  }
}

// 初期化
new WordCounter();
```

---

**関連記事**
- [基本的な使い方ガイド](../getting-started/basic-usage.md)
- [ライブプレビュー機能](../features-guide/live-preview.md)
- [よくある問題と解決方法](../troubleshooting/common-issues.md)