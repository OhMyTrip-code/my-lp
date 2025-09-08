'use client'

import { useState } from 'react'

const seminars = [
  {
    id: 'parents-chatgpt',
    title: '保護者向け：ChatGPTの始め方',
    subtitle: '保護者さま限定・無料セミナー',
    description: 'まずは保護者さまご自身がChatGPTの便利さと安全な使い方を体感。家庭での活用設計まで短時間で掴めます。',
    duration: '60分',
    price: '無料',
    features: [
      '今日から使えるプロンプトの基本',
      '宿題サポート/仕事効率化の実例',
      '子どもに安全に使わせるルール作り',
      '家庭での運用テンプレを配布'
    ],
    scheduleInfo: '今だけ無料開催',
    timeSlots: {
      weekdays: ['20:00-21:00', '21:00-22:00'],
      weekends: ['10:00-11:00', '21:00-22:00']
    },
    capacity: '保護者向けオンライン（各回）',
    formUrl: 'https://forms.google.com/parents-chatgpt'
  },
  {
    id: 'ai-exploration',
    title: '探究心と好奇心をAIで広げる',
    subtitle: '小学5〜6年生向け',
    description: '子どもの「なぜ？」を深掘りし、AIを使って探究学習を加速させる方法を学びます',
    duration: '90分',
    price: '¥5,000',
    features: [
      'ChatGPTを使った調べ学習の方法',
      '画像生成AIで創造力を表現',
      '親子で取り組める探究プロジェクト',
      'デジタルリテラシーの基礎'
    ],
    scheduleInfo: '10月中月10回開催',
    timeSlots: {
      weekdays: ['18:00-20:00', '21:00-23:00'],
      weekends: ['10:00-12:00', '18:00-20:00', '21:00-23:00']
    },
    capacity: '親子6組限定（各回）',
    formUrl: 'https://forms.google.com/your-form-1'
  },
  {
    id: 'ai-english',
    title: '英検と"使える英語"を両立',
    subtitle: 'AI時代の家庭学習メニュー設計',
    description: 'AIツールを活用して、試験対策と実用的な英語力を同時に身につける学習法',
    duration: '120分',
    price: '¥5,000',
    features: [
      'AI英会話アプリの効果的な使い方',
      '英検対策×実践英語の学習設計',
      '発音矯正AIツールの活用法',
      '家庭での英語環境づくり'
    ],
    scheduleInfo: '10月中月10回開催',
    timeSlots: {
      weekdays: ['18:00-20:00', '21:00-23:00'],
      weekends: ['10:00-12:00', '18:00-20:00', '21:00-23:00']
    },
    capacity: '親子6組限定（各回）',
    formUrl: 'https://forms.google.com/your-form-2'
  },
  {
    id: 'ai-study',
    title: '東大生が教えるAI×勉強効率化',
    subtitle: '成績を上げる最新学習法',
    description: '現役東大生が実践する、AIを活用した効率的な学習方法を伝授します',
    duration: '90分',
    price: '¥5,000',
    features: [
      'AIを使った暗記術・理解促進法',
      '苦手科目の克服戦略',
      'テスト対策の時間配分最適化',
      '集中力を高めるAIツール活用'
    ],
    scheduleInfo: '10月中月10回開催',
    timeSlots: {
      weekdays: ['18:00-20:00', '21:00-23:00'],
      weekends: ['10:00-12:00', '18:00-20:00', '21:00-23:00']
    },
    capacity: '親子6組限定（各回）',
    formUrl: 'https://forms.google.com/your-form-3'
  }
]

export default function SeminarSection() {
  const [expandedSeminar, setExpandedSeminar] = useState<string | null>(null)

  return (
    <section id="seminars" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-blue-100 text-[#0073e6] text-sm font-semibold rounded-full mb-6">
            2025年10月開催
          </span>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-3 tracking-tight animate-fadeInUp">
            開催予定セミナー
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto leading-relaxed">
            まずは保護者さま向けのChatGPT無料セミナーから。続けてお子さま向けの各セミナーをご案内します。
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {seminars.map((seminar, index) => (
            <div 
              key={seminar.id}
              className="group relative bg-white rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
              style={{
                animation: `fadeInUp 0.8s ease-out ${index * 0.2}s both`
              }}
            >
              {/* Accent + Free badge for parents seminar */}
              <div className="absolute inset-x-0 top-0 h-1 topline-gradient" />
              {seminar.id === 'parents-chatgpt' && (
                <div className="absolute left-4 top-4 z-10">
                  <span className="badge-free">今だけ無料！</span>
                  <span className="ml-2 text-xs font-semibold text-[#0073e6] bg-blue-50 border border-blue-100 rounded-full px-2 py-0.5">保護者向け</span>
                </div>
              )}
              
              <div className="p-8 flex-1 flex flex-col">
                {/* Header */}
                <div className="mb-6">
                  <p className="text-xs font-semibold text-gray-500 mb-2">{seminar.subtitle}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                    {seminar.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {seminar.description}
                  </p>
                </div>


                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">学べること</h4>
                  <ul className="space-y-2">
                    {seminar.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <span className="text-[#0073e6] mr-2">✓</span>
                        <span>{feature}</span>
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

                {/* Schedule Information */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">開催枠</h4>
                  <p className="text-xs text-gray-600 mb-3">{seminar.scheduleInfo}</p>
                  
                  <div className="grid grid-cols-1 gap-3">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-3 h-3 bg-[#0073e6] rounded-full"></span>
                        <span className="font-semibold text-gray-900">平日（月〜金）</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {seminar.timeSlots.weekdays.map((slot, idx) => (
                          <span key={idx} className="px-3 py-1 bg-white border-2 border-[#0073e6] text-[#0073e6] text-sm font-semibold rounded-full">
                            {slot}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-3 h-3 bg-[#0073e6] rounded-full"></span>
                        <span className="font-semibold text-gray-900">土日祝日</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {seminar.timeSlots.weekends.map((slot, idx) => (
                          <span key={idx} className="px-3 py-1 bg-white border-2 border-[#0073e6] text-[#0073e6] text-sm font-semibold rounded-full">
                            {slot}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-3 pb-6 border-b border-gray-100 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">所要時間</span>
                    <span className="text-sm font-semibold text-gray-900">{seminar.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">各回定員</span>
                    <span className="text-sm font-semibold text-gray-900">{seminar.capacity}</span>
                  </div>
                  
                </div>

                {/* Price & CTA */}
                <div className="mt-auto pt-2 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">受講料</p>
                    <p className="text-3xl font-bold text-gray-900">{seminar.price}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-[#0073e6] font-semibold mb-1">残りわずか</p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div 
                          key={i} 
                          className={`w-2 h-2 rounded-full ${
                            i < 2 ? 'bg-blue-400' : 'bg-gray-200'
                          }`} 
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quality Assurance */}
                <div className="text-center text-xs text-gray-500 mb-3">
                  <svg className="w-3 h-3 text-green-600 inline mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  東大生による質の高い指導をお約束
                </div>

                {/* Enrollment Button */}
                <a
                  href={`/seminar-${seminar.id.replace('ai-', 'ai-')}`}
                  className="block w-full py-4 btn-primary font-semibold rounded-2xl text-center"
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
