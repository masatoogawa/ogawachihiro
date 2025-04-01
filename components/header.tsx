"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const menuItems = [
    { href: "/", label: t("TOP", "TOP", "HOME") },
    { href: "/about", label: t("事務所概要", "事務所について", "About Us") },
    { href: "/fees", label: t("ご利用料金", "料金", "Fees") },
    { href: "/contact", label: t("お問い合わせ", "お問い合わせ", "Contact") },
    { href: "/blog", label: t("ブログ", "ブログ", "Blog") },
  ]

  return (
    <>
      <div className="bg-sky-600 text-white p-2 flex justify-between items-center">
        <div>
          <span className="text-sm">
            {t("行政書士小川千尋事務所", "行政書士小川千尋事務所", "Chihiro Ogawa Administrative Scrivener Office")}
          </span>
        </div>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage("ja")}
            className={`text-white hover:text-white hover:bg-sky-700 px-2 py-1 h-auto ${
              language === "ja" ? "bg-sky-700" : ""
            }`}
          >
            日本語
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage("easy-ja")}
            className={`text-white hover:text-white hover:bg-sky-700 px-2 py-1 h-auto ${
              language === "easy-ja" ? "bg-sky-700" : ""
            }`}
          >
            やさしい日本語
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage("en")}
            className={`text-white hover:text-white hover:bg-sky-700 px-2 py-1 h-auto ${
              language === "en" ? "bg-sky-700" : ""
            }`}
          >
            English
          </Button>
        </div>
      </div>
      <div className="bg-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.jpeg"
              alt="OGAWA Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-xl md:text-2xl font-bold">
              {t("行政書士小川千尋事務所", "行政書士小川千尋事務所", "Chihiro Ogawa Administrative Scrivener Office")}
            </span>
          </Link>

          {/* デスクトップメニュー */}
          <nav className="hidden md:block">
            <ul className="flex gap-8">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-sky-600 font-medium">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ハンバーガーメニューボタン */}
          <button
            className="md:hidden text-sky-600"
            onClick={toggleMenu}
            aria-label={t("メニューを開く", "メニューを開く", "Open menu")}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* モバイルメニュー（半透明背景） */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden flex flex-col">
          {/* 半透明の背景オーバーレイ */}
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" onClick={toggleMenu}></div>

          {/* メニューコンテンツ */}
          <div className="relative bg-white bg-opacity-90 backdrop-blur-sm w-full max-w-sm ml-auto h-full shadow-xl">
            <div className="flex justify-end p-4">
              <button onClick={toggleMenu} aria-label={t("メニューを閉じる", "メニューを閉じる", "Close menu")}>
                <X size={24} className="text-sky-600" />
              </button>
            </div>
            <nav className="p-4">
              <ul className="space-y-4">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block py-2 text-lg font-medium border-b border-gray-100 hover:text-sky-600"
                      onClick={toggleMenu}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}

