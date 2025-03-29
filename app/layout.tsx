import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://ogawachihiro-office.com'),
  title: "行政書士小川千尋事務所",
  description: "外国人の在留資格申請サポート、法人設立、知的財産権のサポートを行う行政書士事務所です。",
  openGraph: {
    title: "行政書士小川千尋事務所",
    description: "外国人の在留資格申請サポート、法人設立、知的財産権のサポートを行う行政書士事務所です。",
    url: "https://ogawachihiro-office.com",
    siteName: "行政書士小川千尋事務所",
    images: [
      {
        url: "/icon.svg",
        width: 32,
        height: 32,
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
    images: ["/icon.svg"],
  },
  icons: {
    icon: [
      { url: 'icon.svg', type: 'image/svg+xml' },
      { url: 'favicon.ico', type: 'image/x-icon' },
    ],
    apple: [
      { url: 'apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
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

