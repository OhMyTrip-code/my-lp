export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <span className="inline-block rounded-full border px-3 py-1 text-xs tracking-wide">
          New
        </span>
        <h1 className="mt-6 text-4xl font-bold sm:text-5xl">
          Build with AI, fast.
        </h1>
        <p className="mt-4 text-base text-gray-600">
          Next.js + Tailwind × Warp × Claude/ChatGPT
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="#get-started"
            className="rounded-xl px-5 py-3 text-white bg-[#FF69B4] hover:opacity-90"
          >
            Get Started
          </a>
          <a
            href="https://github.com"
            className="rounded-xl px-5 py-3 border"
          >
            View on GitHub
          </a>
        </div>
      </section>
    </main>
  );
}
