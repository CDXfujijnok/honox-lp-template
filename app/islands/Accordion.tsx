import { useState } from 'hono/jsx'

const faqs = [
  {
    question: 'よくある質問 1：無料トライアルはどのくらいの期間ですか？',
    answer:
      '14日間の無料トライアルをご利用いただけます。トライアル期間中はすべての機能をお試しいただけます。クレジットカードの登録は不要です。',
  },
  {
    question: 'よくある質問 2：契約期間の縛りはありますか？',
    answer:
      '月払いプランはいつでも解約可能です。年払いプランは一括払いとなりますが、より大きな割引が適用されます。',
  },
  {
    question: 'よくある質問 3：複数人で使えますか？',
    answer:
      'スタンダードプラン以上では複数名でのご利用が可能です。チームメンバーを招待してご活用ください。',
  },
  {
    question: 'よくある質問 4：データのエクスポートはできますか？',
    answer:
      'CSV・PDF形式でのエクスポートに対応しています。いつでもデータを取り出すことができます。',
  },
  {
    question: 'よくある質問 5：サポートはどのように受けられますか？',
    answer:
      'フリープランはメールサポート、スタンダード以上はチャットサポートを提供しています。通常24時間以内に回答いたします。',
  },
]

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" class="py-24 bg-gray-50 px-6">
      <div class="max-w-3xl mx-auto">
        {/* セクションヘッダー */}
        <div class="text-center mb-16">
          <span class="text-blue-600 font-semibold text-sm uppercase tracking-widest">FAQ</span>
          <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
            よくあるご質問
          </h2>
          <p class="text-gray-500 mt-4">
            ご不明な点はお気軽にお問い合わせください。
          </p>
        </div>

        {/* アコーディオン */}
        <div class="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              class="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                type="button"
                class="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
                onClick={() => toggle(index)}
              >
                <span>{faq.question}</span>
                <span class={`text-blue-600 text-xl transition-transform duration-200 ${openIndex === index ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              {openIndex === index && (
                <div class="px-6 pb-5 text-gray-500 leading-relaxed text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
