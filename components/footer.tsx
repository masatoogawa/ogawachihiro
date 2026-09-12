"use client"

import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="container mx-auto px-4 pb-6 text-center text-xs text-slate-600">
      <div className="bg-white bg-opacity-80 rounded-lg px-4 py-3 inline-block">
        <p>
          {t("弁理士の先生方へ：特許事務所様の知財事務・DX支援は ", "For patent attorneys: IP administration and DX support for patent firms — ")}
          <a
            href="https://paramirai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-700 hover:underline"
          >
            {t("オフィス パラミライ", "Office Paramirai")}
          </a>
        </p>
        <p className="mt-1 text-slate-500">
          © {new Date().getFullYear()} {t("行政書士小川千尋事務所", "Chihiro Ogawa Administrative Scrivener Office")}
        </p>
      </div>
    </footer>
  )
}
