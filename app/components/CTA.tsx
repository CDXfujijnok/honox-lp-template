export default function CTA() {
  return (
    <section id="cta" class="py-24 bg-blue-600 px-6 text-center">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-extrabold text-white mb-4">
          今すぐ無料で始めましょう
        </h2>
        <p class="text-blue-100 text-lg mb-10">
          クレジットカード不要。14日間のトライアルでリスクなく試せます。
        </p>

        {/* メール入力フォーム */}
        <form class="flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto">
          <input
            type="email"
            placeholder="メールアドレスを入力"
            class="flex-1 px-5 py-4 rounded-full text-gray-900 outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            class="bg-white text-blue-600 font-bold px-8 py-4 rounded-full hover:bg-blue-50 transition-colors whitespace-nowrap"
          >
            無料で始める →
          </button>
        </form>

        <p class="mt-6 text-blue-200 text-sm">
          ✓ 14日間無料　✓ クレジットカード不要　✓ いつでもキャンセル可
        </p>
      </div>
    </section>
  )
}
