'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const courses = [
    {
      title: '保護者向けChatGPTセミナー',
      subtitle: '無料セミナー',
      duration: '90分',
      price: '無料',
      badge: '完全無料',
      description: 'まずは保護者さまがChatGPTの基礎と安全な使い方を学びます',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=60',
    },
    {
      title: '英語×AI活用セミナー',
      subtitle: '親子向けセミナー',
      duration: '90分',
      price: '¥5,000',
      badge: '人気',
      description: 'AIを使った効果的な英語学習方法を親子で学びます',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=60',
    },
    {
      title: '探究×AI活用セミナー',
      subtitle: '親子向けセミナー',
      duration: '90分',
      price: '¥5,000',
      badge: 'おすすめ',
      description: '探究学習にAIを活用し、深い学びを親子で実現します',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=60',
    },
  ]

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/brand/logo.png"
                  alt="Shindo Kids"
                  width={32}
                  height={32}
                  className="mr-2"
                />
                <span className="font-bold text-base sm:text-lg">Shindo Kids</span>
              </Link>
            </div>
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <a href="#courses" className="text-gray-700 hover:text-black transition text-sm lg:text-base">コース</a>
              <a href="#about" className="text-gray-700 hover:text-black transition text-sm lg:text-base">運営について</a>
              <a href="#process" className="text-gray-700 hover:text-black transition text-sm lg:text-base">受講の流れ</a>
              <a href="#faq" className="text-gray-700 hover:text-black transition text-sm lg:text-base">FAQ</a>
              <a 
                href="/seminar-parents-chatgpt" 
                className="bg-black text-white px-3 py-2 lg:px-4 rounded-lg hover:bg-gray-800 transition text-sm lg:text-base"
              >
                無料セミナー申込
              </a>
            </nav>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <a 
                href="/seminar-parents-chatgpt"
                className="bg-black text-white px-3 py-2 rounded-lg text-sm font-semibold"
              >
                申込
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-black text-white overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0">
            <Image
              src="/brand/ホームページ.jpg"
              alt="Background"
              fill
              priority
              sizes="100vw"
              className="object-cover opacity-40"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32 w-full">
            <div className="max-w-4xl text-left">
              <div className="inline-block mb-4">
                <span className="bg-yellow-400 text-black text-xs sm:text-sm font-bold px-3 py-1.5 rounded-full">
                  期間限定・無料体験実施中
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                子どもの「好き」を
                <br />
                AIで伸ばす。
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 text-gray-300 leading-relaxed">
                親子で学ぶAI教育プログラム。
                <br className="hidden sm:block" />
                まずは保護者さまから、安全で効果的な活用法を。
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-start justify-start">
                <a 
                  href="/seminar-parents-chatgpt"
                  className="w-full sm:w-auto inline-block bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-gray-100 transition text-center"
                >
                  無料セミナーに申し込む
                </a>
                <a 
                  href="#courses"
                  className="w-full sm:w-auto inline-block border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold hover:bg-white hover:text-black transition text-center"
                >
                  コース一覧を見る
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="bg-gray-50 py-8 sm:py-12 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center">
              <div className="p-2">
                <div className="text-2xl sm:text-3xl font-bold text-black">200+</div>
                <div className="text-gray-600 text-xs sm:text-sm mt-1">受講者数</div>
              </div>
              <div className="p-2">
                <div className="text-2xl sm:text-3xl font-bold text-black">98%</div>
                <div className="text-gray-600 text-xs sm:text-sm mt-1">満足度</div>
              </div>
              <div className="p-2">
                <div className="text-2xl sm:text-3xl font-bold text-black">東大生</div>
                <div className="text-gray-600 text-xs sm:text-sm mt-1">運営チーム</div>
              </div>
              <div className="p-2">
                <div className="text-2xl sm:text-3xl font-bold text-black">毎日</div>
                <div className="text-gray-600 text-xs sm:text-sm mt-1">開催中</div>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">コース一覧</h2>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600">保護者向け無料セミナーから始める親子のAI学習</p>
            </div>

            {/* Course Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {courses.map((course, index) => (
                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition group">
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover group-hover:scale-110 transition duration-300"
                    />
                    {course.badge && (
                      <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                        <span className="bg-red-500 text-white text-xs font-bold px-2 sm:px-3 py-1 rounded-full">
                          {course.badge}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="text-xs sm:text-sm text-gray-500 mb-2">{course.subtitle}</div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 leading-tight">{course.title}</h3>
                    <p className="text-gray-600 mb-3 sm:mb-4 text-sm leading-relaxed">{course.description}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                      <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {course.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {course.price}
                        </span>
                      </div>
                    </div>
                    <a 
                      href={
                        course.title === '保護者向けChatGPTセミナー' ? '/seminar-parents-chatgpt' :
                        course.title === '英語×AI活用セミナー' ? '/seminar-english-ai' :
                        course.title === '探究×AI活用セミナー' ? '/seminar-research-ai' :
                        '/seminar-parents-chatgpt'
                      }
                      className="block w-full text-center bg-black text-white py-2.5 sm:py-3 rounded-lg font-medium hover:bg-gray-800 transition text-sm sm:text-base"
                    >
                      詳細を見る
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">なぜ今、AI教育なのか</h2>
                <p className="text-lg text-gray-700 mb-6">
                  AIは既に私たちの生活に深く浸透し、子どもたちが大人になる頃には、
                  AIとの共存が当たり前の時代になります。
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  しかし、多くの保護者さまは「AIは便利そうだけど、子どもに使わせるのは不安」
                  「どう活用すればいいかわからない」という悩みを抱えています。
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  私たちは、東大生を中心とした運営チームが、安全で効果的なAI活用法を
                  親子で学べるプログラムを提供しています。
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-black mb-1">3年間</div>
                    <div className="text-sm text-gray-600">大手塾での指導経験</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <div className="text-2xl font-bold text-black mb-1">IB取得</div>
                    <div className="text-sm text-gray-600">国際バカロレア</div>
                  </div>
                </div>
              </div>
              <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=60"
                  alt="Team"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">受講の流れ</h2>
              <p className="text-xl text-gray-600">簡単3ステップで始められます</p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-2">無料セミナーに参加</h3>
                    <p className="text-gray-600">
                      まずは保護者向けの無料セミナーで、ChatGPTの基礎と安全な使い方を学びます。
                      オンラインで90分、お気軽にご参加いただけます。
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-2">コース選択・申込</h3>
                    <p className="text-gray-600">
                      お子様の年齢や目的に合わせて最適なコースを選択。
                      体験後、継続される場合のみお申し込みください。
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold mb-2">家庭学習スタート</h3>
                    <p className="text-gray-600">
                      セミナーで学んだ内容を家庭で実践。
                      専用のサポートで、継続的な学習をバックアップします。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="voice" className="py-20 bg-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">受講者の声</h2>
              <p className="text-xl text-gray-400">実際に体験された方々の感想</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-900 p-6 rounded-2xl">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-4 text-gray-300">
                  「ChatGPTの使い方が具体的にわかり、子どもの勉強に活かせるイメージが湧きました。
                  安全な使い方も教えてもらえて安心です。」
                </p>
                <div className="text-sm">
                  <div className="font-bold">Aさん</div>
                  <div className="text-gray-500">小学5年生の保護者</div>
                </div>
              </div>

              <div className="bg-gray-900 p-6 rounded-2xl">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-4 text-gray-300">
                  「英検対策でAIを活用する方法を教えてもらい、
                  子どもの学習効率が格段に上がりました。親子で楽しく学べています。」
                </p>
                <div className="text-sm">
                  <div className="font-bold">Bさん</div>
                  <div className="text-gray-500">中学2年生の保護者</div>
                </div>
              </div>

              <div className="bg-gray-900 p-6 rounded-2xl">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-4 text-gray-300">
                  「運営の学生さんが丁寧で、子どもも楽しく参加できました。
                  家庭での実践方法まで具体的に教えてもらえたのが良かったです。」
                </p>
                <div className="text-sm">
                  <div className="font-bold">Cさん</div>
                  <div className="text-gray-500">小学3年生の保護者</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">よくある質問</h2>
            </div>

            <div className="space-y-4">
              <details className="border border-gray-200 rounded-lg p-6 cursor-pointer group">
                <summary className="flex items-center justify-between font-semibold text-lg">
                  <span>ChatGPTを使ったことがなくても大丈夫ですか？</span>
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-600">
                  はい、全く問題ありません。初めての方でも理解できるよう、基礎から丁寧に説明します。
                  実際に手を動かしながら学べるので、セミナー終了時には基本的な使い方をマスターできます。
                </p>
              </details>

              <details className="border border-gray-200 rounded-lg p-6 cursor-pointer group">
                <summary className="flex items-center justify-between font-semibold text-lg">
                  <span>子どもは何歳から参加できますか？</span>
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-600">
                  小学3年生から高校生まで対応しています。
                  年齢に応じた内容と使い方をご提案しますので、お子様の学年をお知らせください。
                </p>
              </details>

              <details className="border border-gray-200 rounded-lg p-6 cursor-pointer group">
                <summary className="flex items-center justify-between font-semibold text-lg">
                  <span>オンラインでの参加方法は？</span>
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-600">
                  Zoomを使用して実施します。お申し込み後、参加用のURLをメールでお送りします。
                  スマートフォンやタブレット、PCから簡単に参加できます。
                </p>
              </details>

              <details className="border border-gray-200 rounded-lg p-6 cursor-pointer group">
                <summary className="flex items-center justify-between font-semibold text-lg">
                  <span>受講料の支払い方法は？</span>
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-600">
                  クレジットカード、銀行振込に対応しています。
                  無料セミナーは完全無料ですので、まずはお気軽にご参加ください。
                </p>
              </details>

              <details className="border border-gray-200 rounded-lg p-6 cursor-pointer group">
                <summary className="flex items-center justify-between font-semibold text-lg">
                  <span>セミナー後のサポートはありますか？</span>
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-600">
                  はい、セミナー後も継続的なサポートを提供しています。
                  LINEでの質問対応や、定期的なフォローアップセミナーもご用意しています。
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              今こそ、AI教育を始めるとき
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              子どもの可能性を最大限に引き出す、新しい学びの形を体験してください
            </p>
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="mb-6">
                <span className="bg-yellow-400 text-black text-sm font-bold px-4 py-2 rounded-full">
                  期間限定・今だけ無料
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-4">親子で学ぶAI活用セミナー</h3>
              <p className="text-gray-600 mb-8">
                3つの無料セミナーから選んで、AI活用法を90分で完全マスター
              </p>
              <a 
                href="/seminar-parents-chatgpt"
                className="inline-block bg-black text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-800 transition"
              >
                無料セミナーに申し込む
              </a>
              <p className="text-sm text-gray-500 mt-4">
                ※クレジットカード不要・完全無料
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <Image
                  src="/brand/logo.png"
                  alt="Shindo Kids"
                  width={32}
                  height={32}
                  className="mr-2 brightness-0 invert"
                />
                <span className="font-bold text-lg">Shindo Kids</span>
              </div>
              <p className="text-gray-400 text-sm">
                AIで子どもの可能性を広げる
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">コース</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition">小学生向け</a></li>
                <li><a href="#" className="hover:text-white transition">中学生向け</a></li>
                <li><a href="#" className="hover:text-white transition">高校生向け</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">サポート</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#faq" className="hover:text-white transition">よくある質問</a></li>
                <li><a href="#" className="hover:text-white transition">お問い合わせ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">会社情報</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#about" className="hover:text-white transition">運営について</a></li>
                <li><a href="#" className="hover:text-white transition">プライバシーポリシー</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 Shindo Kids. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}
