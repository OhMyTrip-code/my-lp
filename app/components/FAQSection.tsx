'use client'

import { useState } from 'react'

const faqData = [
  {
    question: '親がAIやプログラミング経験がなくても参加できますか？',
    answer: 'はい、全くの初心者でも安心して参加いただけます。保護者様向けにセミナー内容を設計し、家庭でのAI活用方法をやさしく学べます。'
  },
  {
    question: '子どもと一緒に参加した方がいいですか？',
    answer: 'はい、可能でしたら親子での参加をお勧めします。家庭での学習継続がしやすく、親子のコミュニケーションも深まります。'
  },
  {
    question: 'AIを子どもに使わせるのは安全ですか？',
    answer: '安全なAI利用のためのガイドラインやルールを詳しくお教えします。適切な管理でAIを学習ツールとして活用できます。'
  },
  {
    question: 'セミナーで使うAIツールは何ですか？',
    answer: 'ChatGPT、英語AIアプリ、画像生成AIなど、実用的で安全なAIツールを使用します。実際に体験しながら学ぶことができます。'
  },
  {
    question: 'セミナー後のフォローアップはありますか？',
    answer: 'はい、セミナー終了後もメールでの質問受付や、家庭学習用の資料提供など、継続的なサポートを行っています。'
  },
  {
    question: '満足いかなかった場合、返金はありますか？',
    answer: 'はい、100%満足保証をしております。セミナー終了後7日以内にご連絡いただければ、理由を問わず全額返金いたします。'
  },
  {
    question: '予約のキャンセルはいつまで可能ですか？',
    answer: 'セミナー開催の48時間前までは無料でキャンセル可能です。それ以降はキャンセル料が発生しますが、有効活用いただけるよう柔軟に対応いたします。'
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-gradient-to-b from-[#f3f8fc] to-[#f8f9fa]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            よくあるご質問
          </h2>
          <p className="text-lg text-gray-600">
            保護者の皆様からいただく質問にお答えします
          </p>
        </div>
        <div className="space-y-3">
          {faqData.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl border transition-all duration-300 ${
                openIndex === index ? 'border-[#0073e6]/30 shadow-lg' : 'border-gray-100 hover:border-gray-200'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50/50 transition-colors rounded-2xl"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-gray-900 pr-4 flex items-start">
                  <span className="text-[#0073e6] mr-3 mt-0.5 text-sm">Q{index + 1}.</span>
                  {faq.question}
                </span>
                <span 
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index 
                      ? 'bg-[#0073e6] text-white rotate-45' 
                      : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12m6-6H6" />
                  </svg>
                </span>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}
                style={{ overflow: 'hidden' }}
              >
                <div className="px-6 pb-6 text-gray-600 leading-relaxed ml-9">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">その他のご質問はお気軽にお問い合わせください</p>
          <a 
            href="mailto:info@shindo-for-kids.com" 
            className="inline-flex items-center gap-2 text-[#0073e6] font-semibold hover:underline"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            info@shindo-for-kids.com
          </a>
        </div>
      </div>
    </section>
  )
}