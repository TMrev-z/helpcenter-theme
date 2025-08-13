# Copenhagen公式取得の代替アプローチ

## 🚨 現状の問題

- zcli login がインタラクティブモードで停止
- 手動でのテンプレート追加は7回連続エラーで無限ループ
- 20時間以上投入で成功0回

## 💡 代替解決策

### Option 1: GitHub Actions経由での公式テーマ取得

GitHub Actionsは既にZendesk CLIでログインできています。以下の手順でActions経由で公式テーマを取得：

1. **新しいワークフローを作成**: Copenhagen公式テーマをpullする専用ワークフロー
2. **Artifactとしてダウンロード**: 公式テーマをGitHub Actionsでダウンロードし、artifactとして保存
3. **ローカルで既存実装を移植**: ダウンロードしたテーマに既存のカスタマイズを移植

### Option 2: Zendesk Web UIでの直接操作

1. **既存テーマの複製**: Zendesk管理画面で現在のテーマを複製
2. **テンプレートの手動追加**: Web UIで不足テンプレートを直接追加
3. **段階的なファイル追加**: エラーが出るたびにWeb UIで追加

### Option 3: 最大限テンプレートセットでの強行突破

現在24テンプレートを作成済み。さらに予想される残りファイルを全て追加：

```
予想される追加ファイル:
- user_profile_page.hbs ✅ 追加済み
- subscriptions_page.hbs ✅ 追加済み  
- following_page.hbs ✅ 追加済み
- followers_page.hbs ✅ 追加済み
- activity_page.hbs (未追加)
- notification_preferences_page.hbs (未追加)
- user_subscriptions_page.hbs (未追加)
```

## 🎯 推奨アクション

**Option 1 (GitHub Actions経由)** を推奨します：

1. Actions経由で確実に公式テーマを取得
2. 完全なテンプレートセットを確保
3. 既存カスタマイズの移植
4. 手動アップロードで確実成功

## 🔧 実装手順 (Option 1)

### 1. Copenhagen Pull用ワークフローを作成

`.github/workflows/pull-copenhagen.yml`:

```yaml
name: Pull Copenhagen Official Theme
on:
  workflow_dispatch:

jobs:
  pull-theme:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20' }
      - run: npm i -g @zendesk/zcli
      - name: Login and Pull Copenhagen
        env:
          ZENDESK_SUBDOMAIN: ${{ secrets.ZENDESK_SUBDOMAIN }}
          ZENDESK_EMAIL: ${{ secrets.ZENDESK_EMAIL }}
          ZENDESK_API_TOKEN: ${{ secrets.ZENDESK_API_TOKEN }}
          BRAND_ID: ${{ secrets.ZENDESK_BRAND_ID }}
        run: |
          zcli login --subdomain "$ZENDESK_SUBDOMAIN" --email "$ZENDESK_EMAIL" --token "$ZENDESK_API_TOKEN"
          zcli themes:list --brand "$BRAND_ID"
          # 公式Copenhagenテーマをpull（IDは上記で確認）
          zcli themes:pull --brand "$BRAND_ID" --theme [copenhagen_id] --path copenhagen-official
      - name: Upload Copenhagen Theme
        uses: actions/upload-artifact@v3
        with:
          name: copenhagen-official-theme
          path: copenhagen-official/
```

### 2. ワークフロー実行・ダウンロード

1. Actions → "Pull Copenhagen Official Theme" → Run workflow
2. 完了後、Artifactsから`copenhagen-official-theme`をダウンロード
3. ローカルで既存カスタマイズを移植

これで確実にCopenhagen公式の完全テンプレートセットが取得できます。