import SeminarSection from "../components/SeminarSection";

export default function SeminarsPage() {
  return (
    <main className="pt-28">
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-10 text-center">
          <span className="badge-free mb-3 inline-flex">今だけ無料！</span>
          <h1 className="text-3xl lg:text-5xl font-black text-gray-900 mb-3">開催予定セミナー</h1>
          <p className="text-gray-600">保護者さま向けの無料セミナーから、順にご参加いただけます。</p>
        </div>
      </section>
      <SeminarSection />
    </main>
  );
}
