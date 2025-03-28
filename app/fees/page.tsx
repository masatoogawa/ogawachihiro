"use client"

import { useLanguage } from "@/contexts/language-context"

export default function Fees() {
  const { t } = useLanguage()

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-sky-600 border-b pb-2">{t("ご利用料金", "Fees")}</h1>

      <p className="mb-6">
        {t(
          "当事務所では、お客様のニーズに合わせた明確な料金体系を設けております。初回相談（サービス内容や手続きの流れについて）は1時間まで無料です。",
          "Our office has a clear fee structure tailored to our clients' needs. The first hour of consultation (regarding services and procedures) is free of charge.",
        )}
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-4 text-sky-700">
            {t("在留資格申請", "Residence Status Applications")}
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border">
              <thead>
                <tr className="bg-sky-100">
                  <th className="py-2 px-4 border text-left">{t("申請種類", "Application Type")}</th>
                  <th className="py-2 px-4 border text-right">{t("料金（税込）", "Fee (Tax Included)")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border">{t("短期滞在ビザ", "Short-term Stay Visa")}</td>
                  <td className="py-2 px-4 border text-right">{t("30,000円〜", "¥30,000〜")}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border">
                    {t(
                      "就労ビザ（技術・人文知識・国際業務等）",
                      "Work Visa (Engineer/Specialist in Humanities/International Services, etc.)",
                    )}
                  </td>
                  <td className="py-2 px-4 border text-right">{t("60,000円〜", "¥60,000〜")}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border">{t("経営・管理ビザ", "Business Manager Visa")}</td>
                  <td className="py-2 px-4 border text-right">{t("80,000円〜", "¥80,000〜")}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border">{t("配偶者ビザ", "Spouse Visa")}</td>
                  <td className="py-2 px-4 border text-right">{t("50,000円〜", "¥50,000〜")}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border">{t("永住許可申請", "Permanent Residence Application")}</td>
                  <td className="py-2 px-4 border text-right">{t("70,000円〜", "¥70,000〜")}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            {t(
              "※ケースによって料金が変動する場合があります。詳細はご相談ください。",
              "※Fees may vary depending on the case. Please contact us for details.",
            )}
          </p>
          <p className="mt-2 text-sm text-gray-600">
            {t(
              "※取次行政書士資格を取得中のため、入管業務は2025年7月以降開始予定です。",
              "※VISA applications can be processed from July 2025.",
            )}
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-sky-700">{t("その他の手続き", "Other Procedures")}</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border">
              <thead>
                <tr className="bg-sky-100">
                  <th className="py-2 px-4 border text-left">{t("手続き内容", "Procedure")}</th>
                  <th className="py-2 px-4 border text-right">{t("料金（税込）", "Fee (Tax Included)")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border">{t("帰化申請", "Naturalization Application")}</td>
                  <td className="py-2 px-4 border text-right">{t("100,000円〜", "¥100,000〜")}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border">{t("法人設立", "Establishment of Corporation")}</td>
                  <td className="py-2 px-4 border text-right">{t("50,000円〜", "¥50,000〜")}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border">{t("在留資格変更許可申請", "Change of Status of Residence")}</td>
                  <td className="py-2 px-4 border text-right">{t("40,000円〜", "¥40,000〜")}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border">{t("知的財産権関連", "Intellectual Property Related")}</td>
                  <td className="py-2 px-4 border text-right">{t("要相談", "Consultation required")}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-sky-700">{t("お支払い方法", "Payment Methods")}</h2>
          <p>
            {t(
              "現金、銀行振込、クレジットカード（VISA、MasterCard、JCB）がご利用いただけます。",
              "Cash, bank transfer, and credit cards (VISA, MasterCard, JCB) are accepted.",
            )}
          </p>
        </section>
      </div>
    </div>
  )
}

