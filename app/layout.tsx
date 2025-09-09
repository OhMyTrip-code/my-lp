import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoJP = Noto_Sans_JP({
  variable: "--font-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Shindo for Kids | 子どもと一緒に学ぶAI時代の教育プログラム",
  description: "年中〜小6向け、AI・プログラミング・STEAM教育を通じて未来の力を育む体験型学習プログラム。親子で参加できる少人数制クラス。無料体験会受付中！",
  keywords: ["Shindo for Kids", "AI教育", "子ども向けAI", "プログラミング", "STEAM教育", "年中", "年長", "小学生", "親子学習", "体験会"],
  icons: {
    icon: "/brand/logo.png"
  },
  openGraph: {
    title: "Shindo for Kids | 子どもと一緒に学ぶAI時代の教育プログラム",
    description: "年中〜小6向けAI・プログラミング・STEAM教育プログラム。無料体験会受付中！",
    type: "website",
    locale: "ja_JP",
    siteName: "Shindo for Kids"
  },
  twitter: {
    card: "summary_large_image",
    title: "Shindo for Kids | 子どもと一緒に学ぶAI時代の教育プログラム",
    description: "年中〜小6向けAI・プログラミング・STEAM教育プログラム。無料体験会受付中！"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoJP.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
