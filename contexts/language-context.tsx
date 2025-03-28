"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "ja" | "en"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (ja: string, en: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("ja")
  const [mounted, setMounted] = useState(false)

  // クライアントサイドでのみ実行
  useEffect(() => {
    setMounted(true)
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  // 言語設定が変更されたらローカルストレージとクッキーに保存
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("language", language)
      document.cookie = `language=${language}; path=/; max-age=31536000; SameSite=Lax`

      // HTML の lang 属性を更新
      document.documentElement.lang = language
    }
  }, [language, mounted])

  // 翻訳関数
  const t = (ja: string, en: string) => {
    return language === "ja" ? ja : en
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

