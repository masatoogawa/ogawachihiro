"use client"

import { useLanguage } from "@/contexts/language-context"

export default function Fees() {
  const { t } = useLanguage()

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-sky-600 border-b pb-2">{t("ご利用料金", "Fees")}</h1>

        <div className="bg-white bg-opacity-95 p-6 rounded-lg shadow-sm mb-8">
          <p className="mb-4">
            {t(
              "当事務所では、お客様のニーズに合わせた料金体系を設けております。具体的な金額につきましては、お客さまの状況により異なりますので、個別にお見積りさせていただきます。",
              "Our office has a fee structure tailored to our clients' needs. Specific amounts will vary depending on your situation, so we will provide individual estimates.",
            )}
          </p>
          <p>
            {t(
              "初回相談（サービス内容や手続きの流れについて）は1時間まで無料です。",
              "The first consultation (regarding services and procedures) is free for up to one hour.",
            )}
          </p>
        </div>

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
                    <th className="py-2 px-4 border text-right">{t("料金（税抜）", "Fee (Tax Excluded)")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border">
                      {t("在留資格認定証明書交付申請", "Certificate of Eligibility Application")}
                    </td>
                    <td className="py-2 px-4 border text-right">{t("100,000円〜", "¥100,000〜")}</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border">{t("在留期間更新許可申請", "Extension of Period of Stay")}</td>
                    <td className="py-2 px-4 border text-right">{t("55,000円〜", "¥55,000〜")}</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border">{t("在留資格変更許可申請", "Change of Status of Residence")}</td>
                    <td className="py-2 px-4 border text-right">{t("100,000円〜", "¥100,000〜")}</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border">{t("永住許可申請", "Permanent Residence Application")}</td>
                    <td className="py-2 px-4 border text-right">{t("120,000円〜", "¥120,000〜")}</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border">
                      {t("就労資格証明書交付申請", "Certificate of Authorization for Employment")}
                    </td>
                    <td className="py-2 px-4 border text-right">{t("80,000円〜", "¥80,000〜")}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-sky-700">{t("その他の手続き", "Other Procedures")}</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border">
                <thead>
                  <tr className="bg-sky-100">
                    <th className="py-2 px-4 border text-left">{t("手続き内容", "Procedure")}</th>
                    <th className="py-2 px-4 border text-right">{t("料金（税抜）", "Fee (Tax Excluded)")}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border">{t("帰化申請", "Naturalization Application")}</td>
                    <td className="py-2 px-4 border text-right">{t("200,000円〜", "¥200,000〜")}</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border">{t("法人設立", "Establishment of Corporation")}</td>
                    <td className="py-2 px-4 border text-right">{t("100,000円〜", "¥100,000〜")}</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border">{t("知的財産関連", "Intellectual Property Related")}</td>
                    <td className="py-2 px-4 border text-right">{t("50,000円〜", "¥50,000〜")}</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border">{t("遺言書作成", "Will Preparation")}</td>
                    <td className="py-2 px-4 border text-right">{t("50,000円〜", "¥50,000〜")}</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border">{t("行政書士顧問", "Administrative Scrivener Advisor")}</td>
                    <td className="py-2 px-4 border text-right">{t("20,000円/月", "¥20,000/month")}</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border">{t("2回目以降のご相談", "Consultations after the first time")}</td>
                    <td className="py-2 px-4 border text-right">{t("5,000円/時間", "¥5,000/hour")}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-sky-700">{t("その他の事項", "Other Information")}</h2>
            <ul className="list-disc pl-5 space-y-2 bg-white p-4 rounded-lg">
              <li>{t("初回ご相談は無料です。", "The first consultation is free of charge.")}</li>
              <li>
                {t(
                  "難易度によって料金が加算される場合がございます。",
                  "Additional fees may apply depending on the complexity of the case.",
                )}
              </li>
              <li>
                {t(
                  "郵送費、交通費、印紙代、翻訳代等の実費は別途ご請求いたします。",
                  "Actual expenses such as postage, transportation, stamp fees, and translation costs will be billed separately.",
                )}
              </li>
              <li>{t("消費税が別途加算されます。", "Consumption tax will be added separately.")}</li>
              <li>
                {t("現金払いまたは銀行振込でお願いしております。", "Payment can be made by cash or bank transfer.")}
              </li>
              <li>
                {t(
                  "お支払回数：一括または2回（業務依頼時50%、最終業務完了時50%）",
                  "Payment schedule: One-time payment or two installments (50% at the time of request, 50% upon completion)",
                )}
              </li>
              <li>
                {t(
                  "銀行振込の場合、振込手数料はお客様負担でお願いしております。",
                  "For bank transfers, the transfer fee is the responsibility of the client.",
                )}
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

