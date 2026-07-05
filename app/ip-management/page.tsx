"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"

export default function IpManagement() {
  const { t } = useLanguage()

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-sky-600 border-b pb-2">
          {t("知財事務マネジメント部", "IP Administration Management Division")}
        </h1>

        <div className="space-y-8">
          <section>
            <p className="leading-relaxed">
              {t(
                "18年の特許事務経験を活かし、弁理士の先生方の良きパートナーとして特許事務所のバックオフィスを堅実に支えます。期限管理のデータベース構築や、事務フローの効率化・マニュアル化、AIツールを活用した業務改善まで、少人数の事務所様が抱える事務リスクをマネジメントによって解消します。先生方がコア業務である知財戦略・鑑定・明細書作成に集中できる環境を提供いたします。",
                "Leveraging my 18 years of experience in IP administration, I serve as a reliable partner to patent attorneys, providing steadfast support for your firm's back-office operations. From constructing deadline-tracking databases and streamlining/documenting administrative workflows to implementing AI-driven operational improvements, I eliminate administrative risks for boutique firms through professional management. This allows attorneys to focus entirely on their core competencies: IP strategy, expert opinions, and drafting patent specifications.",
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
                  {t(
                    "● 特許事務所向け知財事務サポート（期限管理・報告書作成等）",
                    "● IP Administrative Support for Patent Firms (Deadline Tracking, Reporting, etc.)",
                  )}
                </h3>
                <p className="leading-relaxed">
                  {t(
                    "18年の特許事務経験を活かし、弁理士の先生方の右腕として、期限管理や報告書作成等の事務業務全般をサポートします。",
                    "Leveraging 18 years of experience in IP administration, I serve as an extension of your team, providing comprehensive support for deadline tracking, status report preparation, and overall administrative workflows.",
                  )}
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">
                  {t(
                    "● 知財事務業務のフロー効率化・改善（マニュアル化・AI活用）",
                    "● Streamlining & Optimizing IP Administrative Workflows (Documentation & AI Utilization)",
                  )}
                </h3>
                <p className="leading-relaxed">
                  {t(
                    "少人数の特許事務所における知財事務フローの業務改善（DX化支援）、ミスを防ぐ期限管理データベースの構築、AIツールを活用した業務効率化や事務マニュアル作成をマネジメントします。",
                    "I manage operational improvements (DX support) for administrative workflows in boutique patent firms. This includes constructing error-preventing tracking databases, enhancing efficiency via AI tools, and developing standardized operational manuals.",
                  )}
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1">
                  {t(
                    "● 弁理士の先生方と連携した各種補助金申請",
                    "● Comprehensive Subsidy Application Support in Collaboration with Patent Attorneys",
                  )}
                </h3>
                <p className="leading-relaxed">
                  {t(
                    "各種公的補助金の申請を、提携する弁理士とワンストップで連携サポートします。",
                    "In close cooperation with partner patent attorneys, we provide streamlined, one-stop assistance for various public subsidy applications.",
                  )}
                </p>
              </div>
            </div>

            <div className="mt-6 bg-gray-50 border border-gray-200 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 text-gray-700">
                {t(
                  "【特許庁提出書類に関するご注意】",
                  "[Notice Regarding Documents for the Japan Patent Office]",
                )}
              </h3>
              <p className="text-sm leading-relaxed text-gray-700">
                {t(
                  "当事務所では、弁理士法第75条（非弁理士の業務の禁止）を遵守するため、特許庁への提出書類（国内出願・PCT国際出願・各種手続書等）の作成・代行業務は一切行っておりません。各種手続きに関する情報提供や記載内容のアドバイスを承っております。あらかじめご了承ください。",
                  "In compliance with Article 75 of the Patent Attorney Act (Prohibition of Services by Non-Patent Attorneys), our office does not engage in the creation or representation of any documents to be submitted to the Japan Patent Office (including domestic applications, PCT international applications, and various procedural forms). Please note that our services are strictly limited to providing informational support and advice regarding content for various procedures. Thank you for your understanding.",
                )}
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-sky-700">
              {t("知財事務マネジメントの費用目安", "Fee Guide for IP Administration Management")}
            </h2>
            <p className="leading-relaxed">
              {t(
                "知財事務マネジメント業務につきましては、特許事務所様の規模、ご依頼いただく業務範囲、月間の想定ボリューム等に合わせて柔軟に対応しております。現状の課題をお伺いした上で、個別に最適なプラン・費用をご提案（お見積り）いたしますので、まずはお気軽にご相談ください。",
                "For IP administration management services, we respond flexibly according to the size of your patent firm, the scope of work requested, the estimated monthly volume, and so on. After hearing about your current challenges, we will propose an optimal plan and fee (quote) tailored to you, so please feel free to contact us first.",
              )}
            </p>
            <div className="mt-4 bg-sky-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 text-sky-700">
                {t("【ご相談・費用についてのご案内】", "About Consultations and Fees")}
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
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
