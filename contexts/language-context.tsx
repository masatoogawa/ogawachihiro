"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "ja" | "easy-ja" | "en"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (ja: string, easyJa: string, en: string) => string
  isEasyJapanese: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("ja")
  const [mounted, setMounted] = useState(false)

  // クライアントサイドでのみ実行
  useEffect(() => {
    setMounted(true)
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && ["ja", "easy-ja", "en"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  // 言語設定が変更されたらローカルストレージとクッキーに保存
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("language", language)
      document.cookie = `language=${language}; path=/; max-age=31536000; SameSite=Lax`

      // HTML の lang 属性を更新
      document.documentElement.lang = language === "easy-ja" ? "ja" : language
    }
  }, [language, mounted])

  // やさしい日本語かどうかのフラグ
  const isEasyJapanese = language === "easy-ja"

  // 翻訳関数
  const t = (ja: string, easyJa: string, en: string) => {
    switch (language) {
      case "ja":
        return ja
      case "easy-ja":
        return easyJa
      case "en":
        return en
      default:
        return ja
    }
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isEasyJapanese }}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

