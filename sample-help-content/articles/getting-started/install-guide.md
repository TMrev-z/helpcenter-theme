# Markdown Lite のインストール方法

Markdown Lite は軽量で高速なMarkdownエディターです。macOS向けに最適化されており、簡単にインストールできます。

## システム要件

Markdown Lite をインストールする前に、以下のシステム要件を確認してください：

### 最小要件
- **OS**: macOS 10.15 (Catalina) 以降
- **RAM**: 4GB以上推奨
- **ストレージ**: 200MB以上の空き容量
- **プロセッサー**: Intel または Apple Silicon

### 推奨環境
- **OS**: macOS 11.0 (Big Sur) 以降
- **RAM**: 8GB以上
- **ストレージ**: 1GB以上の空き容量

## インストール方法

### 方法1: DMGファイルからインストール（推奨）

1. **GitHub Releases ページにアクセス**
   - [https://github.com/TMrev-z/markdown-lite/releases](https://github.com/TMrev-z/markdown-lite/releases) を開きます

2. **最新版をダウンロード**
   - 最新リリースから `Markdown-Lite-x.x.x.dmg` をクリックしてダウンロード

3. **DMGファイルを開く**
   - ダウンロードした DMG ファイルをダブルクリック
   - Finder で DMG ファイルが開きます

4. **アプリケーションフォルダにドラッグ**
   - `Markdown Lite.app` を `Applications` フォルダにドラッグ&ドロップ

5. **初回起動**
   - アプリケーションフォルダから `Markdown Lite` を起動
   - 「開発元が未確認のため開けません」が表示された場合は、右クリック → 「開く」を選択

### 方法2: ソースからビルド（開発者向け）

```bash
# リポジトリをクローン
git clone https://github.com/TMrev-z/markdown-lite.git
cd markdown-lite

# 依存関係をインストール
npm install

# 開発モードで起動
npm start

# 本番用にビルド
npm run build
```

## 初期設定

初回起動時に以下の設定を確認してください：

### ファイル関連付け
Markdown Lite を `.md` ファイルのデフォルトアプリケーションに設定：

1. `.md` ファイルを右クリック
2. 「このアプリケーションで開く」→「その他...」
3. Markdown Lite を選択
4. 「常にこのアプリケーションで開く」にチェック

### 自動保存設定
- デフォルトで1秒後に自動保存が有効
- 設定で変更可能

## トラブルシューティング

### よくある問題

**Q: アプリが起動しない**
A: macOS のセキュリティ設定を確認してください。システム環境設定 → セキュリティとプライバシー → 一般 で「このまま開く」をクリック。

**Q: 「開発元を確認できません」エラー**
A: アプリを右クリックして「開く」を選択し、「開く」ボタンをクリックしてください。

**Q: 動作が重い**
A: アクティビティモニターでメモリ使用量を確認し、必要に応じて他のアプリケーションを終了してください。

## 次のステップ

インストールが完了したら：
- [基本的な使い方ガイド](basic-usage.md) でエディターの操作方法を学習
- [Markdown記法リファレンス](markdown-syntax.md) でMarkdownの書き方を確認

---

**サポートが必要な場合**
- [トラブルシューティングガイド](../troubleshooting/common-issues.md)をご確認ください
- [GitHub Issues](https://github.com/TMrev-z/markdown-lite/issues) で質問・報告が可能です