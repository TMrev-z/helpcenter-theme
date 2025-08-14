# ソースからのビルド方法

Markdown Lite を GitHub のソースコードから自分でビルドする方法を詳しく説明します。

## 開発環境の準備

### 必要なツール
```bash
# Node.js のインストール確認
node --version  # v16.x 以上が必要
npm --version   # v8.x 以上が推奨

# Git のインストール確認
git --version

# Xcode Command Line Tools (macOS)
xcode-select --install
```

### Node.js のインストール
```bash
# Homebrew を使用（推奨）
brew install node

# または n パッケージマネージャー
curl -L https://git.io/n-install | bash
n latest

# バージョン確認
node --version
npm --version
```

### Python 環境の確認
```bash
# Python のインストール確認（node-gyp で必要）
python3 --version

# macOS の場合、追加設定が必要な場合
npm config set python python3
```

## ソースコードの取得

### リポジトリのクローン
```bash
# HTTPS でクローン
git clone https://github.com/TMrev-z/markdown-lite.git
cd markdown-lite

# または SSH でクローン（SSH キー設定済みの場合）
git clone git@github.com:TMrev-z/markdown-lite.git
cd markdown-lite

# ブランチの確認
git branch -a
```

### 特定バージョンの取得
```bash
# 最新の安定版を取得
git checkout $(git describe --tags --abbrev=0)

# 特定のバージョンを取得
git checkout v0.4.3

# 開発版を使用（注意：不安定な場合があります）
git checkout develop
```

## 依存関係のインストール

### NPM パッケージのインストール
```bash
# プロジェクトルートで実行
npm install

# 開発依存関係も含めてインストール
npm install --include=dev

# node_modules の確認
ls -la node_modules/
```

### インストール問題のトラブルシューティング
```bash
# キャッシュをクリアして再インストール
npm cache clean --force
rm -rf node_modules package-lock.json
npm install

# 権限問題の解決
sudo chown -R $(whoami) ~/.npm
sudo chown -R $(whoami) /usr/local/lib/node_modules
```

## 開発モードでの起動

### 開発サーバーの起動
```bash
# 開発モードで起動
npm run dev

# または
npm start

# デバッグモードで起動
DEBUG=* npm start
```

### ホットリロードの確認
```markdown
開発モードの特徴:
✅ ファイル変更時の自動リロード
✅ デバッガーの利用可能
✅ 開発者ツールの有効化
✅ ソースマップの有効化
✅ 詳細ログの出力
```

## 本番用ビルド

### 全プラットフォーム向けビルド
```bash
# 本番用ビルド
npm run build

# 特定プラットフォーム向け
npm run build:mac
npm run build:win
npm run build:linux
```

### macOS 用の詳細ビルド
```bash
# Intel Mac 用
npm run build:mac:x64

# Apple Silicon 用  
npm run build:mac:arm64

# Universal Binary（推奨）
npm run build:mac:universal
```

### ビルド設定のカスタマイズ
```json
// package.json の build セクション
{
  "build": {
    "appId": "com.example.markdown-lite",
    "productName": "Markdown Lite",
    "directories": {
      "output": "dist",
      "buildResources": "build"
    },
    "files": [
      "src/**/*",
      "node_modules/**/*",
      "package.json",
      "!**/node_modules/*/{CHANGELOG.md,README.md,README,readme.md,readme}"
    ],
    "mac": {
      "category": "public.app-category.productivity",
      "target": [
        {
          "target": "dmg",
          "arch": ["x64", "arm64"]
        }
      ]
    }
  }
}
```

## コードの修正とカスタマイズ

### プロジェクト構造の理解
```
markdown-lite/
├── src/
│   ├── main/              # メインプロセス
│   │   ├── main.js       # エントリーポイント
│   │   ├── menu.js       # メニュー設定
│   │   └── window.js     # ウィンドウ管理
│   ├── renderer/          # レンダラープロセス
│   │   ├── index.html    # メインHTML
│   │   ├── editor.js     # エディター機能
│   │   ├── preview.js    # プレビュー機能
│   │   └── styles/       # スタイル
│   └── shared/           # 共有ユーティリティ
├── build/                # ビルド設定
├── resources/            # アプリアイコンなど
├── package.json         # 依存関係とスクリプト
└── README.md
```

### 簡単なカスタマイズ例
```javascript
// src/renderer/editor.js の一部を修正
const customizeEditor = () => {
  // フォントサイズを大きくする
  const editor = document.querySelector('.editor');
  editor.style.fontSize = '16px';
  
  // カスタムテーマの適用
  editor.classList.add('custom-theme');
  
  // 独自のショートカット追加
  document.addEventListener('keydown', (e) => {
    if (e.metaKey && e.key === 'd') {
      insertCurrentDate();
    }
  });
};

const insertCurrentDate = () => {
  const now = new Date();
  const dateString = now.toISOString().split('T')[0];
  // エディターに日付を挿入
  insertTextAtCursor(dateString);
};
```

### CSS スタイルのカスタマイズ
```css
/* src/renderer/styles/custom.css */
.custom-theme {
  background-color: #1e1e1e;
  color: #ffffff;
  font-family: 'SF Mono', 'Monaco', monospace;
}

.custom-theme .preview {
  background-color: #2d2d2d;
  color: #e0e0e0;
}

/* カスタムスクロールバー */
.custom-theme::-webkit-scrollbar {
  width: 8px;
}

.custom-theme::-webkit-scrollbar-track {
  background: #3a3a3a;
}

.custom-theme::-webkit-scrollbar-thumb {
  background: #6a6a6a;
  border-radius: 4px;
}
```

## テストの実行

### 単体テストの実行
```bash
# すべてのテストを実行
npm test

# 特定のテストファイル
npm test -- --grep "editor"

# カバレッジ付きでテスト実行
npm run test:coverage
```

### E2E テストの実行
```bash
# エンドツーエンドテスト
npm run test:e2e

# ヘッドレスモードで実行
npm run test:e2e:headless
```

### テストの追加
```javascript
// tests/editor.test.js の例
const { expect } = require('chai');
const { Application } = require('spectron');

describe('Editor functionality', () => {
  let app;
  
  beforeEach(async () => {
    app = new Application({
      path: './dist/mac/Markdown Lite.app/Contents/MacOS/Markdown Lite'
    });
    await app.start();
  });
  
  afterEach(async () => {
    if (app && app.isRunning()) {
      await app.stop();
    }
  });
  
  it('should open a file successfully', async () => {
    await app.client.waitUntilWindowLoaded();
    const windowCount = await app.client.getWindowCount();
    expect(windowCount).to.equal(1);
  });
});
```

## デバッグとトラブルシューティング

### 開発者ツールの使用
```javascript
// メインプロセスでの開発者ツール起動
const { BrowserWindow } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      devTools: true // 開発者ツールを有効化
    }
  });
  
  // 開発モードでは自動で開発者ツールを開く
  if (process.env.NODE_ENV === 'development') {
    win.webContents.openDevTools();
  }
};
```

### ログの出力とデバッグ
```javascript
// ログレベルの設定
const log = require('electron-log');
log.transports.console.level = 'debug';
log.transports.file.level = 'info';

// 詳細ログの出力
log.debug('デバッグ情報:', data);
log.info('アプリが起動しました');
log.warn('警告:', warning);
log.error('エラーが発生:', error);
```

### よくあるビルドエラーの解決

**Node.js バージョン不一致**
```bash
# Node.js バージョン管理ツールを使用
nvm install 16
nvm use 16
npm install
```

**Python 関連エラー**
```bash
# macOS での Python 設定
npm config set python python3
export PYTHON_PATH=$(which python3)

# node-gyp の再ビルド
npm rebuild
```

**権限エラー**
```bash
# npm の権限設定
sudo chown -R $(whoami) ~/.npm
sudo chown -R $(whoami) /usr/local/lib/node_modules
```

## パッケージングと配布

### DMG ファイルの作成
```bash
# macOS 用 DMG の作成
npm run build:mac

# カスタム DMG 設定
npm run pack:mac -- --config.dmg.title="Markdown Lite Installer"
```

### コード署名の設定
```bash
# 開発者証明書の確認
security find-identity -v -p codesigning

# 環境変数の設定
export CSC_NAME="Developer ID Application: Your Name"
export CSC_LINK="path/to/certificate.p12"
export CSC_KEY_PASSWORD="certificate_password"

# 署名付きビルド
npm run build:mac
```

### 公証（Notarization）の実行
```bash
# Apple による公証
export APPLE_ID="your-apple-id@example.com"
export APPLE_ID_PASS="app-specific-password"
export APPLE_TEAM_ID="TEAM_ID"

npm run build:mac
```

## コミュニティ貢献

### 開発ガイドラインの確認
```markdown
コントリビューション前のチェック:
□ Issue または Discussion での事前相談
□ コーディングスタイルの確認
□ テストの追加・実行
□ ドキュメントの更新
□ プルリクエストの作成
```

### プルリクエストの作成
```bash
# フォークとクローン
git clone https://github.com/your-username/markdown-lite.git
cd markdown-lite

# 機能ブランチの作成
git checkout -b feature/new-feature

# 変更のコミット
git add .
git commit -m "Add new feature: description"

# プッシュとPR作成
git push origin feature/new-feature
# GitHub で Pull Request を作成
```

---

**関連記事**
- [インストールガイド](../getting-started/install-guide.md)
- [カスタマイズ設定](customization.md)
- [技術的な質問](../faq/technical-questions.md)