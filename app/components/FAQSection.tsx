'use client'

import { useState } from 'react'

const faqData = [
  {
    question: 'AIやプログラミング経験がなくても大丈夫ですか？',
    answer: 'はい、全くの初心者から段階的に学べるカリキュラムです。年齢に応じた適切なレベルから始まり、AI技術を楽しく体験しながら学習できます。'
  },
  {
    question: 'AIを子どもに教えるのは安全ですか？',
    answer: '年齢に応じた安全なAI利用ガイドラインを設けており、適切な指導の下でAI技術に触れることで、デジタルリテラシーを身につけることができます。'
  },
  {
    question: '保護者の同伴は必要ですか？',
    answer: '年中・年長のお子さまは保護者同伴を推奨しています。小学生は任意ですが、初回は同伴いただくことをおすすめします。'
  },
  {
    question: 'どのようなAIツールを使いますか？',
    answer: 'ChatGPT、画像生成AI、音楽生成AIなど、年齢に適した教育向けAIツールを使用します。すべて安全性が確認されたツールのみを採用しています。'
  },
  {
    question: '家でもAIを使った学習ができますか？',
    answer: 'はい、家庭でも安全にAI学習を続けられるよう、保護者向けのガイドラインと推奨ツールをご紹介します。'
  },
  {
    question: '兄弟割引はありますか？',
    answer: 'はい、2人目以降のお子さまは受講料が20%割引となります。'
  },
  {
    question: '体験会は何回まで参加できますか？',
    answer: '体験会は1家族につき1回限りとなります。複数のプランに興味がある場合は、体験会で講師にご相談ください。'
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12">
          よくあるご質問
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg border overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-medium text-gray-900 pr-4">
                  {faq.question}
                </span>
                <span 
                  className={`text-2xl text-gray-400 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index 
                    ? 'max-h-40 opacity-100 pb-6' 
                    : 'max-h-0 opacity-0 pb-0'
                }`}
                style={{ overflow: 'hidden' }}
              >
                <div className="px-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}