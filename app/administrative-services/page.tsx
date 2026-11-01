"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"

export default function AdministrativeServices() {
  const { t } = useLanguage()

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-sky-600 border-b pb-2">
          {t("取扱業務・費用", "Services & Fees")}
        </h1>

        <div className="space-y-8">
          <section>
            <p className="leading-relaxed">
              {t(
                "当事務所では、補助金・助成金の申請を中心に、著作権・契約書の作成、許認可申請・法人設立をお引き受けしています。「この補助金を使いたい」「こういう設備を導入したい」など、やりたいことが決まったら、お気軽にご相談ください。締切や必要な書類を確認し、申請までの段取りを一緒に組み立てます。",
                "Our office focuses on subsidy and grant applications, and also handles copyright and contract drafting, license/permit applications, and company incorporation. Once you know what you want to do—“I want to use this subsidy” or “I want to install this equipment”—please feel free to consult us. We will check the deadlines and required documents and plan the steps up to the application together with you.",
              )}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-sky-700">
              {t("掲載内容（主な業務）", "Services")}
            </h2>
            <div className="space-y-5">
              <div>
                <h3 className="font-semibold mb-1">
                  {t("● 補助金・助成金の申請", "● Subsidy and grant applications")}
                </h3>
                <p className="leading-relaxed">
                  {t(
                    "東京都の外国出願の助成金、中小企業のデジタル化の補助金など、申請書類の作成と電子申請（Jグランツ）をお引き受けします。申請できる制度の確認、GビズIDの取得のご案内、採択後の実績報告まで対応します。",
                    "We prepare application documents and file electronically (jGrants) for programs such as the Tokyo Metropolitan Government's grant for foreign filings and subsidies for the digitalization of small and medium-sized businesses. We also check which programs you are eligible for, guide you in obtaining a gBizID, and handle the performance report after approval.",
                  )}
                </p>
                <div className="mt-1">
                  <Link href="/subsidy-flow" className="text-sm text-sky-600 hover:underline">
                    {t("申請の流れを見る →", "See the application process →")}
                  </Link>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-1">
                  {t("● 著作権ライセンス・各種契約書作成", "● Copyright licensing and drafting of various contracts")}
                </h3>
                <p className="leading-relaxed">
                  {t(
                    "業務委託契約書、秘密保持契約（NDA）、ライセンス契約など各種契約書の作成・チェック、文化庁への著作権登録などを承ります。",
                    "We provide comprehensive services including the drafting and review of various agreements—such as service agreements (freelance/outsourcing contracts), non-disclosure agreements (NDAs), and licensing agreements—as well as handling copyright registration procedures with the Agency for Cultural Affairs.",
                  )}
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">
                  {t(
                    "● 許認可申請・法人設立（株式会社・合同会社等）",
                    "● License/permit applications and company incorporation (stock companies, LLCs, etc.)",
                  )}
                </h3>
                <p className="leading-relaxed">
                  {t(
                    "新事業を始めるための各種許認可申請、会社設立手続きを代行いたします。",
                    "We handle various license/permit applications and company incorporation procedures for starting a new business.",
                  )}
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">
                  {t(
                    "● 農産物のブランド保護（種苗法の品種登録・GI地理的表示）",
                    "● Brand protection for agricultural products (plant variety registration under the Plant Variety Protection and Seed Act, and GI geographical indications)",
                  )}
                </h3>
                <p className="leading-relaxed">
                  {t(
                    "農産物のブランドを守る「種苗法に基づく品種登録出願」や「地理的表示（GI）保護制度」の申請支援など、地域ブランド・農産物の権利保護に強みを持っています。",
                    "We have particular strengths in protecting regional brands and agricultural products, including support for plant variety registration applications under the Plant Variety Protection and Seed Act and applications under the Geographical Indication (GI) protection system that safeguard agricultural product brands.",
                  )}
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-sky-700">
              {t("行政書士実務の費用目安", "Fee Guide for Administrative Scrivener Services")}
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border">
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border">
                      {t("補助金・助成金の申請サポート", "Subsidy and grant application support")}
                    </td>
                    <td className="py-2 px-4 border text-right whitespace-nowrap">{t("30,000円〜", "From ¥30,000")}</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border">
                      {t("著作権契約書・各種契約書の作成・チェック", "Drafting/checking copyright and other contracts")}
                    </td>
                    <td className="py-2 px-4 border text-right whitespace-nowrap">{t("30,000円〜", "From ¥30,000")}</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border">
                      {t("文化庁への著作権登録申請手続き", "Copyright registration with the Agency for Cultural Affairs")}
                    </td>
                    <td className="py-2 px-4 border text-right whitespace-nowrap">{t("80,000円〜", "From ¥80,000")}</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border">
                      {t(
                        "各種許認可申請・法人設立（株式会社・合同会社等）",
                        "License/permit applications and company incorporation (stock companies, LLCs, etc.)",
                      )}
                    </td>
                    <td className="py-2 px-4 border text-right whitespace-nowrap">{t("120,000円〜", "From ¥120,000")}</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border">
                      {t(
                        "農産物のブランド保護（品種登録・GI申請支援）",
                        "Brand protection for agricultural products (plant variety registration, GI application support)",
                      )}
                    </td>
                    <td className="py-2 px-4 border text-right whitespace-nowrap">
                      {t("要相談（個別お見積）", "Price upon request (Individual quotation)")}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 bg-sky-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 text-sky-700">
                {t("【ご相談・費用についてのご案内】", "About Consultations and Fees")}
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
                <li>{t("上記の金額は税抜記載です。", "The amounts above are exclusive of tax.")}</li>
                <li>
                  {t(
                    "初回のご相談（サービス内容や手続きの流れについて）は、1時間まで無料です。次のような場合は、費用をいただいております。",
                    "The first consultation (about our services and the flow of procedures) is free for up to one hour. Fees apply in the following cases:",
                  )}
                  <ul className="list-none mt-1 space-y-1">
                    <li>{t("・2回目以降のご相談：1時間5,000円〜（税抜）", "・Second and subsequent consultations: from ¥5,000 per hour (excluding tax)")}</li>
                    <li>{t("・書類のチェック：別途お見積り", "・Document checks: quoted separately")}</li>
                    <li>
                      {t(
                        "・使える補助金を一から探す調査：別途お見積り",
                        "・Research to find suitable subsidies from scratch: quoted separately",
                      )}
                    </li>
                  </ul>
                </li>
                <li>
                  {t(
                    "案件の難易度による加算や、各種実費（交通費・印紙代・郵送費・翻訳代等）は別途申し受けます。",
                    "Additional fees may apply depending on the complexity of the case, and actual expenses (transportation, stamp fees, postage, translation, etc.) will be billed separately.",
                  )}
                </li>
              </ul>
              <h3 className="font-semibold mt-5 mb-2 text-sky-700">
                {t("補助金・助成金の申請サポートについて", "About Subsidy and Grant Application Support")}
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
                <li>
                  {t(
                    "費用は、制度や申請の内容によって変わるため、個別にお見積りします。制度によっては、採択後の手続きの費用や、交付額に応じた報酬がかかります。",
                    "Fees vary depending on the program and the content of the application, so we provide an individual quotation. Depending on the program, there may be fees for post-approval procedures or a fee based on the amount granted.",
                  )}
                </li>
                <li>
                  {t(
                    "補助金・助成金は審査があり、採択されない場合もあります。当事務所が採択をお約束するものではありません。",
                    "Subsidies and grants are subject to screening, and applications may not be approved. Our office does not guarantee approval.",
                  )}
                </li>
                <li>
                  {t(
                    "申請サポートの費用は、申請書類の作成などの作業に対していただくものです。そのため、不採択の場合も返金はいたしません。",
                    "Application support fees are charged for work such as preparing the application documents. Therefore, they are not refunded even if the application is not approved.",
                  )}
                </li>
                <li>
                  {t(
                    "申請サポートの費用は、補助金・助成金の対象経費にはなりません。",
                    "Application support fees are not eligible expenses under the subsidy or grant.",
                  )}
                </li>
              </ul>
            </div>
          </section>

          <div className="text-center pt-2">
            <Link href="/contact">
              <Button className="bg-sky-600 hover:bg-sky-500 px-8">
                {t("お問い合わせはこちら", "Contact Us")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
