import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "行政書士小川千尋事務所",
  description: "外国人の在留資格申請サポート、法人設立、知的財産権のサポートを行う行政書士事務所です。",
  openGraph: {
    title: "行政書士小川千尋事務所",
    description: "外国人の在留資格申請サポート、法人設立、知的財産権のサポートを行う行政書士事務所です。",
    url: "https://ogawachihiro-office.com",
    siteName: "行政書士小川千尋事務所",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon.jpg-7UIaFR881ofrY6Y9igbCGGbrYPNXuH.jpeg",
        width: 800,
        height: 800,
        alt: "OGAWA Logo",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "行政書士小川千尋事務所",
    description: "外国人の在留資格申請サポート、法人設立、知的財産権のサポートを行う行政書士事務所です。",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon.jpg-7UIaFR881ofrY6Y9igbCGGbrYPNXuH.jpeg"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body
        className={inter.className}
        style={{
          backgroundImage: "url(/background.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
        }}
      >
        <LanguageProvider>
          <Header />
          <main className="container mx-auto p-4">{children}</main>
        </LanguageProvider>
      </body>
    </html>
  )
}

