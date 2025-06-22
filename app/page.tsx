"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { MapPin, Phone, Mail, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RubyText } from "@/components/ruby-text"

export default function Home() {
  const { t, isEasyJapanese } = useLanguage()

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white bg-opacity-90 p-4 sm:p-6 rounded-lg shadow-md mb-8">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center py-4 md:py-8">
          <div>
            <Image
              src="/portrait.webp"
              alt={t("小川千尋 行政書士", "小川千尋 行政書士", "Chihiro Ogawa Administrative Scrivener")}
              width={500}
              height={714}
              className="rounded-lg shadow-md mx-auto object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-sky-600 mb-3 md:mb-4 leading-tight">
              {isEasyJapanese ? (
                <>
                  <span className="block mb-1">
                    <RubyText text="外国人" ruby="がいこくじん" />の
                    <RubyText text="在留資格" ruby="ざいりゅうしかく" />・VISA
                    <RubyText text="申請" ruby="しんせい" />
                  </span>
                  <span className="block">
                    <RubyText text="経営者" ruby="けいえいしゃ" />の
                    <RubyText text="外国人" ruby="がいこくじん" />
                    <RubyText text="雇用" ruby="こよう" />
                    <RubyText text="支援" ruby="しえん" />
                  </span>
                </>
              ) : (
                t(
                  "外国人の在留資格・VISA申請、経営者の外国人雇用のサポート",
                  "",
                  "Immigration & VISA Support for Foreign Nationals"
                )
              )}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-sky-700 mb-4 md:mb-6">
              {isEasyJapanese ? (
                <>
                  <RubyText text="気軽" ruby="きがる" />に
                  <RubyText text="相談" ruby="そうだん" />
                  してください
                </>
              ) : (
                t("お気軽にご相談下さい", "", "Please contact me!")
              )}
            </p>

            <div className="bg-white p-3 sm:p-4 md:p-6 rounded-lg shadow-sm mb-4 md:mb-6">
              <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 text-sky-700">
                {isEasyJapanese ? <>できること</> : t("主な取扱業務", "", "Specialty field")}
              </h2>
              <ul className="space-y-2 sm:space-y-4 list-disc pl-5 text-sm sm:text-base">
                <li>
                  {isEasyJapanese ? (
                    <>
                      <span className="block sm:inline">
                        <RubyText text="外国人" ruby="がいこくじん" />の
                        <RubyText text="方" ruby="かた" />の
                        <RubyText text="在留" ruby="ざいりゅう" />
                        <RubyText text="資格" ruby="しかく" />・
                      </span>
                      <span className="block sm:inline">
                        ビザ
                        <RubyText text="申請" ruby="しんせい" />や
                        <RubyText text="日本" ruby="にほん" />
                        <RubyText text="国籍" ruby="こくせき" />を
                        <RubyText text="取" ruby="と" />る
                        <RubyText text="手伝" ruby="てつだ" />い
                      </span>
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
                      <RubyText text="会社" ruby="かいしゃ" />を
                      <RubyText text="作" ruby="つく" />る
                      <RubyText text="手伝" ruby="てつだ" />い
                    </>
                  ) : (
                    t("法人設立", "", "Establishment of Corporation")
                  )}
                </li>
                <li>
                  {isEasyJapanese ? (
                    <>
                      <RubyText text="特許" ruby="とっきょ" />や
                      <RubyText text="著作権" ruby="ちょさくけん" />
                      などの
                      <RubyText text="手続" ruby="てつづ" />き
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
            </div>

            {/* 英語対応の案内 */}
            <div className="bg-sky-50 p-3 sm:p-4 rounded-lg border-l-4 border-sky-500 mb-4 md:mb-6 text-sm sm:text-base">
              <p className="font-medium text-sky-800">
                {isEasyJapanese ? (
                  <>
                    <RubyText text="英語" ruby="えいご" />も
                    <RubyText text="話" ruby="はな" />
                    せます。
                    <RubyText text="気軽" ruby="きがる" />に
                    <RubyText text="連絡" ruby="れんらく" />
                    してください。
                  </>
                ) : (
                  t(
                    "英語対応可能です。お気軽にお問い合わせください。",
                    "",
                    "English support available. Feel free to contact us.",
                  )
                )}
              </p>
            </div>

            <Link href="/contact">
              <Button className="w-full bg-sky-600 hover:bg-sky-500 mb-4 text-sm sm:text-base py-2 h-auto">
                {isEasyJapanese ? (
                  <>
                    <span className="block sm:inline">
                      <RubyText text="無料相談" ruby="むりょうそうだん" />の
                      <RubyText text="予約" ruby="よやく" />・
                    </span>
                    <span className="block sm:inline">
                      <RubyText text="問合" ruby="といあわ" />
                      せはここから
                    </span>
                  </>
                ) : (
                  t("無料相談のご予約・お問い合わせはこちら", "", "Free Consultation Booking & Contact")
                )}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white bg-opacity-90 p-4 sm:p-6 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl font-semibold mb-3 md:mb-4 text-sky-700">
          {isEasyJapanese ? (
            <>
              <RubyText text="事務所" ruby="じむしょ" />の
              <RubyText text="場所" ruby="ばしょ" />
            </>
          ) : (
            t("事務所案内", "", "Office")
          )}
        </h2>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          <div className="text-sm sm:text-base">
            <p className="flex items-start gap-2 mb-3">
              <MapPin className="text-sky-600 shrink-0 mt-1" />
              <span>
                {isEasyJapanese ? (
                  <>
                    <span className="block sm:inline">
                      〒151-0072 <RubyText text="東京都" ruby="とうきょうと" />
                      <RubyText text="渋谷区" ruby="しぶやく" />
                      <RubyText text="幡" ruby="はた" />ヶ<RubyText text="谷" ruby="や" />
                      1-2-2
                    </span>
                    <span className="block sm:inline">
                      {" "}
                      <RubyText text="京王" ruby="けいおう" />
                      <RubyText text="幡" ruby="はた" />ヶ<RubyText text="谷" ruby="や" />
                      ビル4
                      <RubyText text="階" ruby="かい" /> 4-15
                    </span>
                  </>
                ) : (
                  t(
                    "〒151-0072 東京都渋谷区幡ヶ谷1丁目2番2号 京王幡ヶ谷ビル4F 4-15",
                    "〒151-0072 東京都渋谷区幡ヶ谷1-2-2 京王幡ヶ谷ビル4階 4-15",
                    "4-15, Keio Hatagaya Building 4F, 1-2-2 Hatagaya, Shibuya-ku, Tokyo 151-0072, Japan",
                  )
                )}
              </span>
            </p>
            <p className="flex items-center gap-2 mb-3">
              <Globe className="text-sky-600 shrink-0" />
              <a href="https://ogawachihiro-office.com" className="text-sky-600 hover:underline break-all">
                https://ogawachihiro-office.com
              </a>
            </p>
            <p className="flex items-center gap-2 mb-3">
              <Mail className="text-sky-600 shrink-0" />
              <a href="mailto:info@ogawachihiro-office.com" className="text-sky-600 hover:underline break-all">
                info@ogawachihiro-office.com
              </a>
            </p>
            <p className="flex items-center gap-2 mb-4 md:mb-6">
              <Phone className="text-sky-600 shrink-0" />
              <a href="tel:0908874-2921" className="text-sky-600 hover:underline">
                {t("090-8874-2921", "090-8874-2921", "81-90-8874-2921")}
              </a>
            </p>
          </div>
          <div>
            {/* 公式LINE QRコード */}
            <div className="bg-sky-50 p-3 sm:p-4 rounded-lg text-center">
              <h3 className="font-semibold mb-2 sm:mb-3 text-sky-700">{t("公式LINE", "LINE", "Official LINE")}</h3>
              <div className="flex justify-center mb-2 sm:mb-3">
                <Image
                  src="/line-qr.jpeg"
                  alt="LINE QR Code"
                  width={120}
                  height={120}
                  className="border p-2 bg-white"
                />
              </div>
              <p className="text-xs sm:text-sm text-sky-800">
                {isEasyJapanese ? (
                  <>
                    LINEでも
                    <RubyText text="気軽" ruby="きがる" />に
                    <RubyText text="連絡" ruby="れんらく" />
                    してください。
                  </>
                ) : (
                  t("LINEでもお気軽にお問い合わせください。", "", "Feel free to contact us via LINE as well.")
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

