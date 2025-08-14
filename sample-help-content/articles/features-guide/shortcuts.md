# ショートカットキー完全ガイド

Markdown Lite で使用できるすべてのショートカットキーを体系的に整理し、効率的な作業を実現する方法を解説します。

## ファイル操作

### 基本的なファイル操作
```markdown
新規作成・オープン:
Cmd + N          新規ファイル
Cmd + Shift + N  新規フォルダ
Cmd + O          ファイルを開く
Cmd + Shift + O  フォルダを開く

保存・閉じる:
Cmd + S          保存
Cmd + Shift + S  名前を付けて保存
Cmd + W          現在のタブを閉じる
Cmd + Shift + W  ウィンドウを閉じる
Cmd + Q          アプリケーションを終了
```

### 履歴とセッション管理
```markdown
履歴操作:
Cmd + Shift + T  最近閉じたファイルを再オープン
Cmd + R          最近のファイル一覧
Cmd + Shift + R  ファイルを再読み込み

セッション管理:
Cmd + Shift + N  新規ウィンドウ
Cmd + `          ウィンドウ間の切り替え
Cmd + M          ウィンドウを最小化
```

## 編集操作

### 基本編集
```markdown
取り消し・やり直し:
Cmd + Z          取り消し
Cmd + Shift + Z  やり直し
Cmd + Y          やり直し（代替）

選択:
Cmd + A          すべてを選択
Cmd + L          現在の行を選択
Cmd + Shift + L  類似する選択範囲を追加

コピー・ペースト:
Cmd + C          コピー
Cmd + V          ペースト
Cmd + X          カット
Cmd + Shift + V  プレーンテキストとしてペースト
```

### 高度な編集操作
```markdown
行操作:
Cmd + Shift + K  行を削除
Cmd + Shift + D  行を複製
Cmd + Ctrl + ↑  行を上に移動
Cmd + Ctrl + ↓  行を下に移動
Cmd + /          行をコメントアウト

インデント:
Tab              インデント
Shift + Tab      インデント解除
Cmd + ]          インデント
Cmd + [          インデント解除
```

### カーソル移動
```markdown
文字・単語単位:
←→              1文字ずつ移動
Option + ←→      単語単位で移動
Cmd + ←→        行の始まり・終わりに移動

行単位:
↑↓              1行ずつ移動
Option + ↑↓      段落単位で移動
Cmd + ↑↓        文書の始まり・終わりに移動

ページ単位:
Page Up/Down     1画面分スクロール
Cmd + Page Up    文書の先頭に移動
Cmd + Page Down  文書の末尾に移動
```

## 検索・置換

### 検索機能
```markdown
基本検索:
Cmd + F          検索
Cmd + G          次を検索
Cmd + Shift + G  前を検索
Cmd + E          選択中のテキストで検索

高度な検索:
Cmd + Shift + F  プロジェクト内検索
Cmd + R          置換
Cmd + Shift + R  プロジェクト内置換
Cmd + Option + F 正規表現検索
```

### 検索オプション
```markdown
検索モード切り替え:
Cmd + Option + C 大文字小文字を区別
Cmd + Option + W 完全一致
Cmd + Option + R 正規表現モード
```

## 表示・プレビュー

### ズームとフォント
```markdown
ズーム操作:
Cmd + +          ズームイン
Cmd + -          ズームアウト
Cmd + 0          デフォルトサイズに戻す

フォントサイズ:
Cmd + Shift + +  フォントサイズを拡大
Cmd + Shift + -  フォントサイズを縮小
Cmd + Shift + 0  デフォルトフォントサイズ
```

### プレビューとレイアウト
```markdown
プレビュー操作:
Cmd + Shift + P  プレビュー表示切り替え
Cmd + Shift + V  プレビューのみ表示
Cmd + Shift + E  エディターのみ表示
Cmd + Shift + S  分割表示切り替え

レイアウト:
Cmd + Option + L 行番号表示切り替え
Cmd + Option + W ワードラップ切り替え
Cmd + Option + I インデントガイド表示切り替え
```

## フォーマット操作

### Markdown フォーマット
```markdown
基本フォーマット:
Cmd + B          太字（**text**）
Cmd + I          斜体（*text*）
Cmd + U          下線（__text__）
Cmd + K          リンク（[text](url)）

見出し:
Cmd + 1          H1 見出し
Cmd + 2          H2 見出し
Cmd + 3          H3 見出し
Cmd + 4          H4 見出し
Cmd + 5          H5 見出し
Cmd + 6          H6 見出し
```

### リストとブロック
```markdown
リスト操作:
Cmd + Shift + 8  箇条書きリスト（- item）
Cmd + Shift + 7  番号付きリスト（1. item）
Cmd + Shift + 9  チェックリスト（- [ ] item）

ブロック要素:
Cmd + Shift + >  引用ブロック（> text）
Cmd + Shift + `  コードブロック（```）
Cmd + `          インラインコード（`code`）
```

## 特殊機能

### 開発・デバッグ
```markdown
開発者機能:
Cmd + Option + I 開発者ツールを開く
Cmd + Option + J JavaScriptコンソール
Cmd + R          ページを再読み込み
Cmd + Shift + R  キャッシュを無視して再読み込み
```

### スペルチェックと言語
```markdown
スペルチェック:
Cmd + ;          スペルチェック
Cmd + :          スペル確認ダイアログ
F7               スペルチェック（Windows風）

言語切り替え:
Cmd + Space      入力ソース切り替え
Cmd + Option + Space 次の入力ソースに切り替え
```

## カスタマイズ可能ショートカット

### ユーザー定義ショートカット
```json
{
  "customShortcuts": {
    "insertDate": "Cmd + D",
    "insertTime": "Cmd + T",
    "toggleWordCount": "Cmd + Shift + W",
    "exportHTML": "Cmd + E",
    "exportPDF": "Cmd + Shift + E",
    "toggleFullscreen": "Cmd + Ctrl + F",
    "insertTable": "Cmd + Shift + T",
    "insertImage": "Cmd + Shift + I"
  }
}
```

### マクロ機能
```markdown
録画・再生:
Cmd + Option + R マクロ録画開始/停止
Cmd + Option + P マクロ再生
Cmd + Option + S マクロを保存
Cmd + Option + L マクロを読み込み
```

## プラットフォーム別の違い

### macOS 固有
```markdown
macOS専用ショートカット:
Cmd + H          アプリケーションを隠す
Cmd + Option + H 他のアプリケーションを隠す
Cmd + Tab        アプリケーション切り替え
Cmd + `          ウィンドウ切り替え

Mission Control:
F3               Mission Control
Cmd + F3         デスクトップを表示
```

### キーボード配列の考慮
```markdown
JISキーボード:
Cmd + @          選択範囲をコピー（一部キーボード）
Cmd + [          後ろのタブに移動
Cmd + ]          前のタブに移動

USキーボード:
Cmd + ,          環境設定を開く
Cmd + .          設定ダイアログを閉じる
```

## 効率的な使い方のコツ

### ワークフロー最適化
```markdown
推奨ワークフロー:
1. Cmd + N で新規ファイル作成
2. Cmd + 1-6 で見出し構造を作成
3. Cmd + Shift + P でプレビュー確認
4. Cmd + S で定期保存
5. Cmd + Shift + E でエクスポート

速度重視の編集:
- Tab/Shift+Tab でリスト階層調整
- Cmd + L で行選択 → 素早い編集
- Cmd + D で同じ単語を連続選択
- Cmd + / で複数行の一括コメントアウト
```

### ショートカットの覚え方
```markdown
記憶術:
論理的グループ:
- Cmd + 文字: 基本操作（N=New, O=Open, S=Save）
- Cmd + Shift + 文字: 拡張操作
- Cmd + Option + 文字: 詳細設定
- Cmd + Ctrl + 文字: レイアウト操作

頻度別学習:
Level 1（毎日使用）:
Cmd + N, O, S, W, C, V, Z, F

Level 2（週数回使用）:
Cmd + Shift + P, G, T, R, E

Level 3（月数回使用）:
Cmd + 1-6, B, I, K, Option組み合わせ
```

## トラブルシューティング

### ショートカットが効かない場合
```markdown
確認事項:
□ 日本語入力モードがオフになっているか
□ 他のアプリケーションがショートカットを占有していないか
□ システム環境設定でキーボードショートカットが無効化されていないか
□ Markdown Lite がアクティブウィンドウになっているか

解決方法:
1. 英語入力モードに切り替え
2. システム環境設定 → キーボード → ショートカット で確認
3. アプリケーションを再起動
4. macOS を再起動
```

### カスタムショートカットの設定
```markdown
システムレベルでの設定:
1. システム環境設定 → キーボード → ショートカット
2. 「アプリケーション」を選択
3. 「+」ボタンで Markdown Lite を追加
4. メニュー項目とキーボードショートカットを設定

アプリレベルでの設定:
1. 環境設定 → キーボード → ショートカット
2. 各機能にカスタムキーを割り当て
3. 競合チェックと警告表示
4. 設定のエクスポート/インポート機能
```

## チートシート

### 印刷用一覧
```
━━━ Markdown Lite ショートカット早見表 ━━━

ファイル操作:
Cmd+N: 新規    Cmd+O: 開く    Cmd+S: 保存    Cmd+W: 閉じる

編集:
Cmd+Z: 取消し  Cmd+Y: やり直し  Cmd+A: 全選択  Cmd+F: 検索

フォーマット:
Cmd+B: 太字    Cmd+I: 斜体    Cmd+K: リンク   Cmd+1-6: 見出し

表示:
Cmd++: 拡大    Cmd+-: 縮小    Cmd+Shift+P: プレビュー

移動:
Cmd+←→: 行頭尾  Cmd+↑↓: 文書頭尾  Option+←→: 単語

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

**関連記事**
- [効率的な編集のコツ](editing-tips.md)
- [基本的な使い方ガイド](../getting-started/basic-usage.md)
- [カスタマイズ設定](../advanced-usage/customization.md)