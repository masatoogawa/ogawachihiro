import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "カスタマーハラスメント防止に向けた取り組みについて | 行政書士小川千尋事務所",
  description:
    "行政書士小川千尋事務所におけるカスタマーハラスメント防止に向けた取り組み（録音対応等）についてご案内します。",
}

export default function CustomerHarassmentPrevention() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-sky-600 border-b pb-2">
          【重要】カスタマーハラスメント防止に向けた取り組みについて
        </h1>

        <div className="bg-sky-50 p-6 rounded-lg space-y-4 leading-relaxed">
          <p>当事務所をご利用いただき、誠にありがとうございます。</p>
          <p>
            「東京都カスタマーハラスメント防止条例」に則り、当社ではお客様に安全・安心なサービスを提供するとともに、従業者が健康で安心して働ける環境を確保するため、カスタマーハラスメント防止対策を強化いたします。
          </p>
          <p>
            その一環として、本日より、事実関係の正確な把握および悪質なハラスメント行為への対策として、ご面談時の会話内容や状況を録音させていただく場合がございます。
          </p>
          <p>
            取得した録音データは、万が一の不適切な事案発生時の事実確認・対応のみに適切に使用し、法令に基づき厳重に管理いたします。
          </p>
          <p>
            今後とも、お客様により良いサービスを提供できるよう努めてまいりますので、何卒ご理解とご協力を賜りますようお願い申し上げます。
          </p>
          <p className="text-right">
            2026年6月22日　行政書士小川千尋事務所　代表　小川千尋
          </p>
        </div>
      </div>
    </div>
  )
}
