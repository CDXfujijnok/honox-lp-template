export default function Footer() {
  return (
    <footer class="bg-gray-900 text-gray-400 py-16 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* ブランド */}
          <div class="md:col-span-1">
            <p class="text-white font-bold text-xl mb-3">ServiceName</p>
            <p class="text-sm leading-relaxed">
              [サービスの簡単な説明文をここに記載します。]
            </p>
          </div>

          {/* リンク群 */}
          <div>
            <p class="text-white font-semibold mb-4">サービス</p>
            <ul class="space-y-2 text-sm">
              <li><a href="#features" class="hover:text-white transition-colors">特徴</a></li>
              <li><a href="#pricing" class="hover:text-white transition-colors">料金</a></li>
              <li><a href="#faq" class="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <p class="text-white font-semibold mb-4">会社情報</p>
            <ul class="space-y-2 text-sm">
              <li><a href="#" class="hover:text-white transition-colors">会社概要</a></li>
              <li><a href="#" class="hover:text-white transition-colors">採用情報</a></li>
              <li><a href="#" class="hover:text-white transition-colors">お問い合わせ</a></li>
            </ul>
          </div>

          <div>
            <p class="text-white font-semibold mb-4">法的情報</p>
            <ul class="space-y-2 text-sm">
              <li><a href="#" class="hover:text-white transition-colors">利用規約</a></li>
              <li><a href="#" class="hover:text-white transition-colors">プライバシーポリシー</a></li>
              <li><a href="#" class="hover:text-white transition-colors">特定商取引法</a></li>
            </ul>
          </div>
        </div>

        <div class="border-t border-gray-800 pt-8 text-center text-sm">
          <p>© 2026 ServiceName. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
