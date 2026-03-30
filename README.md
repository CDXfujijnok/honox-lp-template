# HonoX LP テンプレート

> 新しいLPを作る際は [GitHub テンプレート](https://github.com/CDXfujijnok/honox-lp-template) の **「Use this template」** から複製してください。

---

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
| **Tailwind CSS v4** | `@tailwindcss/vite` によりゼロ設定で利用可能 |
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
honox-lp-template/
├── app/                        # アプリケーション本体
│   ├── routes/                 # ページ（ファイル名 = URL）
│   │   ├── index.tsx           # → / (トップページ)
│   │   ├── _renderer.tsx       # HTMLの共通レイアウト（全ページ共通）
│   │   ├── _404.tsx            # 404エラーページ
│   │   └── _error.tsx          # エラーページ
│   ├── islands/                # クライアントサイドコンポーネント（JS同梱）
│   │   └── counter.tsx         # インタラクティブなUIパーツの例
│   ├── components/             # (作成予定) サーバーサイド静的コンポーネント
│   ├── client.ts               # クライアントサイドのエントリポイント
│   ├── server.ts               # サーバーサイドのエントリポイント
│   ├── global.d.ts             # 型定義ファイル
│   └── style.css               # グローバルスタイル（Tailwind CSS）
├── public/                     # 静的ファイル（画像・フォント等）
├── Dockerfile                  # Docker イメージ定義（dev / builder / prod）
├── docker-compose.yml          # Docker Compose 開発環境設定
├── .dockerignore               # Dockerビルド除外設定
├── .gitattributes              # 改行コード統一設定
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

## 開発環境のセットアップ（初回のみ）

### 方法A: ローカル（Node.js）

```bash
node -v   # v24以上を確認
npm install
npm run dev
# → http://localhost:5173/
```

### 方法B: Docker（チーム開発推奨）

```bash
docker compose up
# → http://localhost:5173/
```

> Docker Desktop がインストールされている必要があります。

---

## 新しいLPの作り方（テンプレートから複製）

```
1. GitHub: https://github.com/CDXfujijnok/honox-lp-template
           「Use this template」→「Create a new repository」
                ↓
2. 新リポジトリ名を入力（例: lp-service-a）して作成
                ↓
3. SourceTree でクローン
   クローン先: C:\Users\kfuji\Desktop\lp-service-a
                ↓
4. docker compose up  または  npm run dev
                ↓
5. 開発開始！
```

---

## ブランチ運用（チーム開発）

```
main ─────────────────────────── 本番リリース用（直接コミット禁止）
  └── develop ───────────────── 開発統合ブランチ
        ├── feature/hero        各自の作業ブランチ
        ├── feature/footer
        └── feature/contact-form
```

| ブランチ | 用途 | 操作 |
|---|---|---|
| `main` | 本番（触らない） | `develop` からのマージのみ |
| `develop` | 開発の統合先 | PR経由でマージ |
| `feature/xxx` | 各機能・セクションの作業用 | 自由に作業 |

---

## LP セクション構成（実装ガイド）

```
/  (app/routes/index.tsx)
├── Header      ← ナビゲーション
├── Hero        ← キャッチコピー・メインCTA
├── Features    ← 特徴・強み（3〜4項目）
├── HowItWorks  ← 使い方・フロー
├── Testimonials← お客様の声
├── Pricing     ← 料金プラン（必要に応じて）
├── FAQ         ← よくある質問（Islandコンポーネント）
├── CTA         ← 最終コールトゥアクション
└── Footer      ← リンク・著作権
```

### コンポーネント配置

```
app/
├── components/          # 静的セクション（サーバーサイド）
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── HowItWorks.tsx
│   ├── Footer.tsx
│   └── ...
├── islands/             # 動的コンポーネント（クライアントサイド）
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

---

## SEO 対応

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

---

## 開発コマンド

```bash
# 開発サーバー起動
npm run dev

# プロダクションビルド
npm run build

# ビルド結果のプレビュー
npm run preview

# Cloudflare Pages へデプロイ
npm run deploy
```

---

## 技術スタック

| 技術 | バージョン | 役割 |
|---|---|---|
| HonoX | ^0.1.55 | メタフレームワーク |
| Hono | ^4.12.9 | Webフレームワーク |
| Vite | ^6.x | ビルドツール・開発サーバー |
| Tailwind CSS | ^4.x | スタイリング |
| TypeScript | - | 型安全 |
| Node.js | v24 LTS | ランタイム |
| Docker | - | 開発環境コンテナ |

---

## 参考リンク

- [HonoX GitHub](https://github.com/honojs/honox)
- [Hono 公式ドキュメント](https://hono.dev/)
- [Vite 公式ドキュメント](https://vitejs.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [テンプレートリポジトリ](https://github.com/CDXfujijnok/honox-lp-template)
