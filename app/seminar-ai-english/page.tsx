import Link from 'next/link'

export default function AIEnglishSeminar() {
  return (
    <div className="min-h-screen bg-[#f8f9fa]">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-6">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/" className="inline-flex items-center text-[#0073e6] font-semibold hover:underline mb-4">
            ← セミナー一覧に戻る
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            英検と&ldquo;使える英語&rdquo;を両立
          </h1>
          <p className="text-lg text-gray-600">AI時代の家庭学習メニュー設計</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* セミナー詳細 */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">セミナー内容</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                AIツールを活用して、英検などの試験対策と実用的な英語力を同時に身につける学習法をお教えします。
                AI英会話アプリや発音矯正AIの効果的な活用方法を実践的に学べます。
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">学べること</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#0073e6] mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                  </svg>
                  <span>AI英会話アプリの効果的な使い方</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#0073e6] mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                  </svg>
                  <span>英検対策×実践英語の学習設計</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#0073e6] mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                  </svg>
                  <span>発音矯正AIツールの活用法</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 text-[#0073e6] mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                  </svg>
                  <span>家庭での英語環境づくりのコツ</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-4">こんな方におすすめ</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-3 h-3 text-gray-400 mr-3 mt-2 flex-shrink-0" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3"/>
                  </svg>
                  <span>英検取得を目指すお子様とその保護者</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-3 h-3 text-gray-400 mr-3 mt-2 flex-shrink-0" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3"/>
                  </svg>
                  <span>実用的な英語力を身につけたい方</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-3 h-3 text-gray-400 mr-3 mt-2 flex-shrink-0" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3"/>
                  </svg>
                  <span>AIツールを英語学習に活用したい方</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-3 h-3 text-gray-400 mr-3 mt-2 flex-shrink-0" fill="currentColor" viewBox="0 0 8 8">
                    <circle cx="4" cy="4" r="3"/>
                  </svg>
                  <span>効率的な家庭学習法を知りたい方</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 sticky top-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">開催概要</h3>
              <div className="space-y-4 mb-6">
                <div>
                  <dt className="text-sm font-semibold text-gray-600 mb-1">日時</dt>
                  <dd className="text-gray-900">2025年10月27日（日）13:00-15:00</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-gray-600 mb-1">時間</dt>
                  <dd className="text-gray-900">120分</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-gray-600 mb-1">定員</dt>
                  <dd className="text-gray-900">親子8組限定</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-gray-600 mb-1">受講料</dt>
                  <dd className="text-3xl font-bold text-gray-900">¥5,000</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-gray-600 mb-1">講師</dt>
                  <dd className="flex items-center gap-2">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b29c?w=32&h=32&fit=crop&crop=face" 
                      alt="Sarah Johnson"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-gray-900 font-semibold text-sm">Sarah Johnson</p>
                      <p className="text-gray-600 text-xs">英語教育コンサルタント</p>
                    </div>
                  </dd>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-orange-600 font-semibold">残席状況</span>
                  <div className="flex gap-1">
                    {[...Array(8)].map((_, i) => (
                      <div 
                        key={i} 
                        className={`w-2 h-2 rounded-full ${
                          i < 3 ? 'bg-orange-400' : 'bg-gray-200'
                        }`} 
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-orange-600 font-medium">残り3組となりました</p>
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 mt-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <div>
                    <h4 className="font-semibold text-green-800 text-sm mb-1">100%満足保証</h4>
                    <p className="text-xs text-green-700 leading-relaxed">
                      セミナー終了後7日以内にご連絡いただければ、理由を問わず全額返金いたします。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 申し込みフォーム */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            お申し込みフォーム
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
              <p className="text-sm text-blue-800">
                下記のフォームにご記入いただき、送信ボタンをクリックしてください。
                お申し込み確認後、詳細をメールでお送りいたします。
              </p>
            </div>
            
            {/* Google Form埋め込みエリア */}
            <div className="bg-white border-2 border-dashed border-gray-300 rounded-xl p-12 text-center">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Google Form 埋め込み予定地</h3>
              <p className="text-sm text-gray-500 mb-6">
                こちらにGoogle FormのiframeタグやURLを埋め込みます
              </p>
              <code className="text-xs text-gray-600 bg-white px-4 py-2 rounded block mb-6">
                &lt;iframe src="https://forms.google.com/your-form-2" width="100%" height="600"&gt;&lt;/iframe&gt;
              </code>
              <a
                href="https://forms.google.com/your-form-2"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0073e6] text-white font-semibold rounded-full hover:bg-[#0052cc] transition-all duration-300"
              >
                <span>外部フォームで申し込む</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
