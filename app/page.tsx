import SeminarSection from './components/SeminarSection'
import FAQSection from './components/FAQSection'

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-semibold text-gray-900 tracking-tight hover-grow cursor-pointer">
            Shindo for Kids
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#seminars" className="text-sm font-medium text-gray-600 hover:text-[#0073e6] transition-all duration-300 hover:scale-110">
              セミナー
            </a>
            <a href="#faq" className="text-sm font-medium text-gray-600 hover:text-[#0073e6] transition-all duration-300 hover:scale-110">
              よくある質問
            </a>
          </nav>
          <div className="hidden md:flex gap-3">
            <a
              href="#seminars"
              className="px-5 py-2.5 text-sm font-medium bg-[#0073e6] text-white rounded-full hover:bg-[#0052cc] transition-all duration-300 shadow-sm hover:shadow-md btn-hover"
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
        {/* Service Introduction - Simplified like Tech Kids School */}
        <section className="relative bg-gradient-to-b from-white to-gray-50 py-16 lg:py-24">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="mb-12">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="block">子どもの未来を</span>
                <span className="block text-[#0073e6]">AIで拓く</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                最新のAI技術を活用した学習法で、お子様の学習効率を劇的に向上させる<br />
                親子で学ぶAI教育セミナーを毎日開催しています
              </p>
            </div>
            
            {/* Service Overview */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-[#0073e6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">AI活用学習</h3>
                <p className="text-gray-600 text-sm">最新のAIツールを使った効率的な学習方法を学べます</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-[#63ad5d]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">親子で参加</h3>
                <p className="text-gray-600 text-sm">保護者と一緒に学ぶから家庭でも継続できます</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-6 h-6 text-[#f59023]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">毎日開催</h3>
                <p className="text-gray-600 text-sm">平日・土日祝日問わず都合の良い時間に参加可能</p>
              </div>
            </div>
            
            <div className="text-center">
              <a
                href="#seminars"
                className="inline-flex items-center px-8 py-4 bg-[#0073e6] text-white text-lg font-bold rounded-full hover:bg-[#0052cc] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                開催中のセミナーを見る
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Seminars Section - Main content */}
        <SeminarSection />
        
        {/* FAQ Section - Essential information only */}
        <FAQSection />
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