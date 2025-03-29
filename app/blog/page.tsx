"use client"

import { useLanguage } from "@/contexts/language-context"
import { RubyText } from "@/components/ruby-text"

export default function Blog() {
  const { t, isEasyJapanese } = useLanguage()

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-sky-600 border-b pb-2">
        {isEasyJapanese ? <>ブログ</> : t("ブログ", "", "Blog")}
      </h1>

      <div className="bg-white p-8 rounded-lg shadow-sm text-center">
        <h2 className="text-xl font-semibold mb-4 text-sky-700">
          {isEasyJapanese ? (
            <>
              コンテンツ
              <RubyText text="準備中" ruby="じゅんびちゅう" />
            </>
          ) : (
            t("コンテンツ準備中", "", "Content Coming Soon")
          )}
        </h2>
        <p className="text-gray-600 mb-4">
          {isEasyJapanese ? (
            <>
              <RubyText text="現在" ruby="げんざい" />
              、ブログの
              <RubyText text="内容" ruby="ないよう" />を<RubyText text="準備" ruby="じゅんび" />
              しています。
              <RubyText text="外国人" ruby="がいこくじん" />の<RubyText text="方" ruby="かた" />の
              <RubyText text="在留資格" ruby="ざいりゅうしかく" />
              <RubyText text="申請" ruby="しんせい" />や<RubyText text="会社" ruby="かいしゃ" />
              <RubyText text="設立" ruby="せつりつ" />、<RubyText text="知的財産権" ruby="ちてきざいさんけん" />
              についての
              <RubyText text="役立" ruby="やくだ" />つ<RubyText text="情報" ruby="じょうほう" />
              をもうすぐ
              <RubyText text="公開" ruby="こうかい" />
              します。
            </>
          ) : (
            t(
              "現在、ブログコンテンツを準備中です。外国人の方の在留資格申請や法人設立、知的財産権に関する有益な情報を近日中に公開予定です。",
              "",
              "We are currently preparing blog content. Useful information on residence status applications for foreigners, business establishment, and intellectual property rights will be published soon.",
            )
          )}
        </p>
        <p className="text-gray-600">
          {isEasyJapanese ? (
            <>
              しばらくお
              <RubyText text="待" ruby="ま" />
              ちください。
              <RubyText text="最新情報" ruby="さいしんじょうほう" />
              はSNSでも
              <RubyText text="発信" ruby="はっしん" />
              していきます。
            </>
          ) : (
            t(
              "しばらくお待ちください。最新情報はSNSでも発信していきます。",
              "",
              "Please stay tuned. We will also share the latest information on our social media.",
            )
          )}
        </p>
      </div>
    </div>
  )
}

