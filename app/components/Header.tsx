import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
      {/* Promo bar */}
      <div className="bg-blue-50 border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-6 h-9 flex items-center justify-center text-sm">
          <a href="/seminar-parents-chatgpt" className="inline-flex items-center gap-2 text-[#0052cc] font-semibold hover:underline">
            <span className="badge-free">今だけ無料！</span>
            保護者向け：ChatGPTの始め方 を開催中
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <img src="/brand/logo.png" alt="Shindo for Kids logo" className="h-7 w-auto" />
            <span className="text-lg md:text-xl font-extrabold text-gray-900 tracking-tight hover-grow cursor-pointer">
              Shindo for Kids
            </span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/seminars" className="text-sm font-semibold text-gray-700 hover:text-[#0073e6] transition-all duration-300 hover:scale-110">
            開催予定セミナー
          </Link>
          <Link href="/about" className="text-sm font-semibold text-gray-700 hover:text-[#0073e6] transition-all duration-300 hover:scale-110">
            運営について
          </Link>
          <Link href="/voice" className="text-sm font-semibold text-gray-700 hover:text-[#0073e6] transition-all duration-300 hover:scale-110">
            過去の受講者のコメント
          </Link>
          <Link href="/faq" className="text-sm font-semibold text-gray-700 hover:text-[#0073e6] transition-all duration-300 hover:scale-110">
            よくある質問
          </Link>
        </nav>
        <div className="hidden md:flex gap-3">
          <Link
            href="/seminar-parents-chatgpt"
            className="px-5 py-2.5 text-sm font-bold btn-primary"
          >
            今だけ無料！保護者向けChatGPT
          </Link>
        </div>
        <div className="md:hidden">
          <Link
            href="/seminar-parents-chatgpt"
            className="px-4 py-2 text-sm font-semibold btn-primary"
          >
            無料セミナー
          </Link>
        </div>
      </div>
    </header>
  )
}
