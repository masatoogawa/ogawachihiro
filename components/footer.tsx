"use client"

import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="container mx-auto px-4 pb-6 text-center text-xs text-slate-500">
      <p className="bg-white bg-opacity-80 rounded-lg px-4 py-2 inline-block">
        © {new Date().getFullYear()} {t("行政書士小川千尋事務所", "Chihiro Ogawa Administrative Scrivener Office")}
      </p>
    </footer>
  )
}
