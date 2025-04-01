"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { RubyText } from "@/components/ruby-text"

export default function About() {
  const { t, isEasyJapanese } = useLanguage()

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-sky-600 border-b pb-2">
          {isEasyJapanese ? (
            <>
              <RubyText text="事務所" ruby="じむしょ" />
              について
            </>
          ) : (
            t("事務所概要", "", "About Us")
          )}
        </h1>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4 text-sky-700">
              {isEasyJapanese ? (
                <>
                  <RubyText text="代表" ruby="だいひょう" />
                  からの
                  <RubyText text="挨拶" ruby="あいさつ" />
                </>
              ) : (
                t("代表からの挨拶", "", "Greeting from the Representative")
              )}
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="md:flex gap-6 items-start">
                <div className="md:w-1/3 mb-4 md:mb-0">
                  <Image
                    src="/portrait.jpg"
                    alt={t("小川千尋 行政書士", "小川千尋 行政書士", "Chihiro Ogawa Administrative Scrivener")}
                    width={400}
                    height={571}
                    className="rounded-lg shadow-md mx-auto object-cover"
                  />
                </div>
                <div className="md:w-2/3">
                  <p className="mb-4">
                    {isEasyJapanese ? (
                      <>
                        はじめまして。
                        <RubyText text="行政書士" ruby="ぎょうせいしょし" />の
                        <RubyText text="小川千尋" ruby="おがわちひろ" />
                        です。
                      </>
                    ) : (
                      t(
                        "はじめまして。行政書士の小川千尋と申します。",
                        "",
                        "Hello, I am Chihiro Ogawa, an Immigration Lawyer.",
                      )
                    )}
                  </p>
                  <p className="mb-4">
                    {isEasyJapanese ? (
                      <>
                        <RubyText text="私" ruby="わたし" />は<RubyText text="外国人" ruby="がいこくじん" />の
                        <RubyText text="方" ruby="かた" />の<RubyText text="在留資格" ruby="ざいりゅうしかく" />・VISA
                        <RubyText text="申請" ruby="しんせい" />を<RubyText text="扱" ruby="あつか" />
                        っています。
                        <RubyText text="日本" ruby="にほん" />で<RubyText text="働" ruby="はたら" />
                        いたり
                        <RubyText text="生活" ruby="せいかつ" />
                        したりしたい
                        <RubyText text="外国人" ruby="がいこくじん" />の<RubyText text="方" ruby="かた" />
                        と、
                        <RubyText text="外国人" ruby="がいこくじん" />を<RubyText text="雇用" ruby="こよう" />
                        する
                        <RubyText text="会社" ruby="かいしゃ" />の<RubyText text="橋渡" ruby="はしわた" />
                        しをしています。
                      </>
                    ) : (
                      t(
                        "私は外国人の皆様の在留資格・VISA申請を取り扱っており、日本での就労や生活を希望される外国人の方々と、外国人を雇用される企業の経営者様をつなぐ架け橋となれるよう日々努めております。",
                        "",
                        "I handle residence status and VISA applications for foreign nationals and strive to help both foreign nationals who wish to work and live in Japan and business owners who employ foreign nationals."
                      )
                    )}
                  </p>
                  <p className="mb-4">
                    {isEasyJapanese ? (
                      <>
                        <RubyText text="外国人" ruby="がいこくじん" />の<RubyText text="皆様" ruby="みなさま" />が
                        <RubyText text="言葉" ruby="ことば" />の<RubyText text="壁" ruby="かべ" />や
                        <RubyText text="難" ruby="むずか" />
                        しい
                        <RubyText text="手続" ruby="てつづ" />
                        きに
                        <RubyText text="困" ruby="こま" />
                        らないように、
                        <RubyText text="丁寧" ruby="ていねい" />
                        にサポートします。
                        <RubyText text="会社" ruby="かいしゃ" />の<RubyText text="方" ruby="かた" />
                        にも、
                        <RubyText text="外国人" ruby="がいこくじん" />
                        <RubyText text="雇用" ruby="こよう" />の<RubyText text="不安" ruby="ふあん" />や
                        <RubyText text="負担" ruby="ふたん" />を<RubyText text="減" ruby="へ" />
                        らせるよう
                        <RubyText text="全力" ruby="ぜんりょく" />
                        でサポートします。
                      </>
                    ) : (
                      t(
                        "外国人の皆様が言葉の壁や複雑な手続きに悩まされることなく、日本で安定して生活できるよう、丁寧かつ親身になってサポートいたします。また、企業様に対しましても、外国人雇用に伴うさまざまなご不安やご負担を軽減し、安心して人材活用を進めていただけるよう全力でサポートいたします。",
                        "",
                        "I provide careful and personalized support to help foreign nationals live stably in Japan without being troubled by language barriers or complex procedures. I also do my utmost to support companies by reducing various anxieties and burdens associated with employing foreign nationals, so that they can proceed with human resource utilization with peace of mind.",
                      )
                    )}
                  </p>
                  <p>
                    {isEasyJapanese ? (
                      <>
                        まずは
                        <RubyText text="気軽" ruby="きがる" />に<RubyText text="相談" ruby="そうだん" />
                        してください。
                      </>
                    ) : (
                      t("まずはお気軽にご相談ください。", "", "Please feel free to contact me for a consultation.")
                    )}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-sky-700">
              {isEasyJapanese ? (
                <>
                  <RubyText text="自己紹介" ruby="じこしょうかい" />
                </>
              ) : (
                t("自己紹介", "", "About Me")
              )}
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <ul className="space-y-2">
                <li>
                  {isEasyJapanese ? (
                    <>
                      <RubyText text="長崎県" ruby="ながさきけん" />
                      <RubyText text="長崎市" ruby="ながさきし" />
                      <RubyText text="出身" ruby="しゅっしん" />
                    </>
                  ) : (
                    t("長崎県長崎市出身", "", "Born in Nagasaki city, Nagasaki prefecture")
                  )}
                </li>
                <li>
                  {isEasyJapanese ? (
                    <>
                      <RubyText text="上智大学" ruby="じょうちだいがく" />
                      <RubyText text="外国語学部" ruby="がいこくごがくぶ" />
                      <RubyText text="英語学科" ruby="えいごがっか" />
                      <RubyText text="卒業" ruby="そつぎょう" />
                    </>
                  ) : (
                    t(
                      "上智大学外国語学部英語学科卒業",
                      "",
                      "Graduated from English Language Department at Sophia University",
                    )
                  )}
                </li>
                <li>
                  {isEasyJapanese ? (
                    <>
                      <RubyText text="家族" ruby="かぞく" />：<RubyText text="夫" ruby="おっと" />、
                      <RubyText text="息子" ruby="むすこ" />2<RubyText text="人" ruby="にん" />
                    </>
                  ) : (
                    t("家族：夫、息子2人", "", "Family: Husband and two sons")
                  )}
                </li>
                <li>
                  {isEasyJapanese ? (
                    <>
                      <RubyText text="趣味" ruby="しゅみ" />
                      ：フラメンコ、ヨガ
                    </>
                  ) : (
                    t("趣味：フラメンコ、ヨガ", "", "Hobby: Flamenco and Yoga")
                  )}
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-sky-700">
              {isEasyJapanese ? (
                <>
                  <RubyText text="経歴" ruby="けいれき" />
                </>
              ) : (
                t("経歴", "", "Career Background")
              )}
            </h2>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <p className="mb-4">
                {isEasyJapanese ? (
                  <>
                    <RubyText text="特許" ruby="とっきょ" />
                    <RubyText text="事務" ruby="じむ" />
                    <RubyText text="経験" ruby="けいけん" />が<RubyText text="約" ruby="やく" />
                    18
                    <RubyText text="年" ruby="ねん" />
                    あります。
                  </>
                ) : (
                  t("特許事務経験約18年。", "", "About 18 years of experience as a paralegal.")
                )}
              </p>
              <p className="mb-4">
                {isEasyJapanese ? (
                  <>
                    <RubyText text="外国人" ruby="がいこくじん" />が<RubyText text="多" ruby="おお" />く
                    <RubyText text="働" ruby="はたら" />く<RubyText text="国際的" ruby="こくさいてき" />な
                    <RubyText text="弁理士" ruby="べんりし" />
                    <RubyText text="事務所" ruby="じむしょ" />で<RubyText text="働" ruby="はたら" />
                    いていました。
                  </>
                ) : (
                  t(
                    "外国人が多く勤める国際色豊かな弁理士事務所にて、海外や国内のお客様が特許を取得するために必要な手続きに従事しました。",
                    "",
                    "I worked at an internationally diverse patent attorney's office where many foreign people work.",
                  )
                )}
              </p>
              <p>
                {isEasyJapanese ? (
                  <>
                    <RubyText text="管理職" ruby="かんりしょく" />
                    として、プロジェクト
                    <RubyText text="管理" ruby="かんり" />や<RubyText text="部員" ruby="ぶいん" />の
                    <RubyText text="採用" ruby="さいよう" />・<RubyText text="育成" ruby="いくせい" />
                    なども
                    <RubyText text="担当" ruby="たんとう" />
                    しました。
                  </>
                ) : (
                  t(
                    "また、管理職として、プロジェクト管理や部員の採用・育成等も対応しました。",
                    "",
                    "I handled necessary procedures for overseas and domestic clients to obtain patents. As a manager, I was also responsible for project management, recruitment and training of staff members.",
                  )
                )}
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-sky-700">
              {isEasyJapanese ? (
                <>
                  <RubyText text="事務所" ruby="じむしょ" />
                  <RubyText text="名" ruby="めい" />
                </>
              ) : (
                t("事務所名", "", "Office Name")
              )}
            </h2>
            <p>
              {isEasyJapanese ? (
                <>
                  <RubyText text="行政書士" ruby="ぎょうせいしょし" />
                  <RubyText text="小川千尋" ruby="おがわちひろ" />
                  <RubyText text="事務所" ruby="じむしょ" />
                </>
              ) : (
                t("行政書士小川千尋事務所", "", "Chihiro Ogawa Administrative Scrivener Office")
              )}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-sky-700">
              {isEasyJapanese ? (
                <>
                  <RubyText text="代表者" ruby="だいひょうしゃ" />
                </>
              ) : (
                t("代表者", "", "Representative")
              )}
            </h2>
            <p>
              {isEasyJapanese ? (
                <>
                  <RubyText text="小川" ruby="おがわ" /> <RubyText text="千尋" ruby="ちひろ" />
                </>
              ) : (
                t("小川 千尋", "", "Chihiro Ogawa")
              )}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-sky-700">
              {isEasyJapanese ? (
                <>
                  <RubyText text="所在地" ruby="しょざいち" />
                </>
              ) : (
                t("所在地", "", "Location")
              )}
            </h2>
            <p>
              {isEasyJapanese ? (
                <>
                  〒151-0072 <RubyText text="東京都" ruby="とうきょうと" />
                  <RubyText text="渋谷区" ruby="しぶやく" />
                  <RubyText text="幡" ruby="はた" />ヶ<RubyText text="谷" ruby="や" />
                  1-2-2 <RubyText text="京王" ruby="けいおう" />
                  <RubyText text="幡" ruby="はた" />ヶ<RubyText text="谷" ruby="や" />
                  ビル4
                  <RubyText text="階" ruby="かい" /> 4-15
                </>
              ) : (
                t(
                  "〒151-0072 東京都渋谷区幡ヶ谷1丁目2番2号 京王幡ヶ谷ビル4F 4-15",
                  "",
                  "4-15, Keio Hatagaya Building 4F, 1-2-2 Hatagaya, Shibuya-ku, Tokyo 151-0072, Japan",
                )
              )}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-sky-700">
              {isEasyJapanese ? (
                <>
                  <RubyText text="最寄駅" ruby="もよりえき" />
                </>
              ) : (
                t("最寄駅", "", "Nearest Station")
              )}
            </h2>
            <p>
              {isEasyJapanese ? (
                <>
                  <RubyText text="京王線" ruby="けいおうせん" />
                  <RubyText text="幡" ruby="はた" />ヶ<RubyText text="谷駅" ruby="やえき" />
                  <RubyText text="直結" ruby="ちょっけつ" />
                </>
              ) : (
                t("京王線幡ヶ谷駅直結", "", "Connected to Hatagaya Station on the Keio Line")
              )}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-sky-700">
              {isEasyJapanese ? (
                <>
                  <RubyText text="営業時間" ruby="えいぎょうじかん" />
                </>
              ) : (
                t("営業時間", "", "Business Hours")
              )}
            </h2>
            <p>
              {isEasyJapanese ? (
                <>
                  <RubyText text="柔軟" ruby="じゅうなん" />に<RubyText text="対応" ruby="たいおう" />
                  できます。まずは
                  <RubyText text="連絡" ruby="れんらく" />
                  してください。
                </>
              ) : (
                t(
                  "臨機応変に対応可能です。まずはご連絡ください。",
                  "",
                  "Flexible hours available. Please contact us first.",
                )
              )}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3 text-sky-700">
              {isEasyJapanese ? (
                <>
                  <RubyText text="主" ruby="おも" />な<RubyText text="業務内容" ruby="ぎょうむないよう" />
                </>
              ) : (
                t("主な業務内容", "", "Main Services")
              )}
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                {isEasyJapanese ? (
                  <>
                    <RubyText text="外国人" ruby="がいこくじん" />の<RubyText text="方" ruby="かた" />の
                    <RubyText text="在留" ruby="ざいりゅう" />
                    <RubyText text="支援" ruby="しえん" />（<RubyText text="在留資格" ruby="ざいりゅうしかく" />
                    ・ビザ、
                    <RubyText text="帰化申請" ruby="きかしんせい" />）
                  </>
                ) : (
                  t(
                    "外国人の方の在留支援（在留資格・VISA、帰化申請）",
                    "",
                    "Immigration Support for Foreign People (Residence status/VISA, Naturalization)",
                  )
                )}
              </li>
              <li>
                {isEasyJapanese ? (
                  <>
                    <RubyText text="法人設立" ruby="ほうじんせつりつ" />（<RubyText text="会社" ruby="かいしゃ" />を
                    <RubyText text="作" ruby="つく" />
                    ること）
                  </>
                ) : (
                  t("法人設立", "", "Establishment of Corporation")
                )}
              </li>
              <li>
                {isEasyJapanese ? (
                  <>
                    <RubyText text="知的財産権" ruby="ちてきざいさんけん" />（
                    <RubyText text="特許権" ruby="とっきょけん" />
                    などの
                    <RubyText text="産業財産権" ruby="さんぎょうざいさんけん" />、
                    <RubyText text="著作権" ruby="ちょさくけん" />）
                  </>
                ) : (
                  t(
                    "知的財産権（特許権等の産業財産権、著作権）",
                    "",
                    "Intellectual Property Rights (Industrial Properties, Copyrights)",
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

