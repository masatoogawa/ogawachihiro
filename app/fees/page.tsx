"use client"

import { useLanguage } from "@/contexts/language-context"
import { RubyText } from "@/components/ruby-text"

export default function Fees() {
  const { t, isEasyJapanese } = useLanguage()

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-sky-600 border-b pb-2">
          {isEasyJapanese ? (
            <>
              <RubyText text="料金" ruby="りょうきん" />
            </>
          ) : (
            t("ご利用料金", "", "Fees")
          )}
        </h1>

        <div className="bg-white bg-opacity-95 p-6 rounded-lg shadow-sm mb-8">
          <p className="mb-4">
            {isEasyJapanese ? (
              <>
                お<RubyText text="客様" ruby="きゃくさま" />の
                <RubyText text="状況" ruby="じょうきょう" />に
                <RubyText text="合" ruby="あ" />
                わせた
                <RubyText text="料金" ruby="りょうきん" />
                があります。
                <RubyText text="詳" ruby="くわ" />
                しい
                <RubyText text="金額" ruby="きんがく" />
                は、お
                <RubyText text="客様" ruby="きゃくさま" />の
                <RubyText text="状況" ruby="じょうきょう" />
                によって
                <RubyText text="違" ruby="ちが" />
                いますので、
                <RubyText text="個別" ruby="こべつ" />
                にお
                <RubyText text="見積" ruby="みつも" />
                りします。
              </>
            ) : (
              t(
                "当事務所では、お客様のニーズに合わせた料金体系を設けております。具体的な金額につきましては、お客さまの状況により異なりますので、個別にお見積りさせていただきます。",
                "",
                "Our office has a fee structure tailored to our clients' needs. Specific amounts will vary depending on your situation, so we will provide individual estimates.",
              )
            )}
          </p>
          <p>
            {isEasyJapanese ? (
              <>
                <RubyText text="初" ruby="はじ" />
                めての
                <RubyText text="相談" ruby="そうだん" />
                （サービスや
                <RubyText text="手続" ruby="てつづ" />
                きについて）は1
                <RubyText text="時間" ruby="じかん" />
                まで
                <RubyText text="無料" ruby="むりょう" />
                です。
              </>
            ) : (
              t(
                "初回相談（サービス内容や手続きの流れについて）は1時間まで無料です。",
                "",
                "The first consultation (regarding services and procedures) is free for up to one hour.",
              )
            )}
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4 text-sky-700">
              {isEasyJapanese ? (
                <>
                  <RubyText text="在留資格" ruby="ざいりゅうしかく" />・ビザ
                  <RubyText text="申請" ruby="しんせい" />
                </>
              ) : (
                t("在留資格・ビザ申請", "", "Residence Status & VISA Applications")
              )}
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border">
                <thead>
                  <tr className="bg-sky-100">
                    <th className="py-2 px-2 sm:px-4 border text-left w-2/3">
                      {isEasyJapanese ? (
                        <>
                          <RubyText text="申請" ruby="しんせい" />の
                          <div className="inline-block">
                            <RubyText text="種類" ruby="しゅるい" />
                          </div>
                        </>
                      ) : (
                        t("申請種類", "", "Application Type")
                      )}
                    </th>
                    <th className="py-2 px-2 sm:px-4 border text-right w-1/3">
                      {isEasyJapanese ? (
                        <>
                          <RubyText text="料金" ruby="りょうきん" />
                          <div className="inline-block">
                            （<RubyText text="税抜" ruby="ぜいぬき" />き）
                          </div>
                        </>
                      ) : (
                        t("料金（税抜）", "", "Fee (Tax Excluded)")
                      )}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-2 sm:px-4 border" style={{ wordBreak: 'break-all', maxWidth: '200px' }}>
                      {isEasyJapanese ? (
                        <>
                          <span style={{ display: 'inline-block', maxWidth: '100%', wordBreak: 'break-all' }}>
                            <RubyText text="在" ruby="ざい" />
                            <RubyText text="留" ruby="りゅう" />
                            <RubyText text="資" ruby="し" />
                            <RubyText text="格" ruby="かく" />
                            <RubyText text="認" ruby="にん" />
                            <RubyText text="定" ruby="てい" />
                            <RubyText text="証" ruby="しょう" />
                            <RubyText text="明" ruby="めい" />
                            <RubyText text="書" ruby="しょ" />
                            の
                            <RubyText text="申" ruby="しん" />
                            <RubyText text="請" ruby="せい" />
                          </span>
                        </>
                      ) : (
                        t("在留資格認定証明書交付申請", "", "Certificate of Eligibility Application")
                      )}
                    </td>
                    <td className="py-2 px-2 sm:px-4 border text-right">
                      {isEasyJapanese ? (
                        <>
                          100,000
                          <RubyText text="円" ruby="えん" />
                          から
                        </>
                      ) : (
                        t("100,000円〜", "", "¥100,000〜")
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-2 sm:px-4 border" style={{ wordBreak: 'break-all', maxWidth: '200px' }}>
                      {isEasyJapanese ? (
                        <>
                          <span style={{ display: 'inline-block', maxWidth: '100%', wordBreak: 'break-all' }}>
                            ビザの
                            <RubyText text="更新申請" ruby="こうしんしんせい" />
                          </span>
                        </>
                      ) : (
                        t("在留期間更新許可申請", "", "Extension of Period of Stay")
                      )}
                    </td>
                    <td className="py-2 px-2 sm:px-4 border text-right">
                      {isEasyJapanese ? (
                        <>
                          55,000
                          <RubyText text="円" ruby="えん" />
                          から
                        </>
                      ) : (
                        t("55,000円〜", "", "¥55,000〜")
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-2 sm:px-4 border" style={{ wordBreak: 'break-all', maxWidth: '200px' }}>
                      {isEasyJapanese ? (
                        <>
                          <span style={{ display: 'inline-block', maxWidth: '100%', wordBreak: 'break-all' }}>
                            ビザの
                            <RubyText text="種類" ruby="しゅるい" />を<RubyText text="変" ruby="か" />
                            える
                            <RubyText text="申請" ruby="しんせい" />
                          </span>
                        </>
                      ) : (
                        t("在留資格変更許可申請", "", "Change of Status of Residence")
                      )}
                    </td>
                    <td className="py-2 px-2 sm:px-4 border text-right">
                      {isEasyJapanese ? (
                        <>
                          100,000
                          <RubyText text="円" ruby="えん" />
                          から
                        </>
                      ) : (
                        t("100,000円〜", "", "¥100,000〜")
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-2 sm:px-4 border" style={{ wordBreak: 'break-all', maxWidth: '200px' }}>
                      {isEasyJapanese ? (
                        <>
                          <span style={{ display: 'inline-block', maxWidth: '100%', wordBreak: 'break-all' }}>
                            <RubyText text="永住権" ruby="えいじゅうけん" />の<RubyText text="申請" ruby="しんせい" />
                          </span>
                        </>
                      ) : (
                        t("永住許可申請", "", "Permanent Residence Application")
                      )}
                    </td>
                    <td className="py-2 px-2 sm:px-4 border text-right">
                      {isEasyJapanese ? (
                        <>
                          120,000
                          <RubyText text="円" ruby="えん" />
                          から
                        </>
                      ) : (
                        t("120,000円〜", "", "¥120,000〜")
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-2 sm:px-4 border" style={{ wordBreak: 'break-all', maxWidth: '200px' }}>
                      {isEasyJapanese ? (
                        <>
                          <span style={{ display: 'inline-block', maxWidth: '100%', wordBreak: 'break-all' }}>
                            <RubyText text="働" ruby="はたら" />く<RubyText text="資格" ruby="しかく" />の
                            <RubyText text="証明書申請" ruby="しょうめいしょしんせい" />
                          </span>
                        </>
                      ) : (
                        t("就労資格証明書交付申請", "", "Certificate of Authorization for Employment")
                      )}
                    </td>
                    <td className="py-2 px-2 sm:px-4 border text-right">
                      {isEasyJapanese ? (
                        <>
                          80,000
                          <RubyText text="円" ruby="えん" />
                          から
                        </>
                      ) : (
                        t("80,000円〜", "", "¥80,000〜")
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-2 sm:px-4 border" style={{ wordBreak: 'break-all', maxWidth: '200px' }}>
                      {isEasyJapanese ? (
                        <>
                          <span style={{ display: 'inline-block', maxWidth: '100%', wordBreak: 'break-all' }}>
                            <RubyText text="経営管理" ruby="けいえいかんり" />ビザ
                          </span>
                        </>
                      ) : (
                        t("経営管理ビザ", "", "Business Manager VISA")
                      )}
                    </td>
                    <td className="py-2 px-2 sm:px-4 border text-right">
                      {isEasyJapanese ? (
                        <>
                          180,000
                          <RubyText text="円" ruby="えん" />
                          から
                        </>
                      ) : (
                        t("180,000円〜", "", "¥180,000〜")
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-sky-700">
              {isEasyJapanese ? (
                <>
                  その
                  <RubyText text="他" ruby="ほか" />の<RubyText text="手続" ruby="てつづ" />き
                </>
              ) : (
                t("その他の手続き", "", "Other Procedures")
              )}
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border">
                <thead>
                  <tr className="bg-sky-100">
                    <th className="py-2 px-4 border text-left">
                      {isEasyJapanese ? (
                        <>
                          <RubyText text="手続" ruby="てつづ" />
                          きの
                          <RubyText text="内容" ruby="ないよう" />
                        </>
                      ) : (
                        t("手続き内容", "", "Procedure")
                      )}
                    </th>
                    <th className="py-2 px-4 border text-right">
                      {isEasyJapanese ? (
                        <>
                          <RubyText text="料金" ruby="りょうきん" />（<RubyText text="税抜" ruby="ぜいぬき" />
                          き）
                        </>
                      ) : (
                        t("料金（税抜）", "", "Fee (Tax Excluded)")
                      )}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border" style={{ wordBreak: 'break-all', maxWidth: '200px' }}>
                      {isEasyJapanese ? (
                        <>
                          <span style={{ display: 'inline-block', maxWidth: '100%', wordBreak: 'break-all' }}>
                            <RubyText text="日本国籍" ruby="にほんこくせき" />を<RubyText text="取" ruby="と" />る
                            <RubyText text="申請" ruby="しんせい" />
                          </span>
                        </>
                      ) : (
                        t("帰化申請", "", "Naturalization Application")
                      )}
                    </td>
                    <td className="py-2 px-4 border text-right">
                      {isEasyJapanese ? (
                        <>
                          200,000
                          <RubyText text="円" ruby="えん" />
                          から
                        </>
                      ) : (
                        t("200,000円〜", "", "¥200,000〜")
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border" style={{ wordBreak: 'break-all', maxWidth: '200px' }}>
                      {isEasyJapanese ? (
                        <>
                          <span style={{ display: 'inline-block', maxWidth: '100%', wordBreak: 'break-all' }}>
                            <RubyText text="会社" ruby="かいしゃ" />を<RubyText text="作" ruby="つく" />る
                            <RubyText text="手続" ruby="てつづ" />き
                          </span>
                        </>
                      ) : (
                        t("法人設立", "", "Establishment of Corporation")
                      )}
                    </td>
                    <td className="py-2 px-4 border text-right">
                      {isEasyJapanese ? (
                        <>
                          100,000
                          <RubyText text="円" ruby="えん" />
                          から
                        </>
                      ) : (
                        t("100,000円〜", "", "¥100,000〜")
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border" style={{ wordBreak: 'break-all', maxWidth: '200px' }}>
                      {isEasyJapanese ? (
                        <>
                          <span style={{ display: 'inline-block', maxWidth: '100%', wordBreak: 'break-all' }}>
                            <RubyText text="特許" ruby="とっきょ" />や<RubyText text="著作権" ruby="ちょさくけん" />の
                            <RubyText text="手続" ruby="てつづ" />き
                          </span>
                        </>
                      ) : (
                        t("知的財産関連", "", "Intellectual Property Related")
                      )}
                    </td>
                    <td className="py-2 px-4 border text-right">
                      {isEasyJapanese ? (
                        <>
                          50,000
                          <RubyText text="円" ruby="えん" />
                          から
                        </>
                      ) : (
                        t("50,000円〜", "", "¥50,000〜")
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border" style={{ wordBreak: 'break-all', maxWidth: '200px' }}>
                      {isEasyJapanese ? (
                        <>
                          <span style={{ display: 'inline-block', maxWidth: '100%', wordBreak: 'break-all' }}>
                            <RubyText text="遺言書" ruby="ゆいごんしょ" />を<RubyText text="作" ruby="つく" />る
                          </span>
                        </>
                      ) : (
                        t("遺言書作成", "", "Will Preparation")
                      )}
                    </td>
                    <td className="py-2 px-4 border text-right">
                      {isEasyJapanese ? (
                        <>
                          50,000
                          <RubyText text="円" ruby="えん" />
                          から
                        </>
                      ) : (
                        t("50,000円〜", "", "¥50,000〜")
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border" style={{ wordBreak: 'break-all', maxWidth: '200px' }}>
                      {isEasyJapanese ? (
                        <>
                          <span style={{ display: 'inline-block', maxWidth: '100%', wordBreak: 'break-all' }}>
                            <RubyText text="行政書士" ruby="ぎょうせいしょし" />の
                            <RubyText text="顧問契約" ruby="こもんけいやく" />
                          </span>
                        </>
                      ) : (
                        t("行政書士顧問", "", "Administrative Scrivener Advisor")
                      )}
                    </td>
                    <td className="py-2 px-4 border text-right">
                      {isEasyJapanese ? (
                        <>
                          <span style={{ display: 'inline-block', maxWidth: '100%', wordBreak: 'break-all' }}>
                            <RubyText text="月" ruby="つき" />
                            20,000
                            <RubyText text="円" ruby="えん" />
                          </span>
                        </>
                      ) : (
                        t("20,000円/月", "", "¥20,000/month")
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border" style={{ wordBreak: 'break-all', maxWidth: '200px' }}>
                      {isEasyJapanese ? (
                        <>
                          <span style={{ display: 'inline-block', maxWidth: '100%', wordBreak: 'break-all' }}>
                            2<RubyText text="回目" ruby="かいめ" />
                            <RubyText text="以降" ruby="いこう" />の<RubyText text="相談" ruby="そうだん" />
                          </span>
                        </>
                      ) : (
                        t("2回目以降のご相談", "", "Consultations after the first time")
                      )}
                    </td>
                    <td className="py-2 px-4 border text-right">
                      {isEasyJapanese ? (
                        <>
                          <span style={{ display: 'inline-block', maxWidth: '100%', wordBreak: 'break-all' }}>
                            1<RubyText text="時間" ruby="じかん" />
                            5,000
                            <RubyText text="円" ruby="えん" />
                          </span>
                        </>
                      ) : (
                        t("5,000円/時間", "", "¥5,000/hour")
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4 text-sky-700">
              {isEasyJapanese ? (
                <>
                  その
                  <RubyText text="他" ruby="ほか" />の<RubyText text="情報" ruby="じょうほう" />
                </>
              ) : (
                t("その他の事項", "", "Other Information")
              )}
            </h2>
            <ul className="list-disc pl-5 space-y-2 bg-white p-4 rounded-lg">
              <li>
                {isEasyJapanese ? (
                  <>
                    <RubyText text="初" ruby="はじ" />
                    めての
                    <RubyText text="相談" ruby="そうだん" />は<RubyText text="無料" ruby="むりょう" />
                    です。
                  </>
                ) : (
                  t("初回ご相談は無料です。", "", "The first consultation is free of charge.")
                )}
              </li>
              <li>
                {isEasyJapanese ? (
                  <>
                    <RubyText text="難" ruby="むずか" />
                    しい
                    <RubyText text="内容" ruby="ないよう" />の<RubyText text="場合" ruby="ばあい" />は
                    <RubyText text="料金" ruby="りょうきん" />が<RubyText text="高" ruby="たか" />
                    くなることがあります。
                  </>
                ) : (
                  t(
                    "難易度によって料金が加算される場合がございます。",
                    "",
                    "Additional fees may apply depending on the complexity of the case.",
                  )
                )}
              </li>
              <li>
                {isEasyJapanese ? (
                  <>
                    <RubyText text="郵便代" ruby="ゆうびんだい" />、<RubyText text="交通費" ruby="こうつうひ" />、
                    <RubyText text="印紙代" ruby="いんしだい" />、<RubyText text="翻訳代" ruby="ほんやくだい" />
                    などの
                    <RubyText text="実費" ruby="じっぴ" />は<RubyText text="別" ruby="べつ" />に
                    <RubyText text="請求" ruby="せいきゅう" />
                    します。
                  </>
                ) : (
                  t(
                    "郵送費、交通費、印紙代、翻訳代等の実費は別途ご請求いたします。",
                    "",
                    "Actual expenses such as postage, transportation, stamp fees, and translation costs will be billed separately.",
                  )
                )}
              </li>
              <li>
                {isEasyJapanese ? (
                  <>
                    <RubyText text="消費税" ruby="しょうひぜい" />は<RubyText text="別" ruby="べつ" />に
                    <RubyText text="加算" ruby="かさん" />
                    されます。
                  </>
                ) : (
                  t("消費税が別途加算されます。", "", "Consumption tax will be added separately.")
                )}
              </li>
              <li>
                {isEasyJapanese ? (
                  <>
                    <RubyText text="現金" ruby="げんきん" />か<RubyText text="銀行振込" ruby="ぎんこうふりこみ" />で
                    <RubyText text="支払" ruby="しはら" />
                    ってください。
                  </>
                ) : (
                  t("現金払いまたは銀行振込でお願いしております。", "", "Payment can be made by cash or bank transfer.")
                )}
              </li>
              <li>
                {isEasyJapanese ? (
                  <>
                    <RubyText text="支払" ruby="しはら" />い<RubyText text="回数" ruby="かいすう" />：
                    <RubyText text="一括" ruby="いっかつ" />
                    か2
                    <RubyText text="回" ruby="かい" />（<RubyText text="依頼時" ruby="いらいじ" />
                    50%、
                    <RubyText text="完了時" ruby="かんりょうじ" />
                    50%）
                  </>
                ) : (
                  t(
                    "お支払回数：一括または2回（業務依頼時50%、最終業務完了時50%）",
                    "",
                    "Payment schedule: One-time payment or two installments (50% at the time of request, 50% upon completion)",
                  )
                )}
              </li>
              <li>
                {isEasyJapanese ? (
                  <>
                    <RubyText text="銀行振込" ruby="ぎんこうふりこみ" />の<RubyText text="場合" ruby="ばあい" />、
                    <RubyText text="振込手数料" ruby="ふりこみてすうりょう" />
                    はお
                    <RubyText text="客様" ruby="きゃくさま" />の<RubyText text="負担" ruby="ふたん" />
                    です。
                  </>
                ) : (
                  t(
                    "銀行振込の場合、振込手数料はお客様負担でお願いしております。",
                    "",
                    "For bank transfers, the transfer fee is the responsibility of the client.",
                  )
                )}
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

