import SeminarSection from './components/SeminarSection'
import FAQSection from './components/FAQSection'
import AgeTabSection from './components/AgeTabSection'
import PhotoCollage from './components/PhotoCollage'
import SuccessStories from './components/SuccessStories'

export default function Home() {
  return (
    <>
      {/* Header moved to layout */}

      <main className="pt-28">
        {/* Hero - playful, orange-first like Tech Kids School */}
        <section className="relative overflow-hidden bg-white bg-soft-dots">

          <div className="max-w-7xl mx-auto px-6 py-16 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Copy */}
              <div>
                <span className="inline-block mb-3 px-4 py-1.5 rounded-full bg-blue-100 text-[#0073e6] font-bold text-sm">親子で学ぶAI教育</span>
                <a href="/seminar-parents-chatgpt" className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-blue-50 text-[#0073e6] font-semibold text-sm border border-blue-100 hover:bg-blue-100">
                  <span className="px-2 py-0.5 text-xs font-bold rounded bg-blue-200 text-[#0052cc]">今だけ無料！</span>
                  保護者向け：ChatGPTの始め方 を開催中
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                <h1 className="text-4xl lg:text-6xl font-black leading-tight text-gray-900 mb-6">
                  子どもの「好き」を
                  <span className="block text-[#0073e6] pop-underline">AIで伸ばす。</span>
                </h1>
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8">
                  まずは保護者さまがChatGPTの価値を“体感”。その上で、
                  ご家庭で安全に続けられるAI活用の一歩を一緒に設計します。
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="/seminar-parents-chatgpt"
                    className="inline-flex items-center justify-center px-8 py-4 btn-primary font-bold transition-all duration-300"
                  >
                    今だけ無料！保護者向けセミナーに参加
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                  <a
                    href="/seminars"
                    className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0073e6] font-bold rounded-full border-2 border-[#0073e6] hover:bg-blue-50 transition-all duration-300"
                  >
                    開催予定セミナーを見る
                  </a>
                </div>

                {/* Pop chips */}
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="pop-chip"><i>🎉</i> 今だけ無料</span>
                  <span className="pop-chip"><i>👨‍👩‍👧</i> 親子で安心の設計</span>
                  <span className="pop-chip"><i>💻</i> オンラインOK</span>
                </div>

                {/* Points */}
                <div className="mt-8 grid grid-cols-3 gap-3">
                  {[
                    { label: '毎日開催', color: 'from-[#0073e6] to-[#4da3ff]' },
                    { label: '親子参加', color: 'from-[#63ad5d] to-[#7dc077]' },
                    { label: '東大生運営', color: 'from-[#0073e6] to-[#4da3ff]' },
                  ].map((p) => (
                    <div key={p.label} className={`rounded-2xl p-3 text-center bg-gradient-to-br ${p.color} text-white font-bold shadow-sm`}>{p.label}</div>
                  ))}
                </div>
              </div>

              {/* Visual: photo collage */}
              <PhotoCollage />
            </div>
          </div>

          {/* wave divider */}
          <svg className="block w-full" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden="true">
            <path fill="#fff" d="M0,32L60,42.7C120,53,240,75,360,80C480,85,600,75,720,58.7C840,43,960,21,1080,16C1200,11,1320,21,1380,26.7L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
          </svg>
        </section>

        {/* Trust signals removed per request */}

        {/* About operators */}
        <section id="about" className="bg-white">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">運営について</h2>
            <p className="text-gray-700 mb-6">本プログラムは、大学生チームにより運営しています。</p>

            {/* Universities */}
            <div className="flex flex-wrap gap-2 mb-10">
              {['東京大学','一橋大学','上智大学'].map((u) => (
                <span key={u} className="px-3 py-1.5 rounded-full bg-blue-50 text-[#0073e6] text-sm font-semibold border border-blue-100">{u} の学生</span>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                <h3 className="font-bold text-lg text-gray-900 mb-4">運営メンバーの特徴</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start"><span className="text-[#0073e6] mr-2 mt-0.5">✓</span>大手塾で3年間、バイリンガル講師として英語を指導</li>
                  <li className="flex items-start"><span className="text-[#0073e6] mr-2 mt-0.5">✓</span>小学生の指導実績は200名以上</li>
                  <li className="flex items-start"><span className="text-[#0073e6] mr-2 mt-0.5">✓</span>国際バカロレア（IB）を取得済み</li>
                  <li className="flex items-start"><span className="text-[#0073e6] mr-2 mt-0.5">✓</span>バイブコーディングの指導も可能</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-8">
                <h3 className="font-bold text-lg text-gray-900 mb-4">保護者さまへのお約束</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start"><span className="text-[#0073e6] mr-2 mt-0.5">✓</span>安全で健全なAI活用ルールを徹底</li>
                  <li className="flex items-start"><span className="text-[#0073e6] mr-2 mt-0.5">✓</span>ご家庭のデバイス・環境で継続できる設計</li>
                  <li className="flex items-start"><span className="text-[#0073e6] mr-2 mt-0.5">✓</span>英語・探究・効率学習など目的別に最適化</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Reasons for parents */}
        <section className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">保護者さまに選ばれる理由</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[{
                title:'家庭で続く学習設計',desc:'スマホ/タブレットで無理なく続く“家庭運用”を設計。目標・時間配分・ルーティンまで伴走します。'
              },{
                title:'安全なAI活用',desc:'年齢に応じたルールとリテラシーを丁寧に指導。保護者向けの設定ガイドも提供。'
              },{
                title:'成果に直結',desc:'英検・定期テスト・探究発表など、具体的ゴールに合わせて最短で成果を出します。'
              }].map((item, i)=> (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0073e6] font-bold flex items-center justify-center mb-4">{i+1}</div>
                  <h3 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">無料体験の流れ（60分）</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {title:'ヒアリング',desc:'現在の学習状況とお悩みを確認し、目標を明確化'},
                {title:'AI学習体験',desc:'実際のツールで短時間でも成果を体感'},
                {title:'家庭運用プラン',desc:'家庭で続ける学習メニューと初週のToDoを提案'}
              ].map((step, i)=> (
                <div key={i} className="rounded-2xl border border-gray-100 p-6">
                  <div className="text-[#0073e6] font-black text-3xl mb-2">{i+1}</div>
                  <div className="font-bold text-gray-900 mb-1">{step.title}</div>
                  <div className="text-gray-600 text-sm">{step.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing summary */}
        <section className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">料金・日程</h2>
                <ul className="text-gray-700 space-y-2">
                  <li>・体験会：無料（60分／オンライン）</li>
                  <li>・本セミナー：各回 ¥5,000（90〜120分）</li>
                  <li>・開催日程：平日夜・土日（詳細は下部「セミナー」へ）</li>
                </ul>
                <p className="text-xs text-gray-500 mt-3">価格は税込表示。内容は変更になる場合があります。</p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-3">
                  <div className="text-sm text-gray-600">初回限定</div>
                  <div className="text-xs font-semibold text-[#0073e6]">オンライン開催</div>
                </div>
                <div className="text-3xl font-black text-gray-900">無料体験 0円</div>
                <p className="text-gray-600 mt-2">ご家庭のデバイスで、その日から続けられる仕組みづくりを体験。</p>
                <a href="/seminars" className="mt-6 inline-flex items-center px-6 py-3 bg-[#0073e6] text-white font-bold rounded-full hover:bg-[#0052cc]">空き枠を確認する</a>
              </div>
            </div>
          </div>
        </section>

        {/* Other sections moved to dedicated pages */}
      </main>

      {/* Site Footer */}
      <footer className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0073e6] to-[#4da3ff] flex items-center justify-center">
              <span className="text-white text-xs font-black">S</span>
            </div>
            <span className="text-sm text-gray-600">© {new Date().getFullYear()} Shindo for Kids</span>
          </div>
          <nav className="flex items-center gap-6 text-sm">
            <a href="/seminars" className="text-gray-600 hover:text-[#0073e6]">開催予定セミナー</a>
            <a href="/about" className="text-gray-600 hover:text-[#0073e6]">運営について</a>
            <a href="/voice" className="text-gray-600 hover:text-[#0073e6]">過去の受講者のコメント</a>
            <a href="/faq" className="text-gray-600 hover:text-[#0073e6]">よくある質問</a>
          </nav>
        </div>
      </footer>

      {/* Fixed Footer CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-100 p-4 z-40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-3 items-center justify-center">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-blue-100 text-[#0073e6]">今だけ無料！</span>
            <p className="text-sm font-medium text-gray-700">保護者向け：ChatGPTの始め方（無料）を開催中</p>
          </div>
          <div className="flex gap-3">
            <a
              href="/seminar-parents-chatgpt"
              className="px-6 py-2.5 bg-[#0073e6] text-white font-semibold rounded-full hover:bg-[#0052cc] transition-all duration-300 shadow-sm hover:shadow-md text-sm"
            >
              <span className="flex items-center gap-2">
                <span>無料セミナーに参加する</span>
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
