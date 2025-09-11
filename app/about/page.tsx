import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="pt-28">
      {/* Hero */}
      <section className="relative bg-white">
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0073e6] via-[#4da3ff] to-[#0073e6]" />
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-7">
              <h1 className="text-3xl lg:text-5xl font-black tracking-tight text-gray-900 mb-4">運営について</h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                個人家庭教師として多くのご家庭を支援する中で、
                「AIと子どものこれから」への不安や疑問の声を何度も受け止めてきました。
                その“悩み”に現実的な一歩で応えるために、私たちは立ち上がりました。
              </p>
              <div className="flex flex-wrap gap-2">
                {['東京大学','一橋大学','上智大学'].map((u) => (
                  <span key={u} className="px-3 py-1.5 rounded-full bg-blue-50 text-[#0073e6] text-sm font-semibold border border-blue-100">{u} の学生</span>
                ))}
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg">
                <div className="text-sm font-semibold text-[#0073e6] mb-2">私たちについて</div>
                <ul className="space-y-3 text-gray-800">
                  <li className="flex items-start"><span className="mt-1 mr-2 text-[#0073e6]">✓</span>大手塾で3年間、バイリンガル講師として英語を指導</li>
                  <li className="flex items-start"><span className="mt-1 mr-2 text-[#0073e6]">✓</span>小学生の指導実績は200名以上</li>
                  <li className="flex items-start"><span className="mt-1 mr-2 text-[#0073e6]">✓</span>個人家庭教師として30名以上を指導</li>
                  <li className="flex items-start"><span className="mt-1 mr-2 text-[#0073e6]">✓</span>国際バカロレア（IB）を取得済み</li>
                  <li className="flex items-start"><span className="mt-1 mr-2 text-[#0073e6]">✓</span>バイブコーディングの指導も可能</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid md:grid-cols-3 gap-6">
            {[{
              title:'安全・健全', desc:'年齢に応じたルールとリテラシーで、安心してAIに触れられる設計。'
            },{
              title:'家庭で続く', desc:'ご家庭のデバイス・生活リズムに合わせ、無理なく続く運用を提案。'
            },{
              title:'目的直結', desc:'英語・探究・効率学習など、目的に合わせた最短ルートで設計。'
            }].map((p, i) => (
              <div key={i} className="rounded-2xl border border-gray-100 bg-white p-6">
                <div className="w-9 h-9 rounded-full bg-blue-50 text-[#0073e6] flex items-center justify-center font-bold mb-3">{i+1}</div>
                <div className="font-bold text-gray-900 mb-1">{p.title}</div>
                <div className="text-gray-600 text-sm leading-relaxed">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Message */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-14">
          <div className="rounded-2xl border border-gray-100 p-8 shadow-sm">
            <div className="text-sm font-semibold text-[#0073e6] mb-3">代表メッセージ</div>
            <p className="text-lg text-gray-800 leading-relaxed">
              情報が溢れる時代だからこそ、子どもたちがAIを“正しく、楽しく、続けられる形”で使えるように。
              私たちは保護者さまと同じ目線で、家庭で実践できる学びの仕組みを伴走してつくります。
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-gray-100 bg-white p-6">
            <div className="flex items-center gap-2 text-gray-800 font-semibold">
              <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-blue-100 text-[#0073e6]">今だけ無料！</span>
              個人相談30分（無料）を受付中
            </div>
            <div className="flex gap-3">
              <Link href="/consultation" className="px-5 py-3 bg-[#0073e6] text-white font-bold rounded-full hover:bg-[#0052cc]">個人相談を予約する</Link>
              <Link href="/#faq" className="px-5 py-3 border-2 border-[#0073e6] text-[#0073e6] font-bold rounded-full hover:bg-blue-50">よくある質問</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
