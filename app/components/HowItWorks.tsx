const steps = [
  {
    step: '01',
    title: 'アカウント登録',
    description: 'メールアドレスを入力するだけで即時登録完了。クレジットカード不要です。',
  },
  {
    step: '02',
    title: '初期設定',
    description: 'ガイドに沿って3分で初期設定が完了します。専門知識は一切不要です。',
  },
  {
    step: '03',
    title: '成果を確認',
    description: 'ダッシュボードでリアルタイムに成果を確認。すぐに効果が実感できます。',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" class="py-24 bg-blue-50 px-6">
      <div class="max-w-4xl mx-auto">
        {/* セクションヘッダー */}
        <div class="text-center mb-16">
          <span class="text-blue-600 font-semibold text-sm uppercase tracking-widest">How it works</span>
          <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
            たった3ステップで始められる
          </h2>
          <p class="text-gray-500 mt-4">
            複雑な設定は一切不要。今すぐ始められます。
          </p>
        </div>

        {/* ステップ */}
        <div class="flex flex-col gap-8">
          {steps.map((s, i) => (
            <div key={s.step} class="flex gap-6 items-start">
              {/* ステップ番号 */}
              <div class="flex-shrink-0 w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center font-extrabold text-lg">
                {s.step}
              </div>
              {/* 縦線（最後以外） */}
              <div class="flex flex-col flex-1">
                <h3 class="text-xl font-bold text-gray-900 mb-1">{s.title}</h3>
                <p class="text-gray-500 leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
