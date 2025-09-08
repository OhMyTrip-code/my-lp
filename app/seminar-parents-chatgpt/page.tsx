import SimpleBookingForm from "../components/SimpleBookingForm";

export default function ParentsChatGPTSeminar() {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      <header className="relative bg-white border-b border-gray-200">
        <div className="absolute inset-0">
          <div className="h-48 md:h-60 w-full overflow-hidden">
            <img src="/brand/hero-parents.jpg" onError={(e)=>{(e.target as HTMLImageElement).src='https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?q=80&auto=format&fit=crop&w=1600&h=600'}} alt="保護者向けセミナー" className="w-full h-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 py-6">
          <a href="/seminars" className="inline-flex items-center text-[#0073e6] font-semibold hover:underline mb-4">
            ← セミナー一覧に戻る
          </a>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-blue-100 text-[#0073e6]">今だけ無料！</span>
            <span className="text-xs font-semibold text-[#0073e6]">保護者さま限定</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">保護者向け：ChatGPTの始め方</h1>
          <p className="text-lg text-gray-600">まずは保護者さまが“感動”する体験から。家庭での安全な活用設計まで。</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">セミナー内容</h2>
            <ul className="space-y-3 mb-8 text-gray-700">
              <li className="flex items-start"><span className="mt-1 mr-2 text-[#0073e6]">✓</span>今日から使えるプロンプトの基本（要望の伝え方のコツ）</li>
              <li className="flex items-start"><span className="mt-1 mr-2 text-[#0073e6]">✓</span>宿題サポート/家事・仕事の効率化の実例</li>
              <li className="flex items-start"><span className="mt-1 mr-2 text-[#0073e6]">✓</span>子どもに安全に触れさせるルールと見守り設定</li>
              <li className="flex items-start"><span className="mt-1 mr-2 text-[#0073e6]">✓</span>家庭での運用テンプレ配布（初週メニュー）</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">こんな方におすすめ</h3>
            <ul className="space-y-2 text-gray-700 mb-10">
              <li className="flex items-start"><span className="mt-1 mr-2 text-gray-400">•</span>まず保護者自身がGPTの価値を体感したい</li>
              <li className="flex items-start"><span className="mt-1 mr-2 text-gray-400">•</span>子どもに触れさせる前に安全なルールを整えたい</li>
              <li className="flex items-start"><span className="mt-1 mr-2 text-gray-400">•</span>家庭で“続く”仕組みを知りたい</li>
            </ul>
          </div>

          <aside className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 sticky top-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">開催概要</h3>
              <div className="space-y-4 mb-6 text-gray-800">
                <div>
                  <div className="text-sm font-semibold text-gray-600">所要時間</div>
                  <div>60分</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-600">料金</div>
                  <div className="font-bold text-[#0073e6]">今だけ無料！</div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-600">形式</div>
                  <div>オンライン（Zoom/Google Meet）</div>
                </div>
              </div>
              <div className="mt-2">
                <SimpleBookingForm subject="保護者向けChatGPT無料セミナー 参加申込" />
              </div>
            </div>
          </aside>
        </div>

        {/* FAQ */}
        <section className="bg-white border border-gray-200 rounded-2xl p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">よくある質問（FAQ）</h2>
          <div className="space-y-4">
            <div className="rounded-xl border border-gray-100 p-4">
              <div className="font-semibold text-gray-900 mb-1">Q. 13歳未満でも大丈夫？</div>
              <div className="text-gray-700 text-sm">A. 本セミナーは保護者主語です。13歳未満の単独利用は想定せず、保護者の代理活用と家庭ルールを扱います。</div>
            </div>
            <div className="rounded-xl border border-gray-100 p-4">
              <div className="font-semibold text-gray-900 mb-1">Q. 個人情報は安全？</div>
              <div className="text-gray-700 text-sm">A. 申込時は最小限のみ取得。第三者提供なし。資料はワンタイムURL等で配布。</div>
            </div>
            <div className="rounded-xl border border-gray-100 p-4">
              <div className="font-semibold text-gray-900 mb-1">Q. 学校の方針と矛盾しない？</div>
              <div className="text-gray-700 text-sm">A. 丸写し禁止・出典明記を徹底。思考プロセスを残す方法のみ扱います。</div>
            </div>
            <div className="rounded-xl border border-gray-100 p-4">
              <div className="font-semibold text-gray-900 mb-1">Q. 費用は？</div>
              <div className="text-gray-700 text-sm">A. 本イベントは無料。希望者のみ、有料本編や大学生メンター体験をご案内（当日特典あり）。</div>
            </div>
            <div className="rounded-xl border border-gray-100 p-4">
              <div className="font-semibold text-gray-900 mb-1">Q. 持ち物は？</div>
              <div className="text-gray-700 text-sm">A. 〔PC or タブレット〕（任意）。会場参加はWi‑Fiあり。オンラインは静かな環境推奨。</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
