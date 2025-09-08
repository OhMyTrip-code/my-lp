'use client'

import { useState } from 'react'

const stories = [
  {
    id: 1,
    name: '田中 美咲',
    age: '12歳',
    grade: '小学6年生',
    image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=150&h=150&fit=crop&crop=face',
    achievement: '英検準2級合格',
    story: 'AI学習を始めて3ヶ月で英検準2級に合格！ChatGPTを使った対話練習で、リスニングとスピーキングが飛躍的に向上しました。',
    parentComment: 'AIツールの使い方を親子で学べたことで、家庭学習の質が大きく変わりました。娘の自信もついて、積極的に英語を話すようになりました。',
    parentName: '田中様（母）',
    metrics: {
      before: '英検4級',
      after: '英検準2級',
      duration: '3ヶ月'
    }
  },
  {
    id: 2,
    name: '佐藤 翔太',
    age: '14歳',
    grade: '中学2年生',
    image: 'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?w=150&h=150&fit=crop&crop=face',
    achievement: 'プログラミングコンテスト入賞',
    story: 'AIを活用したプログラミング学習で、わずか半年で全国コンテストに入賞。効率的な学習方法で、コーディングスキルが急成長しました。',
    parentComment: '息子が自分でAIに質問しながら問題を解決していく姿に驚きました。創造力と問題解決能力が確実に育っています。',
    parentName: '佐藤様（父）',
    metrics: {
      before: 'プログラミング未経験',
      after: 'Python習得、コンテスト入賞',
      duration: '6ヶ月'
    }
  },
  {
    id: 3,
    name: '山田 結衣',
    age: '10歳',
    grade: '小学4年生',
    image: 'https://images.unsplash.com/photo-1535468850893-d6e543fbd7f5?w=150&h=150&fit=crop&crop=face',
    achievement: '算数の成績が2段階アップ',
    story: 'AI家庭教師での個別学習により、苦手だった算数が得意科目に。一人ひとりのペースに合わせた学習で、理解度が格段に向上しました。',
    parentComment: '苦手意識がなくなり、自分から進んで勉強するようになりました。AIが娘のペースに合わせてくれるので、無理なく続けられています。',
    parentName: '山田様（母）',
    metrics: {
      before: '算数テスト平均65点',
      after: '算数テスト平均92点',
      duration: '4ヶ月'
    }
  }
]

export default function SuccessStories() {
  const [selectedStory, setSelectedStory] = useState(0)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-50 text-[#0073e6] text-sm font-bold rounded-full mb-4">
            受講生の声
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            親子のリアルな体験談
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            実際に取り組んでいるご家庭の感想や気づきをご紹介します
          </p>
        </div>

        {/* Success metrics highlight */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {stories.map((story, index) => (
            <div
              key={story.id}
              onClick={() => setSelectedStory(index)}
              className={`cursor-pointer bg-white rounded-3xl p-8 transition-all duration-300 ${
                selectedStory === index 
                  ? 'shadow-2xl scale-105 border-2 border-[#0073e6]' 
                  : 'shadow-lg hover:shadow-xl border-2 border-transparent'
              }`}
            >
              {/* Student info */}
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{story.name}</h3>
                  <p className="text-sm text-gray-600">{story.grade} ({story.age})</p>
                </div>
              </div>

              {/* Short quote */}
              <p className="text-sm text-gray-600">
                「{story.parentComment}」
              </p>
            </div>
          ))}
        </div>

        {/* Detailed story display */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="grid gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {stories[selectedStory].name}さんのストーリー
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {stories[selectedStory].story}
              </p>
              
              {/* Parent testimonial */}
              <div className="bg-blue-50 rounded-2xl p-6">
                <div className="flex items-start gap-3 mb-4">
                  <svg className="w-8 h-8 text-[#0073e6] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-2">
                      {stories[selectedStory].parentComment}
                    </p>
                    <p className="text-sm text-gray-600 font-semibold">
                      — {stories[selectedStory].parentName}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column removed: keep content simple */}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            お子様の可能性を、今すぐ広げませんか？
          </p>
          <a
            href="/seminars"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#0073e6] to-[#4da3ff] text-white font-bold rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <span>無料体験セミナーに申し込む</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
