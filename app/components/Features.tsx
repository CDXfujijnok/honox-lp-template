const features = [
  {
    icon: '⚡',
    title: '特徴タイトル 1',
    description:
      'ここに特徴の説明文を入れてください。ユーザーが得られるベネフィットを具体的に記載します。',
  },
  {
    icon: '🔒',
    title: '特徴タイトル 2',
    description:
      'ここに特徴の説明文を入れてください。ユーザーが得られるベネフィットを具体的に記載します。',
  },
  {
    icon: '📈',
    title: '特徴タイトル 3',
    description:
      'ここに特徴の説明文を入れてください。ユーザーが得られるベネフィットを具体的に記載します。',
  },
  {
    icon: '🎯',
    title: '特徴タイトル 4',
    description:
      'ここに特徴の説明文を入れてください。ユーザーが得られるベネフィットを具体的に記載します。',
  },
  {
    icon: '🤝',
    title: '特徴タイトル 5',
    description:
      'ここに特徴の説明文を入れてください。ユーザーが得られるベネフィットを具体的に記載します。',
  },
  {
    icon: '💡',
    title: '特徴タイトル 6',
    description:
      'ここに特徴の説明文を入れてください。ユーザーが得られるベネフィットを具体的に記載します。',
  },
]

export default function Features() {
  return (
    <section id="features" class="py-24 bg-white px-6">
      <div class="max-w-6xl mx-auto">
        {/* セクションヘッダー */}
        <div class="text-center mb-16">
          <span class="text-blue-600 font-semibold text-sm uppercase tracking-widest">Features</span>
          <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
            選ばれる3つの理由
          </h2>
          <p class="text-gray-500 mt-4 max-w-xl mx-auto">
            [サービス名] がどのように課題を解決するか、主な特徴をご紹介します。
          </p>
        </div>

        {/* 特徴グリッド */}
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              class="p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow bg-gray-50"
            >
              <div class="text-4xl mb-4">{f.icon}</div>
              <h3 class="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
              <p class="text-gray-500 text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
