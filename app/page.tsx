import AgeTabSection from './components/AgeTabSection'
import FAQSection from './components/FAQSection'

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold text-gray-900">
            Shindo for Kids
          </div>
          <div className="flex gap-4">
            <a
              href="#curriculum"
              className="px-4 py-2 text-sm font-medium text-[#FF69B4] hover:opacity-80 transition-opacity"
            >
              カリキュラムを見る
            </a>
            <a
              href="#trial-booking"
              className="px-4 py-2 text-sm font-medium bg-[#FF69B4] text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              無料体験を予約
            </a>
          </div>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-white py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              子どもと一緒に学ぶ
              <br />
              <span className="text-[#FF69B4]">AI時代の教育プログラム</span>
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              AI・プログラミング・STEAM教育を通じて
              <br />
              未来の力を育む親子参加型学習
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#trial-booking"
                className="px-8 py-4 bg-[#FF69B4] text-white font-medium rounded-xl hover:opacity-90 transition-opacity text-lg"
              >
                無料体験を予約 →
              </a>
              <a
                href="#curriculum"
                className="px-8 py-4 border border-[#FF69B4] text-[#FF69B4] font-medium rounded-xl hover:bg-[#FF69B4] hover:text-white transition-colors text-lg"
              >
                カリキュラムを見る
              </a>
            </div>
          </div>
        </section>

        {/* Age Tabs + Plans Section */}
        <AgeTabSection />

        {/* AI Demo Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                授業で使うAIツール
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                子どもたちが実際に触れる最新のAI技術をご紹介。
                <br />
                安全で楽しい環境で、未来のデジタルリテラシーを身につけます。
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {/* ChatGPT Demo */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl border border-green-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-2xl">💬</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">会話AI (ChatGPT)</h3>
                </div>
                <p className="text-gray-700 mb-4">質問して学ぶ新しいスタイル</p>
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                  <div className="text-sm text-gray-600 mb-2">子ども：「恐竜はなぜ絶滅したの？」</div>
                  <div className="text-sm text-blue-600">AI：「面白い質問ですね！恐竜の絶滅には3つの大きな理由があります...」</div>
                </div>
              </div>

              {/* Image Generation AI Demo */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-8 rounded-2xl border border-purple-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-2xl">🎨</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">画像生成AI</h3>
                </div>
                <p className="text-gray-700 mb-4">想像を形にする魔法のツール</p>
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                  <div className="aspect-video bg-gradient-to-br from-yellow-200 to-orange-300 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-gray-700 text-sm">「宇宙を泳ぐクジラ」</span>
                  </div>
                  <div className="text-xs text-gray-600">子どもが考えた絵をAIが描いてくれます</div>
                </div>
              </div>

              {/* Music Generation AI Demo */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl border border-blue-200">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-2xl">🎵</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">音楽生成AI</h3>
                </div>
                <p className="text-gray-700 mb-4">誰でも作曲家になれる</p>
                <div className="bg-white p-4 rounded-lg shadow-sm border">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-600">「楽しい冒険の歌」再生中...</span>
                  </div>
                  <div className="text-xs text-gray-600">AIと一緒にオリジナル楽曲を作ります</div>
                </div>
              </div>
            </div>

            {/* How it works */}
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">授業での使い方</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#FF69B4] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">1</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">質問を考える</h4>
                  <p className="text-sm text-gray-600">「知りたいこと」を見つけて質問にする</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#5AA9E6] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">2</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">AIと対話</h4>
                  <p className="text-sm text-gray-600">AIに質問して、答えを聞いてみる</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#FFD166] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">3</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">作品を作る</h4>
                  <p className="text-sm text-gray-600">AIと一緒に絵や音楽、プログラムを作る</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#10B981] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">4</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">みんなで発表</h4>
                  <p className="text-sm text-gray-600">作った作品をクラスで発表・共有</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                子どもたちの作品ギャラリー
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                AIと一緒に作った子どもたちの作品をご覧ください。
                <br />
                創造性と技術が融合した、驚きの作品たちです。
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="aspect-video bg-gradient-to-br from-purple-200 to-pink-300 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-gray-700 font-medium">AI絵本「宇宙の冒険」</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">さくらちゃん（6歳）</h3>
                <p className="text-sm text-gray-600">画像生成AIでオリジナル絵本を制作</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="aspect-video bg-gradient-to-br from-blue-200 to-indigo-300 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-gray-700 font-medium">AIチャットボット「お天気ロボ」</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">ゆうとくん（8歳）</h3>
                <p className="text-sm text-gray-600">Pythonで天気を教えてくれるAIを作成</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border">
                <div className="aspect-video bg-gradient-to-br from-green-200 to-emerald-300 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-gray-700 font-medium">AI作曲「ぼくの冒険テーマ曲」</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">りこちゃん（10歳）</h3>
                <p className="text-sm text-gray-600">音楽生成AIで冒険テーマ曲を作曲</p>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                保護者の皆さまへ
                <br />
                安心してお任せいただくために
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FF69B4] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">👥</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">少人数制</h3>
                <p className="text-gray-600">6組限定で一人ひとりをサポート</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#5AA9E6] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🤖</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">AI専門講師</h3>
                <p className="text-gray-600">AI・プログラミング指導のプロ</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#FFD166] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">👀</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">保護者見学可能</h3>
                <p className="text-gray-600">オンライン配信対応</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-[#10B981] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🛡️</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">安全なAI利用</h3>
                <p className="text-gray-600">年齢に応じたAI利用ガイドライン</p>
              </div>
            </div>

            {/* AI Safety Guidelines */}
            <div className="max-w-4xl mx-auto mt-16">
              <div className="bg-white p-8 rounded-2xl shadow-sm border">
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                  🛡️ AI安全利用ガイドライン
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm mr-3">✓</span>
                      安全な環境
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>・教育専用のAIツールのみ使用</li>
                      <li>・個人情報は一切入力しません</li>
                      <li>・すべての活動を講師が監督</li>
                      <li>・年齢に適さない内容をフィルタリング</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm mr-3">📚</span>
                      デジタルリテラシー
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>・AIは便利な道具であることを学習</li>
                      <li>・批判的思考力の育成</li>
                      <li>・情報の真偽を確認する習慣</li>
                      <li>・創作活動での著作権への配慮</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">保護者の皆さまへ</h4>
                  <p className="text-gray-700">
                    お子さまが家庭でも安全にAI学習を続けられるよう、講座終了後に「家庭向けAI安全利用ガイド」をお渡しします。
                    また、保護者向けの相談窓口も設けており、AI教育に関する疑問にお答えいたします。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="trial-booking" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                料金・日程
              </h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 p-8 rounded-2xl mb-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">体験会</h3>
                    <p className="text-4xl font-bold text-[#FF69B4] mb-2">無料</p>
                    <p className="text-gray-600">1回限り</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">本講座</h3>
                    <p className="text-4xl font-bold text-gray-900 mb-2">10,000円<span className="text-lg">/回</span></p>
                    <p className="text-gray-600">教材費込み</p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">2025年10月開講</h3>
                <p className="text-gray-600 mb-6">お早めにご予約ください</p>
                <a
                  href="#trial-booking"
                  className="inline-block px-8 py-4 bg-[#FF69B4] text-white font-bold rounded-xl hover:opacity-90 text-lg transition-opacity"
                >
                  無料体験を予約 →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />

        {/* Company Info */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">運営者情報</h2>
            <div className="space-y-2 text-gray-600">
              <p>運営：Shindo for Kids</p>
              <p>所在地：東京都渋谷区[要確定]</p>
              <p>お問い合わせ：0120-XXX-XXX</p>
              <p>メール：info@shindo-for-kids.com</p>
            </div>
          </div>
        </section>
      </main>

      {/* Fixed Footer CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 p-4 z-40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-3 items-center justify-center">
          <p className="text-sm font-medium text-gray-900">今すぐ始める、未来への第一歩</p>
          <div className="flex gap-3">
            <a
              href="#trial-booking"
              className="px-6 py-3 bg-[#FF69B4] text-white font-medium rounded-lg hover:opacity-90 text-sm"
            >
              無料体験を予約 →
            </a>
            <a
              href="#curriculum"
              className="px-6 py-3 border border-[#FF69B4] text-[#FF69B4] font-medium rounded-lg hover:bg-[#FF69B4] hover:text-white transition-colors text-sm"
            >
              カリキュラムを見る
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
