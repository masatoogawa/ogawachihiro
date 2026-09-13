"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { MapPin, Mail, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import ParamiraiBanner from "@/components/paramirai-banner"

export default function Home() {
  const { t, language } = useLanguage()

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white bg-opacity-90 p-4 sm:p-6 rounded-lg shadow-md mb-8">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center py-4 md:py-8">
          <div>
            <Image
              src="/portrait.webp"
              alt={t("小川千尋 行政書士", "Chihiro Ogawa Administrative Scrivener")}
              width={500}
              height={714}
              className="rounded-lg shadow-md mx-auto object-cover"
            />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-sky-600 mb-3 md:mb-4 leading-tight">
              {t(
                "ビジネスの基盤となる著作権管理や、各種契約書の作成を中心にサポートする行政書士事務所です。",
                "We are an Administrative Scrivener (Gyoseishoshi) office specializing in support for business foundations, focusing on copyright management and the drafting of various contracts.",
              )}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-sky-700 mb-3">
              {t("お気軽にご相談下さい。", "Please feel free to contact us.")}
            </p>
            <p className="text-sm sm:text-base text-gray-600 mb-4 md:mb-6">
              {t(
                "特許事務所で培った18年の知財事務経験をベースに、著作権・契約・許認可の面から皆様のビジネスを堅実に支えます。",
                "Backed by 18 years of IP administrative experience at a patent firm, we provide solid support for your business in the areas of copyright, contracts, and licenses/permits.",
              )}
            </p>

            <Link href="/contact">
              <Button className="w-full bg-sky-600 hover:bg-sky-500 mb-2 text-sm sm:text-base py-2 h-auto">
                {t("無料相談のご予約・お問い合わせはこちら", "Free Consultation Booking & Contact")}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* 当所の強み */}
      <div className="bg-white bg-opacity-90 p-4 sm:p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-lg sm:text-xl font-semibold mb-3 md:mb-4 text-sky-700">
          {t("当所の強み", "Our Strengths")}
        </h2>
        <p className="text-sm sm:text-base leading-relaxed">
          {t(
            "特許事務所で18年間、知財事務の第一線に携わってまいりました。この長年のキャリアで培った「知財事務業務への深い理解」と「ミスの許されない環境で磨いた正確な事務処理」を活かし、著作権をはじめとする各種契約実務や許認可申請の面から、経営者の皆様のビジネス基盤を強固にバックアップいたします。",
            "For 18 years, I worked on the front lines of IP administration at a patent firm. Leveraging the deep understanding of IP administrative operations and the precise, error-free administrative skills honed in that demanding environment over my long career, I provide robust support for your business foundation through contract work—including copyright agreements—and license/permit applications.",
          )}
        </p>
      </div>

      {/* 主な取扱業務 */}
      <div className="bg-white bg-opacity-90 p-4 sm:p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-lg sm:text-xl font-semibold mb-4 text-sky-700">
          {t("主な取扱業務", "Main Services")}
        </h2>
        <div className="grid sm:grid-cols-3 gap-4 md:gap-6">
          <div className="bg-sky-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2 text-sky-700">
              {t("著作権ライセンス・各種契約書作成", "Copyright licensing and drafting of various contracts")}
            </h3>
            <p className="text-sm sm:text-base leading-relaxed">
              {t(
                "業務委託契約書、秘密保持契約（NDA）、ライセンス契約など各種契約書の作成・チェック、文化庁への著作権登録",
                "Drafting and reviewing service agreements, NDAs, licensing agreements and other contracts, and copyright registration with the Agency for Cultural Affairs",
              )}
            </p>
          </div>
          <div className="bg-sky-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2 text-sky-700">
              {t("許認可申請・法人設立", "License/permit applications and company incorporation")}
            </h3>
            <p className="text-sm sm:text-base leading-relaxed">
              {t(
                "新事業を始めるための各種許認可申請、株式会社・合同会社等の設立手続き",
                "Various license/permit applications for starting a new business, and incorporation of stock companies, LLCs, etc.",
              )}
            </p>
          </div>
          <div className="bg-sky-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2 text-sky-700">
              {t(
                "農業知財（種苗法品種登録・GI地理的表示）の権利保護",
                "Protection of agricultural IP (plant variety registration and GI geographical indications)",
              )}
            </h3>
            <p className="text-sm sm:text-base leading-relaxed">
              {t(
                "農産物のブランドを守る「種苗法に基づく品種登録出願」や「地理的表示（GI）保護制度」の申請支援",
                "Support for plant variety registration applications and GI protection applications that safeguard agricultural product brands",
              )}
            </p>
          </div>
        </div>
        <div className="text-right mt-3">
          <Link href="/administrative-services" className="text-sm text-sky-600 hover:underline">
            {t("取扱業務・費用目安を詳しく見る →", "See services and fee guide →")}
          </Link>
        </div>
      </div>

      <ParamiraiBanner className="mb-8" />

      <div className="bg-white bg-opacity-90 p-4 sm:p-6 rounded-lg shadow-md">
        <h2 className="text-lg sm:text-xl font-semibold mb-3 md:mb-4 text-sky-700">
          {t("事務所案内", "Office")}
        </h2>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          <div className="text-sm sm:text-base">
            <p className="flex items-start gap-2 mb-3">
              <MapPin className="text-sky-600 shrink-0 mt-1" />
              <span>
                {t(
                  "〒151-0072 東京都渋谷区幡ヶ谷1丁目2番2号 京王幡ヶ谷ビル4F 4-15",
                  "4-15, Keio Hatagaya Building 4F, 1-2-2 Hatagaya, Shibuya-ku, Tokyo 151-0072, Japan",
                )}
              </span>
            </p>
            <p className="flex items-center gap-2 mb-3">
              <Globe className="text-sky-600 shrink-0" />
              <a href="https://ogawachihiro-office.com" className="text-sky-600 hover:underline break-all">
                https://ogawachihiro-office.com
              </a>
            </p>
            <p className="flex items-center gap-2 mb-4 md:mb-6">
              <Mail className="text-sky-600 shrink-0" />
              <a href="mailto:info@ogawachihiro-office.com" className="text-sky-600 hover:underline break-all">
                info@ogawachihiro-office.com
              </a>
            </p>
          </div>
          <div>
            {/* 公式LINE QRコード */}
            <div className="bg-sky-50 p-3 sm:p-4 rounded-lg text-center">
              <h3 className="font-semibold mb-2 sm:mb-3 text-sky-700">{t("公式LINE", "Official LINE")}</h3>
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
                {t("LINEでもお気軽にお問い合わせください。", "Feel free to contact us via LINE as well.")}
              </p>
            </div>
          </div>
        </div>

        {language !== "en" && (
          <div className="mt-6 pt-4 border-t text-right flex flex-wrap justify-end gap-x-4 gap-y-2">
            <Link
              href="/customer-harassment-policy"
              className="text-sm text-sky-600 hover:underline"
            >
              カスタマーハラスメントに対する基本方針
            </Link>
            <Link
              href="/customer-harassment-prevention"
              className="text-sm text-sky-600 hover:underline"
            >
              カスタマーハラスメント防止に向けた取り組みについて
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
