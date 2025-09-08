"use client"

import Image from "next/image"

type Photo = {
  src: string
  alt: string
}

const defaults: Photo[] = [
  {
    src: 
      "/brand/hero-1.jpg",
    alt: "親子でタブレット学習"
  },
  {
    src: 
      "/brand/hero-2.jpg",
    alt: "ノートPCで学ぶ保護者と子ども"
  },
  {
    src: 
      "/brand/hero-3.jpg",
    alt: "リビングでの学習シーン"
  }
]

const fallbacks = [
  "https://images.unsplash.com/photo-1604881987922-b7ee037a5a5a?q=80&auto=format&fit=crop&w=1200&h=1600",
  "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&auto=format&fit=crop&w=1200&h=900",
  "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&auto=format&fit=crop&w=1200&h=900",
]

export default function PhotoCollage({ photos }: { photos?: Photo[] }) {
  const items = (photos && photos.length ? photos : defaults).map((p, i) => ({
    ...p,
    // fallback remote photo if local not provided by the user
    src: p.src || fallbacks[i % fallbacks.length],
  }))

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 via-pink-100 to-yellow-100 blur-2xl opacity-40 rounded-[36px]" aria-hidden />
      <div className="relative grid grid-cols-2 gap-3">
        <div className="row-span-2 rounded-[24px] overflow-hidden shadow-lg">
          <Image
            src={items[0]?.src || fallbacks[0]}
            alt={items[0]?.alt || "親子学習イメージ"}
            width={800}
            height={1200}
            className="h-full w-full object-cover"
            priority
          />
        </div>
        <div className="rounded-[24px] overflow-hidden shadow-lg">
          <Image
            src={items[1]?.src || fallbacks[1]}
            alt={items[1]?.alt || "学習イメージ"}
            width={800}
            height={600}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="rounded-[24px] overflow-hidden shadow-lg">
          <Image
            src={items[2]?.src || fallbacks[2]}
            alt={items[2]?.alt || "家庭学習イメージ"}
            width={800}
            height={600}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      {/* sticker */}
      <div className="absolute -left-3 -top-3 bg-white rounded-full px-3 py-2 shadow-md text-xs font-bold text-[#0073e6]">
        親しみやすく、続けられる
      </div>
    </div>
  )
}

