import Link from 'next/link';
import SimpleBookingForm from "../components/SimpleBookingForm";

export default function ConsultationPage() {
  return (
    <main className="pt-28">
      {/* Hero */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-blue-100 text-[#0073e6]">今だけ無料！</span>
            <span className="text-xs font-semibold text-[#0073e6]">個人相談 30分 無料</span>
          </div>
          <h1 className="text-3xl lg:text-5xl font-black tracking-tight text-gray-900 mb-4">個人相談（30分・オンライン）</h1>
          <p className="text-lg text-gray-700 mb-6">
            ご家庭の状況やお悩みを伺い、AIと学びの“現実的な一歩”を一緒に設計します。
            時間内で、ツール選定、ルールづくり、初週の学習メニューまで具体化します。
          </p>
          <div className="max-w-2xl">
            <SimpleBookingForm subject="個人相談30分（無料） 予約" />
          </div>
          <div className="mt-4">
              <Link href="/#courses" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#0073e6] text-[#0073e6] font-bold rounded-full hover:bg-blue-50">開催予定セミナーを見る</Link>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-6">
          {[{
            title:'対象', desc:'保護者さま（お子さま同席も可）／年中〜小学生'
          },{
            title:'内容', desc:'現状ヒアリング／AIツール案／家庭運用ルール／初週メニュー'
          },{
            title:'形式', desc:'オンライン（Zoom/Google Meet）／30分'
          }].map((b, i)=>(
            <div key={i} className="rounded-2xl border border-gray-100 bg-white p-6">
              <div className="text-sm font-semibold text-gray-600 mb-1">{b.title}</div>
              <div className="text-gray-800">{b.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Notes */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="rounded-2xl border border-gray-100 p-6">
            <div className="text-sm font-semibold text-gray-900 mb-2">ご案内</div>
            <ul className="text-sm text-gray-700 space-y-2 list-disc list-inside">
              <li>無料期間は予告なく終了する場合があります。</li>
              <li>個人相談は1世帯1回まで。追加のご相談は有料またはセミナーをご案内します。</li>
              <li>迷っている段階でもお気軽にご予約ください。</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
