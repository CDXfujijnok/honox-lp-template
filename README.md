# HonoX LP 制作プロジェクト

## HonoX とは？

[HonoX](https://github.com/honojs/honox) は、高速軽量なWebフレームワーク **Hono** をベースにした **メタフレームワーク** です。

### 特徴

| 特徴 | 内容 |
|------|------|
| **高速** | Honoの超高速ルーティングをベースに採用 |
| **Islands Architecture** | 必要な部分だけをクライアントサイドで動作させる設計 |
| **ファイルベースルーティング** | `app/routes/` 配下のファイル名がそのままURLになる |
| **JSX対応** | ReactライクなJSXでUIを記述できる |
| **Vite統合** | Viteによる高速なHMR（ホットリロード）開発環境 |
| **マルチデプロイ** | Cloudflare Pages / AWS Lambda / Node.js 等に対応 |

### Islands Architecture とは？

```
通常のSPA:  全てをJSでレンダリング（重い）
  ┌──────────────────────────────┐
  │  JS JS JS JS JS JS JS JS JS │
  └──────────────────────────────┘

Islands:    静的HTML + 必要な箇所だけJS（軽い）
  ┌──────────────────────────────┐
  │  HTML HTML [🏝Island] HTML  │
  │  HTML [🏝Island] HTML HTML  │
  └──────────────────────────────┘
```

LPのような主に静的なページに最適なアーキテクチャです。

---

## ファイル構造

```
HonoX_test/
├── app/                        # アプリケーション本体
│   ├── routes/                 # ページ（ファイル名 = URL）
│   │   ├── index.tsx           # → / (トップページ)
│   │   ├── _renderer.tsx       # HTMLの共通レイアウト（全ページ共通）
│   │   ├── _404.tsx            # 404エラーページ
│   │   └── _error.tsx          # エラーページ
│   ├── islands/                # クライアントサイドコンポーネント
│   │   └── counter.tsx         # インタラクティブなUIパーツの例
│   ├── components/             # (作成予定) サーバーサイド静的コンポーネント
│   ├── client.ts               # クライアントサイドのエントリポイント
│   ├── server.ts               # サーバーサイドのエントリポイント
│   ├── global.d.ts             # 型定義ファイル
│   └── style.css               # グローバルスタイル
├── public/                     # 静的ファイル（画像・フォント等）
├── node_modules/               # npmパッケージ
├── package.json                # プロジェクト設定・依存関係
├── tsconfig.json               # TypeScript設定
├── vite.config.ts              # Viteビルド設定
└── wrangler.jsonc              # Cloudflare Workers設定
```

### routes/ のファイル命名規則

| ファイル名 | URL | 役割 |
|-----------|-----|------|
| `index.tsx` | `/` | トップページ |
| `about.tsx` | `/about` | aboutページ |
| `_renderer.tsx` | - | 全ページ共通のHTMLラッパー |
| `_404.tsx` | - | 404ページ |
| `_middleware.ts` | - | ミドルウェア |

### islands/ と components/ の違い

| | `islands/` | `components/` |
|--|-----------|--------------|
| 実行場所 | **クライアント**（ブラウザ） | **サーバー**（ビルド時） |
| JavaScript | バンドルされる | バンドルされない |
| 用途 | ボタン・フォーム・アニメーション | ヘッダー・テキスト・静的UI |
| パフォーマンス | JSが必要な分だけ | 最軽量 |

---

## LP 制作手順

### Step 1: 環境構築（完了）

```bash
# Node.js インストール後
npm create hono@latest . -- --template x-basic
npm run dev
# → http://localhost:5173/ で確認
```

### Step 2: Tailwind CSS の導入

```bash
npm install -D tailwindcss @tailwindcss/vite
```

`vite.config.ts` に追記：

```ts
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [honox(), tailwindcss()],
})
```

`app/style.css` に追記：

```css
@import "tailwindcss";
```

### Step 3: LP セクション設計

LPの典型的なセクション構成：

```
/  (index.tsx)
├── Hero        ← キャッチコピー・CTA
├── Features    ← 特徴・強み（3〜4項目）
├── HowItWorks  ← 使い方・フロー
├── Testimonials← お客様の声
├── Pricing     ← 料金プラン（必要に応じて）
├── FAQ         ← よくある質問
├── CTA         ← 最終コールトゥアクション
└── Footer      ← リンク・著作権
```

### Step 4: コンポーネント実装

```
app/
├── components/          # 静的セクションコンポーネント
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── HowItWorks.tsx
│   ├── Footer.tsx
│   └── ...
├── islands/             # 動的コンポーネント
│   ├── ContactForm.tsx  # お問い合わせフォーム
│   ├── Accordion.tsx    # FAQ アコーディオン
│   └── ...
└── routes/
    └── index.tsx        # 各コンポーネントを組み合わせる
```

`app/routes/index.tsx` の例：

```tsx
import Hero from '../components/Hero'
import Features from '../components/Features'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Footer />
    </>
  )
}
```

### Step 5: SEO 対応

`app/routes/_renderer.tsx` でメタタグを設定：

```tsx
export default jsxRenderer(({ children, title, description }) => {
  return (
    <html lang="ja">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <title>{title}</title>
        {/* OGP */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/ogp.png" />
      </head>
      <body>{children}</body>
    </html>
  )
})
```

### Step 6: ビルド・デプロイ

```bash
# ビルド
npm run build

# Cloudflare Pages へデプロイ（wrangler使用）
npx wrangler pages deploy dist
```

---

## 開発コマンド

```bash
# 開発サーバー起動
npm run dev

# プロダクションビルド
npm run build

# ビルド結果のプレビュー
npm run preview
```

---

## 参考リンク

- [HonoX GitHub](https://github.com/honojs/honox)
- [Hono 公式ドキュメント](https://hono.dev/)
- [Vite 公式ドキュメント](https://vitejs.dev/)
