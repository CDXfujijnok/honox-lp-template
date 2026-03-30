const plans = [
  {
    name: 'フリープラン',
    price: '¥0',
    period: '永年無料',
    description: '個人・小規模向け。まずは試してみたい方に。',
    features: ['機能A（月10回まで）', '機能B', '機能C', 'メールサポート'],
    cta: '無料で始める',
    highlighted: false,
  },
  {
    name: 'スタンダード',
    price: '¥2,980',
    period: '/ 月（税込）',
    description: '中小企業・成長フェーズのチームに最適。',
    features: ['機能A（無制限）', '機能B', '機能C', '機能D', 'チャットサポート'],
    cta: '14日間無料で試す',
    highlighted: true,
  },
  {
    name: 'エンタープライズ',
    price: '要相談',
    period: '',
    description: '大規模組織・カスタマイズが必要な場合。',
    features: ['スタンダードの全機能', '専任サポート', 'SLA保証', 'カスタム連携'],
    cta: 'お問い合わせ',
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" class="py-24 bg-white px-6">
      <div class="max-w-6xl mx-auto">
        {/* セクションヘッダー */}
        <div class="text-center mb-16">
          <span class="text-blue-600 font-semibold text-sm uppercase tracking-widest">Pricing</span>
          <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
            シンプルな料金プラン
          </h2>
          <p class="text-gray-500 mt-4">
            隠れたコストなし。いつでもアップグレード・解約可能です。
          </p>
        </div>

        {/* プランカード */}
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              class={`rounded-2xl p-8 border ${
                plan.highlighted
                  ? 'border-blue-600 shadow-xl shadow-blue-100 relative'
                  : 'border-gray-200'
              }`}
            >
              {plan.highlighted && (
                <span class="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                  おすすめ
                </span>
              )}
              <h3 class="text-lg font-bold text-gray-900">{plan.name}</h3>
              <div class="mt-4 mb-2">
                <span class="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                {plan.period && (
                  <span class="text-gray-400 text-sm ml-1">{plan.period}</span>
                )}
              </div>
              <p class="text-gray-500 text-sm mb-6">{plan.description}</p>
              <ul class="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} class="flex items-center gap-2 text-sm text-gray-600">
                    <span class="text-blue-500 font-bold">✓</span> {f}
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                class={`block text-center font-bold py-3 rounded-full transition-colors ${
                  plan.highlighted
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
