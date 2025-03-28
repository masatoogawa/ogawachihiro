"use client"

import { useLanguage } from "@/contexts/language-context"

export default function Blog() {
  const { t } = useLanguage()

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-sky-600 border-b pb-2">{t("ブログ", "Blog")}</h1>

      <div className="bg-white p-8 rounded-lg shadow-sm text-center">
        <h2 className="text-xl font-semibold mb-4 text-sky-700">{t("コンテンツ準備中", "Content Coming Soon")}</h2>
        <p className="text-gray-600 mb-4">
          {t(
            "現在、ブログコンテンツを準備中です。外国人の方の在留資格申請や法人設立、知的財産権に関する有益な情報を近日中に公開予定です。",
            "We are currently preparing blog content. Useful information on residence status applications for foreigners, business establishment, and intellectual property rights will be published soon.",
          )}
        </p>
        <p className="text-gray-600">
          {t(
            "しばらくお待ちください。最新情報はSNSでも発信していきます。",
            "Please stay tuned. We will also share the latest information on our social media.",
          )}
        </p>
      </div>
    </div>
  )
}

