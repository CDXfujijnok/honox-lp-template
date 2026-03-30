export default function Hero() {
  return (
    <section class="pt-32 pb-24 bg-gradient-to-b from-blue-50 to-white text-center px-6">
      <div class="max-w-4xl mx-auto">
        {/* バッジ */}
        <span class="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
          🎉 キャッチフレーズ・バッジテキスト
        </span>

        {/* メインキャッチコピー */}
        <h1 class="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          あなたのビジネスを<br />
          <span class="text-blue-600">次のステージへ</span>
        </h1>

        {/* サブコピー */}
        <p class="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10">
          [サービス名] は、〇〇に悩む方のために作られた△△ツールです。
          導入3分、即日効果を実感できます。
        </p>

        {/* CTA ボタン */}
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#cta"
            class="bg-blue-600 text-white font-bold text-lg px-10 py-4 rounded-full hover:bg-blue-700 transition-colors shadow-lg"
          >
            無料で始める →
          </a>
          <a
            href="#how-it-works"
            class="text-gray-600 font-medium text-lg px-10 py-4 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            使い方を見る
          </a>
        </div>

        {/* 信頼バッジ */}
        <p class="mt-8 text-sm text-gray-400">
          ✓ クレジットカード不要　✓ 14日間無料トライアル　✓ いつでもキャンセル可
        </p>
      </div>
    </section>
  )
}
