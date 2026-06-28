"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"

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
                      "私はこれまで、特許事務所において約18年間にわたり、特許・実用新案・意匠・商標といった知的財産権（知財）に関わる事務業務に深く携わってまいりました。主に、特許庁へ提出する各種書類の作成や手続き、お客様への正確な進捗報告、そしてミスが許されない期限管理の第一線を担ってまいりました。",
                      "For approximately 18 years, I was deeply involved in administrative work related to intellectual property (IP) rights—patents, utility models, designs, and trademarks—at a patent firm. I was primarily on the front lines of preparing and filing documents with the Japan Patent Office, providing accurate progress reports to clients, and managing deadlines where no mistakes are permitted.",
                    )}
                  </p>
                  <p>
                    {t(
                      "また、長年におよぶキャリアの中で知財事務部門の管理職（マネジメント職）も経験し、少人数から中規模の組織における事務フローの構築、所内システム部と連携したミスを防ぐデータベースの整備、スタッフの育成やマニュアル化、業務効率化を統括してまいりました。",
                      "Over my long career, I also served as a manager in the IP administration department, overseeing the design of administrative workflows in small to mid-sized organizations, the development of error-preventing databases in cooperation with the in-house systems team, staff training and manualization, and operational efficiency.",
                    )}
                  </p>
                  <p>
                    {t(
                      "この「知的財産に対する深い知識」と、長年のキャリアで培った「組織の事務リスクをコントロールするマネジメント力」が、現在の私の行政書士としての大きな強みであり、基盤となっています。",
                      "This deep knowledge of intellectual property, together with the management skills to control an organization's administrative risks cultivated over my long career, is now my greatest strength and foundation as an administrative scrivener.",
                    )}
                  </p>
                  <p>
                    {t(
                      "現在、当事務所ではこの経験を活かし、以下の二つの軸を中心に堅実なサポートを展開しております。",
                      "Today, drawing on this experience, our office provides solid support centered on the following two pillars:",
                    )}
                  </p>
                  <ul className="list-disc pl-5 space-y-3">
                    <li>
                      <span className="font-semibold">{t("「行政書士実務部」", "“Administrative Scrivener Practice Division”")}</span>
                      <br />
                      {t(
                        "経営者様が直面しやすい「ホームページ・デザイン・記事などの著作権トラブル」を防ぐための著作権契約書をはじめとする各種契約書作成、新事業をスムーズにスタートするための許認可申請・法人設立、建造・開発された農産物の価値を守る農業知財（種苗法品種登録・GI申請）の保護支援を手掛けています。",
                        "We handle the drafting of copyright agreements and other contracts to prevent the copyright troubles business owners often face (over websites, designs, articles, etc.), license/permit applications and company incorporation for smoothly launching new businesses, and support for protecting agricultural IP (plant variety registration and GI applications) that safeguards the value of cultivated and developed agricultural products.",
                      )}
                    </li>
                    <li>
                      <span className="font-semibold">{t("「知財事務マネジメント部」", "“IP Administration Management Division”")}</span>
                      <br />
                      {t(
                        "少人数の特許事務所様や弁理士の先生方の頼れるパートナーとして、これまでの管理職経験をフルに活かした知財事務のデータベース構築、業務フロー効率化・AI活用コンサルティング、実務アウトソーシングを担っています。",
                        "As a reliable partner for small patent firms and patent attorneys, we provide IP administration database development, workflow efficiency and AI-utilization consulting, and practical outsourcing, fully leveraging our management experience.",
                      )}
                    </li>
                  </ul>
                  <p>
                    {t(
                      "知財に詳しく、弁理士との連携も強い行政書士として、御社の大切なアイデアや権利、ミスのない確実な事務体制を強固に守り抜く存在でありたいと願っています。",
                      "As an administrative scrivener well-versed in IP and strongly connected with patent attorneys, I aspire to firmly protect your valuable ideas and rights, as well as a reliable, error-free administrative system.",
                    )}
                  </p>
                  <p>
                    {t(
                      "「契約書をチェックしてほしい」「新しい事業の許可について聞きたい」「特許事務所の事務体制を抜本的に見直したい」など、どんなことでも結構です。どうぞお気軽にご相談ください。",
                      "Whether it is “I’d like you to check a contract,” “I want to ask about a permit for a new business,” or “I want to fundamentally review my patent firm’s administrative system”—anything is welcome. Please feel free to contact us.",
                    )}
                  </p>
                </div>
              </div>
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
                    <li>{t("申請取次行政書士", "Immigration Lawyer")}</li>
                    <li>{t("外部監査人", "External Auditor")}</li>
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
                    "外国人スタッフが多く籍を置く、国際色豊かな大手の特許事務所（弁理士法人）にて約18年間にわたり勤務。日本国内だけでなく、海外のクライアント企業が特許・商標・意匠等の知的財産権を取得・維持するために必要な、特許庁への各種申請手続きや、正確かつ迅速な進捗報告、ミスの許されない期限管理の第一線に従事。",
                    "Worked for approximately 18 years at a large, internationally diverse patent firm (patent professional corporation) employing many foreign staff. Engaged on the front lines of various filing procedures with the Japan Patent Office, accurate and prompt progress reporting, and zero-error deadline management required for both domestic and overseas client companies to obtain and maintain IP rights such as patents, trademarks, and designs.",
                  )}
                </li>
                <li>
                  {t(
                    "実務の傍ら、知財事務部門の管理職（マネジメント職）として、全体のプロジェクト管理やスタッフの採用・育成を統括。さらに、業務効率化のためのマニュアル作成、所内のシステム部と連携したミスを未然に防ぐ期限管理データベースの構築など、組織のバックオフィス基盤の底上げに貢献。",
                    "Alongside practical work, served as a manager in the IP administration department, overseeing overall project management and staff recruitment and training. Further contributed to strengthening the organization's back-office foundation by creating manuals for operational efficiency and building a deadline-management database—in cooperation with the in-house systems department—to prevent errors before they occur.",
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
