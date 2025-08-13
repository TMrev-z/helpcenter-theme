# Zendesk Guide Dark Hero Theme

ダーク基調のモダンなZendesk Guideヘルプセンターテーマ

## 特徴

- 🌙 ダーク基調のデザイン
- 🔍 中央配置の検索バー
- 🎨 6色のカテゴリカード
- 📱 フルレスポンシブ対応
- ⚡ 高パフォーマンス（LCP ≤ 2.5s）
- ♿ アクセシビリティ対応（WCAG 2.1 AA）

## 必要な環境

- Node.js 20+
- Zendesk CLI (`@zendesk/zcli`)
- Git

## ローカル開発

```bash
# CLIインストール
npm install -g @zendesk/zcli

# 認証
zcli login --subdomain <SUBDOMAIN> --email <EMAIL> --token <API_TOKEN>

# プレビュー
zcli themes:preview

# バリデーション
zcli themes:validate
```

## デプロイ

```bash
# 本番アップロード
zcli themes:upload --brand <BRAND_ID> --theme <THEME_ID> --version-bump patch
```

## GitHub Actions

mainブランチへのマージで自動デプロイされます。

### 必要なSecretsの設定

- `ZENDESK_SUBDOMAIN`
- `ZENDESK_EMAIL`
- `ZENDESK_API_TOKEN`
- `ZENDESK_BRAND_ID`
- `ZENDESK_THEME_ID`

## カスタマイズ

### 色の変更

`manifest.json`の`settings`で変更可能：

- `accent_color`: アクセントカラー
- `category_color_1-6`: カテゴリカードの色

### 人気の検索キーワード

`popular_searches`設定でカンマ区切りで指定：

```
"ログインできない,パスワードリセット,プラン変更方法"
```

## ファイル構成

```
templates/
├── document_head.hbs      # HTML HEAD
├── document_footer.hbs    # HTML フッター
├── header.hbs            # ナビゲーション
├── footer.hbs            # フッター
├── home_page.hbs         # ホームページ
├── category_page.hbs     # カテゴリページ
└── article_page.hbs      # 記事ページ

assets/
├── style.css             # メインスタイル
└── script.js             # メインスクリプト

manifest.json             # テーマ設定
```

## パフォーマンス

- LCP: ≤ 2.5秒
- CLS: ≤ 0.1
- INP: ≤ 200ms
- Lighthouse: Performance 80+、Accessibility 90+

## ブラウザサポート

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## ライセンス

MIT License