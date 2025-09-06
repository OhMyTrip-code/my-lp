import SeminarSection from './components/SeminarSection'
import InstructorSection from './components/InstructorSection'
import FAQSection from './components/FAQSection'

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-semibold text-gray-900 tracking-tight">
            Shindo for Kids
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#seminars" className="text-sm font-medium text-gray-600 hover:text-[#0073e6] transition-colors">
              セミナー
            </a>
            <a href="#instructors" className="text-sm font-medium text-gray-600 hover:text-[#0073e6] transition-colors">
              講師紹介
            </a>
            <a href="#faq" className="text-sm font-medium text-gray-600 hover:text-[#0073e6] transition-colors">
              よくある質問
            </a>
          </nav>
          <div className="hidden md:flex gap-3">
            <a
              href="#seminars"
              className="px-5 py-2.5 text-sm font-medium bg-[#0073e6] text-white rounded-full hover:bg-[#0052cc] transition-all duration-300 shadow-sm hover:shadow-md"
            >
              セミナーを見る
            </a>
          </div>
          {/* Mobile CTA */}
          <div className="md:hidden">
            <a
              href="#seminars"
              className="px-4 py-2 text-sm font-medium bg-[#0073e6] text-white rounded-full hover:bg-[#0052cc] transition-all duration-300"
            >
              申し込み
            </a>
          </div>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-[#f8f9fa] via-[#f3f8fc] to-[#eceff1] py-24 lg:py-40 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#0073e6]/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#4da3ff]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#0073e6]/5 to-[#4da3ff]/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
            
            {/* Floating elements */}
            <div className="absolute top-20 left-20 w-4 h-4 bg-[#0073e6]/20 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute top-40 right-32 w-6 h-6 bg-[#4da3ff]/20 rounded-full animate-bounce" style={{animationDelay: '1.2s'}}></div>
            <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-[#0073e6]/30 rounded-full animate-bounce" style={{animationDelay: '2.1s'}}></div>
            <div className="absolute bottom-20 right-20 w-5 h-5 bg-[#4da3ff]/25 rounded-full animate-bounce" style={{animationDelay: '0.8s'}}></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <div className="animate-fadeIn">
              <span className="inline-block px-4 py-1.5 bg-blue-100 text-[#0073e6] text-sm font-semibold rounded-full mb-6">
                2025年10月開催
              </span>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8" style={{fontWeight: 600}}>
                <span className="bg-gradient-to-r from-[#0073e6] to-[#4da3ff] bg-clip-text text-transparent">AI</span>は、<br className="hidden sm:block"/>家族の道具です。
              </h1>
              <div className="space-y-4 mb-12">
                <p className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium flex items-center justify-center gap-3">
                  <span className="text-2xl animate-bounce">💡</span>
                  知っておくと、勉強も仕事も暮らしもシンプルになる。
                </p>
                <p className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed flex items-center justify-center gap-3">
                  <span className="text-xl animate-pulse">👨‍👩‍👧‍👦</span>
                  まず親が理解すれば、子どもは安心して挑戦できる。
                </p>
                <p className="text-lg lg:text-xl text-[#0073e6] max-w-4xl mx-auto leading-relaxed font-semibold flex items-center justify-center gap-3">
                  <span className="text-xl animate-bounce">🎯</span>
                  今日からのルールとコツを、一緒に持ち帰りましょう。
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="#seminars"
                  className="group px-12 py-6 bg-gradient-to-r from-[#0073e6] to-[#4da3ff] text-white font-semibold rounded-full hover:shadow-2xl transition-all duration-300 text-lg transform hover:scale-105"
                >
                  今すぐ始めよう
                  <svg className="inline-block w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="#instructors"
                  className="px-12 py-6 bg-white/90 backdrop-blur-sm border-2 border-white/50 text-gray-700 font-semibold rounded-full hover:bg-white hover:shadow-lg transition-all duration-300 text-lg"
                >
                  講師を見る
                </a>
              </div>
            </div>
            
            {/* Hero stats */}
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🎯</div>
                  <div className="text-3xl font-bold text-[#0073e6] mb-2 group-hover:text-[#4da3ff] transition-colors">3つ</div>
                  <div className="text-sm font-semibold text-gray-700">選べるセミナー</div>
                  <div className="text-xs text-gray-500 mt-1">お子様に最適なプログラム</div>
                </div>
              </div>
              <div className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">👥</div>
                  <div className="text-3xl font-bold text-[#0073e6] mb-2 group-hover:text-[#4da3ff] transition-colors">少人数</div>
                  <div className="text-sm font-semibold text-gray-700">丁寧な指導</div>
                  <div className="text-xs text-gray-500 mt-1">親子でじっくり学習</div>
                </div>
              </div>
              <div className="group bg-white/90 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⚡</div>
                  <div className="text-3xl font-bold text-[#0073e6] mb-2 group-hover:text-[#4da3ff] transition-colors">実践的</div>
                  <div className="text-sm font-semibold text-gray-700">すぐに使えるスキル</div>
                  <div className="text-xs text-gray-500 mt-1">明日から活用できる知識</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Section */}
        <section className="py-24 bg-gradient-to-b from-[#eceff1] via-[#f3f8fc] to-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                なぜ今、AIスキルが必要なのか
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                変化の激しい時代を生きる子どもたちに、本当に必要な力を身につけてもらいたい
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-[#0073e6] to-[#4da3ff] rounded-3xl flex items-center justify-center mx-auto mb-8 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.5 2c-5.629 0-10.212 4.436-10.5 10-.007.092-.007.185 0 .277.288 5.564 4.871 10 10.5 10s10.212-4.436 10.5-10c.007-.092.007-.185 0-.277C23.712 6.436 19.129 2 13.5 2zm-1.5 14.5l-4.5-4.5 1.5-1.5L12 13.5l6-6 1.5 1.5L12 16.5z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AI活用は必須スキル</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  2030年までに多くの職業でAI活用が標準となります。早いうちから慣れ親しむことで、将来の選択肢が大きく広がります。
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-[#f59023] to-[#ffa94d] rounded-3xl flex items-center justify-center mx-auto mb-8 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">効率的な学習法</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  AIを使った学習で、従来の何倍もの効率で知識を習得。限られた時間で最大限の成果を上げることができます。
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-[#63ad5d] to-[#7dc077] rounded-3xl flex items-center justify-center mx-auto mb-8 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">個別最適化学習</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  一人ひとりの理解度や興味に合わせて、AIが最適な学習プランを提案。苦手を克服し、得意を伸ばします。
                </p>
              </div>
            </div>
            
            {/* CTA */}
            <div className="text-center mt-16">
              <a
                href="#seminars"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#0073e6] text-white font-semibold rounded-2xl hover:bg-[#0052cc] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <span>今すぐセミナーを見る</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Seminars Section */}
        <SeminarSection />
        
        {/* Instructors Section */}
        <InstructorSection />

        {/* FAQ Section */}
        <div id="faq">
          <FAQSection />
        </div>

        {/* Company Info */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">運営者情報</h2>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">運営会社</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>運営：Shindo for Kids</p>
                    <p>所在地：東京都渋谷区[要確定]</p>
                    <p>設立：2024年</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-4">お問い合わせ</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>電話：0120-XXX-XXX</p>
                    <p>メール：info@shindo-for-kids.com</p>
                    <p>受付時間：平日 10:00-18:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Fixed Footer CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-100 p-4 z-40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-3 items-center justify-center">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
            <p className="text-sm font-medium text-gray-700">定員残りわずか - お急ぎください</p>
          </div>
          <div className="flex gap-3">
            <a
              href="#seminars"
              className="px-6 py-2.5 bg-[#0073e6] text-white font-medium rounded-full hover:bg-[#0052cc] transition-all duration-300 shadow-sm hover:shadow-md text-sm"
            >
              <span className="flex items-center gap-2">
                <span>セミナーに申し込む</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}