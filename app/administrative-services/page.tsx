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
          {t("行政書士実務部", "Administrative Scrivener Practice Division")}
        </h1>

        <div className="space-y-8">
          <section>
            <p className="leading-relaxed">
              {t(
                "豊かな実務経験を持つ行政書士として、経営者の皆様のビジネスを堅実にサポートいたします。当事務所では、ホームページやデザイン、記事などのトラブルを防ぐ「著作権契約書」の作成や各種ライセンス契約、新事業をスムーズにスタートするための各種「許認可申請・法人設立」を専門的に手掛けています。「何から手をつければいいか分からない」「契約書のリーガルチェックだけ頼みたい」といった身近な疑問にも、分かりやすく丁寧にお応えします。御社のアイデアと権利を守り、安心してビジネスに専念できる環境を一緒に整えていきましょう。",
                "As an administrative scrivener with extensive practical experience, I provide solid support for business owners. Our office specializes in drafting copyright agreements and various license contracts to prevent troubles over websites, designs, and articles, as well as the license/permit applications and company incorporation needed to smoothly launch a new business. We respond clearly and carefully to everyday questions such as “I don't know where to start” or “I just want a legal check of my contract.” Let's protect your ideas and rights together and build an environment where you can focus on your business with peace of mind.",
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
                  {t("● 著作権ライセンス・各種契約書作成", "● Copyright licensing and drafting of various contracts")}
                </h3>
                <p className="leading-relaxed">
                  {t(
                    "業務委託契約書、秘密保持契約（NDA）、ライセンス契約など各種契約書の作成・リーガルチェックから、文化庁への著作権登録、著作権トラブル防止のご相談まで承ります。",
                    "From drafting and legal-checking various contracts such as service agreements, non-disclosure agreements (NDAs), and license agreements, to copyright registration with the Agency for Cultural Affairs and consultations on preventing copyright troubles.",
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
                    "● 農業知財（種苗法品種登録・GI地理的表示）の権利保護",
                    "● Protection of agricultural IP (plant variety registration and GI geographical indications)",
                  )}
                </h3>
                <p className="leading-relaxed">
                  {t(
                    "農産物のブランドを守る「種苗法に基づく品種登録出願」や「地理的表示（GI）保護制度」の申請支援など、ニッチな地域ブランド・農産物の権利保護に強みを持っています。",
                    "We have particular strengths in protecting niche regional brands and agricultural products, including support for plant variety registration applications under the Plant Variety Protection and Seed Act and applications under the Geographical Indication (GI) protection system that safeguard agricultural product brands.",
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
                      {t("著作権契約書・各種契約書の作成・チェック", "Drafting/checking copyright and other contracts")}
                    </td>
                    <td className="py-2 px-4 border text-right whitespace-nowrap">{t("30,000円〜", "¥30,000〜")}</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border">
                      {t("文化庁への著作権登録申請手続き", "Copyright registration with the Agency for Cultural Affairs")}
                    </td>
                    <td className="py-2 px-4 border text-right whitespace-nowrap">{t("80,000円〜", "¥80,000〜")}</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border">
                      {t(
                        "各種許認可申請・法人設立（株式会社・合同会社等）",
                        "License/permit applications and company incorporation (stock companies, LLCs, etc.)",
                      )}
                    </td>
                    <td className="py-2 px-4 border text-right whitespace-nowrap">{t("120,000円〜", "¥120,000〜")}</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border">
                      {t(
                        "地域ブランド・農産物の権利保護（品種登録・GI申請支援）",
                        "Protection of regional brands/agricultural products (plant variety registration, GI application support)",
                      )}
                    </td>
                    <td className="py-2 px-4 border text-right whitespace-nowrap">
                      {t("要相談（個別お見積）", "Please inquire (individual quote)")}
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
                    "初回のご相談（サービス内容や手続きの流れについて）は1時間まで無料です。2回目以降のご相談、または具体的な法律判断・書類チェックを伴う場合は、相談料（1時間5,000円〜（税抜））を申し受けます。",
                    "The first consultation (about our services and the flow of procedures) is free for up to one hour. For second and subsequent consultations, or when specific legal judgment or document checking is involved, a consultation fee (from ¥5,000 per hour, excluding tax) applies.",
                  )}
                </li>
                <li>
                  {t(
                    "案件の難易度による加算や、各種実費（交通費・印紙代・郵送費・翻訳代等）は別途申し受けます。",
                    "Additional fees may apply depending on the complexity of the case, and actual expenses (transportation, stamp fees, postage, translation, etc.) will be billed separately.",
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
