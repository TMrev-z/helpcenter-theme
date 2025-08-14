# Markdown記法完全ガイド

Markdown Lite で使用できるMarkdown記法を網羅的に解説します。初心者から上級者まで活用できる内容です。

## 基本記法

### 見出し（Headers）

```markdown
# 見出し1 (H1)
## 見出し2 (H2)
### 見出し3 (H3)
#### 見出し4 (H4)
##### 見出し5 (H5)
###### 見出し6 (H6)
```

**表示結果:**
# 見出し1 (H1)
## 見出し2 (H2)
### 見出し3 (H3)

### 強調・装飾

```markdown
**太字**
__太字（別記法）__

*斜体*
_斜体（別記法）_

***太字かつ斜体***
___太字かつ斜体（別記法）___

~~取り消し線~~
```

**表示結果:**
- **太字**
- *斜体*
- ***太字かつ斜体***
- ~~取り消し線~~

### 段落と改行

```markdown
これは段落1です。
空行で段落を分割します。

これは段落2です。
行末に2つのスペース  
を入れると強制改行されます。
```

## リストの作成

### 順序なしリスト

```markdown
- 項目1
- 項目2
  - サブ項目2-1
  - サブ項目2-2
- 項目3

または

* 項目1
* 項目2
* 項目3

または

+ 項目1
+ 項目2
+ 項目3
```

### 順序付きリスト

```markdown
1. 第一項目
2. 第二項目
   1. サブ項目1
   2. サブ項目2
3. 第三項目
```

### タスクリスト

```markdown
- [x] 完了したタスク
- [ ] 未完了のタスク
- [x] ✅ 完了したタスク（絵文字付き）
- [ ] ⭐ 重要な未完了タスク
```

**表示結果:**
- ✅ 完了したタスク
- ⬜ 未完了のタスク

## リンクと画像

### リンク

```markdown
[表示テキスト](https://example.com)
[タイトル付きリンク](https://example.com "ツールチップテキスト")
<https://example.com>

# 参照リンク
[参照リンクテキスト][1]
[別の参照リンク][reference-link]

[1]: https://example.com
[reference-link]: https://another-example.com "タイトル"
```

### 画像

```markdown
![代替テキスト](path/to/image.png)
![タイトル付き画像](path/to/image.png "画像のタイトル")

# 参照形式の画像
![代替テキスト][image-ref]

[image-ref]: path/to/image.png "画像タイトル"
```

### 画像のサイズ調整（HTML記法）

```html
<img src="image.png" alt="代替テキスト" width="300">
<img src="image.png" alt="代替テキスト" width="50%">
<img src="image.png" alt="代替テキスト" style="width: 400px; height: auto;">
```

## コードの記述

### インラインコード

```markdown
`変数名` や `関数()` のように文中でコードを表現
```

**表示結果:** `変数名` や `関数()` のように文中でコードを表現

### コードブロック

````markdown
```javascript
function hello(name) {
    console.log(`Hello, ${name}!`);
}

hello("World");
```

```python
def greet(name):
    print(f"Hello, {name}!")

greet("Python")
```

```bash
# シェルコマンド例
ls -la
cd /path/to/directory
```
````

### インデント形式のコードブロック

```markdown
    // 4つのスペースでインデント
    function example() {
        return "Hello World";
    }
```

## 表（テーブル）

```markdown
| 列1 | 列2 | 列3 |
|-----|-----|-----|
| データ1 | データ2 | データ3 |
| 長いデータ | 短い | 中程度のデータ |

# 位置揃え指定
| 左寄せ | 中央 | 右寄せ |
|:-------|:----:|-------:|
| Left | Center | Right |
| L | C | R |
```

**表示結果:**

| 列1 | 列2 | 列3 |
|-----|-----|-----|
| データ1 | データ2 | データ3 |
| 長いデータ | 短い | 中程度のデータ |

## 引用

```markdown
> これは引用文です。
> 複数行にわたって
> 引用を記述できます。

> ### 引用内での見出し
> 
> 引用内でも **太字** や *斜体* が使用可能です。
>
> > ネストした引用も可能
```

**表示結果:**
> これは引用文です。
> 複数行にわたって
> 引用を記述できます。

## 水平線

```markdown
---

***

___

- - -

* * *
```

**表示結果:**

---

## エスケープ

```markdown
\*この文字はエスケープされます\*
\# エスケープされた見出し記号
\`エスケープされたバッククォート\`

# 特殊文字
\\ バックスラッシュ
\` バッククォート
\* アスタリスク
\_ アンダースコア
\{\} 波括弧
\[\] 角括弧
\(\) 丸括弧
\# ハッシュマーク
\+ プラス記号
\- マイナス記号（ハイフン）
\. ドット
\! 感嘆符
```

## 高度な記法

### HTML の直接記述

```html
<details>
<summary>クリックして詳細を表示</summary>

これは折りたたみ可能なコンテンツです。
**Markdown記法** も使用できます。

</details>

<kbd>Ctrl</kbd> + <kbd>C</kbd>

<mark>ハイライト表示</mark>
```

### 脚注（Footnote）

```markdown
これは脚注付きの文章です[^1]。

別の脚注も作成できます[^note]。

[^1]: これが脚注の内容です。
[^note]: 名前付きの脚注も可能です。
```

### 数式（LaTeX記法）

```markdown
インライン数式: $E = mc^2$

ブロック数式:
$$
\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}
$$
```

## 実践的な使用例

### ドキュメント構造の例

```markdown
# プロジェクト名

## 概要
このプロジェクトは...

## インストール方法

### 前提条件
- Node.js 16.x 以上
- npm または yarn

### 手順
1. リポジトリをクローン
   ```bash
   git clone https://github.com/user/repo.git
   ```
2. 依存関係をインストール
   ```bash
   npm install
   ```

## 使用方法

基本的な使い方:
```javascript
import { MyFunction } from './lib';

const result = MyFunction('parameter');
console.log(result);
```

## ライセンス
MIT License - 詳細は [LICENSE](LICENSE) ファイルを参照
```

### README.md テンプレート

```markdown
# プロジェクト名

![バージョン](https://img.shields.io/badge/version-1.0.0-blue.svg)
![ライセンス](https://img.shields.io/badge/license-MIT-green.svg)

## 📋 目次

- [概要](#概要)
- [特徴](#特徴)
- [インストール](#インストール)
- [使用方法](#使用方法)
- [貢献](#貢献)
- [ライセンス](#ライセンス)

## 🎯 概要

このプロジェクトは...

## ✨ 特徴

- [x] 機能1: 詳細説明
- [x] 機能2: 詳細説明
- [ ] 機能3: 開発予定

## 🚀 インストール

```bash
npm install project-name
```

## 💡 使用方法

詳細な使用例...

## 🤝 貢献

貢献は大歓迎です！以下の手順でお願いします：

1. プロジェクトをフォーク
2. 機能ブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📄 ライセンス

[MIT](LICENSE) © [Author Name]
```

---

**関連記事**
- [基本的な使い方ガイド](basic-usage.md)
- [効率的な編集のコツ](../features-guide/editing-tips.md)
- [画像とメディアの活用](../features-guide/media-handling.md)