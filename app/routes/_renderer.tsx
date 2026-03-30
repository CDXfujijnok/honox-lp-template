import { jsxRenderer } from 'hono/jsx-renderer'
import { Link, Script } from 'honox/server'

export default jsxRenderer(({ children, title, description }) => {
  const pageTitle = title ?? 'ServiceName | サービスのキャッチコピー'
  const pageDescription = description ?? '[サービスの説明文をここに記載します。SEOに効果的な120文字程度の文章を入れてください。]'

  return (
    <html lang="ja">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={pageDescription} />
        {/* OGP */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/ogp.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
        <Link href="/app/style.css" rel="stylesheet" />
        <Script src="/app/client.ts" async />
      </head>
      <body class="antialiased">{children}</body>
    </html>
  )
})
