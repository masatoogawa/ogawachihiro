"use client"

import { ExternalLink } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { cn } from "@/lib/utils"

const PARAMIRAI_URL = "https://paramirai.com"

/**
 * 【弁理士の先生方へ】の案内帯（TOP・事務所概要で共通）。
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
      <p className="leading-relaxed mb-2">
        {t(
          "お客様から補助金・助成金のご相談を受けたときは、申請書類の作成と取りまとめをお引き受けします。出願は先生に、助成金の書類は私に、という形で、先生のお仕事と並行して進めます。申請書のうち、技術的・専門的な内容は先生にご相談させてください。必要な書類は基本的にお客様にご用意いただきますが、出願関係の資料などは先生にご協力をお願いすることがあります。",
          "When your clients consult you about subsidies or grants, I can take on the preparation and coordination of the application documents. The filing stays with you and the grant paperwork with me, so the work proceeds in parallel with yours. I will consult you on the technical and specialized parts of the application. Clients basically prepare the necessary documents themselves, but I may ask for your cooperation with filing-related materials.",
        )}
      </p>
      <p className="leading-relaxed">
        {t(
          "特許事務所の事務の仕組みづくり（ペーパーレス化・リモートワーク・AIの活用など）は、別屋号「オフィス パラミライ」でお手伝いしています。",
          "Support for building administrative systems at patent firms (going paperless, remote work, use of AI, etc.) is provided under our separate trade name, “Office Paramirai.”",
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
