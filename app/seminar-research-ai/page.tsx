'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function ResearchAISeminarPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [showDateTimeModal, setShowDateTimeModal] = useState(false)
  const [showConfirmModal, setShowConfirmModal] = useState(false)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childAge: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('お申し込みありがとうございます！メールにて詳細をお送りいたします。')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleDateTimeSelection = () => {
    if (selectedDate && selectedTime) {
      setFormData({
        ...formData,
        preferredDate: selectedDate,
        preferredTime: selectedTime
      })
      setShowDateTimeModal(false)
      // 申し込みフォーム部分にスクロール
      document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.preferredDate || !formData.preferredTime) {
      alert('日程と時間を選択してください')
      setShowDateTimeModal(true)
      return
    }
    // 確認画面を表示
    setShowConfirmModal(true)
  }

  const handleFinalSubmit = () => {
    setShowConfirmModal(false)
    alert(`お申し込みありがとうございます！\n\n選択された日程: ${formData.preferredDate} ${formData.preferredTime}\n\nメールにて詳細をお送りいたします。`)
    // フォームをリセット
    setFormData({
      parentName: '',
      childName: '',
      childAge: '',
      email: '',
      phone: '',
      preferredDate: '',
      preferredTime: '',
      message: ''
    })
    setSelectedDate('')
    setSelectedTime('')
  }

  const getChildGradeText = (value: string) => {
    const grades: { [key: string]: string } = {
      'elementary1': '小学1年生',
      'elementary2': '小学2年生',
      'elementary3': '小学3年生',
      'elementary4': '小学4年生',
      'elementary5': '小学5年生',
      'elementary6': '小学6年生',
      'middle1': '中学1年生',
      'middle2': '中学2年生',
      'middle3': '中学3年生',
      'high1': '高校1年生',
      'high2': '高校2年生',
      'high3': '高校3年生'
    }
    return grades[value] || value
  }

  const getTimeSlots = (date: string) => {
    const dateObj = new Date(date)
    const dayOfWeek = dateObj.getDay()
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6
    
    if (isWeekend) {
      return [
        { value: '10:00-11:30', label: '10:00-11:30 (午前)', status: 'available' },
        { value: '14:00-15:30', label: '14:00-15:30 (午後)', status: 'few' }
      ]
    } else {
      return [
        { value: '10:00-11:30', label: '10:00-11:30 (午前)', status: 'available' },
        { value: '20:00-21:30', label: '20:00-21:30 (夜間)', status: 'few' }
      ]
    }
  }

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="flex items-center">
                <Image
                  src="/brand/logo.png"
                  alt="Shindo for Kids"
                  width={32}
                  height={32}
                  className="mr-2"
                />
                <span className="font-bold text-base sm:text-lg">Shindo for Kids</span>
              </a>
            </div>
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <a href="/" className="text-gray-700 hover:text-black transition text-sm lg:text-base">ホーム</a>
              <a href="/#courses" className="text-gray-700 hover:text-black transition text-sm lg:text-base">コース一覧</a>
              <a 
                href="#apply"
                className="bg-black text-white px-3 py-2 lg:px-4 rounded-lg hover:bg-gray-800 transition text-sm lg:text-base"
              >
                申し込む
              </a>
            </nav>
            
            {/* Mobile CTA */}
            <div className="md:hidden">
              <a 
                href="#apply"
                className="bg-black text-white px-3 py-2 rounded-lg text-sm font-semibold"
              >
                申込
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section with Video/Image */}
        <section className="relative h-[50vh] sm:h-[60vh] min-h-[400px] sm:min-h-[500px] bg-black">
          <Image
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070"
            alt="探究学習風景"
            fill
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 lg:p-12">
            <div className="max-w-7xl mx-auto">
              <div className="inline-block mb-3 sm:mb-4">
                <span className="bg-purple-400 text-black text-xs sm:text-sm font-bold px-2 sm:px-3 py-1 rounded-full">
                  おすすめ
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                探究×AI活用<br />
                セミナー
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 mb-4 sm:mb-6 max-w-3xl leading-relaxed">
                AIを使った探究学習の方法を90分で完全マスター。
                <br className="hidden sm:block" />
                親子で学び、深い探究活動を実践する方法を身につけます。
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a 
                  href="#apply"
                  className="inline-block bg-white text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-bold hover:bg-gray-100 transition text-center text-sm sm:text-base"
                >
                  今すぐ申し込む
                </a>
                <a 
                  href="#overview"
                  className="inline-block border-2 border-white text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-bold hover:bg-white hover:text-black transition text-center text-sm sm:text-base"
                >
                  詳細を見る
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <section className="sticky top-16 bg-white border-b border-gray-200 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex space-x-4 sm:space-x-6 lg:space-x-8 overflow-x-auto scrollbar-hide">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-3 sm:py-4 px-1 border-b-2 font-medium text-xs sm:text-sm whitespace-nowrap transition ${
                  activeTab === 'overview'
                    ? 'border-black text-black'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                概要
              </button>
              <button
                onClick={() => setActiveTab('curriculum')}
                className={`py-3 sm:py-4 px-1 border-b-2 font-medium text-xs sm:text-sm whitespace-nowrap transition ${
                  activeTab === 'curriculum'
                    ? 'border-black text-black'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                カリキュラム
              </button>
              <button
                onClick={() => setActiveTab('target')}
                className={`py-3 sm:py-4 px-1 border-b-2 font-medium text-xs sm:text-sm whitespace-nowrap transition ${
                  activeTab === 'target'
                    ? 'border-black text-black'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                対象者
              </button>
              <button
                onClick={() => setActiveTab('schedule')}
                className={`py-3 sm:py-4 px-1 border-b-2 font-medium text-xs sm:text-sm whitespace-nowrap transition ${
                  activeTab === 'schedule'
                    ? 'border-black text-black'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                開催日程
              </button>
              <button
                onClick={() => setActiveTab('instructor')}
                className={`py-3 sm:py-4 px-1 border-b-2 font-medium text-xs sm:text-sm whitespace-nowrap transition ${
                  activeTab === 'instructor'
                    ? 'border-black text-black'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                講師
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`py-3 sm:py-4 px-1 border-b-2 font-medium text-xs sm:text-sm whitespace-nowrap transition ${
                  activeTab === 'reviews'
                    ? 'border-black text-black'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                受講者の声
              </button>
            </nav>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-8 sm:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-6 lg:gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {/* Overview */}
                {activeTab === 'overview' && (
                  <div id="overview">
                    <h2 className="text-3xl font-bold mb-6">セミナー概要</h2>
                    <div className="prose prose-lg max-w-none">
                      <p className="text-gray-700 mb-6">
                        探究学習は、子どもたちが自ら問いを立て、調べ、考え、発表する学習方法です。
                        AIの活用により、この探究活動がより深く、効率的に行えるようになりました。
                      </p>
                      <p className="text-gray-700 mb-6">
                        本セミナーでは、親子でAIを活用した探究学習の方法を身につけます。
                        情報収集、仮説検証、創造的思考など、探究のあらゆる場面でAIを効果的に使う方法を90分で完全マスターします。
                      </p>
                      
                      <div className="bg-purple-50 rounded-xl p-6 mb-8">
                        <h3 className="text-xl font-bold mb-4">このセミナーで得られること</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <svg className="w-6 h-6 text-purple-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>AIを使った効果的な情報収集・整理の方法</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <svg className="w-6 h-6 text-purple-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>研究テーマ設定とリサーチクエスチョンの作り方</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <svg className="w-6 h-6 text-purple-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>データ分析・可視化でのAI活用法</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <svg className="w-6 h-6 text-purple-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>レポート・プレゼンテーション作成のAI支援活用</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <svg className="w-6 h-6 text-purple-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>創造的アイデア発想でのAI活用テクニック</span>
                          </li>
                        </ul>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-gray-50 rounded-xl p-6">
                          <h4 className="font-bold mb-3">セミナー形式</h4>
                          <p className="text-gray-700">オンライン（Zoom）による双方向型セミナー</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-6">
                          <h4 className="font-bold mb-3">所要時間</h4>
                          <p className="text-gray-700">90分（質疑応答含む）</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-6">
                          <h4 className="font-bold mb-3">対象</h4>
                          <p className="text-gray-700">親子参加歓迎</p>
                        </div>
                        <div className="bg-gray-50 rounded-xl p-6">
                          <h4 className="font-bold mb-3">参加費</h4>
                          <p className="text-gray-700"><span className="text-purple-600 font-bold">¥5,000</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Curriculum */}
                {activeTab === 'curriculum' && (
                  <div id="curriculum">
                    <h2 className="text-3xl font-bold mb-6">カリキュラム</h2>
                    <div className="space-y-6">
                      <div className="bg-white border border-gray-200 rounded-xl p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold">
                              1
                            </div>
                          </div>
                          <div className="flex-grow">
                            <h3 className="text-xl font-bold mb-2">探究学習とAIの可能性（15分）</h3>
                            <ul className="text-gray-700 space-y-1">
                              <li>・現代の探究学習とAIの関係</li>
                              <li>・AI活用で広がる探究の可能性</li>
                              <li>・成功事例の紹介</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-xl p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold">
                              2
                            </div>
                          </div>
                          <div className="flex-grow">
                            <h3 className="text-xl font-bold mb-2">テーマ設定・リサーチ実践（25分）</h3>
                            <ul className="text-gray-700 space-y-1">
                              <li>・AIを使った研究テーマの発見方法</li>
                              <li>・効果的なリサーチクエスチョンの作り方</li>
                              <li>・情報収集・整理の効率化</li>
                              <li>・親子で取り組む探究プロジェクト設計</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-xl p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold">
                              3
                            </div>
                          </div>
                          <div className="flex-grow">
                            <h3 className="text-xl font-bold mb-2">データ分析・検証活用（25分）</h3>
                            <ul className="text-gray-700 space-y-1">
                              <li>・AIによるデータ分析の基礎</li>
                              <li>・仮説検証の効果的な進め方</li>
                              <li>・可視化ツールの活用法</li>
                              <li>・科学的思考の育み方</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-xl p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold">
                              4
                            </div>
                          </div>
                          <div className="flex-grow">
                            <h3 className="text-xl font-bold mb-2">成果発表・創造活動（15分）</h3>
                            <ul className="text-gray-700 space-y-1">
                              <li>・AIを活用したレポート作成</li>
                              <li>・効果的なプレゼンテーション作成</li>
                              <li>・創造的なアイデア発想法</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-xl p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold">
                              5
                            </div>
                          </div>
                          <div className="flex-grow">
                            <h3 className="text-xl font-bold mb-2">Q&A・継続のコツ（10分）</h3>
                            <ul className="text-gray-700 space-y-1">
                              <li>・参加者からの質問に回答</li>
                              <li>・家庭での探究活動継続方法</li>
                              <li>・おすすめリソース・ツールの紹介</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Target */}
                {activeTab === 'target' && (
                  <div id="target">
                    <h2 className="text-3xl font-bold mb-6">対象者</h2>
                    <div className="space-y-8">
                      <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded">
                        <h3 className="text-xl font-bold mb-3 text-purple-800">こんな方におすすめ</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-purple-600 mt-0.5">✓</span>
                            <span>お子様の探究心・好奇心を伸ばしたい保護者さま</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-purple-600 mt-0.5">✓</span>
                            <span>自由研究・調べ学習をサポートしたい方</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-purple-600 mt-0.5">✓</span>
                            <span>AI活用で学習を深めたいと考えている方</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-purple-600 mt-0.5">✓</span>
                            <span>親子で探究活動に取り組みたい方</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-purple-600 mt-0.5">✓</span>
                            <span>創造的思考力を育てたい方</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* Schedule */}
                {activeTab === 'schedule' && (
                  <div id="schedule">
                    <h2 className="text-3xl font-bold mb-6">開催日程</h2>
                    <div className="space-y-6">
                      <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                        <p className="text-blue-800">毎日開催中！カレンダーから希望日時をお選びください</p>
                      </div>
                      
                      {/* カレンダー表示 */}
                      <div className="bg-white border border-gray-200 rounded-xl p-6">
                        <h3 className="text-xl font-bold mb-4">9月 2025年</h3>
                        
                        {/* カレンダーヘッダー */}
                        <div className="grid grid-cols-7 gap-1 mb-2">
                          {['日', '月', '火', '水', '木', '金', '土'].map((day) => (
                            <div key={day} className="text-center text-sm font-semibold text-gray-600 py-2">
                              {day}
                            </div>
                          ))}
                        </div>
                        
                        {/* カレンダー本体 */}
                        <div className="grid grid-cols-7 gap-1">
                          {(() => {
                            const calendar = []
                            const today = new Date()
                            const currentMonth = 8 // 9月 (0ベース)
                            const currentYear = 2025
                            
                            // 月の最初の日の曜日を取得
                            const firstDay = new Date(currentYear, currentMonth, 1).getDay()
                            // 月の日数を取得
                            const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
                            
                            // 空白セルを追加
                            for (let i = 0; i < firstDay; i++) {
                              calendar.push(
                                <div key={`empty-${i}`} className="h-16 border border-gray-100"></div>
                              )
                            }
                            
                            // 日付セルを追加
                            for (let day = 1; day <= daysInMonth; day++) {
                              const date = new Date(currentYear, currentMonth, day)
                              const dayOfWeek = date.getDay()
                              const isWeekend = dayOfWeek === 0 || dayOfWeek === 6
                              const isToday = day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()
                              
                              // セミナー開催日かどうかを判定
                              const hasSession = day >= today.getDate() // 今日以降は開催
                              
                              calendar.push(
                                <div
                                  key={day}
                                  className={`h-16 border border-gray-100 p-1 relative ${
                                    isToday ? 'bg-blue-100 border-blue-400' : ''
                                  } ${hasSession ? 'cursor-pointer hover:bg-gray-50' : 'bg-gray-50'}`}
                                >
                                  <div className={`text-sm ${isToday ? 'font-bold text-blue-700' : 'text-gray-700'}`}>
                                    {day}
                                  </div>
                                  
                                  {hasSession && (
                                    <div className="mt-1 space-y-0.5">
                                      {/* 平日の場合 */}
                                      {!isWeekend && (
                                        <>
                                          <div className="text-xs bg-green-100 text-green-700 px-1 rounded">
                                            10:00
                                          </div>
                                          <div className="text-xs bg-blue-100 text-blue-700 px-1 rounded">
                                            20:00
                                          </div>
                                        </>
                                      )}
                                      
                                      {/* 土日の場合 */}
                                      {isWeekend && (
                                        <>
                                          <div className="text-xs bg-orange-100 text-orange-700 px-1 rounded">
                                            10:00
                                          </div>
                                          <div className="text-xs bg-purple-100 text-purple-700 px-1 rounded">
                                            14:00
                                          </div>
                                        </>
                                      )}
                                    </div>
                                  )}
                                </div>
                              )
                            }
                            
                            return calendar
                          })()}
                        </div>
                        
                        {/* 凡例 */}
                        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-green-100 border border-green-200 rounded"></div>
                            <span>平日午前 (10:00-11:30)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-blue-100 border border-blue-200 rounded"></div>
                            <span>平日夜間 (20:00-21:30)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-orange-100 border border-orange-200 rounded"></div>
                            <span>休日午前 (10:00-11:30)</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 bg-purple-100 border border-purple-200 rounded"></div>
                            <span>休日午後 (14:00-15:30)</span>
                          </div>
                        </div>
                      </div>

                      {/* 予約状況 */}
                      <div className="bg-gray-50 rounded-xl p-6">
                        <h4 className="font-bold mb-4">現在の予約状況</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-700">平日午前枠</span>
                            <div className="flex items-center gap-2">
                              <div className="flex gap-1">
                                {[1,1,1,0,0].map((filled, i) => (
                                  <div key={i} className={`w-3 h-3 rounded-full ${filled ? 'bg-green-400' : 'bg-gray-200'}`}></div>
                                ))}
                              </div>
                              <span className="text-sm text-green-600 font-semibold">空きあり</span>
                            </div>
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-700">平日夜間枠</span>
                            <div className="flex items-center gap-2">
                              <div className="flex gap-1">
                                {[1,1,1,1,0].map((filled, i) => (
                                  <div key={i} className={`w-3 h-3 rounded-full ${filled ? 'bg-yellow-400' : 'bg-gray-200'}`}></div>
                                ))}
                              </div>
                              <span className="text-sm text-yellow-600 font-semibold">残りわずか</span>
                            </div>
                          </div>
                          
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-700">休日枠</span>
                            <div className="flex items-center gap-2">
                              <div className="flex gap-1">
                                {[1,1,1,1,1].map((filled, i) => (
                                  <div key={i} className={`w-3 h-3 rounded-full ${filled ? 'bg-red-400' : 'bg-gray-200'}`}></div>
                                ))}
                              </div>
                              <span className="text-sm text-red-600 font-semibold">満席間近</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Instructor */}
                {activeTab === 'instructor' && (
                  <div id="instructor">
                    <h2 className="text-3xl font-bold mb-6">講師紹介</h2>
                    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                      <div className="md:flex">
                        <div className="md:w-1/3">
                          <Image
                            src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=1974"
                            alt="講師"
                            width={400}
                            height={400}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="md:w-2/3 p-6">
                          <h3 className="text-2xl font-bold mb-2">運営チーム代表</h3>
                          <p className="text-gray-600 mb-4">東京大学 教育学部 4年</p>
                          
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-bold mb-2">経歴</h4>
                              <ul className="text-gray-700 space-y-1">
                                <li>・大手塾で3年間の指導経験</li>
                                <li>・探究学習プログラムの開発・運営</li>
                                <li>・小学生〜高校生の指導実績300名以上</li>
                                <li>・国際バカロレア（IB）ディプロマ取得</li>
                                <li>・AI×教育分野での研究活動</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Reviews */}
                {activeTab === 'reviews' && (
                  <div id="reviews">
                    <h2 className="text-3xl font-bold mb-6">受講者の声</h2>
                    <div className="space-y-6">
                      <div className="bg-white border border-gray-200 rounded-xl p-6">
                        <div className="flex gap-1 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-gray-700 mb-4">
                          「AIを使った探究学習がこれほど効果的だとは知りませんでした。
                          子どもの自由研究のクオリティが格段に上がり、学習への意欲も高まりました。」
                        </p>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                          <div>
                            <p className="font-semibold">Dさん</p>
                            <p className="text-sm text-gray-600">30代・小学5年生の母</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white border border-gray-200 rounded-xl p-6">
                        <div className="flex gap-1 mb-3">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                          ))}
                        </div>
                        <p className="text-gray-700 mb-4">
                          「探究活動でのAI活用法が具体的にわかり、
                          親子で楽しく深い学びができるようになりました。創造的な発想力も身についたと思います。」
                        </p>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                          <div>
                            <p className="font-semibold">Eさん</p>
                            <p className="text-sm text-gray-600">40代・中学2年生の父</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 order-first lg:order-last">
                <div className="lg:sticky lg:top-32">
                  {/* Application Form */}
                  <div id="apply" className="bg-white border border-gray-200 rounded-xl shadow-lg p-4 sm:p-6 mb-6">
                    <div className="text-center mb-4">
                      <span className="bg-purple-100 text-purple-700 text-sm font-bold px-4 py-2 rounded-full">
                        おすすめセミナー
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-center">セミナー申込</h3>
                    
                    <div className="bg-white rounded-xl p-4 mb-6 border border-gray-100">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between py-3 border-b border-gray-100">
                          <span className="text-gray-600">参加費</span>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-purple-600">¥5,000</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between py-3 border-b border-gray-100">
                          <span className="text-gray-600">時間</span>
                          <span className="font-bold text-gray-800">90分</span>
                        </div>
                        <div className="flex items-center justify-between py-3">
                          <span className="text-gray-600">形式</span>
                          <span className="font-bold text-gray-800">オンライン（Zoom）</span>
                        </div>
                      </div>
                    </div>

                    {/* 選択された日程表示 */}
                    {formData.preferredDate && formData.preferredTime && (
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-4">
                        <div className="text-sm font-semibold text-purple-800 mb-1">選択された日程</div>
                        <div className="text-purple-700">
                          {formData.preferredDate} {formData.preferredTime}
                        </div>
                        <button 
                          type="button"
                          onClick={() => setShowDateTimeModal(true)}
                          className="text-xs text-purple-600 hover:text-purple-800 underline mt-1"
                        >
                          日程を変更する
                        </button>
                      </div>
                    )}

                    <form onSubmit={handleFormSubmit} className="space-y-3 sm:space-y-4">
                      <div>
                        <label className="block text-xs sm:text-sm font-medium mb-1">保護者様のお名前 <span className="text-red-500">*</span></label>
                        <input
                          type="text"
                          name="parentName"
                          required
                          value={formData.parentName}
                          onChange={handleChange}
                          className="w-full px-3 py-2.5 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-sm bg-white"
                          placeholder="山田 太郎"
                        />
                      </div>

                      <div>
                        <label className="block text-xs sm:text-sm font-medium mb-1">お子様の学年 <span className="text-red-500">*</span></label>
                        <select
                          name="childAge"
                          required
                          value={formData.childAge}
                          onChange={handleChange}
                          className="w-full px-3 py-2.5 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-sm bg-white"
                        >
                          <option value="">選択してください</option>
                          <option value="elementary1">小学1年生</option>
                          <option value="elementary2">小学2年生</option>
                          <option value="elementary3">小学3年生</option>
                          <option value="elementary4">小学4年生</option>
                          <option value="elementary5">小学5年生</option>
                          <option value="elementary6">小学6年生</option>
                          <option value="middle1">中学1年生</option>
                          <option value="middle2">中学2年生</option>
                          <option value="middle3">中学3年生</option>
                          <option value="high1">高校1年生</option>
                          <option value="high2">高校2年生</option>
                          <option value="high3">高校3年生</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs sm:text-sm font-medium mb-1">メールアドレス <span className="text-red-500">*</span></label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-3 py-2.5 sm:py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-sm bg-white"
                          placeholder="example@email.com"
                        />
                      </div>

                      {formData.preferredDate && formData.preferredTime ? (
                        <button
                          type="submit"
                          className="w-full bg-black text-white py-3 sm:py-3 rounded-lg font-bold hover:bg-gray-800 transition text-sm sm:text-base mt-4"
                        >
                          確認画面へ
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setShowDateTimeModal(true)}
                          className="w-full bg-black text-white py-3 sm:py-3 rounded-lg font-bold hover:bg-gray-800 transition text-sm sm:text-base mt-4"
                        >
                          日程を選んで申し込む
                        </button>
                      )}

                      <div className="text-center mt-3">
                        <p className="text-xs text-purple-600 font-semibold">
                          💳 クレジットカード決済可能
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          ※24時間以内に詳細メールをお送りします
                        </p>
                      </div>
                    </form>
                  </div>

                  {/* Contact */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-bold mb-3">お問い合わせ</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      ご不明な点がございましたら、お気軽にお問い合わせください
                    </p>
                    <a 
                      href="mailto:info@shindoforkids.com"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      info@shindoforkids.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 日程・時間選択モーダル */}
      {showDateTimeModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">日程・時間を選択してください</h3>
                <button
                  onClick={() => setShowDateTimeModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* カレンダー部分 */}
                <div>
                  <h4 className="text-lg font-bold mb-4">希望日を選択</h4>
                  <div className="border border-gray-200 rounded-xl p-4">
                    <h5 className="font-semibold mb-3">9月 2025年</h5>
                    
                    {/* カレンダーヘッダー */}
                    <div className="grid grid-cols-7 gap-1 mb-2">
                      {['日', '月', '火', '水', '木', '金', '土'].map((day) => (
                        <div key={day} className="text-center text-sm font-semibold text-gray-600 py-2">
                          {day}
                        </div>
                      ))}
                    </div>
                    
                    {/* カレンダー本体 */}
                    <div className="grid grid-cols-7 gap-1">
                      {(() => {
                        const calendar = []
                        const today = new Date()
                        const currentMonth = 8 // 9月 (0ベース)
                        const currentYear = 2025
                        
                        // 月の最初の日の曜日を取得
                        const firstDay = new Date(currentYear, currentMonth, 1).getDay()
                        // 月の日数を取得
                        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
                        
                        // 空白セルを追加
                        for (let i = 0; i < firstDay; i++) {
                          calendar.push(
                            <div key={`empty-${i}`} className="h-12 border border-gray-100"></div>
                          )
                        }
                        
                        // 日付セルを追加
                        for (let day = 1; day <= daysInMonth; day++) {
                          const date = new Date(currentYear, currentMonth, day)
                          const dayOfWeek = date.getDay()
                          const isToday = day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear()
                          const hasSession = day >= today.getDate()
                          const dateString = `2025-09-${day.toString().padStart(2, '0')}`
                          const isSelected = selectedDate === dateString
                          
                          calendar.push(
                            <button
                              key={day}
                              onClick={() => hasSession ? setSelectedDate(dateString) : null}
                              disabled={!hasSession}
                              className={`h-12 border border-gray-100 text-sm rounded transition ${
                                isToday ? 'bg-blue-100 border-blue-400' : ''
                              } ${
                                isSelected ? 'bg-black text-white' : hasSession ? 'hover:bg-gray-100 cursor-pointer' : 'bg-gray-50 text-gray-400 cursor-not-allowed'
                              }`}
                            >
                              {day}
                            </button>
                          )
                        }
                        
                        return calendar
                      })()}
                    </div>
                  </div>
                </div>

                {/* 時間選択部分 */}
                <div>
                  <h4 className="text-lg font-bold mb-4">希望時間を選択</h4>
                  {selectedDate ? (
                    <div className="space-y-3">
                      {getTimeSlots(selectedDate).map((slot) => (
                        <button
                          key={slot.value}
                          onClick={() => setSelectedTime(slot.value)}
                          className={`w-full p-4 border-2 rounded-xl text-left transition ${
                            selectedTime === slot.value
                              ? 'border-black bg-black text-white'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-semibold">{slot.label}</div>
                              <div className="text-sm text-gray-500">90分セミナー</div>
                            </div>
                            <div className={`text-xs font-semibold px-2 py-1 rounded-full ${
                              slot.status === 'available' 
                                ? 'bg-green-100 text-green-700'
                                : slot.status === 'few'
                                ? 'bg-yellow-100 text-yellow-700'
                                : 'bg-red-100 text-red-700'
                            }`}>
                              {slot.status === 'available' 
                                ? '空きあり'
                                : slot.status === 'few'
                                ? '残りわずか'
                                : '満席間近'
                              }
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      まず日付を選択してください
                    </div>
                  )}
                </div>
              </div>
              
              {/* 確定ボタン */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex gap-4 justify-end">
                  <button
                    onClick={() => setShowDateTimeModal(false)}
                    className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition"
                  >
                    キャンセル
                  </button>
                  <button
                    onClick={handleDateTimeSelection}
                    disabled={!selectedDate || !selectedTime}
                    className={`px-8 py-3 rounded-lg font-semibold transition ${
                      selectedDate && selectedTime
                        ? 'bg-black text-white hover:bg-gray-800'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    この日程で申し込む
                  </button>
                </div>
                
                {selectedDate && selectedTime && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                    <div className="text-sm text-blue-800">
                      <strong>選択した日程:</strong> {selectedDate} {selectedTime}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 申し込み確認モーダル */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">お申し込み内容の確認</h3>
                <button
                  onClick={() => setShowConfirmModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="space-y-6">
                {/* セミナー情報 */}
                <div className="bg-purple-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-purple-900 mb-4">セミナー情報</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-purple-800 font-medium">セミナー名</span>
                      <span className="text-purple-900">探究×AI活用セミナー</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-800 font-medium">開催日時</span>
                      <span className="text-purple-900 font-semibold">
                        {formData.preferredDate} {formData.preferredTime}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-800 font-medium">所要時間</span>
                      <span className="text-purple-900">90分</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-800 font-medium">参加費</span>
                      <span className="text-purple-900 font-bold text-lg">¥5,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-purple-800 font-medium">形式</span>
                      <span className="text-purple-900">オンライン（Zoom）</span>
                    </div>
                  </div>
                </div>

                {/* 申し込み者情報 */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">申し込み者情報</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700 font-medium">保護者様のお名前</span>
                      <span className="text-gray-900">{formData.parentName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700 font-medium">お子様の学年</span>
                      <span className="text-gray-900">{getChildGradeText(formData.childAge)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700 font-medium">メールアドレス</span>
                      <span className="text-gray-900">{formData.email}</span>
                    </div>
                  </div>
                </div>

                {/* 注意事項 */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                  <h4 className="text-lg font-bold text-yellow-800 mb-3">お申し込み前にご確認ください</h4>
                  <ul className="text-yellow-700 text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 mt-0.5">•</span>
                      <span>お申し込み後、24時間以内にZoomの参加URLをメールでお送りします</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 mt-0.5">•</span>
                      <span>セミナー開始15分前からZoomルームに入室可能です</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 mt-0.5">•</span>
                      <span>キャンセルをされる場合は、前日までにご連絡ください</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 mt-0.5">•</span>
                      <span>録画・録音はご遠慮いただいております</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* 確定ボタン */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex gap-4 justify-end">
                  <button
                    onClick={() => setShowConfirmModal(false)}
                    className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition"
                  >
                    内容を修正する
                  </button>
                  <button
                    onClick={handleFinalSubmit}
                    className="px-8 py-4 bg-black text-white rounded-lg font-bold hover:bg-gray-800 transition text-lg"
                  >
                    この内容で申し込む
                  </button>
                </div>
                
                <div className="mt-4 text-center">
                  <p className="text-xs text-gray-500">
                    ※上記内容でお申し込みが確定します
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Image
                src="/brand/logo.png"
                alt="Shindo for Kids"
                width={32}
                height={32}
                className="mr-2 brightness-0 invert"
              />
              <span className="font-bold text-lg">Shindo for Kids</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              AIで子どもの可能性を広げる
            </p>
            <p className="text-gray-500 text-xs">
              © 2024 Shindo for Kids. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}