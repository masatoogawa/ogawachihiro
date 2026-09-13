"use client"

import { ExternalLink } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { cn } from "@/lib/utils"

const PARAMIRAI_URL = "https://paramirai.com"

/**
 * 弁理士の先生方向けの案内帯。
 * 行政書士事務所本体のサービスと同格に見えないよう、控えめなトーンで表示する。
 */
export default function ParamiraiBanner({ className }: { className?: string }) {
  const { t } = useLanguage()

  return (
    <div
      className={cn(
        "bg-slate-50 bg-opacity-90 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-700",
        className,
      )}
    >
      <p className="font-semibold text-slate-800 mb-1">
        {t("【弁理士の先生方へ】", "[For Patent Attorneys]")}
      </p>
      <p className="leading-relaxed">
        {t(
          "特許事務所様の知財事務フロー改善・DX推進につきましては、知財DX専門サービス「オフィス パラミライ」にてサポートしております。",
          "IP administration workflow improvement and DX support for patent firms are provided by our dedicated IP DX service, “Office Paramirai.”",
        )}
      </p>
      <a
        href={PARAMIRAI_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 mt-1 text-sky-700 hover:underline"
      >
        {PARAMIRAI_URL}
        <ExternalLink size={14} aria-hidden="true" />
        <span className="sr-only">{t("（別ウィンドウで開く）", "(opens in a new window)")}</span>
      </a>
    </div>
  )
}
