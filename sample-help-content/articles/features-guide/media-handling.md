# 画像とメディアの活用

Markdown Lite で画像や各種メディアファイルを効率的に扱う方法を詳しく解説します。

## 画像の基本操作

### 対応画像形式
```markdown
サポート形式:
✅ JPEG (.jpg, .jpeg)
✅ PNG (.png)
✅ GIF (.gif) - アニメーション対応
✅ SVG (.svg) - ベクター画像
✅ WebP (.webp) - 軽量画像
✅ HEIC (.heic) - iPhone画像
```

### 画像の挿入方法

**方法1: ドラッグ&ドロップ**
```markdown
手順:
1. Finderから画像ファイルを選択
2. Markdown Lite のエディターにドラッグ
3. 自動的にMarkdown記法で挿入

生成例:
![画像名](./images/screenshot.png)
```

**方法2: クリップボードから貼り付け**
```markdown
手順:
1. 画像をコピー（Cmd+C）
2. エディターで Cmd+V
3. ファイル名と保存場所を指定

用途:
- スクリーンショットの直接貼り付け
- 他のアプリからの画像コピー
- ブラウザからの画像取得
```

**方法3: 手動記述**
```markdown
基本記法:
![代替テキスト](画像のパス)
![代替テキスト](画像のパス "タイトル")

例:
![ロゴ画像](./assets/logo.png "会社ロゴ")
![スクリーンショット](../screenshots/app-interface.jpg)
```

## 画像サイズの調整

### HTML記法を使用した調整
```html
<!-- 幅のみ指定 -->
<img src="image.png" alt="説明" width="400">

<!-- 幅と高さを指定 -->
<img src="image.png" alt="説明" width="400" height="300">

<!-- パーセンテージ指定 -->
<img src="image.png" alt="説明" width="50%">

<!-- CSSスタイル指定 -->
<img src="image.png" alt="説明" style="width: 300px; height: auto;">
```

### レスポンシブ画像の設定
```html
<!-- モバイル対応の画像 -->
<img src="image.png" alt="説明" style="max-width: 100%; height: auto;">

<!-- 高解像度対応 -->
<img src="image@2x.png" alt="説明" width="400" height="300">

<!-- 条件付き表示 -->
<picture>
  <source media="(max-width: 768px)" srcset="image-mobile.png">
  <source media="(min-width: 769px)" srcset="image-desktop.png">
  <img src="image-default.png" alt="説明">
</picture>
```

## 画像の整理と管理

### フォルダ構成の推奨
```
project/
├── content/
│   ├── chapter1.md
│   ├── chapter2.md
│   └── chapter3.md
├── assets/
│   ├── images/
│   │   ├── screenshots/
│   │   │   ├── app-main.png
│   │   │   └── settings.png
│   │   ├── diagrams/
│   │   │   ├── workflow.svg
│   │   │   └── architecture.png
│   │   └── icons/
│   │       ├── warning.svg
│   │       └── success.svg
│   └── media/
│       ├── videos/
│       └── audio/
└── exports/
    ├── pdf/
    └── html/
```

### ファイル命名規則
```markdown
推奨命名規則:
✅ screenshot-login-page.png
✅ diagram-user-flow.svg  
✅ icon-warning-red.png

避けるべき例:
❌ スクリーンショット 1.png (日本語・スペース)
❌ IMG_1234.jpg (意味のない名前)
❌ image.png (汎用的すぎる名前)
```

### 相対パスと絶対パス
```markdown
相対パス（推奨）:
![画像](./images/screenshot.png)
![画像](../assets/logo.png)
![画像](images/subfolder/diagram.svg)

絶対パス（避ける）:
![画像](/Users/username/Documents/project/images/screenshot.png)
![画像](file:///path/to/image.png)

理由:
- ファイル移動時の柔軟性
- 他の人との共有時の互換性
- クラウド同期での問題回避
```

## 高度な画像機能

### 画像の最適化
```bash
# ImageOptim使用例（macOS）
# PNG画像の圧縮
optipng -o7 screenshot.png

# JPEG画像の品質調整
jpeg -quality 85 photo.jpg

# WebP形式への変換
cwebp -q 80 input.png -o output.webp
```

### 画像メタデータの活用
```markdown
EXIF情報の利用:
- 撮影日時の自動表示
- カメラ設定情報
- GPS位置情報（プライバシー注意）

活用例:
![旅行写真](vacation.jpg "2025年1月撮影 - 富士山")
```

### SVG画像の活用
```svg
<!-- インライン SVG の例 -->
<svg width="100" height="100" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
  <text x="50" y="55" text-anchor="middle" fill="white">SVG</text>
</svg>
```

## 図表とダイアグラム

### Mermaid記法によるダイアグラム
```mermaid
# フローチャート
flowchart TD
    A[開始] --> B{条件分岐}
    B -->|Yes| C[処理A]
    B -->|No| D[処理B]
    C --> E[終了]
    D --> E

# シーケンス図
sequenceDiagram
    participant U as ユーザー
    participant A as アプリ
    participant S as サーバー
    
    U->>A: ログイン要求
    A->>S: 認証リクエスト
    S-->>A: 認証結果
    A-->>U: ログイン完了
```

### 表やチャートの画像化
```markdown
表の複雑な場合の画像化:
1. Excel/Numbers で表を作成
2. 高解像度でスクリーンショット
3. 画像として挿入

![複雑な表](./images/complex-table.png "四半期売上データ")

メリット:
- 複雑なレイアウトの保持
- 視覚的なインパクト
- 印刷時の品質維持
```

## メディアファイルの扱い

### 動画ファイルの埋め込み
```html
<!-- HTML5 動画 -->
<video width="640" height="480" controls>
  <source src="./videos/demo.mp4" type="video/mp4">
  <source src="./videos/demo.webm" type="video/webm">
  お使いのブラウザは動画タグをサポートしていません。
</video>

<!-- YouTube埋め込み -->
<iframe width="560" height="315" 
        src="https://www.youtube.com/embed/VIDEO_ID" 
        frameborder="0" allowfullscreen>
</iframe>
```

### 音声ファイルの埋め込み
```html
<!-- HTML5 音声 -->
<audio controls>
  <source src="./audio/podcast.mp3" type="audio/mpeg">
  <source src="./audio/podcast.ogg" type="audio/ogg">
  お使いのブラウザは音声タグをサポートしていません。
</audio>
```

### PDFファイルの参照
```markdown
<!-- PDFへのリンク -->
[プレゼンテーション資料](./docs/presentation.pdf)

<!-- PDF埋め込み（一部ブラウザ） -->
<embed src="./docs/manual.pdf" type="application/pdf" width="800" height="600">
```

## パフォーマンスの最適化

### 画像サイズの管理
```markdown
推奨サイズ指針:
- スクリーンショット: 1920px幅まで
- ロゴ・アイコン: 512px以下
- 写真: 用途に応じて1200-2400px
- ファイルサイズ: 1MB以下を目標
```

### 遅延読み込みの実装
```html
<!-- Lazy Loading -->
<img src="image.jpg" alt="説明" loading="lazy">

<!-- Progressive JPEG -->
<img src="progressive.jpg" alt="説明" style="background: #f0f0f0;">
```

### 画像の事前読み込み
```html
<!-- 重要な画像の事前読み込み -->
<link rel="preload" href="./images/hero-image.jpg" as="image">
```

## トラブルシューティング

### 画像が表示されない
```markdown
確認ポイント:
1. ファイルパスの正確性
2. ファイル拡張子の大文字小文字
3. ファイルの存在確認
4. 権限設定
5. 特殊文字の使用

解決方法:
- パスを相対パスに変更
- ファイル名を英数字に変更
- 画像を再配置
```

### 画像が重い・表示が遅い
```markdown
対策:
1. 画像圧縮ツールの使用
2. 適切な形式選択（PNG vs JPEG vs WebP）
3. 解像度の最適化
4. CDN使用（Web公開時）

圧縮ツール:
- TinyPNG (オンライン)
- ImageOptim (macOS)
- Squoosh (Google製)
```

### HEIC形式の問題
```bash
# HEIC から JPEG への変換
sips -s format jpeg input.heic --out output.jpg

# 一括変換
for file in *.heic; do
    sips -s format jpeg "$file" --out "${file%.*}.jpg"
done
```

## セキュリティとプライバシー

### 画像のメタデータ削除
```bash
# EXIF情報の削除
exiftool -all= image.jpg

# 複数ファイルの一括処理
exiftool -all= -overwrite_original *.jpg
```

### 機密情報の確認
```markdown
スクリーンショット前のチェック:
- 個人情報の画面表示
- パスワードやトークン
- 内部システムの情報
- 著作権のある内容

対策:
- 情報を隠してから撮影
- モザイクやぼかし処理
- 仮データでの撮影
```

---

**関連記事**
- [ライブプレビュー機能](live-preview.md)
- [ファイル管理機能](file-management.md)
- [Markdown記法完全ガイド](../getting-started/markdown-syntax.md)