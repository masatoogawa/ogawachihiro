"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import ParamiraiBanner from "@/components/paramirai-banner"

export default function About() {
  const { t } = useLanguage()

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-sky-600 border-b pb-2">
          {t("事務所概要", "About Us")}
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4 text-sky-700">
              {t("代表からの挨拶", "Greeting from the Representative")}
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="md:flex gap-6 items-start">
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <Image
                    src="/portrait.webp"
                    alt={t("小川千尋 行政書士", "Chihiro Ogawa Administrative Scrivener")}
                    width={400}
                    height={571}
                    className="rounded-lg shadow-md mx-auto object-cover"
                  />
                </div>
                <div className="md:w-2/3 space-y-4 leading-relaxed">
                  <p>
                    {t(
                      "行政書士の小川千尋（おがわ ちひろ）と申します。当事務所のホームページをご覧いただき、誠にありがとうございます。",
                      "My name is Chihiro Ogawa, an administrative scrivener (gyoseishoshi). Thank you very much for visiting our website.",
                    )}
                  </p>
                  <p>
                    {t(
                      "私はこれまで、特許事務所において約18年間にわたり、特許・実用新案・意匠・商標といった知的財産権に関わる事務業務に深く携わってまいりました。主に、お客様への正確な進捗報告や、ミスが許されない厳格な期限管理など、特許事務所内のバックオフィス業務の第一線を担ってまいりました。",
                      "For approximately 18 years, I was deeply involved in administrative work related to intellectual property rights—patents, utility models, designs, and trademarks—at a patent firm. I was at the core of the patent firm's back-office operations, mainly handling accurate progress reports for clients and strict deadline management where there was no room for error.",
                    )}
                  </p>
                  <p>
                    {t(
                      "また、長年におよぶキャリアの中で知財事務部門の管理職（マネジメント職）も経験し、スタッフの採用・育成、事務フローの構築やマニュアル化、所内システム部と連携したミスを防ぐデータベースの整備など、業務効率化とリスクマネジメントを統括してまいりました。",
                      "Furthermore, in my managerial roles within IP administration, I have overseen overall operational efficiency and risk management. This includes staff recruitment and development, workflow creation and documentation, and collaboration with the internal IT department to maintain databases designed for error prevention.",
                    )}
                  </p>
                  <p>
                    {t(
                      "この「知財事務業務への深い理解」と、「組織の事務リスクをコントロールするマネジメント力」が、現在の私の行政書士としての大きな強みであり、基盤となっています。",
                      "This deep understanding of IP administrative operations, together with the management skills to control an organization's administrative risks, is now my greatest strength and foundation as an administrative scrivener.",
                    )}
                  </p>
                  <p>
                    {t(
                      "現在、当事務所ではこの経験を活かし、補助金・助成金の申請を中心に、著作権・契約書の作成、許認可申請・法人設立、農産物のブランド保護（品種登録・GI申請）をお手伝いしています。補助金の申請は、締切までに必要な書類をそろえ、決まりにそって正確に提出する仕事です。特許事務で身につけたことが、そのまま生きています。",
                      "Today, drawing on this experience, our office focuses on subsidy and grant applications, and also helps with copyright and contract drafting, license/permit applications and company incorporation, and brand protection for agricultural products (plant variety registration and GI applications). Applying for a subsidy means gathering the necessary documents by the deadline and submitting them accurately in line with the rules. What I learned in patent administration carries over directly.",
                    )}
                  </p>
                  <p>
                    {t(
                      "特許の出願は弁理士の先生のご専門ですが、その周りにある補助金や契約、許認可などの手続きは、行政書士としてお手伝いできます。弁理士の先生方との連携も大切にしながら、経営者の皆様が本業に集中できるよう、手続きを確実に進めます。",
                      "Patent filings are the domain of patent attorneys, but as an administrative scrivener I can help with the procedures surrounding them, such as subsidies, contracts, and licenses/permits. Valuing collaboration with patent attorneys, I move procedures forward reliably so that business owners can focus on their core business.",
                    )}
                  </p>
                  <p>
                    {t(
                      "「この補助金を申請したい」「契約書をチェックしてほしい」など、どんなことでも結構です。どうぞお気軽にご相談ください。",
                      "Whether it's “I want to apply for this subsidy” or “I'd like my contract checked,” anything is fine. Please feel free to consult me.",
                    )}
                  </p>
                </div>
              </div>
              <ParamiraiBanner className="mt-6" />
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-sky-700">
              {t("自己紹介", "About Me")}
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="md:flex gap-6 items-start">
                <div className="md:w-2/3 mb-4 md:mb-0">
                  <ul className="space-y-2">
                    <li>{t("長崎県長崎市出身", "Born in Nagasaki city, Nagasaki prefecture")}</li>
                    <li>
                      {t(
                        "上智大学外国語学部英語学科卒業",
                        "Graduated from English Language Department at Sophia University",
                      )}
                    </li>
                  </ul>

                  <ul className="space-y-2 mt-8">
                    <li>
                      {t(
                        "特定行政書士",
                        "Certified Administrative Procedures Legal Specialist authorized to represent clients in administrative appeals",
                      )}
                    </li>
                    <li>{t(
                        "申請取次行政書士",
                        "Certified Immigration Application Agent (Shinsei Toritsugi Gyoseishoshi)",
                      )}</li>
                    <li>
                      {t(
                        "日本行政書士会連合会著作権相談員",
                        "Copyright Consultant (Japan Federation of Administrative Scrivener's Associations)",
                      )}
                    </li>
                    <li>
                      {t(
                        "二級知的財産管理技能士（管理業務）",
                        "2nd grade Certified Specialist of Intellectual Property Management（administration）",
                      )}
                    </li>
                    <li>
                      {t(
                        "不当要求防止責任者講習修了者",
                        "Certified Manager for Prevention of Unjust Demands",
                      )}
                    </li>
                    <li>
                      {t(
                        "監理責任者等講習修了者",
                        "Completed the Supervision Manager Training Course",
                      )}
                    </li>
                  </ul>

                  <ul className="space-y-2 mt-8">
                    <li>{t("家族：夫、息子2人", "Family: Husband and two sons")}</li>
                    <li>{t("趣味：フラメンコ", "Hobby: Flamenco")}</li>
                  </ul>
                </div>
                <div className="md:w-1/3">
                  <Image
                    src="/flamenco.png"
                    alt={t("フラメンコ", "Flamenco")}
                    width={400}
                    height={400}
                    className="rounded-lg shadow-md mx-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-sky-700">
              {t("経歴・実績", "Career & Achievements")}
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="font-semibold mb-4">
                {t(
                  "特許事務所での特許事務・管理職経験",
                  "Patent administration and management experience at a patent firm",
                )}
              </p>
              <ul className="list-disc pl-5 space-y-3 leading-relaxed">
                <li>
                  {t(
                    "外国人スタッフが多く在籍する国際色豊かな大手特許事務所にて、約18年間、知財事務の専門職として勤務。日本国内だけでなく、海外のクライアント企業が特許・商標・意匠等の知的財産権を取得・維持するプロセスにおいて、事務フロントとして正確かつ迅速な進捗報告、ミスの許されない期限管理などの第一線に従事。",
                    "Served for approximately 18 years as an intellectual property (IP) administrative specialist at a prominent, globally diverse patent firm with a large international staff. Managed front-facing administrative operations to support both domestic and international corporate clients in securing and maintaining patent, trademark, and design rights. Responsibilities included delivering accurate and prompt status reports, and handling high-stakes deadline management where zero errors were permitted.",
                  )}
                </li>
                <li>
                  {t(
                    "実務の傍ら、知財事務部門の管理職（マネジメント職）として、全体の事務業務プロセス管理やスタッフの採用・育成を統括。さらに、業務効率化のためのマニュアル作成、所内システム部と連携したミスを未然に防ぐ期限管理データベースの構築など、組織のバックオフィス基盤の底上げに貢献。",
                    "Concurrently served in a managerial role within the IP administration department, overseeing overall administrative workflow processes as well as staff recruitment and training. Significantly enhanced the organization’s back-office foundations by developing standardized operational manuals for increased efficiency and collaborating with the internal IT department to construct a deadline-tracking database designed to preemptively prevent errors.",
                  )}
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-sky-700">
              {t("事務所名", "Office Name")}
            </h2>
            <p>{t("行政書士小川千尋事務所", "Chihiro Ogawa Administrative Scrivener Office")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-sky-700">
              {t("代表者", "Representative")}
            </h2>
            <p>{t("小川 千尋", "Chihiro Ogawa")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-sky-700">
              {t("所在地", "Location")}
            </h2>
            <p>
              {t(
                "〒151-0072 東京都渋谷区幡ヶ谷1丁目2番2号 京王幡ヶ谷ビル4F 4-15",
                "4-15, Keio Hatagaya Building 4F, 1-2-2 Hatagaya, Shibuya-ku, Tokyo 151-0072, Japan",
              )}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-sky-700">
              {t("最寄駅", "Nearest Station")}
            </h2>
            <p>{t("京王線幡ヶ谷駅直結", "Connected to Hatagaya Station on the Keio Line")}</p>
          </section>
        </div>
      </div>
    </div>
  )
}
