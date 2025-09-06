'use client'

import { useState } from 'react'

const seminars = [
  {
    id: 'ai-exploration',
    title: '探究心と好奇心をAIで広げる',
    subtitle: '小学5〜6年生向け',
    description: '子どもの「なぜ？」を深掘りし、AIを使って探究学習を加速させる方法を学びます',
    duration: '90分',
    price: '¥5,000',
    instructor: {
      name: '田中 健太',
      title: 'AI教育スペシャリスト',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face',
      bio: '元Google Japan、教育×AI領域で10年の経験'
    },
    features: [
      'ChatGPTを使った調べ学習の方法',
      '画像生成AIで創造力を表現',
      '親子で取り組める探究プロジェクト',
      'デジタルリテラシーの基礎'
    ],
    schedule: '2025年10月20日（日）10:00-11:30',
    capacity: '親子6組限定',
    formUrl: 'https://forms.google.com/your-form-1'
  },
  {
    id: 'ai-english',
    title: '英検と"使える英語"を両立',
    subtitle: 'AI時代の家庭学習メニュー設計',
    description: 'AIツールを活用して、試験対策と実用的な英語力を同時に身につける学習法',
    duration: '120分',
    price: '¥5,000',
    instructor: {
      name: 'Sarah Johnson',
      title: '英語教育コンサルタント',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b29c?w=60&h=60&fit=crop&crop=face',
      bio: 'TESOL認定講師、AI英語学習法の第一人者'
    },
    features: [
      'AI英会話アプリの効果的な使い方',
      '英検対策×実践英語の学習設計',
      '発音矯正AIツールの活用法',
      '家庭での英語環境づくり'
    ],
    schedule: '2025年10月27日（日）13:00-15:00',
    capacity: '親子8組限定',
    formUrl: 'https://forms.google.com/your-form-2'
  },
  {
    id: 'ai-study',
    title: '東大生が教えるAI×勉強効率化',
    subtitle: '成績を上げる最新学習法',
    description: '現役東大生が実践する、AIを活用した効率的な学習方法を伝授します',
    duration: '90分',
    price: '¥5,000',
    instructor: {
      name: '山田 太郎',
      title: '東京大学工学部4年',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face',
      bio: '全国模試1位、AI学習法で偏差値20アップ'
    },
    features: [
      'AIを使った暗記術・理解促進法',
      '苦手科目の克服戦略',
      'テスト対策の時間配分最適化',
      '集中力を高めるAIツール活用'
    ],
    schedule: '2025年10月6日（日）14:00-15:30',
    capacity: '10名限定',
    formUrl: 'https://forms.google.com/your-form-3'
  }
]

export default function SeminarSection() {
  const [expandedSeminar, setExpandedSeminar] = useState<string | null>(null)

  return (
    <section id="seminars" className="py-24 bg-gradient-to-b from-[#f8f9fa] via-[#f3f8fc] to-[#eceff1]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-[#0073e6] text-sm font-semibold rounded-full mb-6">
            2025年10月開催
          </span>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            選べる3つのセミナー
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            お子様の興味と目標に合わせて、最適なセミナーをお選びください
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {seminars.map((seminar, index) => (
            <div 
              key={seminar.id}
              className="group relative bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              style={{
                animation: `fadeIn 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Gradient accent */}
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${
                index === 0 ? 'from-[#0073e6] to-[#4da3ff]' :
                index === 1 ? 'from-[#f59023] to-[#ffa94d]' :
                'from-[#63ad5d] to-[#7dc077]'
              }`} />
              
              <div className="p-8">
                {/* Header */}
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-500 mb-2">{seminar.subtitle}</p>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                    {seminar.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {seminar.description}
                  </p>
                </div>

                {/* Instructor */}
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <img 
                      src={seminar.instructor.image} 
                      alt={seminar.instructor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{seminar.instructor.name}</p>
                    <p className="text-sm text-gray-600">{seminar.instructor.title}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">学べること</h4>
                  <ul className="space-y-2">
                    {seminar.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <svg className="w-4 h-4 text-[#0073e6] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {seminar.features.length > 3 && (
                    <button
                      onClick={() => setExpandedSeminar(expandedSeminar === seminar.id ? null : seminar.id)}
                      className="text-sm text-[#0073e6] font-semibold mt-2 hover:underline"
                    >
                      {expandedSeminar === seminar.id ? '閉じる' : 'さらに見る'}
                    </button>
                  )}
                  {expandedSeminar === seminar.id && (
                    <ul className="space-y-2 mt-2">
                      {seminar.features.slice(3).map((feature, idx) => (
                        <li key={idx + 3} className="flex items-start text-sm text-gray-600">
                          <svg className="w-4 h-4 text-[#0073e6] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                        </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Details */}
                <div className="space-y-3 pb-6 border-b border-gray-100 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">日時</span>
                    <span className="text-sm font-semibold text-gray-900">{seminar.schedule}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">時間</span>
                    <span className="text-sm font-semibold text-gray-900">{seminar.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">定員</span>
                    <span className="text-sm font-semibold text-gray-900">{seminar.capacity}</span>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm text-gray-600">受講料</p>
                    <p className="text-3xl font-bold text-gray-900">{seminar.price}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-orange-600 font-semibold mb-1">残りわずか</p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i} 
                          className={`w-2 h-2 rounded-full ${
                            i < 2 ? 'bg-orange-400' : 'bg-gray-200'
                          }`} 
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Money Back Guarantee */}
                <div className="text-center text-xs text-gray-500 mb-3">
                  <svg className="w-3 h-3 text-green-600 inline mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  満足保証付き・7日間全額返金対応
                </div>

                {/* Enrollment Button */}
                <a
                  href={`/seminar-${seminar.id.replace('ai-', 'ai-')}`}
                  className="block w-full py-4 bg-[#0073e6] text-white font-semibold rounded-2xl hover:bg-[#0052cc] transition-all duration-300 text-center transform hover:scale-105 shadow-lg"
                >
                  このセミナーに申し込む
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}