export default function Header() {
  return (
    <header class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" class="text-xl font-bold text-gray-900">
          {/* ロゴ・サービス名 */}
          ServiceName
        </a>
        <nav class="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="#features" class="hover:text-gray-900 transition-colors">特徴</a>
          <a href="#how-it-works" class="hover:text-gray-900 transition-colors">使い方</a>
          <a href="#pricing" class="hover:text-gray-900 transition-colors">料金</a>
          <a href="#faq" class="hover:text-gray-900 transition-colors">FAQ</a>
        </nav>
        <a
          href="#cta"
          class="bg-blue-600 text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-blue-700 transition-colors"
        >
          無料で始める
        </a>
      </div>
    </header>
  )
}
