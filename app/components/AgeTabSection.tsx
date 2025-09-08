'use client'

import { useState } from 'react'

const ageGroups = {
  kindergarten: {
    label: '年中・年長',
    plans: [
      {
        title: 'はじめてのAI体験',
        features: [
          '身の回りのAI（Siri、アレクサ）と遊ぼう',
          'お絵かきAIで一緒に創作体験',
          '親子でAIと対話してみよう'
        ]
      },
      {
        title: 'デジタル創作入門',
        features: [
          'タブレットでお絵かき・音楽作り',
          '写真を使ったデジタルアート',
          'かんたんプログラミング遊び'
        ]
      },
      {
        title: 'AIと学ぶことば',
        features: [
          '音声AIと楽しくおしゃべり',
          'デジタル絵本を一緒に読もう',
          'AIが作る物語を聞いてみよう'
        ]
      }
    ]
  },
  elementary_low: {
    label: '小1・小2',
    plans: [
      {
        title: 'AIと一緒に探究',
        features: [
          'ChatGPTに質問して疑問を解決',
          'AIアシスタントと実験計画',
          '自分の疑問をAIに上手に伝える方法'
        ]
      },
      {
        title: 'AIプログラミング',
        features: [
          'ScratchでAIキャラクター作り',
          '音声認識ロボットで遊ぼう',
          'AIが作ったコードを理解してみよう'
        ]
      },
      {
        title: 'AIクリエイティブ',
        features: [
          '画像生成AIでオリジナルアート',
          'AIと一緒に物語を作ろう',
          '音楽生成AIで作曲体験'
        ]
      }
    ]
  },
  elementary_mid: {
    label: '小3・小4',
    plans: [
      {
        title: 'AIで社会課題を解決',
        features: [
          '環境問題をAIで調べて解決策を提案',
          'AIを使った情報収集と分析',
          'データをグラフで表示して発表'
        ]
      },
      {
        title: 'AIコーディング',
        features: [
          'PythonでAIプログラム作り',
          '自分だけのAIチャットボット開発',
          '機械学習の仕組みを理解しよう'
        ]
      },
      {
        title: 'AIメディア制作',
        features: [
          'AI動画編集でオリジナルムービー',
          '音声合成AIでポッドキャスト',
          'AIインフルエンサーになってみよう'
        ]
      }
    ]
  },
  elementary_high: {
    label: '小5・小6',
    plans: [
      {
        title: 'AIで未来を創造',
        features: [
          'AIを使ってSDGs課題を解決しよう',
          '自分だけのAIサービスを企画しよう',
          'AIを活用した英語プレゼンテーション'
        ]
      },
      {
        title: 'AIエンジニア入門',
        features: [
          'Pythonで本格的なAIプログラム作り',
          '機械学習モデルを作ってみよう',
          'データサイエンスで未来を予測'
        ]
      },
      {
        title: 'AI起業家体験',
        features: [
          'AIスタートアップのビジネスモデル作り',
          'AIプロダクトのプロトタイプ開発',
          '投資家にAIビジネスをピッチ'
        ]
      }
    ]
  }
}

export default function AgeTabSection() {
  const [activeTab, setActiveTab] = useState<keyof typeof ageGroups>('kindergarten')

  return (
    <section id="curriculum" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            年齢に合わせたカリキュラム
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            お子様の成長段階に最適化された、段階的な学習プログラム
          </p>
        </div>
        
        {/* Age Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.entries(ageGroups).map(([key, group]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as keyof typeof ageGroups)}
              className={`px-6 py-3 font-semibold rounded-full transition-all duration-300 ${
                activeTab === key
                  ? 'bg-[#0073e6] text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-[#0073e6] hover:text-[#0073e6]'
              }`}
            >
              {group.label}
            </button>
          ))}
        </div>

        {/* Plan Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {ageGroups[activeTab].plans.map((plan, index) => (
            <div 
              key={index} 
              className="group bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-[#0073e6]/30 hover:shadow-xl transition-all duration-300 card-hover"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                index === 0 ? 'bg-gradient-to-br from-[#0073e6] to-[#4da3ff]' :
                index === 1 ? 'bg-gradient-to-br from-[#f59023] to-[#ffa94d]' :
                'bg-gradient-to-br from-[#63ad5d] to-[#7dc077]'
              }`}>
                <span className="text-white text-xl font-bold">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {plan.title}
              </h3>
              <ul className="space-y-3 text-gray-600 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <span className="text-[#0073e6] mr-2 mt-0.5">✓</span>
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 bg-gray-50 text-gray-700 font-semibold rounded-full hover:bg-[#0073e6] hover:text-white transition-all duration-300">
                詳しく見る
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
